(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[916],{440:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/bits/toc",function(){return t(391)}])},5098:function(e,n,t){"use strict";t.d(n,{Z:function(){return E}});var r=t(5893),i=t(7294),s=t(4184),o=t.n(s),c=t(7331),a=t.n(c);function l(e){var n=e.activeId,t=e.nodes;return(0,r.jsx)("ul",{className:a().list,children:t.map((function(e){return(0,r.jsxs)("li",{className:o()(a().entry,e.id===n&&a().active),children:[(0,r.jsx)("a",{href:"#".concat(e.id),children:e.text}),e.children.length>0&&(0,r.jsx)(l,{activeId:n,nodes:e.children})]},e.id)}))})}var d=t(3197),h=t.n(d);function u(e,n){var t=(0,i.useRef)({});(0,i.useEffect)((function(){var r=new IntersectionObserver((function(n){return function(e,n,t){var r=!0,i=!1,s=void 0;try{for(var o,c=n[Symbol.iterator]();!(r=(o=c.next()).done);r=!0){var a=o.value;e.current[a.target.id]=a}}catch(d){i=!0,s=d}finally{try{r||null==c.return||c.return()}finally{if(i)throw s}}var l=Object.values(e.current).filter((function(e){return e.isIntersecting}));l.length>0&&t(l[0].target.id)}(t,n,e)}),{rootMargin:"75px 0px 0px 0px"});return function(e,n){var t=!0,r=!1,i=void 0;try{for(var s,o=n[Symbol.iterator]();!(t=(s=o.next()).done);t=!0){var c=s.value;e.observe(c)}}catch(a){r=!0,i=a}finally{try{t||null==o.return||o.return()}finally{if(r)throw i}}}(r,n),function(){return r.disconnect()}}),[e,n])}var g=/^H([1-6])$/;function f(e){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,t=[],r=0;r<e.length;r++){var i=e[r],s=i.tagName,o=i.innerText,c=i.id,a=g.exec(s);if(a){var l=parseInt(a[1]),d={children:[],id:c,text:o};if(l<n)return t;l===n&&(d.children=f(e.slice(r+1),n+1),t.push(d))}}return t}function m(e){return(0,i.useMemo)((function(){return f(e)}),[e])}function p(e){var n,t=e.children,s=(0,i.useState)(),o=s[0],c=s[1],a=(n=o,(0,i.useMemo)((function(){return n?Array.from(document.querySelectorAll("h1, h2, h3, h4, h5, h6")):[]}),[n])),d=(0,i.useState)(),g=d[0],f=d[1],p=m(a);return u(f,a),(0,r.jsxs)("div",{className:h().container,children:[(0,r.jsx)("div",{className:h().content,ref:function(e){return c(e)},children:t}),(0,r.jsx)("nav",{className:h().toc,"aria-label":"Table of contents",children:(0,r.jsx)(l,{activeId:g,nodes:p})})]})}var x=t(9100),j=t(1151),v=t(3483),y=t(4441);function T(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function b(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function N(e){var n=e.className,t=e.children,i=b(e,["className","children"]),s=/language-(\w+)/.exec(n||"");return s?(0,r.jsx)(v.Z,{style:y.Z,language:s[1],children:t}):(0,r.jsx)("code",function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){T(e,n,t[n])}))}return e}({},i,{children:t}))}var w=t(687),_=t.n(w);function E(e){var n=e.children,t=e.meta;return(0,r.jsx)(x.Z,{children:(0,r.jsxs)(p,{children:[(null===t||void 0===t?void 0:t.title)&&(0,r.jsx)("h1",{className:_().title,children:t.title}),(0,r.jsx)(j.Zo,{components:{code:N},children:n})]})})}},9100:function(e,n,t){"use strict";t.d(n,{Z:function(){return h}});var r=t(5893),i=(t(7294),t(1664)),s=t(4184),o=t.n(s),c=t(3219),a=t.n(c),l=t(1163),d=[{link:"/",text:"Home"},{link:"/about",text:"About"},{link:"/projects",text:"Projects"}];function h(e){var n=e.children,t=(0,l.useRouter)().asPath;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("nav",{className:a().nav,children:d.map((function(e){return(0,r.jsx)(i.default,{href:e.link,children:(0,r.jsx)("a",{className:o()(t===e.link&&a().active),children:e.text})},e.link)}))}),(0,r.jsx)("main",{children:n})]})}},391:function(e,n,t){"use strict";t.r(n),t.d(n,{meta:function(){return o}});var r=t(5893),i=t(1151),s=t(5098),o={title:"Table of contents"},c=function(e){var n=e.children;return(0,r.jsx)(s.Z,{meta:o,children:n})};n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=function(){var n=Object.assign({p:"p",strong:"strong",h1:"h1",pre:"pre",code:"code",h2:"h2"},(0,i.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:['I wanted to display a list of all headings on my page. This is commonly known as a "table of contents".\nAfter looking around online, I found an algorithm that was able to generate a TOC (',(0,r.jsx)(n.strong,{children:"t"}),"able ",(0,r.jsx)(n.strong,{children:"o"}),"f ",(0,r.jsx)(n.strong,{children:"c"}),"ontents) from a list of headings. Although only up to two levels deep. So H1s and H2s."]}),"\n",(0,r.jsx)(n.h1,{id:"old-algorithm",children:"Old algorithm"}),"\n",(0,r.jsx)(n.p,{children:"I don't remember where I got the idea from, but here is the code. It's more for completeness sake anyway."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:'function generateHeadingsTreeFrom(\n    headingElements: HTMLHeadingElement[],\n): Heading[] {\n    const headings: Heading[] = [];\n\n    for (const headingElement of headingElements) {\n        const { innerText: text, id, nodeName } = headingElement;\n        const heading: Heading = { children: [], id, text };\n\n        if (nodeName === "H1") {\n            headings.push(heading);\n        } else if (nodeName === "H2" && headings.length > 0) {\n            headings[headings.length - 1].children.push(heading);\n        }\n    }\n\n    return headings;\n}\n'})}),"\n",(0,r.jsx)(n.h1,{id:"setup",children:"Setup"}),"\n",(0,r.jsx)(n.p,{children:"I wanted to create an algorithm that can handle any depth. Let's go through my thought process on how to create this."}),"\n",(0,r.jsx)(n.p,{children:"First, this is the code I use to get my heading elements:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:'const headings = Array.from(\n    document.querySelectorAll("h1, h2, h3, h4, h5, h6"),\n) as HTMLHeadingElement[]; // I\'m using typescript btw :)\n\nconst tocTree = createTocTreeFrom(headings); // This is the function to implement.\n'})}),"\n",(0,r.jsx)(n.h1,{id:"toctreenode",children:(0,r.jsx)(n.code,{children:"TocTreeNode"})}),"\n",(0,r.jsxs)(n.p,{children:["Here is the ",(0,r.jsx)(n.code,{children:"TocTreeNode"})," definition:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"interface TocTreeNode {\n    text: string;\n    children: TocTreeNode[];\n}\n"})}),"\n",(0,r.jsx)(n.h1,{id:"new-any-depth-toc",children:'New "any depth" toc'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"function createTocTreeFrom(headings: HTMLHeadingElement[]): TocTreeNode[] {\n    const nodes: TocTreeNode[] = [];\n\n    for (const { tagName, innerText: text } of headings) {\n        const matches = HEADING_TAG_REGEX.exec(tagName);\n\n        if (!matches) {\n            continue;\n        }\n\n        const headingLvl = parseInt(matches[1]);\n\n        if (headingLvl !== 1) {\n            continue;\n        }\n\n        nodes.push({ children: [], text });\n    }\n\n    return nodes;\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The code above returns a simple list of all H1 elements.\nSo let's step it up a notch. First, add an additional parameter ",(0,r.jsx)(n.code,{children:"desiredLvl"}),",  so what we look for can be customized."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"function createTocTreeFrom(\n    headings: HTMLHeadingElement[],\n    desiredLvl: number,\n): TocTreeNode[] {\n    // ....\n\n    if (headingLvl !== desiredLvl) {\n        continue;\n    }\n\n    // ...\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Let's add depth to it, by actually providing something for the ",(0,r.jsx)(n.code,{children:"children"})," attribute.  For now, let's just call the function recursively, but one level deeper, so ",(0,r.jsx)(n.code,{children:"desiredLvl + 1"}),". We also want to not include previous elements, as otherwise, we would loop indefinitely."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"function createTocTreeFrom(\n    headings: HTMLHeadingElement[],\n    desiredLvl: number,\n): TocTreeNode[] {\n    const nodes: TocTreeNode[] = [];\n\n    for (let i = 0; i < headings.length; i++) {\n        const { tagName, innerText: text } = headings[i];\n        const matches = HEADING_TAG_REGEX.exec(tagName);\n\n        if (!matches) {\n            continue;\n        }\n\n        const headingLvl = parseInt(matches[1]);\n\n        if (headingLvl !== desiredLvl) {\n            continue;\n        }\n\n        const children = createTocTreeFrom(headings.slice(i + 1), desiredLvl + 1);\n\n        nodes.push({ children, text });\n    }\n\n    return nodes;\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"But this algorithm is flawed. Consider the following headings:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:"<h1>1</h1>\n<h2>1.1</h2>\n<h1>2</h1>\n<h2>2.1</h2>\n"})}),"\n",(0,r.jsx)(n.p,{children:"The output would be:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"- 1\n  children:\n    - 1.1\n    - 2.1\n- 2\n  children:\n    - 2.1\n"})}),"\n",(0,r.jsxs)(n.p,{children:["As you can see, the heading ",(0,r.jsx)(n.strong,{children:"2.1"})," is listed under the heading ",(0,r.jsx)(n.strong,{children:"1"}),", which is quite incorrect. This happens because we never considered the hierarchy of the headings, and just added all smaller headings to the bigger ones."]}),"\n",(0,r.jsx)(n.p,{children:"Luckily, this is a relatively simple fix. Instead of just checking if the heading has the desired level and then adding it, we now also check if the heading is actually bigger than the current one. If it's bigger, all the next elements are of no concern to us, so we can simply return from the function."}),"\n",(0,r.jsx)(n.p,{children:"This final algorithm is:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"function createTocTreeFrom(\n    headings: HTMLHeadingElement[],\n    desiredLvl: number,\n): TocTreeNode[] {\n    const nodes: TocTreeNode[] = [];\n\n    for (let i = 0; i < headings.length; i++) {\n        const { tagName, innerText: text } = headings[i];\n        const matches = HEADING_TAG_REGEX.exec(tagName);\n\n        if (!matches) {\n            continue;\n        }\n\n        const headingLvl = parseInt(matches[1]);\n        const node: TocTreeNode = { children: [], text };\n\n        if (headingLvl < desiredLvl) {\n            return nodes;\n        }\n\n        if (headingLvl === desiredLvl) {\n            node.children = createTocTreeFrom(headings.slice(i + 1), desiredLvl + 1);\n            nodes.push(node);\n        }\n    }\n\n    return nodes;\n}\n"})}),"\n",(0,r.jsx)(n.h1,{id:"how-to-display-the-toc",children:"How to display the toc"}),"\n",(0,r.jsx)(n.h2,{id:"plain-javascript--typescript",children:"Plain JavaScript / Typescript"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:'function displayToc(entries: TocTreeNode[]): HTMLElement {\n    const listElm = document.createElement("ul");\n    listElm.style.marginLeft = "1em";\n\n    for (const entry of entries) {\n        const entryElm = document.createElement("li");\n        entryElm.append(entry.text);\n\n        if (entry.children.length > 0) {\n            entryElm.appendChild(displayToc(entry.children));\n        }\n\n        listElm.appendChild(entryElm);\n    }\n\n    return listElm;\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"react",children:"React"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'function TableOfContents({ nodes }: TableOfContentsProps): ReactElement {\n    return (\n        <ul style={{ marginLeft: "1em" }}>\n            {nodes.map((node) => (\n                <>\n                    <li>{node.text}</li>\n                    {node.children && <TableOfContents nodes={node.children} />}\n                </>\n            ))}\n        </ul>\n    );\n}\n'})})]})};return c?(0,r.jsx)(c,Object.assign({},e,{children:(0,r.jsx)(n,{})})):n()}},7331:function(e){e.exports={list:"tableOfContents_list__b8d6s",entry:"tableOfContents_entry__IfVwq",active:"tableOfContents_active__c_CsF"}},687:function(e){e.exports={title:"mdxPageLayout_title__J15LR"}},3219:function(e){e.exports={nav:"navBarLayout_nav__yApjk",active:"navBarLayout_active__WaOWi"}},3197:function(e){e.exports={container:"tableOfContentsLayout_container__EzUwh",toc:"tableOfContentsLayout_toc__ZjzLh",content:"tableOfContentsLayout_content__KYkIj"}}},function(e){e.O(0,[685,338,774,888,179],(function(){return n=440,e(e.s=n);var n}));var n=e.O();_N_E=n}]);