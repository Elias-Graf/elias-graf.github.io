(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[907],{4184:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var c=o.apply(null,n);c&&e.push(c)}}else if("object"===a)if(n.toString===Object.prototype.toString)for(var i in n)r.call(n,i)&&n[i]&&e.push(i);else e.push(n.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},659:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/bits/[name]",function(){return n(3414)}])},3403:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(5893),o=(n(7294),n(1664)),a=n(4184),c=n.n(a),i=n(5332),u=n.n(i),l=n(1163),f=[{link:"/",text:"Home"},{link:"/about",text:"About"},{link:"/projects",text:"Projects"}];function s(e){var t=e.children,n=(0,l.useRouter)().asPath;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("nav",{className:u().nav,children:f.map((function(e){return(0,r.jsx)(o.default,{href:e.link,children:(0,r.jsx)("a",{className:c()(n===e.link&&u().active),children:e.text})},e.link)}))}),(0,r.jsx)("main",{children:t})]})}},8309:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var r=n(5893),o=n(7294),a=n(4184),c=n.n(a),i=n(7331),u=n.n(i);function l(e){var t=e.activeId,n=e.nodes;return(0,r.jsx)("ul",{className:u().list,children:n.map((function(e){return(0,r.jsxs)("li",{className:c()(u().entry,e.id===t&&u().active),children:[(0,r.jsx)("a",{href:"#".concat(e.id),children:e.text}),e.children.length>0&&(0,r.jsx)(l,{activeId:t,nodes:e.children})]},e.id)}))})}var f=n(3197),s=n.n(f);function d(e,t){var n=(0,o.useRef)({});(0,o.useEffect)((function(){var r=new IntersectionObserver((function(t){return function(e,t,n){var r=!0,o=!1,a=void 0;try{for(var c,i=t[Symbol.iterator]();!(r=(c=i.next()).done);r=!0){var u=c.value;e.current[u.target.id]=u}}catch(f){o=!0,a=f}finally{try{r||null==i.return||i.return()}finally{if(o)throw a}}var l=Object.values(e.current).filter((function(e){return e.isIntersecting}));l.length>0&&n(l[0].target.id)}(n,t,e)}),{rootMargin:"75px 0px 0px 0px"});return function(e,t){var n=!0,r=!1,o=void 0;try{for(var a,c=t[Symbol.iterator]();!(n=(a=c.next()).done);n=!0){var i=a.value;e.observe(i)}}catch(u){r=!0,o=u}finally{try{n||null==c.return||c.return()}finally{if(r)throw o}}}(r,t),function(){return r.disconnect()}}),[e,t])}var v=/^H([1-6])$/;function p(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=[],r=0;r<e.length;r++){var o=e[r],a=o.tagName,c=o.innerText,i=o.id,u=v.exec(a);if(u){var l=parseInt(u[1]),f={children:[],id:i,text:c};if(l<t)return n;l===t&&(f.children=p(e.slice(r+1),t+1),n.push(f))}}return n}function y(e){return(0,o.useMemo)((function(){return p(e)}),[e])}function h(e){var t,n=e.children,a=(0,o.useState)(),c=a[0],i=a[1],u=(t=c,(0,o.useMemo)((function(){return t?Array.from(document.querySelectorAll("h1, h2, h3, h4, h5, h6")):[]}),[t])),f=(0,o.useState)(),v=f[0],p=f[1],h=y(u);return d(p,u),(0,r.jsxs)("div",{className:s().container,children:[(0,r.jsx)("div",{className:s().content,ref:function(e){return i(e)},children:n}),(0,r.jsx)("nav",{className:s().toc,"aria-label":"Table of contents",children:(0,r.jsx)(l,{activeId:v,nodes:h})})]})}},8418:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],c=!0,i=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);c=!0);}catch(u){i=!0,o=u}finally{try{c||null==n.return||n.return()}finally{if(i)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var a,c=(a=n(7294))&&a.__esModule?a:{default:a},i=n(6273),u=n(387),l=n(7190);var f={};function s(e,t,n,r){if(e&&i.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;f[t+"%"+n+(o?"%"+o:"")]=!0}}var d=function(e){var t,n=!1!==e.prefetch,r=u.useRouter(),a=c.default.useMemo((function(){var t=o(i.resolveHref(r,e.href,!0),2),n=t[0],a=t[1];return{href:n,as:e.as?i.resolveHref(r,e.as):a||n}}),[r,e.href,e.as]),d=a.href,v=a.as,p=e.children,y=e.replace,h=e.shallow,m=e.scroll,b=e.locale;"string"===typeof p&&(p=c.default.createElement("a",null,p));var g=(t=c.default.Children.only(p))&&"object"===typeof t&&t.ref,w=o(l.useIntersection({rootMargin:"200px"}),2),j=w[0],x=w[1],_=c.default.useCallback((function(e){j(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,j]);c.default.useEffect((function(){var e=x&&n&&i.isLocalURL(d),t="undefined"!==typeof b?b:r&&r.locale,o=f[d+"%"+v+(t?"%"+t:"")];e&&!o&&s(r,d,v,{locale:t})}),[v,d,x,b,n,r]);var O={ref:_,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,c,u){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(n))&&(e.preventDefault(),t[o?"replace":"push"](n,r,{shallow:a,locale:u,scroll:c}))}(e,r,d,v,y,h,m,b)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),i.isLocalURL(d)&&s(r,d,v,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var C="undefined"!==typeof b?b:r&&r.locale,S=r&&r.isLocaleDomain&&i.getDomainLocale(v,C,r&&r.locales,r&&r.domainLocales);O.href=S||i.addBasePath(i.addLocale(v,C,r&&r.defaultLocale))}return c.default.cloneElement(t,O)};t.default=d},7190:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],c=!0,i=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);c=!0);}catch(u){i=!0,o=u}finally{try{c||null==n.return||n.return()}finally{if(i)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,r=e.disabled||!i,f=a.useRef(),s=o(a.useState(!1),2),d=s[0],v=s[1],p=o(a.useState(t?t.current:null),2),y=p[0],h=p[1],m=a.useCallback((function(e){f.current&&(f.current(),f.current=void 0),r||d||e&&e.tagName&&(f.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=l.find((function(e){return e.root===n.root&&e.margin===n.margin}));r?t=u.get(r):(t=u.get(n),l.push(n));if(t)return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return u.set(n,t={id:n,observer:a,elements:o}),t}(n),o=r.id,a=r.observer,c=r.elements;return c.set(e,t),a.observe(e),function(){if(c.delete(e),a.unobserve(e),0===c.size){a.disconnect(),u.delete(o);var t=l.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&l.splice(t,1)}}}(e,(function(e){return e&&v(e)}),{root:y,rootMargin:n}))}),[r,y,n,d]);return a.useEffect((function(){if(!i&&!d){var e=c.requestIdleCallback((function(){return v(!0)}));return function(){return c.cancelIdleCallback(e)}}}),[d]),a.useEffect((function(){t&&h(t.current)}),[t]),[m,d]};var a=n(7294),c=n(9311),i="undefined"!==typeof IntersectionObserver;var u=new Map,l=[]},3414:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return j},default:function(){return x}});var r={};n.r(r),n.d(r,{MDXContext:function(){return i},MDXProvider:function(){return s},useMDXComponents:function(){return l},withMDXComponents:function(){return u}});var o=n(5893),a=n.t(o,2),c=n(7294);const i=c.createContext({});function u(e){return function(t){const n=l(t.components);return c.createElement(e,{...t,allComponents:n})}}function l(e){const t=c.useContext(i);return c.useMemo((()=>"function"===typeof e?e(t):{...t,...e}),[t,e])}const f={};function s({components:e,children:t,disableParentContext:n}){let r=l(e);return n&&(r=e||f),c.createElement(i.Provider,{value:r},t)}function d({compiledSource:e,frontmatter:t,scope:n,components:o={},lazy:i}){const[u,l]=(0,c.useState)(!i||"undefined"===typeof window);(0,c.useEffect)((()=>{if(i){const e=window.requestIdleCallback((()=>{l(!0)}));return()=>window.cancelIdleCallback(e)}}),[]);const f=(0,c.useMemo)((()=>{const o=Object.assign({opts:{...r,...a}},{frontmatter:t},n),c=Object.keys(o),i=Object.values(o),u=Reflect.construct(Function,c.concat(`${e}`));return u.apply(u,i).default}),[n,e]);if(!u)return c.createElement("div",{dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0});const d=c.createElement(s,{components:o},c.createElement(f,null));return i?c.createElement("div",null,d):d}"undefined"!==typeof window&&(window.requestIdleCallback=window.requestIdleCallback||function(e){var t=Date.now();return setTimeout((function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})}),1)},window.cancelIdleCallback=window.cancelIdleCallback||function(e){clearTimeout(e)});var v=n(3483),p=n(4441);function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function m(e){var t=e.className,n=e.children,r=h(e,["className","children"]),a=/language-(\w+)/.exec(t||"");return a?(0,o.jsx)(v.Z,{style:p.Z,language:a[1],children:n}):(0,o.jsx)("code",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){y(e,t,n[t])}))}return e}({},r,{children:n}))}var b=n(3403),g=n(8309);function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var j=!0;function x(e){var t=e.source;return(0,o.jsx)(d,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){w(e,t,n[t])}))}return e}({},t))}x.getLayout=function(e){return(0,o.jsx)(s,{components:{code:m},children:(0,o.jsx)(b.Z,{children:(0,o.jsx)(g.Z,{children:e})})})}},7331:function(e){e.exports={list:"tableOfContents_list__b8d6s",entry:"tableOfContents_entry__IfVwq",active:"tableOfContents_active__c_CsF"}},5332:function(e){e.exports={nav:"navBarLayout_nav__R8NZ9",active:"navBarLayout_active__hWBct"}},3197:function(e){e.exports={container:"tableOfContentsLayout_container__EzUwh",toc:"tableOfContentsLayout_toc__ZjzLh",content:"tableOfContentsLayout_content__KYkIj"}},1664:function(e,t,n){e.exports=n(8418)},1163:function(e,t,n){e.exports=n(387)}},function(e){e.O(0,[685,774,888,179],(function(){return t=659,e(e.s=t);var t}));var t=e.O();_N_E=t}]);