(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){e.exports=n(21)},17:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),s=n(10),c=n.n(s),o=n(3),u=n(4),i=n(6),l=n(5),p=n(7),f=(n(17),n(11)),h=n(0),m=n.n(h),b=n(2),d="https://notsheddow.xyz/resp_clone/iframe.html",w=80,x=20,g=1024,k=1048576,v=1073741824;function y(e){return j.apply(this,arguments)}function j(){return(j=Object(b.a)(m.a.mark(function e(t){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(e){return setTimeout(e,t)}));case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}function O(e){return S.apply(this,arguments)}function S(){return(S=Object(b.a)(m.a.mark(function e(t){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.frames.length>0)){e.next=5;break}return e.next=3,y(1);case 3:e.next=0;break;case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}function E(e){return M.apply(this,arguments)}function M(){return(M=Object(b.a)(m.a.mark(function e(t){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t.frames.length){e.next=5;break}return e.next=3,y(1);case 3:e.next=0;break;case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}function z(e){return U.apply(this,arguments)}function U(){return(U=Object(b.a)(m.a.mark(function e(t){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,t.location.href,e.abrupt("break",12);case 6:e.prev=6,e.t0=e.catch(1);case 8:return e.next=10,y(1);case 10:e.next=0;break;case 12:case"end":return e.stop()}},e,null,[[1,6]])}))).apply(this,arguments)}function C(e){return q.apply(this,arguments)}function q(){return(q=Object(b.a)(m.a.mark(function e(t){var n,a;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(n=document.createElement("iframe")).src=t,a=new Promise(function(e){n.onload=e}),document.body.appendChild(n),e.abrupt("return",a);case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}function N(){return _.apply(this,arguments)}function _(){return(_=Object(b.a)(m.a.mark(function e(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==window.frames.length){e.next=3;break}return e.next=3,C(d);case 3:case"end":return e.stop()}},e)}))).apply(this,arguments)}function B(){return T.apply(this,arguments)}function T(){return(T=Object(b.a)(m.a.mark(function e(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(1!==window.frames[0].frames.length){e.next=4;break}return window.frames[0].postMessage({action:"kill_process"},"*"),e.next=4,O(window.frames[0]);case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}function L(){return D.apply(this,arguments)}function D(){return(D=Object(b.a)(m.a.mark(function e(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return window.frames[0].location="about:blank",e.next=3,z(window.frames[0]);case 3:return window.frames[0].location=d,e.next=6,E(window.frames[0]);case 6:case"end":return e.stop()}},e)}))).apply(this,arguments)}function I(e,t){return J.apply(this,arguments)}function J(){return(J=Object(b.a)(m.a.mark(function e(t,n){var a,r,s,c=arguments;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:s=function(e){r=e.data},a=c.length>2&&void 0!==c[2]?c[2]:1/0,r=0,window.addEventListener("message",s),window.frames[0].postMessage({action:"clone_until_crash",url:t,alloc_size:n},"*");case 5:if(!(window.frames[0].frames.length>0&&r<a)){e.next=10;break}return e.next=8,y(1);case 8:e.next=5;break;case 10:return window.removeEventListener("message",s),e.next=13,B();case 13:return e.next=15,L();case 15:return e.abrupt("return",r);case 16:case"end":return e.stop()}},e)}))).apply(this,arguments)}function P(e,t){return R.apply(this,arguments)}function R(){return(R=Object(b.a)(m.a.mark(function e(t,n){var a,r,s,c,o=arguments;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a=o.length>2&&void 0!==o[2]?o[2]:5,r=o.length>3&&void 0!==o[3]?o[3]:1/0,s=[],c=0;case 4:if(!(c<a)){e.next=13;break}return e.t0=s,e.next=8,I(t,n,r);case 8:e.t1=e.sent,e.t0.push.call(e.t0,e.t1);case 10:c++,e.next=4;break;case 13:return e.abrupt("return",s);case 14:case"end":return e.stop()}},e)}))).apply(this,arguments)}function F(e){return n=w+x,w-x<=(t=e)&&t<=n;var t,n}function G(e,t){return K.apply(this,arguments)}function K(){return(K=Object(b.a)(m.a.mark(function e(t,n){var a,r,s,c,o,u;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=n,e.next=3,I(t,a,200);case 3:if(r=e.sent,console.log(r),!F(r)){e.next=9;break}return e.abrupt("return",{size:a,measurement:r});case 9:if(!(r<w)){e.next=28;break}console.log("exponential search downwards"),s=a,o=10*k;case 13:if(!(r<w)){e.next=25;break}return a-=o,o*=2,e.next=18,I(t,a,200);case 18:if(r=e.sent,console.log(V(a)),console.log(r),!F(r)){e.next=23;break}return e.abrupt("return",{size:a,measurement:r});case 23:e.next=13;break;case 25:c=a,e.next=44;break;case 28:console.log("exponential search upwards"),c=a,u=10*k;case 31:if(!(r>w)){e.next=43;break}return a+=u,u*=2,e.next=36,I(t,a,200);case 36:if(r=e.sent,console.log(V(a)),console.log(r),!F(r)){e.next=41;break}return e.abrupt("return",{size:a,measurement:r});case 41:e.next=31;break;case 43:s=a;case 44:console.log("Doing binary search between ".concat(V(c)," and ").concat(V(s)));case 45:return a=Math.floor((c+s)/2),e.next=49,I(t,a,200);case 49:if(r=e.sent,console.log(V(a)),console.log(r),!F(r)){e.next=56;break}return e.abrupt("break",59);case 56:r<w?s=a:c=a;case 57:e.next=45;break;case 59:return e.next=61,A(t,a,200);case 61:if(F(r=e.sent)){e.next=64;break}return e.abrupt("return",G(t,a));case 64:return e.abrupt("return",{size:a,measurement:r});case 65:case"end":return e.stop()}},e)}))).apply(this,arguments)}function V(e){var t=Math.floor(e/v),n=Math.floor(e%v/k),a=Math.floor(e%k/g);return"size: ".concat(t," GB + ").concat(n," MB + ").concat(a," KB")}function A(e,t){return H.apply(this,arguments)}function H(){return(H=Object(b.a)(m.a.mark(function e(t,n){var a,r,s,c=arguments;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.length>2&&void 0!==c[2]?c[2]:1/0,e.next=3,N();case 3:return r=window.performance.now(),e.next=6,P(t,n,3,a);case 6:return s=e.sent,console.log("elapsed: ".concat(window.performance.now()-r)),console.log(s),s.sort(function(e,t){return e-t}),e.abrupt("return",s[1]);case 11:case"end":return e.stop()}},e)}))).apply(this,arguments)}function Q(){return(Q=Object(b.a)(m.a.mark(function e(t){var n,a,r,s=arguments;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.length>1&&void 0!==s[1]?s[1]:void 0,e.next=3,N();case 3:return a=window.performance.now(),n||(n=4*v),console.log("Tuning..."),e.next=8,G(t,n);case 8:return r=e.sent,console.log("elapsed for tuning: ".concat(window.performance.now()-a)),e.abrupt("return",r);case 11:case"end":return e.stop()}},e)}))).apply(this,arguments)}var W=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(i.a)(this,Object(l.a)(t).call(this,e))).id=Object(f.uniqueId)("urlinput_"),n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("label",{htmlFor:this.id},this.props.label),r.a.createElement("input",{id:this.id,className:"url-input",type:"text",defaultValue:this.props.url,onChange:this.props.onChange}),this.props.children)}}]),t}(r.a.Component),X=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(i.a)(this,Object(l.a)(t).call(this,e))).calibrate=function(){n.setState({loadingState:"Calibrating..."}),function(e){return Q.apply(this,arguments)}(n.state.calibrationUrl,n.state.allocSize).then(function(e){var t=e.size,a=e.measurement;n.setState({loadingState:null,allocSize:t,baseMeasurement:a})})},n.measure=function(){n.setState({loadingState:"Measuring..."}),A(n.state.testUrl,n.state.allocSize).then(function(e){n.setState({loadingState:null,measurement:e}),!function(e,t){var n=Math.abs(e-t);return n<=.4*e||n<=.4*t}(n.state.baseMeasurement,n.state.measurement)?n.setState({equal:!1}):n.setState({equal:!0})})},n.setCalibrationUrl=function(e){n.setState({calibrationUrl:e.target.value})},n.setTestUrl=function(e){n.setState({testUrl:e.target.value})},n.state={allocSize:null,calibrationUrl:"https://sheddow.xyz/flask/bytes?len=1000",testUrl:"https://sheddow.xyz/flask/bytes?len=1025",loadingState:null,baseMeasurement:null,measurement:null},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.calibrate()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(W,{label:"Base URL",url:this.state.calibrationUrl,onChange:this.setCalibrationUrl},r.a.createElement("span",{className:"measurement"},this.state.baseMeasurement),this.state.loadingState?this.state.loadingState:r.a.createElement("button",{onClick:this.calibrate},"Calibrate")),r.a.createElement(W,{label:"Test URL",url:this.state.testUrl,onChange:this.setTestUrl},r.a.createElement("span",{className:"measurement"},this.state.measurement),this.state.loadingState?this.state.loadingState:r.a.createElement("button",{onClick:this.measure},"Measure")),null!==this.state.measurement&&null!==this.state.baseMeasurement?this.state.equal?r.a.createElement("span",{className:"equal"},"Equal"):r.a.createElement("span",{className:"not-equal"},"Not Equal"):null)}}]),t}(r.a.Component);c.a.render(r.a.createElement(X,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.1c2936df.chunk.js.map