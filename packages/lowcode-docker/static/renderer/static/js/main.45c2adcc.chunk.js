(window["webpackJsonplowcode-design"]=window["webpackJsonplowcode-design"]||[]).push([[0],{333:function(t,e,r){t.exports=r(694)},690:function(t,e,r){},692:function(t,e,r){},694:function(t,e,r){"use strict";r.r(e);var n=r(0),o=r.n(n),a=r(18),i=r.n(a),c=r(306),u=r(60),s=r(330),l=r(58),f=r(34),h=r(310),p=r(5),d=r(312),v=r.n(d),m=(r(469),r(470),r(471),r(331)),y=r(697),g=function(t){return y.a.get(t).then((function(t){if(200===t.status)return t.data;throw new Error("\u8fd4\u56de\u9519\u8bef")}))},w=function(t){return"dev"===localStorage.getItem("lowcode_mode")?g("http://43.137.18.227:10061/renderer/"+t):g("/__api/renderer/"+t)},b=function(t){return"dev"===localStorage.getItem("lowcode_mode")?g("http://43.137.18.227:10061/renderer/"+t):g("/__api/renderer/pubPath/"+t)},x=(r(690),function(t){return JSON.parse(decodeURIComponent(t))}),E=r(26),O=r.n(E);function L(){L=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(N){u=function(t,e,r){return t[e]=r}}function s(t,e,r,o){var a=e&&e.prototype instanceof h?e:h,i=Object.create(a.prototype),c=new _(o||[]);return n(i,"_invoke",{value:x(t,r,c)}),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(N){return{type:"throw",arg:N}}}t.wrap=s;var f={};function h(){}function p(){}function d(){}var v={};u(v,a,(function(){return this}));var m=Object.getPrototypeOf,y=m&&m(m(k([])));y&&y!==e&&r.call(y,a)&&(v=y);var g=d.prototype=h.prototype=Object.create(v);function w(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){var o;n(this,"_invoke",{value:function(n,a){function i(){return new e((function(o,i){!function n(o,a,i,c){var u=l(t[o],t,a);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(f).then((function(t){s.value=t,i(s)}),(function(t){return n("throw",t,i,c)}))}c(u.arg)}(n,a,o,i)}))}return o=o?o.then(i,i):i()}})}function x(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return S()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=E(i,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function E(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=l(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function k(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return p.prototype=d,n(g,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:p,configurable:!0}),p.displayName=u(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,u(t,c,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},w(b.prototype),u(b.prototype,i,(function(){return this})),t.AsyncIterator=b,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new b(s(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(g),u(g,c,"Generator"),u(g,a,(function(){return this})),u(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=k,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:k(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}var j=function(){var t=Object(n.useState)({}),e=Object(u.a)(t,2),r=e[0],a=e[1],i=Object(n.useState)(!1),d=Object(u.a)(i,2),y=d[0],g=d[1],E=Object(n.useState)({}),j=Object(u.a)(E,2),_=j[0],k=j[1],S=Object(n.useState)(!1),N=Object(u.a)(S,2),P=N[0],I=N[1],G=Object(n.useRef)({}),T=new URLSearchParams(window.location.search).get("appId"),F=new URLSearchParams(window.location.search).get("appPath"),U=r.schema,J=r.components;function R(){return(R=Object(c.a)(L().mark((function t(){var e,r,n,o,i,c,u,s,f,h,d,v,g,E,O;return L().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=null,y){t.next=18;break}if(o=null,!F){t.next=9;break}return t.next=6,b(F);case 6:o=t.sent,t.next=12;break;case 9:return t.next=11,w(T);case 11:o=t.sent;case 12:if(-1!==o.code||"\u5f53\u524d\u5e94\u7528\u6ca1\u6709\u53d1\u5e03"!==o.message){t.next=15;break}return I(!0),t.abrupt("return");case 15:e=x(null===(r=o)||void 0===r||null===(n=r.data)||void 0===n?void 0:n.content),t.next=19;break;case 18:e=_;case 19:if(c=(i=e).packages,u=i.projectSchema,c&&u){t.next=23;break}return l.a.error("\u6570\u636e\u7ed3\u6784\u5f02\u5e38"),t.abrupt("return");case 23:return s=u.componentsMap,f=u.componentsTree,h={},s.forEach((function(t){h[t.componentName]=t})),d=f[0],v={},g=[],c.forEach((function(t){var e=t.package,r=t.library,n=t.urls,o=t.renderUrls;v[e]=r,o?g.push(o):n&&g.push(n)})),E=new p.c,t.next=33,E.load(g);case 33:return t.next=35,Object(m.a)(Object(p.i)(v,h));case 35:O=t.sent,a({schema:d,components:O});case 37:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return U&&J&&!y||function(){R.apply(this,arguments)}(),P?o.a.createElement("div",null,"\u5f53\u524d\u9875\u9762\u672a\u66fe\u53d1\u5e03"):o.a.createElement("div",{className:"render-container"},!T&&o.a.createElement("div",{className:"render-container-left"},o.a.createElement("div",{className:"left-title"},o.a.createElement("div",{className:"label"},"\u6570\u636e\u6e32\u67d3\u5e73\u53f0"),o.a.createElement(f.a,{type:"primary",onClick:function(){var t=G.current,e=null;try{e=JSON.parse(t)}catch(r){l.a.error("\u8f93\u5165\u5185\u5bb9\u4e0d\u662fJSON\u683c\u5f0f")}e&&(g(!0),setTimeout((function(){g(!1)}),0),k(e))}},"\u786e\u8ba4")),o.a.createElement(v.a,{mode:"javascript",theme:"github",onChange:function(t){G.current=t},name:"UNIQUE_ID_OF_DIV",editorProps:{$blockScrolling:!0}})),o.a.createElement("div",{className:"render-container-content"},o.a.createElement(s.a,{className:"lowcode-plugin-sample-preview-content",schema:U,components:J,appHelper:{requestHandlersMap:{fetch:Object(h.a)(),Message:l.a,moment:O.a}}})))};r(691),r(692);i.a.render(o.a.createElement(j,null),document.getElementById("root"))}},[[333,1,2]]]);
//# sourceMappingURL=main.45c2adcc.chunk.js.map