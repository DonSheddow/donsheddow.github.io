(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){e.exports=n(21)},17:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n(4),s=n(6),c=n(5),o=n(7),u=n(1),i=n.n(u),l=n(10),p=n.n(l),f=(n(17),n(11)),h=n(0),m=n.n(h),b=n(2),d="https://notsheddow.xyz/resp_clone/iframe.html",w=1024,x=1048576,v=1073741824;function g(e){return k.apply(this,arguments)}function k(){return(k=Object(b.a)(m.a.mark(function e(t){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(e){return setTimeout(e,t)}));case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}function y(){return j.apply(this,arguments)}function j(){return(j=Object(b.a)(m.a.mark(function e(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(window.frames[0].frames.length>0)){e.next=5;break}return e.next=3,g(1);case 3:e.next=0;break;case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}function O(){return S.apply(this,arguments)}function S(){return(S=Object(b.a)(m.a.mark(function e(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==window.frames[0].frames.length){e.next=5;break}return e.next=3,g(1);case 3:e.next=0;break;case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}function E(){return M.apply(this,arguments)}function M(){return(M=Object(b.a)(m.a.mark(function e(){var t,n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==window.frames.length){e.next=7;break}return(t=document.createElement("iframe")).src=d,n=new Promise(function(e){t.onload=e}),document.body.appendChild(t),e.next=7,n;case 7:case"end":return e.stop()}},e)}))).apply(this,arguments)}function U(){return C.apply(this,arguments)}function C(){return(C=Object(b.a)(m.a.mark(function e(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return window.frames[0].location="about:blank",e.next=3,g(50);case 3:return window.frames[0].location=d,e.next=6,O();case 6:case"end":return e.stop()}},e)}))).apply(this,arguments)}function z(e,t){return q.apply(this,arguments)}function q(){return(q=Object(b.a)(m.a.mark(function e(t,n){var a,r;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=function(e){a=e.data},a=0,window.addEventListener("message",r),window.frames[0].postMessage({action:"clone_until_crash",url:t,alloc_size:n},"*"),e.next=6,y();case 6:return window.removeEventListener("message",r),e.next=9,U();case 9:return e.abrupt("return",a);case 10:case"end":return e.stop()}},e)}))).apply(this,arguments)}function N(e,t){return B.apply(this,arguments)}function B(){return(B=Object(b.a)(m.a.mark(function e(t,n){var a,r,s,c=arguments;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a=c.length>2&&void 0!==c[2]?c[2]:5,r=[],s=0;case 3:if(!(s<a)){e.next=12;break}return e.t0=r,e.next=7,z(t,n);case 7:e.t1=e.sent,e.t0.push.call(e.t0,e.t1);case 9:s++,e.next=3;break;case 12:return e.abrupt("return",r);case 13:case"end":return e.stop()}},e)}))).apply(this,arguments)}function T(e,t){return _.apply(this,arguments)}function _(){return(_=Object(b.a)(m.a.mark(function e(t,n){var a,r,s,c,o,u,i=arguments;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=i.length>2&&void 0!==i[2]?i[2]:75,r=15,s=n,e.next=5,I(t,s);case 5:c=e.sent,o=20*x;case 7:if(0!==c){e.next=17;break}return s-=o,o+=2*x,e.next=12,I(t,s);case 12:c=e.sent,L(s),console.log(c),e.next=7;break;case 17:u=s;case 18:if(!(c<a-r||c>a+r)){e.next=30;break}return u=s=((s+=-80*w*(a-c))+u)/2,e.next=25,I(t,s);case 25:c=e.sent,L(s),console.log(c),e.next=18;break;case 30:return e.abrupt("return",{size:s,count:c});case 31:case"end":return e.stop()}},e)}))).apply(this,arguments)}function L(e){var t=Math.floor(e/v),n=Math.floor(e%v/x),a=Math.floor(e%x/w);console.log("size: ".concat(t," GB + ").concat(n," MB + ").concat(a," KB"))}function I(e,t){return J.apply(this,arguments)}function J(){return(J=Object(b.a)(m.a.mark(function e(t,n){var a,r;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E();case 2:return a=window.performance.now(),e.next=5,N(t,n,3);case 5:return r=e.sent,console.log("elapsed: ".concat(window.performance.now()-a)),console.log(r),r.sort(function(e,t){return e-t}),e.abrupt("return",r[1]);case 10:case"end":return e.stop()}},e)}))).apply(this,arguments)}function P(){return(P=Object(b.a)(m.a.mark(function e(t){var n,a,r,s=arguments;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.length>1&&void 0!==s[1]?s[1]:void 0,e.next=3,E();case 3:return a=window.performance.now(),n||(n=4*v),console.log("Tuning..."),e.next=8,T(t,n);case 8:return r=e.sent,console.log("elapsed for tuning: ".concat(window.performance.now()-a)),e.abrupt("return",r);case 11:case"end":return e.stop()}},e)}))).apply(this,arguments)}var R=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(s.a)(this,Object(c.a)(t).call(this,e))).id=Object(f.uniqueId)("urlinput_"),n}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("label",{htmlFor:this.id},this.props.label),i.a.createElement("input",{id:this.id,className:"url-input",type:"text",defaultValue:this.props.url,onChange:this.props.onChange}),this.props.children)}}]),t}(i.a.Component),D=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(s.a)(this,Object(c.a)(t).call(this,e))).calibrate=function(){n.setState({loadingState:"Calibrating..."}),function(e){return P.apply(this,arguments)}(n.state.calibrationUrl,n.state.allocSize).then(function(e){var t=e.size,a=e.count;n.setState({loadingState:null,allocSize:t,baseMeasurement:a})})},n.measure=function(){n.setState({loadingState:"Measuring..."}),I(n.state.testUrl,n.state.allocSize).then(function(e){n.setState({loadingState:null,measurement:e});var t=Math.abs(n.state.measurement-n.state.baseMeasurement);t<=.3*n.state.measurement||t<=.3*n.state.baseMeasurement?n.setState({equal:!0}):n.setState({equal:!1})})},n.setCalibrationUrl=function(e){n.setState({calibrationUrl:e.target.value})},n.setTestUrl=function(e){n.setState({testUrl:e.target.value})},n.state={allocSize:null,calibrationUrl:"https://sheddow.xyz/flask/bytes?len=1000",testUrl:"https://sheddow.xyz/flask/bytes?len=1025",loadingState:null,baseMeasurement:null,measurement:null},n}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.calibrate()}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(R,{label:"Base URL",url:this.state.calibrationUrl,onChange:this.setCalibrationUrl},i.a.createElement("span",{className:"measurement"},this.state.baseMeasurement),this.state.loadingState?this.state.loadingState:i.a.createElement("button",{onClick:this.calibrate},"Calibrate")),i.a.createElement(R,{label:"Test URL",url:this.state.testUrl,onChange:this.setTestUrl},i.a.createElement("span",{className:"measurement"},this.state.measurement),this.state.loadingState?this.state.loadingState:i.a.createElement("button",{onClick:this.measure},"Measure")),null!==this.state.measurement&&null!==this.state.baseMeasurement?this.state.equal?i.a.createElement("span",{className:"equal"},"Equal"):i.a.createElement("span",{className:"not-equal"},"Not Equal"):null)}}]),t}(i.a.Component);p.a.render(i.a.createElement(D,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.cd75153f.chunk.js.map