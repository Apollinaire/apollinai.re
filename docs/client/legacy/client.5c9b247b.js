function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function n(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}}(t,e)||n(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var o,i=function(t,e,n){return t(n={path:e,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&n.path)}},n.exports),n.exports}((function(e){var n=function(e){var n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,n){return t[e]=n}}function f(t,e,n,r){var o=e&&e.prototype instanceof p?e:p,i=Object.create(o.prototype),a=new S(r||[]);return i._invoke=function(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return L()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var u=w(a,n);if(u){if(u===l)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=s(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===l)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}(t,n,a),i}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var l={};function p(){}function h(){}function v(){}var d={};d[i]=function(){return this};var y=Object.getPrototypeOf,m=y&&y(y(_([])));m&&m!==n&&r.call(m,i)&&(d=m);var g=v.prototype=p.prototype=Object.create(d);function b(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function $(e,n){var o;this._invoke=function(i,a){function u(){return new n((function(o,u){!function o(i,a,u,c){var f=s(e[i],e,a);if("throw"!==f.type){var l=f.arg,p=l.value;return p&&"object"===t(p)&&r.call(p,"__await")?n.resolve(p.__await).then((function(t){o("next",t,u,c)}),(function(t){o("throw",t,u,c)})):n.resolve(p).then((function(t){l.value=t,u(l)}),(function(t){return o("throw",t,u,c)}))}c(f.arg)}(i,a,o,u)}))}return o=o?o.then(u,u):u()}}function w(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var r=s(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,l;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function _(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return h.prototype=g.constructor=v,v.constructor=h,h.displayName=c(v,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,c(t,u,"GeneratorFunction")),t.prototype=Object.create(g),t},e.awrap=function(t){return{__await:t}},b($.prototype),$.prototype[a]=function(){return this},e.AsyncIterator=$,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new $(f(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(g),c(g,u,"Generator"),g[i]=function(){return this},g.toString=function(){return"[object Generator]"},e.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=_,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,l):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),E(n),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;E(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:_(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),l}},e}(e.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}}));function a(t,e,n,r,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void n(t)}u.done?e(c):Promise.resolve(c).then(r,o)}function u(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function u(t){a(i,r,o,u,c,"next",t)}function c(t){a(i,r,o,u,c,"throw",t)}u(void 0)}))}}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(e,n){return!n||"object"!==t(n)&&"function"!=typeof n?l(e):n}function h(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||n(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function y(){}function m(t,e){for(var n in e)t[n]=e[n];return t}function g(t){return t()}function b(){return Object.create(null)}function $(t){t.forEach(g)}function w(t){return"function"==typeof t}function x(e,n){return e!=e?n==n:e!==n||e&&"object"===t(e)||"function"==typeof e}function E(t,e,n,r){if(t){var o=S(t,e,n,r);return t[0](o)}}function S(t,e,n,r){return t[1]&&r?m(n.ctx.slice(),t[1](r(e))):n.ctx}function _(e,n,r,o,i,a,u){var c=function(e,n,r,o){if(e[2]&&o){var i=e[2](o(r));if(void 0===n.dirty)return i;if("object"===t(i)){for(var a=[],u=Math.max(n.dirty.length,i.length),c=0;c<u;c+=1)a[c]=n.dirty[c]|i[c];return a}return n.dirty|i}return n.dirty}(n,o,i,a);if(c){var f=S(n,r,o,u);e.p(f,c)}}function L(t){var e={};for(var n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function R(t,e){t.appendChild(e)}function k(t,e,n){t.insertBefore(e,n||null)}function O(t){t.parentNode.removeChild(t)}function j(t){return document.createElement(t)}function P(t){return document.createTextNode(t)}function A(){return P(" ")}function N(){return P("")}function q(t,e,n,r){return t.addEventListener(e,n,r),function(){return t.removeEventListener(e,n,r)}}function T(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function C(t,e){var n=Object.getOwnPropertyDescriptors(t.__proto__);for(var r in e)null==e[r]?t.removeAttribute(r):"style"===r?t.style.cssText=e[r]:"__value"===r?t.value=t[r]=e[r]:n[r]&&n[r].set?t[r]=e[r]:T(t,r,e[r])}function D(t){return Array.from(t.childNodes)}function I(t,e,n,r){for(var o=0;o<t.length;o+=1){var i=t[o];if(i.nodeName===e){for(var a=0,u=[];a<i.attributes.length;){var c=i.attributes[a++];n[c.name]||u.push(c.name)}for(var f=0;f<u.length;f++)i.removeAttribute(u[f]);return t.splice(o,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):j(e)}function U(t,e){for(var n=0;n<t.length;n+=1){var r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return P(e)}function G(t){return U(t," ")}function F(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function B(t,e,n){t.classList[n?"add":"remove"](e)}function J(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;return Array.from(e.querySelectorAll(t))}function M(t){o=t}function V(){if(!o)throw new Error("Function called outside component initialization");return o}function Y(t,e){var n=t.$$.callbacks[e.type];n&&n.slice().forEach((function(t){return t(e)}))}var z=[],K=[],H=[],W=[],X=Promise.resolve(),Q=!1;function Z(t){H.push(t)}var tt=!1,et=new Set;function nt(){if(!tt){tt=!0;do{for(var t=0;t<z.length;t+=1){var e=z[t];M(e),rt(e.$$)}for(z.length=0;K.length;)K.pop()();for(var n=0;n<H.length;n+=1){var r=H[n];et.has(r)||(et.add(r),r())}H.length=0}while(z.length);for(;W.length;)W.pop()();Q=!1,tt=!1,et.clear()}}function rt(t){if(null!==t.fragment){t.update(),$(t.before_update);var e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Z)}}var ot,it=new Set;function at(){ot={r:0,c:[],p:ot}}function ut(){ot.r||$(ot.c),ot=ot.p}function ct(t,e){t&&t.i&&(it.delete(t),t.i(e))}function ft(t,e,n,r){if(t&&t.o){if(it.has(t))return;it.add(t),ot.c.push((function(){it.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function st(t,e){for(var n={},r={},o={$$scope:1},i=t.length;i--;){var a=t[i],u=e[i];if(u){for(var c in a)c in u||(r[c]=1);for(var f in u)o[f]||(n[f]=u[f],o[f]=1);t[i]=u}else for(var s in a)o[s]=1}for(var l in r)l in n||(n[l]=void 0);return n}function lt(e){return"object"===t(e)&&null!==e?e:{}}function pt(t){t&&t.c()}function ht(t,e){t&&t.l(e)}function vt(t,e,n){var r=t.$$,o=r.fragment,i=r.on_mount,a=r.on_destroy,u=r.after_update;o&&o.m(e,n),Z((function(){var e=i.map(g).filter(w);a?a.push.apply(a,h(e)):$(e),t.$$.on_mount=[]})),u.forEach(Z)}function dt(t,e){var n=t.$$;null!==n.fragment&&($(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function yt(t,e){-1===t.$$.dirty[0]&&(z.push(t),Q||(Q=!0,X.then(nt)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function mt(t,e,n,r,i,a){var u=arguments.length>6&&void 0!==arguments[6]?arguments[6]:[-1],c=o;M(t);var f=e.props||{},s=t.$$={fragment:null,ctx:null,props:a,update:y,not_equal:i,bound:b(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(c?c.$$.context:[]),callbacks:b(),dirty:u},l=!1;if(s.ctx=n?n(t,f,(function(e,n){var r=!(arguments.length<=2)&&arguments.length-2?arguments.length<=2?void 0:arguments[2]:n;return s.ctx&&i(s.ctx[e],s.ctx[e]=r)&&(s.bound[e]&&s.bound[e](r),l&&yt(t,e)),n})):[],s.update(),l=!0,$(s.before_update),s.fragment=!!r&&r(s.ctx),e.target){if(e.hydrate){var p=D(e.target);s.fragment&&s.fragment.l(p),p.forEach(O)}else s.fragment&&s.fragment.c();e.intro&&ct(t.$$.fragment),vt(t,e.target,e.anchor),nt()}M(c)}var gt=function(){function t(){v(this,t)}var e,n,r;return e=t,(n=[{key:"$destroy",value:function(){dt(this,1),this.$destroy=y}},{key:"$on",value:function(t,e){var n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),function(){var t=n.indexOf(e);-1!==t&&n.splice(t,1)}}},{key:"$set",value:function(){}}])&&d(e.prototype,n),r&&d(e,r),t}(),bt=[];function $t(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:y,r=[];function o(n){if(x(t,n)&&(t=n,e)){for(var o=!bt.length,i=0;i<r.length;i+=1){var a=r[i];a[1](),bt.push(a,t)}if(o){for(var u=0;u<bt.length;u+=2)bt[u][0](bt[u+1]);bt.length=0}}}function i(e){o(e(t))}function a(i){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:y,u=[i,a];return r.push(u),1===r.length&&(e=n(o)||y),i(t),function(){var t=r.indexOf(u);-1!==t&&r.splice(t,1),0===r.length&&(e(),e=null)}}return{set:o,update:i,subscribe:a}}var wt={},xt=function(){return{}};function Et(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=c(t);if(e){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function St(t){var e,n,o=t[1].default,i=E(o,t,t[0],null);return{c:function(){e=j("main"),i&&i.c(),this.h()},l:function(t){var n=D(e=I(t,"MAIN",{class:!0}));i&&i.l(n),n.forEach(O),this.h()},h:function(){T(e,"class","svelte-rr3poj")},m:function(t,r){k(t,e,r),i&&i.m(e,null),n=!0},p:function(t,e){var n=r(e,1)[0];i&&i.p&&1&n&&_(i,o,t,t[0],n,null,null)},i:function(t){n||(ct(i,t),n=!0)},o:function(t){ft(i,t),n=!1},d:function(t){t&&O(e),i&&i.d(t)}}}function _t(t,e,n){var r=e.$$slots,o=void 0===r?{}:r,i=e.$$scope;return t.$set=function(t){"$$scope"in t&&n(0,i=t.$$scope)},[i,o]}var Lt=function(t){s(n,gt);var e=Et(n);function n(t){var r;return v(this,n),mt(l(r=e.call(this)),t,_t,St,x,{}),r}return n}();function Rt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=c(t);if(e){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function kt(t){for(var e,n,o=t[3].default,i=E(o,t,t[2],null),a=[{href:t[0]},t[1]],u={},c=0;c<a.length;c+=1)u=m(u,a[c]);return{c:function(){e=j("a"),i&&i.c(),this.h()},l:function(t){var n=D(e=I(t,"A",{href:!0}));i&&i.l(n),n.forEach(O),this.h()},h:function(){C(e,u),B(e,"svelte-fyfh5a",!0)},m:function(t,r){k(t,e,r),i&&i.m(e,null),n=!0},p:function(t,c){var f=r(c,1)[0];i&&i.p&&4&f&&_(i,o,t,t[2],f,null,null),C(e,u=st(a,[(!n||1&f)&&{href:t[0]},2&f&&t[1]])),B(e,"svelte-fyfh5a",!0)},i:function(t){n||(ct(i,t),n=!0)},o:function(t){ft(i,t),n=!1},d:function(t){t&&O(e),i&&i.d(t)}}}function Ot(t,e,n){var r=e.href,o=e,i=o.$$slots,a=void 0===i?{}:i,u=o.$$scope;return t.$set=function(t){n(1,e=m(m({},e),L(t))),"href"in t&&n(0,r=t.href),"$$scope"in t&&n(2,u=t.$$scope)},e=L(e),[r,e,u,a]}var jt=function(t){s(n,gt);var e=Rt(n);function n(t){var r;return v(this,n),mt(l(r=e.call(this)),t,Ot,kt,x,{href:0}),r}return n}();function Pt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=c(t);if(e){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function At(t){var e;return{c:function(){e=P("back")},l:function(t){e=U(t,"back")},m:function(t,n){k(t,e,n)},d:function(t){t&&O(e)}}}function Nt(t){var e,n,o,i,a,u,c,f,s,l,p,h,v=t[1].message+"";return document.title=e=t[0],p=new jt({props:{href:"/",$$slots:{default:[At]},$$scope:{ctx:t}}}),{c:function(){n=A(),o=j("div"),i=j("h1"),a=P(t[0]),u=A(),c=j("p"),f=P(v),s=A(),l=j("p"),pt(p.$$.fragment),this.h()},l:function(e){J('[data-svelte="svelte-1moakz"]',document.head).forEach(O),n=G(e);var r=D(o=I(e,"DIV",{class:!0})),h=D(i=I(r,"H1",{class:!0}));a=U(h,t[0]),h.forEach(O),u=G(r);var d=D(c=I(r,"P",{class:!0}));f=U(d,v),d.forEach(O),s=G(r);var y=D(l=I(r,"P",{class:!0}));ht(p.$$.fragment,y),y.forEach(O),r.forEach(O),this.h()},h:function(){T(i,"class","svelte-1ch357i"),T(c,"class","svelte-1ch357i"),T(l,"class","svelte-1ch357i"),T(o,"class","svelte-1ch357i")},m:function(t,e){k(t,n,e),k(t,o,e),R(o,i),R(i,a),R(o,u),R(o,c),R(c,f),R(o,s),R(o,l),vt(p,l,null),h=!0},p:function(t,n){var o=r(n,1)[0];(!h||1&o)&&e!==(e=t[0])&&(document.title=e),(!h||1&o)&&F(a,t[0]),(!h||2&o)&&v!==(v=t[1].message+"")&&F(f,v);var i={};4&o&&(i.$$scope={dirty:o,ctx:t}),p.$set(i)},i:function(t){h||(ct(p.$$.fragment,t),h=!0)},o:function(t){ft(p.$$.fragment,t),h=!1},d:function(t){t&&O(n),t&&O(o),dt(p)}}}function qt(t,e,n){var r=e.status,o=e.error;return t.$set=function(t){"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)},[r,o]}var Tt=function(t){s(n,gt);var e=Pt(n);function n(t){var r;return v(this,n),mt(l(r=e.call(this)),t,qt,Nt,x,{status:0,error:1}),r}return n}();function Ct(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=c(t);if(e){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function Dt(t){var e,n,r,o=[t[4].props],i=t[4].component;function a(t){for(var e={},n=0;n<o.length;n+=1)e=m(e,o[n]);return{props:e}}return i&&(e=new i(a())),{c:function(){e&&pt(e.$$.fragment),n=N()},l:function(t){e&&ht(e.$$.fragment,t),n=N()},m:function(t,o){e&&vt(e,t,o),k(t,n,o),r=!0},p:function(t,r){var u=16&r?st(o,[lt(t[4].props)]):{};if(i!==(i=t[4].component)){if(e){at();var c=e;ft(c.$$.fragment,1,0,(function(){dt(c,1)})),ut()}i?(pt((e=new i(a())).$$.fragment),ct(e.$$.fragment,1),vt(e,n.parentNode,n)):e=null}else i&&e.$set(u)},i:function(t){r||(e&&ct(e.$$.fragment,t),r=!0)},o:function(t){e&&ft(e.$$.fragment,t),r=!1},d:function(t){t&&O(n),e&&dt(e,t)}}}function It(t){var e,n;return e=new Tt({props:{error:t[0],status:t[1]}}),{c:function(){pt(e.$$.fragment)},l:function(t){ht(e.$$.fragment,t)},m:function(t,r){vt(e,t,r),n=!0},p:function(t,n){var r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i:function(t){n||(ct(e.$$.fragment,t),n=!0)},o:function(t){ft(e.$$.fragment,t),n=!1},d:function(t){dt(e,t)}}}function Ut(t){var e,n,r,o,i=[It,Dt],a=[];function u(t,e){return t[0]?0:1}return e=u(t),n=a[e]=i[e](t),{c:function(){n.c(),r=N()},l:function(t){n.l(t),r=N()},m:function(t,n){a[e].m(t,n),k(t,r,n),o=!0},p:function(t,o){var c=e;(e=u(t))===c?a[e].p(t,o):(at(),ft(a[c],1,1,(function(){a[c]=null})),ut(),(n=a[e])||(n=a[e]=i[e](t)).c(),ct(n,1),n.m(r.parentNode,r))},i:function(t){o||(ct(n),o=!0)},o:function(t){ft(n),o=!1},d:function(t){a[e].d(t),t&&O(r)}}}function Gt(t){for(var e,n,o=[{segment:t[2][0]},t[3].props],i={$$slots:{default:[Ut]},$$scope:{ctx:t}},a=0;a<o.length;a+=1)i=m(i,o[a]);return e=new Lt({props:i}),{c:function(){pt(e.$$.fragment)},l:function(t){ht(e.$$.fragment,t)},m:function(t,r){vt(e,t,r),n=!0},p:function(t,n){var i=r(n,1)[0],a=12&i?st(o,[4&i&&{segment:t[2][0]},8&i&&lt(t[3].props)]):{};147&i&&(a.$$scope={dirty:i,ctx:t}),e.$set(a)},i:function(t){n||(ct(e.$$.fragment,t),n=!0)},o:function(t){ft(e.$$.fragment,t),n=!1},d:function(t){dt(e,t)}}}function Ft(t,e,n){var r,o,i,a=e.stores,u=e.error,c=e.status,f=e.segments,s=e.level0,l=e.level1,p=void 0===l?null:l,h=e.notify;return r=h,V().$$.after_update.push(r),o=wt,i=a,V().$$.context.set(o,i),t.$set=function(t){"stores"in t&&n(5,a=t.stores),"error"in t&&n(0,u=t.error),"status"in t&&n(1,c=t.status),"segments"in t&&n(2,f=t.segments),"level0"in t&&n(3,s=t.level0),"level1"in t&&n(4,p=t.level1),"notify"in t&&n(6,h=t.notify)},[u,c,f,s,p,a,h]}var Bt=function(t){s(n,gt);var e=Ct(n);function n(t){var r;return v(this,n),mt(l(r=e.call(this)),t,Ft,Gt,x,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6}),r}return n}(),Jt=[],Mt=[{js:function(){return import("./index.e1887e15.js")},css:["legacy/index.e1887e15.css","legacy/client.5c9b247b.css"]}],Vt=[{pattern:/^\/$/,parts:[{i:0}]}];function Yt(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{replaceState:!1},n=pe(new URL(t,document.baseURI));return n?(fe[e.replaceState?"replaceState":"pushState"]({id:ie},"",t),ve(n,null).then((function(){}))):(location.href=t,new Promise((function(t){})))}var zt,Kt,Ht,Wt,Xt,Qt="undefined"!=typeof __SAPPER__&&__SAPPER__,Zt=!1,te=[],ee="{}",ne={page:function(t){var e=$t(t),n=!0;return{notify:function(){n=!0,e.update((function(t){return t}))},set:function(t){n=!1,e.set(t)},subscribe:function(t){var r;return e.subscribe((function(e){(void 0===r||n&&e!==r)&&t(r=e)}))}}}({}),preloading:$t(null),session:$t(Qt&&Qt.session)};ne.session.subscribe(function(){var t=u(i.mark((function t(e){var n,r,o,a,u,c;return i.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(Wt=e,Zt){t.next=3;break}return t.abrupt("return");case 3:return Xt=!0,n=pe(new URL(location.href)),r=Kt={},t.next=8,be(n);case 8:if(o=t.sent,a=o.redirect,u=o.props,c=o.branch,r===Kt){t.next=14;break}return t.abrupt("return");case 14:return t.next=16,ye(a,c,u,n.page);case 16:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());var re,oe=null;var ie,ae=1;var ue,ce,fe="undefined"!=typeof history?history:{pushState:function(t,e,n){},replaceState:function(t,e,n){},scrollRestoration:""},se={};function le(e){var n=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach((function(e){var o=r(/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," "))),3),i=o[1],a=o[2],u=void 0===a?"":a;"string"==typeof n[i]&&(n[i]=[n[i]]),"object"===t(n[i])?n[i].push(u):n[i]=u})),n}function pe(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(Qt.baseUrl))return null;var e=t.pathname.slice(Qt.baseUrl.length);if(""===e&&(e="/"),!Jt.some((function(t){return t.test(e)})))for(var n=0;n<Vt.length;n+=1){var r=Vt[n],o=r.pattern.exec(e);if(o){var i=le(t.search),a=r.parts[r.parts.length-1],u=a.params?a.params(o):{},c={host:location.host,path:e,query:i,params:u};return{href:t.href,route:r,match:o,page:c}}}}function he(){return{x:pageXOffset,y:pageYOffset}}function ve(t,e,n,r){return de.apply(this,arguments)}function de(){return(de=u(i.mark((function t(e,n,r,o){var a,u,c,f,s,l,p,h,v;return i.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n?ie=n:(a=he(),se[ie]=a,n=ie=++ae,se[ie]=r?a:{x:0,y:0}),ie=n,zt&&ne.preloading.set(!0),u=oe&&oe.href===e.href?oe.promise:be(e),oe=null,c=Kt={},t.next=8,u;case 8:if(f=t.sent,s=f.redirect,l=f.props,p=f.branch,c===Kt){t.next=14;break}return t.abrupt("return");case 14:return t.next=16,ye(s,p,l,e.page);case 16:document.activeElement&&document.activeElement.blur(),r||(h=se[n],o&&(v=document.getElementById(o.slice(1)))&&(h={x:0,y:v.getBoundingClientRect().top+scrollY}),se[ie]=h,h&&scrollTo(h.x,h.y));case 18:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function ye(t,e,n,r){return me.apply(this,arguments)}function me(){return(me=u(i.mark((function t(e,n,r,o){var a,u;return i.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=2;break}return t.abrupt("return",Yt(e.location,{replaceState:!0}));case 2:if(ne.page.set(o),ne.preloading.set(!1),!zt){t.next=8;break}zt.$set(r),t.next=18;break;case 8:return r.stores={page:{subscribe:ne.page.subscribe},preloading:{subscribe:ne.preloading.subscribe},session:ne.session},t.next=11,Ht;case 11:if(t.t0=t.sent,r.level0={props:t.t0},r.notify=ne.page.notify,a=document.querySelector("#sapper-head-start"),u=document.querySelector("#sapper-head-end"),a&&u){for(;a.nextSibling!==u;)Ee(a.nextSibling);Ee(a),Ee(u)}zt=new Bt({target:re,props:r,hydrate:!0});case 18:te=n,ee=JSON.stringify(o.query),Zt=!0,Xt=!1;case 22:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function ge(t,e,n,r){if(r!==ee)return!0;var o=te[t];return!!o&&(e!==o.segment||(!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0))}function be(t){return $e.apply(this,arguments)}function $e(){return($e=u(i.mark((function t(e){var n,r,o,a,c,f,s,l,p,h,v;return i.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.route,r=e.page,o=r.path.split("/").filter(Boolean),a=null,c={error:null,status:200,segments:[o[0]]},f={fetch:function(t){function e(e,n){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t,e){return fetch(t,e)})),redirect:function(t,e){if(a&&(a.statusCode!==t||a.location!==e))throw new Error("Conflicting redirects");a={statusCode:t,location:e}},error:function(t,e){c.error="string"==typeof e?new Error(e):e,c.status=t}},Ht||(Ht=Qt.preloaded[0]||xt.call(f,{host:r.host,path:r.path,query:r.query,params:{}},Wt)),l=1,t.prev=7,p=JSON.stringify(r.query),h=n.pattern.exec(r.path),v=!1,t.next=13,Promise.all(n.parts.map(function(){var t=u(i.mark((function t(n,a){var u,s,d,y,m,g;return i.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(u=o[a],ge(a,u,h,p)&&(v=!0),c.segments[l]=o[a+1],n){t.next=5;break}return t.abrupt("return",{segment:u});case 5:if(s=l++,Xt||v||!te[a]||te[a].part!==n.i){t.next=8;break}return t.abrupt("return",te[a]);case 8:return v=!1,t.next=11,xe(Mt[n.i]);case 11:if(d=t.sent,y=d.default,m=d.preload,!Zt&&Qt.preloaded[a+1]){t.next=25;break}if(!m){t.next=21;break}return t.next=18,m.call(f,{host:r.host,path:r.path,query:r.query,params:n.params?n.params(e.match):{}},Wt);case 18:t.t0=t.sent,t.next=22;break;case 21:t.t0={};case 22:g=t.t0,t.next=26;break;case 25:g=Qt.preloaded[a+1];case 26:return t.abrupt("return",c["level".concat(s)]={component:y,props:g,segment:u,match:h,part:n.i});case 27:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()));case 13:s=t.sent,t.next=21;break;case 16:t.prev=16,t.t0=t.catch(7),c.error=t.t0,c.status=500,s=[];case 21:return t.abrupt("return",{redirect:a,props:c,branch:s});case 22:case"end":return t.stop()}}),t,null,[[7,16]])})))).apply(this,arguments)}function we(t){var e="client/".concat(t);if(!document.querySelector('link[href="'.concat(e,'"]')))return new Promise((function(t,n){var r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=function(){return t()},r.onerror=n,document.head.appendChild(r)}))}function xe(t){var e="string"==typeof t.css?[]:t.css.map(we);return e.unshift(t.js()),Promise.all(e).then((function(t){return t[0]}))}function Ee(t){t.parentNode.removeChild(t)}function Se(t){var e=pe(new URL(t,document.baseURI));if(e)return oe&&t===oe.href||function(t,e){oe={href:t,promise:e}}(t,be(e)),oe.promise}function _e(t){clearTimeout(ue),ue=setTimeout((function(){Le(t)}),20)}function Le(t){var e=ke(t.target);e&&"prefetch"===e.rel&&Se(e.href)}function Re(e){if(1===function(t){return null===t.which?t.button:t.which}(e)&&!(e.metaKey||e.ctrlKey||e.shiftKey||e.defaultPrevented)){var n=ke(e.target);if(n&&n.href){var r="object"===t(n.href)&&"SVGAnimatedString"===n.href.constructor.name,o=String(r?n.href.baseVal:n.href);if(o!==location.href){if(!n.hasAttribute("download")&&"external"!==n.getAttribute("rel")&&!(r?n.target.baseVal:n.target)){var i=new URL(o);if(i.pathname!==location.pathname||i.search!==location.search){var a=pe(i);if(a)ve(a,null,n.hasAttribute("sapper-noscroll"),i.hash),e.preventDefault(),fe.pushState({id:ie},"",i.href)}}}else location.hash||e.preventDefault()}}}function ke(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function Oe(t){if(se[ie]=he(),t.state){var e=pe(new URL(location.href));e?ve(e,t.state.id):location.href=location.href}else(function(t){ie=t})(ae=ae+1),fe.replaceState({id:ie},"",location.href)}ce={target:document.querySelector("#sapper")},"scrollRestoration"in fe&&(fe.scrollRestoration="manual"),addEventListener("beforeunload",(function(){fe.scrollRestoration="auto"})),addEventListener("load",(function(){fe.scrollRestoration="manual"})),function(t){re=t}(ce.target),addEventListener("click",Re),addEventListener("popstate",Oe),addEventListener("touchstart",Le),addEventListener("mousemove",_e),Promise.resolve().then((function(){var t=location,e=t.hash,n=t.href;fe.replaceState({id:ae},"",n);var r,o,i,a,u,c,f,s,l=new URL(location.href);if(Qt.error)return r=location,o=r.host,i=r.pathname,a=r.search,u=Qt.session,c=Qt.preloaded,f=Qt.status,s=Qt.error,Ht||(Ht=c&&c[0]),void ye(null,[],{error:s,status:f,session:u,level0:{props:Ht},level1:{props:{status:f,error:s},component:Tt},segments:c},{host:o,path:i,query:le(a),params:{}});var p=pe(l);return p?ve(p,ae,!0,e):void 0}));export{q as A,_ as B,Y as C,N as D,at as E,ut as F,J as G,jt as L,gt as S,s as _,c as a,p as b,v as c,l as d,j as e,A as f,I as g,D as h,mt as i,O as j,G as k,T as l,k as m,R as n,y as o,pt as p,ht as q,vt as r,x as s,r as t,ct as u,ft as v,dt as w,P as x,U as y,E as z};