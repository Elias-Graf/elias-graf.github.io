(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{4184:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)){if(r.length){var i=o.apply(null,r);i&&e.push(i)}}else if("object"===a)if(r.toString===Object.prototype.toString)for(var u in r)n.call(r,u)&&r[u]&&e.push(u);else e.push(r.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},4613:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return r(4228)}])},9100:function(e,t,r){"use strict";r.d(t,{Z:function(){return f}});var n=r(5893),o=(r(7294),r(1664)),a=r(4184),i=r.n(a),u=r(3219),c=r.n(u),l=r(1163),s=[{link:"/",text:"Home"},{link:"/about",text:"About"},{link:"/projects",text:"Projects"}];function f(e){var t=e.children,r=(0,l.useRouter)().asPath;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("nav",{className:c().nav,children:s.map((function(e){return(0,n.jsx)(o.default,{href:e.link,children:(0,n.jsx)("a",{className:i()(r===e.link&&c().active),children:e.text})},e.link)}))}),(0,n.jsx)("main",{children:t})]})}},8418:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,u=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(c){u=!0,o=c}finally{try{i||null==r.return||r.return()}finally{if(u)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var a,i=(a=r(7294))&&a.__esModule?a:{default:a},u=r(6273),c=r(387),l=r(7190);var s={};function f(e,t,r,n){if(e&&u.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;s[t+"%"+r+(o?"%"+o:"")]=!0}}var d=function(e){var t,r=!1!==e.prefetch,n=c.useRouter(),a=i.default.useMemo((function(){var t=o(u.resolveHref(n,e.href,!0),2),r=t[0],a=t[1];return{href:r,as:e.as?u.resolveHref(n,e.as):a||r}}),[n,e.href,e.as]),d=a.href,p=a.as,v=e.children,h=e.replace,y=e.shallow,m=e.scroll,g=e.locale;"string"===typeof v&&(v=i.default.createElement("a",null,v));var b=(t=i.default.Children.only(v))&&"object"===typeof t&&t.ref,_=o(l.useIntersection({rootMargin:"200px"}),2),j=_[0],x=_[1],w=i.default.useCallback((function(e){j(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,j]);i.default.useEffect((function(){var e=x&&r&&u.isLocalURL(d),t="undefined"!==typeof g?g:n&&n.locale,o=s[d+"%"+p+(t?"%"+t:"")];e&&!o&&f(n,d,p,{locale:t})}),[p,d,x,g,r,n]);var k={ref:w,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,a,i,c){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(r))&&(e.preventDefault(),t[o?"replace":"push"](r,n,{shallow:a,locale:c,scroll:i}))}(e,n,d,p,h,y,m,g)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u.isLocalURL(d)&&f(n,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var E="undefined"!==typeof g?g:n&&n.locale,A=n&&n.isLocaleDomain&&u.getDomainLocale(p,E,n&&n.locales,n&&n.domainLocales);k.href=A||u.addBasePath(u.addLocale(p,E,n&&n.defaultLocale))}return i.default.cloneElement(t,k)};t.default=d},7190:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,u=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(c){u=!0,o=c}finally{try{i||null==r.return||r.return()}finally{if(u)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!u,s=a.useRef(),f=o(a.useState(!1),2),d=f[0],p=f[1],v=o(a.useState(t?t.current:null),2),h=v[0],y=v[1],m=a.useCallback((function(e){s.current&&(s.current(),s.current=void 0),n||d||e&&e.tagName&&(s.current=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=l.find((function(e){return e.root===r.root&&e.margin===r.margin}));n?t=c.get(n):(t=c.get(r),l.push(r));if(t)return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return c.set(r,t={id:r,observer:a,elements:o}),t}(r),o=n.id,a=n.observer,i=n.elements;return i.set(e,t),a.observe(e),function(){if(i.delete(e),a.unobserve(e),0===i.size){a.disconnect(),c.delete(o);var t=l.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&l.splice(t,1)}}}(e,(function(e){return e&&p(e)}),{root:h,rootMargin:r}))}),[n,h,r,d]);return a.useEffect((function(){if(!u&&!d){var e=i.requestIdleCallback((function(){return p(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[d]),a.useEffect((function(){t&&y(t.current)}),[t]),[m,d]};var a=r(7294),i=r(9311),u="undefined"!==typeof IntersectionObserver;var c=new Map,l=[]},4228:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var n=r(5893),o=(r(7294),r(9100)),a=r(8986),i=r.n(a);function u(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("ul",{className:i().cards,children:[(0,n.jsx)("li",{className:i().rainbowGradient,children:(0,n.jsx)("a",{href:"https://github.com/Elias-Graf",children:(0,n.jsxs)("div",{className:i().card,children:[(0,n.jsx)("div",{children:"GitHub"}),(0,n.jsx)("img",{src:"/images/github.svg",alt:"github logo",height:100})]})})}),(0,n.jsx)("li",{className:i().rainbowGradient,children:(0,n.jsx)("a",{href:"https://stackoverflow.com/users/10315665/elias",children:(0,n.jsxs)("div",{className:i().card,children:[(0,n.jsx)("div",{children:"StackOverflow"}),(0,n.jsx)("img",{src:"/images/stackoverflow.svg",alt:"StackOverflow logo",width:"100%",height:100})]})})})]})})}u.getLayout=function(e){return(0,n.jsx)(o.Z,{children:e})}},3219:function(e){e.exports={nav:"navBarLayout_nav__yApjk",active:"navBarLayout_active__WaOWi"}},8986:function(e){e.exports={cards:"about_cards__Gg3vB",rainbowGradient:"about_rainbowGradient__vMmsK",ddd:"about_ddd__HIe9I",card:"about_card__1dIk7"}},1664:function(e,t,r){e.exports=r(8418)},1163:function(e,t,r){e.exports=r(387)}},function(e){e.O(0,[774,888,179],(function(){return t=4613,e(e.s=t);var t}));var t=e.O();_N_E=t}]);