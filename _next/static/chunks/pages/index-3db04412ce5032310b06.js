(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2167:function(e,n,r){"use strict";var t=r(3038);n.default=void 0;var o,a=(o=r(7294))&&o.__esModule?o:{default:o},c=r(1063),l=r(4651),i=r(7426);var u={};function s(e,n,r,t){if(e&&c.isLocalURL(n)){e.prefetch(n,r,t).catch((function(e){0}));var o=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;u[n+"%"+r+(o?"%"+o:"")]=!0}}var f=function(e){var n,r=!1!==e.prefetch,o=l.useRouter(),f=a.default.useMemo((function(){var n=c.resolveHref(o,e.href,!0),r=t(n,2),a=r[0],l=r[1];return{href:a,as:e.as?c.resolveHref(o,e.as):l||a}}),[o,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,y=e.shallow,g=e.scroll,_=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var b=(n=a.default.Children.only(v))&&"object"===typeof n&&n.ref,j=i.useIntersection({rootMargin:"200px"}),E=t(j,2),m=E[0],x=E[1],L=a.default.useCallback((function(e){m(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,m]);a.default.useEffect((function(){var e=x&&r&&c.isLocalURL(d),n="undefined"!==typeof _?_:o&&o.locale,t=u[d+"%"+p+(n?"%"+n:"")];e&&!t&&s(o,d,p,{locale:n})}),[p,d,x,_,r,o]);var k={ref:L,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,r,t,o,a,l,i){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(r))&&(e.preventDefault(),null==l&&t.indexOf("#")>=0&&(l=!1),n[o?"replace":"push"](r,t,{shallow:a,locale:i,scroll:l}))}(e,o,d,p,h,y,g,_)},onMouseEnter:function(e){c.isLocalURL(d)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),s(o,d,p,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var w="undefined"!==typeof _?_:o&&o.locale,C=o&&o.isLocaleDomain&&c.getDomainLocale(p,w,o&&o.locales,o&&o.domainLocales);k.href=C||c.addBasePath(c.addLocale(p,w,o&&o.defaultLocale))}return a.default.cloneElement(n,k)};n.default=f},7426:function(e,n,r){"use strict";var t=r(3038);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,r=e.disabled||!c,i=o.useRef(),u=o.useState(!1),s=t(u,2),f=s[0],d=s[1],p=o.useCallback((function(e){i.current&&(i.current(),i.current=void 0),r||f||e&&e.tagName&&(i.current=function(e,n,r){var t=function(e){var n=e.rootMargin||"",r=l.get(n);if(r)return r;var t=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=t.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;n&&r&&n(r)}))}),e);return l.set(n,r={id:n,observer:o,elements:t}),r}(r),o=t.id,a=t.observer,c=t.elements;return c.set(e,n),a.observe(e),function(){c.delete(e),a.unobserve(e),0===c.size&&(a.disconnect(),l.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[r,n,f]);return o.useEffect((function(){if(!c&&!f){var e=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[f]),[p,f]};var o=r(7294),a=r(3447),c="undefined"!==typeof IntersectionObserver;var l=new Map},2562:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return a}});r(7294);var t=r(1664),o=r(5893);function a(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h1",{children:"Ugly ass index"}),(0,o.jsx)("h2",{children:"Check out some of there pages"}),(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:(0,o.jsx)(t.default,{href:"/colors/picker",children:(0,o.jsx)("a",{children:"HSV Color"})})}),(0,o.jsx)("li",{children:(0,o.jsx)(t.default,{href:"/lazyjson",children:(0,o.jsx)("a",{children:"Lazyjson interactive demo"})})})]})]})}},5301:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(2562)}])},1664:function(e,n,r){e.exports=r(2167)}},function(e){e.O(0,[774,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);