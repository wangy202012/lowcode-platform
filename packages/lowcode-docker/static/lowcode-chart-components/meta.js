!function e(t,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.LowcodeChartComponentsMeta=r():t.LowcodeChartComponentsMeta=r()}(window,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function t(){return e.default}:function t(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){e.exports=r(1)},function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t,r){return(t=c(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e){var t=u(e,"string");return"symbol"===n(t)?t:String(t)}function u(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}r.r(t),r.d(t,"components",(function(){return we})),r.d(t,"componentList",(function(){return Ne}));var p,l=[{title:"Linechart",screenshot:"",schema:{componentName:"Linechart",props:{data:[152,230,224,218,135,147,260],xFieldList:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]}}}],s=i(i({},{componentName:"Linechart",title:"Linechart",docUrl:"",screenshot:"",devMode:"proCode",group:"echarts\u7ec4\u4ef6",category:"\u6570\u636e\u7c7b",npm:{package:"lowcode-chart-components",version:"1.0.0",exportName:"Linechart",main:"src/index.tsx",destructuring:!0,subName:""},configure:{props:[{name:"data",type:"group",display:"accordion",title:{label:"\u6570\u636e"},items:[{name:"data",title:"\u56fe\u8868\u6570\u636e",setter:"JsonSetter"},{name:"xFieldList",title:"x\u8f74\u5b57\u6bb5",setter:"JsonSetter"}]}],supports:{style:!0},component:{}}}),{},{snippets:l});function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t,r){return(t=v(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function v(e){var t=d(e,"string");return"symbol"===m(t)?t:String(t)}function d(e,t){if("object"!==m(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==m(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}var h,g=[{title:"Linechart",screenshot:"",schema:{componentName:"Linechart",props:{}}}],O=y(y({},{componentName:"Linechart",title:"Linechart",docUrl:"",screenshot:"",devMode:"proCode",npm:{package:"lowcode-chart-components",version:"1.0.0",exportName:"Linechart",main:"src/index.tsx",destructuring:!0,subName:""},configure:{props:[{title:{label:{type:"i18n","en-US":"xFieldList","zh-CN":"xFieldList"}},name:"xFieldList",setter:{componentName:"ArraySetter",props:{itemSetter:{componentName:"MixedSetter",isRequired:!1,props:{}}},isRequired:!0,initialValue:[]}},{title:{label:{type:"i18n","en-US":"data","zh-CN":"data"}},name:"data",setter:{componentName:"ArraySetter",props:{itemSetter:{componentName:"MixedSetter",isRequired:!1,props:{}}},isRequired:!0,initialValue:[]}}],supports:{style:!0},component:{}}}),{},{snippets:g});function j(e){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?S(Object(r),!0).forEach((function(t){P(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function P(e,t,r){return(t=N(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function N(e){var t=x(e,"string");return"symbol"===j(t)?t:String(t)}function x(e,t){if("object"!==j(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==j(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}var M,T=[{title:"Mapchart",screenshot:"",schema:{componentName:"Mapchart",props:{data:[{name:"\u5b89\u5fbd\u7701",value:4822023},{name:"\u6c5f\u82cf\u7701",value:731449},{name:"\u6cb3\u5357\u7701",value:6553255},{name:"\u4e0a\u6d77\u5e02",value:2949131},{name:"\u6c5f\u897f\u7701",value:38041430},{name:"\u5e7f\u4e1c\u7701",value:5187582},{name:"\u5317\u4eac\u5e02",value:3590347},{name:"\u9752\u6d77\u7701",value:917092},{name:"\u5e7f\u897f\u7701",value:632323},{name:"\u897f\u85cf\u7701",value:19317568},{name:"\u9ed1\u9f99\u6c5f\u7701",value:9919945},{name:"China",value:1392313},{name:"United Kingdom",value:1595728},{name:"Russia",value:12875255},{name:"United States",value:6537334},{name:"Iowa",value:3074186},{name:"Kansas",value:2885905},{name:"Kentucky",value:4380415},{name:"Louisiana",value:4601893},{name:"Maine",value:1329192},{name:"Maryland",value:5884563},{name:"Massachusetts",value:6646144},{name:"Michigan",value:9883360},{name:"Minnesota",value:5379139},{name:"Mississippi",value:2984926},{name:"Missouri",value:6021988},{name:"Montana",value:1005141},{name:"Nebraska",value:1855525},{name:"Nevada",value:2758931},{name:"New Hampshire",value:1320718},{name:"New Jersey",value:8864590},{name:"New Mexico",value:2085538},{name:"New York",value:19570261},{name:"North Carolina",value:9752073},{name:"North Dakota",value:699628},{name:"Ohio",value:11544225},{name:"Oklahoma",value:3814820},{name:"Oregon",value:3899353},{name:"Pennsylvania",value:12763536},{name:"Rhode Island",value:1050292},{name:"South Carolina",value:4723723},{name:"South Dakota",value:833354},{name:"Tennessee",value:6456243},{name:"Texas",value:26059203},{name:"Utah",value:2855287},{name:"Vermont",value:626011},{name:"Virginia",value:8185867},{name:"Washington",value:6897012},{name:"West Virginia",value:1855413},{name:"Wisconsin",value:5726398},{name:"Wyoming",value:576412},{name:"Puerto Rico",value:3667084}],mapType:"China"}}}],C=w(w({},{componentName:"Mapchart",title:"Mapchart",docUrl:"",screenshot:"",devMode:"proCode",group:"echarts\u7ec4\u4ef6",category:"\u6570\u636e\u7c7b",npm:{package:"lowcode-chart-components",version:"1.0.0",exportName:"Mapchart",main:"src/index.tsx",destructuring:!0,subName:""},configure:{props:[{name:"data",type:"group",display:"accordion",title:{label:"\u6570\u636e"},items:[{name:"data",title:"\u56fe\u8868\u6570\u636e",setter:"JsonSetter"},{name:"mapType",title:"\u5730\u56fe\u7c7b\u578b",setter:"StringSetter"}]}],supports:{style:!0},component:{}}}),{},{snippets:T});function D(e){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){L(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function L(e,t,r){return(t=R(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function R(e){var t=U(e,"string");return"symbol"===D(t)?t:String(t)}function U(e,t){if("object"!==D(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==D(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}var A,q=[{title:"MapThreeChart",screenshot:"",schema:{componentName:"MapThreeChart",props:{}}}],V=k(k({},{componentName:"MapThreeChart",title:"MapThreeChart",docUrl:"",screenshot:"",devMode:"proCode",group:"echarts\u7ec4\u4ef6",category:"\u6570\u636e\u7c7b",npm:{package:"lowcode-chart-components",version:"1.0.2",exportName:"MapThreeChart",main:"src/index.tsx",destructuring:!0,subName:""},configure:{props:[{title:{label:{type:"i18n","en-US":"mapType","zh-CN":"mapType"}},name:"mapType",setter:{componentName:"StringSetter",isRequired:!0,initialValue:""}},{title:{label:{type:"i18n","en-US":"data","zh-CN":"data"}},name:"data",setter:{componentName:"ArraySetter",props:{itemSetter:{componentName:"MixedSetter",isRequired:!1,props:{}}},isRequired:!0,initialValue:[]}}],supports:{style:!0},component:{}}}),{},{snippets:q});function F(e){return(F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function I(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?I(Object(r),!0).forEach((function(t){_(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _(e,t,r){return(t=W(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function W(e){var t=J(e,"string");return"symbol"===F(t)?t:String(t)}function J(e,t){if("object"!==F(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==F(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}var K,H=[{title:"Mapchart",screenshot:"",schema:{componentName:"Mapchart",props:{}}}],Y=z(z({},{componentName:"Mapchart",title:"Mapchart",docUrl:"",screenshot:"",devMode:"proCode",npm:{package:"lowcode-chart-components",version:"1.0.0",exportName:"Mapchart",main:"src/index.tsx",destructuring:!0,subName:""},configure:{props:[{title:{label:{type:"i18n","en-US":"mapType","zh-CN":"mapType"}},name:"mapType",setter:{componentName:"StringSetter",isRequired:!0,initialValue:""}},{title:{label:{type:"i18n","en-US":"data","zh-CN":"data"}},name:"data",setter:{componentName:"ArraySetter",props:{itemSetter:{componentName:"MixedSetter",isRequired:!1,props:{}}},isRequired:!0,initialValue:[]}}],supports:{style:!0},component:{}}}),{},{snippets:H});function $(e){return($="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function B(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function G(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?B(Object(r),!0).forEach((function(t){Q(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):B(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Q(e,t,r){return(t=X(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function X(e){var t=Z(e,"string");return"symbol"===$(t)?t:String(t)}function Z(e,t){if("object"!==$(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==$(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}var ee,te=[{title:"ReactThreeChart",screenshot:"",schema:{componentName:"ReactThreeChart",props:{}}}],re=G(G({},{componentName:"ReactThreeChart",title:"ReactThreeChart",docUrl:"",screenshot:"",devMode:"proCode",group:"echarts\u7ec4\u4ef6",category:"\u6570\u636e\u7c7b",npm:{package:"lowcode-chart-components",version:"1.0.0",exportName:"ReactThreeChart",main:"src/index.tsx",destructuring:!0,subName:""},configure:{props:[],supports:{style:!0},component:{}}}),{},{snippets:te});function ne(e,t){return ae(e)||ie(e,t)||pe(e,t)||oe()}function oe(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function ie(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,a,c=[],u=!0,p=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(c.push(n.value),c.length!==t);u=!0);}catch(e){p=!0,o=e}finally{try{if(!u&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(p)throw o}}return c}}function ae(e){if(Array.isArray(e))return e}function ce(e){return se(e)||le(e)||pe(e)||ue()}function ue(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function pe(e,t){if(e){if("string"==typeof e)return me(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?me(e,t):void 0}}function le(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function se(e){if(Array.isArray(e))return me(e)}function me(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function fe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ye(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?fe(Object(r),!0).forEach((function(t){be(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):fe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function be(e,t,r){return(t=ve(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ve(e){var t=de(e,"string");return"symbol"===he(t)?t:String(t)}function de(e,t){if("object"!==he(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==he(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}function he(e){return(he="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var ge={};function Oe(e){var t=[{title:"\u5e38\u7528",icon:"",children:[]},{title:"\u5bb9\u5668",icon:"",children:[]},{title:"\u5bfc\u822a",icon:"",children:[]},{title:"\u5185\u5bb9",icon:"",children:[]},{title:"Feedback \u53cd\u9988",icon:"",children:[]}],r={"\u539f\u5b50\u7ec4\u4ef6":!0},n={};return e.forEach((function(e){var o=e.category||"\u5176\u4ed6";e.group&&!n[e.componentName]&&(n[e.componentName]=e.group),e.group&&!r[e.group]&&(r[e.group]=!0);var i=t.find((function(e){return e.title===o}));i||(i={title:o,icon:"",children:[]},t.push(i)),e.snippets&&e.snippets.length&&i.children.push({componentName:e.componentName,title:e.title||e.componentName,sort:{category:i.title,group:n[e.componentName]||"\u539f\u5b50\u7ec4\u4ef6",priority:ge[i.title]||0},icon:"",package:e.npm.pkg,snippets:e.snippets||[]})})),t}function je(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"lowcode-chart-components",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"1.0.0",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{"@alifd/next":"1.25.23","@alifd/meet":"2.6.3",antd:"4.17.3"};if(!e||!r)return e;var o=e.npm;return o?("object"===he(n)&&n[o.package]?e.npm=ye(ye({},o),{},{version:n[o.package]}):o.package===t&&(e.npm=ye(ye({},o),{},{version:r})),e):e}["\u57fa\u7840\u5143\u7d20","\u5e03\u5c40\u5bb9\u5668\u7c7b","\u8868\u683c\u7c7b","\u8868\u5355\u8be6\u60c5\u7c7b","\u5e2e\u52a9\u7c7b","\u5bf9\u8bdd\u6846\u7c7b","\u4e1a\u52a1\u7c7b","\u901a\u7528","\u5f15\u5bfc","\u4fe1\u606f\u8f93\u5165","\u4fe1\u606f\u5c55\u793a","\u4fe1\u606f\u53cd\u9988"].reverse().forEach((function(e,t){ge[e]=++t}));var Se,we=[],Pe={};[s,O,C,V,Y,re].forEach((function(e){if(Array.isArray(e))we.push.apply(we,ce(e.map((function(e){if(!e.npm){var t=e.componentName,r=t.split("."),n=ne(r,2),o=n[0],i=n[1];e.npm={exportName:o,main:"",destructuring:!0,subName:r.length>1?t.slice(t.indexOf(".")+1):i}}return e.npm=ye(ye({},Pe),e.npm||{}),je(e)}))));else if(e.components)we.push.apply(we,ce(e.components.map((function(e){if(!e.npm){var t=e.componentName,r=t.split("."),n=ne(r,2),o=n[0],i=n[1];e.npm={exportName:o,main:"",destructuring:!0,subName:r.length>1?t.slice(t.indexOf(".")+1):i}}return e.npm=ye(ye({},Pe),e.npm||{}),je(e)}))));else{if(!e.npm){var t=e.componentName,r=t.split("."),n=ne(r,2),o=n[0],i=n[1];e.npm={exportName:o,main:"",destructuring:!0,subName:r.length>1?t.slice(t.indexOf(".")+1):i}}e.npm=ye(ye({},Pe),e.npm||{}),we.push(je(e))}}));var Ne=Oe(we),xe=!0}])}));