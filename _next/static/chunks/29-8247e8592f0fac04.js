(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[29],{9029:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return f}});var r=t(2670),o=t(1799),i=t(9396),a=t(5893),s=t(7649),_=(t(7294),t(5227)),u=t(1651),c=t.n(u),l=t(4441);function f(n){var e=n.allowLineComments,t=n.allowLineCommentsChange,u=n.allowTrailingCommas,f=n.allowTrailingCommasChange,g=n.inp,w=n.inputChanged,d=n.lazyjsonOutput,p=l.Z['pre[class*="language-"]'],b=p.background,m=p.color,y=p.fontFamily,h={backgroundColor:b,borderRadius:p.borderRadius,color:m,fontFamily:y,fontSize:"15pt",margin:0,padding:"0.5em"};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("section",{children:[(0,a.jsx)("span",{children:"Input:"}),(0,a.jsx)("textarea",{value:g,style:h,onInput:function(n){w(n.target.value)}}),(0,a.jsxs)("div",{style:(0,i.Z)((0,o.Z)({},h),{marginTop:"1rem"}),className:c().config,children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("input",{id:"allow-trailing-commas",type:"checkbox",onChange:function(n){f(n.target.checked)},checked:u}),(0,a.jsx)("label",{htmlFor:"allow-trailing-commas",children:"Allow trailing commas"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("input",{id:"allow-line-comments",type:"checkbox",onChange:function(n){t(n.target.checked)},checked:e}),(0,a.jsx)("label",{htmlFor:"allow-line-comments",children:"Allow line comments"})]})]})]}),(0,a.jsxs)("section",{children:[(0,a.jsx)("span",{children:"Emitted output:"}),(0,a.jsx)(_.Z,{wrapLongLines:!0,language:"json",style:l.Z,customStyle:h,children:void 0===d?"":(0,r.Z)(d,s.WS)?d.msg:d.emit})]}),(0,a.jsxs)("section",{children:[(0,a.jsx)("span",{children:"Tree:"}),(0,a.jsx)(_.Z,{wrapLongLines:!0,style:l.Z,customStyle:h,children:void 0===d?"":(0,r.Z)(d,s.WS)?"No tree built - there was an error":d.tree})]})]})}},7649:function(n,e,t){"use strict";t.d(e,{De:function(){return z},Fo:function(){return Z},WS:function(){return C}});var r,o=t(7568),i=t(1438),a=t(2951),s=t(2670),_=t(4051),u=t.n(_),c=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});c.decode();var l=null;function f(){return null!==l&&l.buffer===r.memory.buffer||(l=new Uint8Array(r.memory.buffer)),l}function g(n,e){return c.decode(f().subarray(n,n+e))}var w=new Array(32).fill(void 0);w.push(void 0,null,!0,!1);var d=w.length;function p(n){d===w.length&&w.push(w.length+1);var e=d;return d=w[e],w[e]=n,e}function b(n){return w[n]}function m(n){var e=b(n);return function(n){n<36||(w[n]=d,d=n)}(n),e}var y=null;function h(){return null!==y&&y.buffer===r.memory.buffer||(y=new Int32Array(r.memory.buffer)),y}var v=0,k=new TextEncoder("utf-8"),x="function"===typeof k.encodeInto?function(n,e){return k.encodeInto(n,e)}:function(n,e){var t=k.encode(n);return e.set(t),{read:n.length,written:t.length}};function j(n,e,t){if(void 0===t){var r=k.encode(n),o=e(r.length);return f().subarray(o,o+r.length).set(r),v=r.length,o}for(var i=n.length,a=e(i),s=f(),_=0;_<i;_++){var u=n.charCodeAt(_);if(u>127)break;s[a+_]=u}if(_!==i){0!==_&&(n=n.slice(_)),a=t(a,i,i=_+3*n.length);var c=f().subarray(a+_,a+i);_+=x(n,c).written}return v=_,a}function Z(n,e){var t=j(n,r.__wbindgen_malloc,r.__wbindgen_realloc),o=v;!function(n,e){if(!(0,s.Z)(n,e))throw new Error("expected instance of ".concat(e.name));n.ptr}(e,z);var i=e.ptr;e.ptr=0;var a=r.parse_and_emit(t,o,i);return W.__wrap(a)}var z=function(){function n(){(0,i.Z)(this,n)}return(0,a.Z)(n,[{key:"__destroy_into_raw",value:function(){var n=this.ptr;return this.ptr=0,n}},{key:"free",value:function(){var n=this.__destroy_into_raw();r.__wbg_config_free(n)}},{key:"allow_trailing_commas",get:function(){return 0!==r.__wbg_get_config_allow_trailing_commas(this.ptr)},set:function(n){r.__wbg_set_config_allow_trailing_commas(this.ptr,n)}},{key:"allow_line_comments",get:function(){return 0!==r.__wbg_get_config_allow_line_comments(this.ptr)},set:function(n){r.__wbg_set_config_allow_line_comments(this.ptr,n)}}],[{key:"__wrap",value:function(e){var t=Object.create(n.prototype);return t.ptr=e,t}},{key:"new",value:function(){var e=r.config_new();return n.__wrap(e)}}]),n}(),C=function(){function n(){(0,i.Z)(this,n)}return(0,a.Z)(n,[{key:"__destroy_into_raw",value:function(){var n=this.ptr;return this.ptr=0,n}},{key:"free",value:function(){var n=this.__destroy_into_raw();r.__wbg_lazyjsonerror_free(n)}},{key:"from",get:function(){return r.__wbg_get_lazyjsonerror_from(this.ptr)>>>0},set:function(n){r.__wbg_set_lazyjsonerror_from(this.ptr,n)}},{key:"to",get:function(){return r.__wbg_get_lazyjsonerror_to(this.ptr)>>>0},set:function(n){r.__wbg_set_lazyjsonerror_to(this.ptr,n)}},{key:"msg",get:function(){try{var n=r.__wbindgen_add_to_stack_pointer(-16);r.__wbg_get_lazyjsonerror_msg(n,this.ptr);var e=h()[n/4+0],t=h()[n/4+1];return g(e,t)}finally{r.__wbindgen_add_to_stack_pointer(16),r.__wbindgen_free(e,t)}},set:function(n){var e=j(n,r.__wbindgen_malloc,r.__wbindgen_realloc),t=v;r.__wbg_set_lazyjsonerror_msg(this.ptr,e,t)}}],[{key:"__wrap",value:function(e){var t=Object.create(n.prototype);return t.ptr=e,t}}]),n}(),W=function(){function n(){(0,i.Z)(this,n)}return(0,a.Z)(n,[{key:"__destroy_into_raw",value:function(){var n=this.ptr;return this.ptr=0,n}},{key:"free",value:function(){var n=this.__destroy_into_raw();r.__wbg_parsingresult_free(n)}},{key:"tree",get:function(){try{var n=r.__wbindgen_add_to_stack_pointer(-16);r.__wbg_get_parsingresult_tree(n,this.ptr);var e=h()[n/4+0],t=h()[n/4+1];return g(e,t)}finally{r.__wbindgen_add_to_stack_pointer(16),r.__wbindgen_free(e,t)}},set:function(n){var e=j(n,r.__wbindgen_malloc,r.__wbindgen_realloc),t=v;r.__wbg_set_parsingresult_tree(this.ptr,e,t)}},{key:"emit",get:function(){try{var n=r.__wbindgen_add_to_stack_pointer(-16);r.__wbg_get_parsingresult_emit(n,this.ptr);var e=h()[n/4+0],t=h()[n/4+1];return g(e,t)}finally{r.__wbindgen_add_to_stack_pointer(16),r.__wbindgen_free(e,t)}},set:function(n){var e=j(n,r.__wbindgen_malloc,r.__wbindgen_realloc),t=v;r.__wbg_set_parsingresult_emit(this.ptr,e,t)}}],[{key:"__wrap",value:function(e){var t=Object.create(n.prototype);return t.ptr=e,t}},{key:"new",value:function(){var e=r.parsingresult_new();return n.__wrap(e)}}]),n}();function A(n,e){return S.apply(this,arguments)}function S(){return(S=(0,o.Z)(u().mark((function n(e,t){var r,o;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if("function"!==typeof Response||!(0,s.Z)(e,Response)){n.next=23;break}if("function"!==typeof WebAssembly.instantiateStreaming){n.next=15;break}return n.prev=2,n.next=5,WebAssembly.instantiateStreaming(e,t);case 5:case 20:return n.abrupt("return",n.sent);case 8:if(n.prev=8,n.t0=n.catch(2),"application/wasm"==e.headers.get("Content-Type")){n.next=14;break}console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",n.t0),n.next=15;break;case 14:throw n.t0;case 15:return n.next=17,e.arrayBuffer();case 17:return r=n.sent,n.next=20,WebAssembly.instantiate(r,t);case 23:return n.next=25,WebAssembly.instantiate(e,t);case 25:if(o=n.sent,!(0,s.Z)(o,WebAssembly.Instance)){n.next=30;break}return n.abrupt("return",{instance:o,module:e});case 30:return n.abrupt("return",o);case 31:case"end":return n.stop()}}),n,null,[[2,8]])})))).apply(this,arguments)}function E(n){return I.apply(this,arguments)}function I(){return(I=(0,o.Z)(u().mark((function n(e){var o,i,a,_;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"undefined"===typeof e&&(e=new t.U(t(871))),(o={}).wbg={},o.wbg.__wbg_lazyjsonerror_new=function(n){return p(C.__wrap(n))},o.wbg.__wbindgen_string_new=function(n,e){return p(g(n,e))},o.wbg.__wbg_new_693216e109162396=function(){return p(new Error)},o.wbg.__wbg_stack_0ddaca5d1abfb52f=function(n,e){var t=j(b(e).stack,r.__wbindgen_malloc,r.__wbindgen_realloc),o=v;h()[n/4+1]=o,h()[n/4+0]=t},o.wbg.__wbg_error_09919627ac0992f5=function(n,e){try{console.error(g(n,e))}finally{r.__wbindgen_free(n,e)}},o.wbg.__wbindgen_object_drop_ref=function(n){m(n)},o.wbg.__wbindgen_throw=function(n,e){throw new Error(g(n,e))},o.wbg.__wbindgen_rethrow=function(n){throw m(n)},("string"===typeof e||"function"===typeof Request&&(0,s.Z)(e,Request)||"function"===typeof URL&&(0,s.Z)(e,URL))&&(e=fetch(e)),n.t0=A,n.next=15,e;case 15:return n.t1=n.sent,n.t2=o,n.next=19,(0,n.t0)(n.t1,n.t2);case 19:return i=n.sent,a=i.instance,_=i.module,r=a.exports,E.__wbindgen_wasm_module=_,n.abrupt("return",r);case 25:case"end":return n.stop()}}),n)})))).apply(this,arguments)}e.ZP=E},1651:function(n){n.exports={page:"lazyjson_page__S9fLQ",sizeWarning:"lazyjson_sizeWarning__soQbE",charWarning:"lazyjson_charWarning__dGAbB",demo:"lazyjson_demo__GZCDT",config:"lazyjson_config__HWCEI"}},871:function(n,e,t){"use strict";n.exports=t.p+"static/media/lazyjson_wasm_bg.abfdb18e.wasm"},7568:function(n,e,t){"use strict";function r(n,e,t,r,o,i,a){try{var s=n[i](a),_=s.value}catch(u){return void t(u)}s.done?e(_):Promise.resolve(_).then(r,o)}function o(n){return function(){var e=this,t=arguments;return new Promise((function(o,i){var a=n.apply(e,t);function s(n){r(a,o,i,s,_,"next",n)}function _(n){r(a,o,i,s,_,"throw",n)}s(void 0)}))}}t.d(e,{Z:function(){return o}})},1438:function(n,e,t){"use strict";function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}t.d(e,{Z:function(){return r}})},2951:function(n,e,t){"use strict";function r(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function o(n,e,t){return e&&r(n.prototype,e),t&&r(n,t),n}t.d(e,{Z:function(){return o}})},2670:function(n,e,t){"use strict";function r(n,e){return null!=e&&"undefined"!==typeof Symbol&&e[Symbol.hasInstance]?!!e[Symbol.hasInstance](n):n instanceof e}t.d(e,{Z:function(){return r}})}}]);