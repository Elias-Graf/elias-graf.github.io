(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[427],{4998:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/lazyjson",function(){return t(5861)}])},5098:function(e,n,t){"use strict";t.d(n,{Z:function(){return N}});var r=t(5893),o=t(7294),i=t(4184),s=t.n(i),a=t(7331),l=t.n(a);function c(e){var n=e.activeId,t=e.nodes;return(0,r.jsx)("ul",{className:l().list,children:t.map((function(e){return(0,r.jsxs)("li",{className:s()(l().entry,e.id===n&&l().active),children:[(0,r.jsx)("a",{href:"#".concat(e.id),children:e.text}),e.children.length>0&&(0,r.jsx)(c,{activeId:n,nodes:e.children})]},e.id)}))})}var d=t(3197),u=t.n(d);function h(e,n){var t=(0,o.useRef)({});(0,o.useEffect)((function(){var r=new IntersectionObserver((function(n){return function(e,n,t){var r=!0,o=!1,i=void 0;try{for(var s,a=n[Symbol.iterator]();!(r=(s=a.next()).done);r=!0){var l=s.value;e.current[l.target.id]=l}}catch(d){o=!0,i=d}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}var c=Object.values(e.current).filter((function(e){return e.isIntersecting}));c.length>0&&t(c[0].target.id)}(t,n,e)}),{rootMargin:"75px 0px 0px 0px"});return function(e,n){var t=!0,r=!1,o=void 0;try{for(var i,s=n[Symbol.iterator]();!(t=(i=s.next()).done);t=!0){var a=i.value;e.observe(a)}}catch(l){r=!0,o=l}finally{try{t||null==s.return||s.return()}finally{if(r)throw o}}}(r,n),function(){return r.disconnect()}}),[e,n])}var m=/^H([1-6])$/;function p(e){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,t=[],r=0;r<e.length;r++){var o=e[r],i=o.tagName,s=o.innerText,a=o.id,l=m.exec(i);if(l){var c=parseInt(l[1]),d={children:[],id:a,text:s};if(c<n)return t;c===n&&(d.children=p(e.slice(r+1),n+1),t.push(d))}}return t}function f(e){return(0,o.useMemo)((function(){return p(e)}),[e])}function x(e){var n,t=e.children,i=(0,o.useState)(),s=i[0],a=i[1],l=(n=s,(0,o.useMemo)((function(){return n?Array.from(document.querySelectorAll("h1, h2, h3, h4, h5, h6")):[]}),[n])),d=(0,o.useState)(),m=d[0],p=d[1],x=f(l);return h(p,l),(0,r.jsxs)("div",{className:u().container,children:[(0,r.jsx)("div",{className:u().content,ref:function(e){return a(e)},children:t}),(0,r.jsx)("nav",{className:u().toc,"aria-label":"Table of contents",children:(0,r.jsx)(c,{activeId:m,nodes:x})})]})}var g=t(9100),j=t(1151),b=t(3483),y=t(4441);function w(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function v(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function k(e){var n=e.className,t=e.children,o=v(e,["className","children"]),i=/language-(\w+)/.exec(n||"");return i?(0,r.jsx)(b.Z,{style:y.Z,language:i[1],children:t}):(0,r.jsx)("code",function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){w(e,n,t[n])}))}return e}({},o,{children:t}))}var _=t(687),I=t.n(_);function N(e){var n=e.children,t=e.meta;return(0,r.jsx)(g.Z,{children:(0,r.jsxs)(x,{children:[(null===t||void 0===t?void 0:t.title)&&(0,r.jsx)("h1",{className:I().title,children:t.title}),(0,r.jsx)(j.Zo,{components:{code:k},children:n})]})})}},9100:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});var r=t(5893),o=(t(7294),t(1664)),i=t(4184),s=t.n(i),a=t(3219),l=t.n(a),c=t(1163),d=[{link:"/",text:"Home"},{link:"/about",text:"About"},{link:"/projects",text:"Projects"}];function u(e){var n=e.children,t=(0,c.useRouter)().asPath;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("nav",{className:l().nav,children:d.map((function(e){return(0,r.jsx)(o.default,{href:e.link,children:(0,r.jsx)("a",{className:s()(t===e.link&&l().active),children:e.text})},e.link)}))}),(0,r.jsx)("main",{children:n})]})}},5861:function(e,n,t){"use strict";t.r(n),t.d(n,{meta:function(){return s}});var r=t(5893),o=t(1151),i=t(5098),s={title:"Lazyjson"},a=function(e){var n=e.children;return(0,r.jsx)(i.Z,{meta:s,children:n})};n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=function(){var n=Object.assign({p:"p",a:"a",h1:"h1",pre:"pre",code:"code",h2:"h2",h3:"h3",em:"em"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Given my nature, I like to continuously improve my skills. And a great way to do that is to learn how existing things are created. That's why one day I decided, I wanted to understand parsers. It always fascinated me, how the meaning of something so complicated like a (programming) language could be parsed, and transformed into something different. For example a compiler, or an interpreter. I didn't want to create a complete programming language. That would have taken way too much time to get anything useful out of it. So I decided to try and create a JSON parser.\nI re-wrote the parser multiple times, even in several languages. First, I used TypeScript, simply because that's what I knew best. After writing a first, rudimentary implementation, I refactored the code a couple of times, until I decided, I wanted to try out Go. So I started writing it in Go, and I recently learned about WebAssembly, so I tried compiling it to that. After a couple of issues, I left the project on the side for some time. But then I learned about another language that could be compiled into WebAssembly. Additionally, I keep hearing good things about this language, supposedly, It's even going to be inside the Linux kernel. So I chose to re-write again. This time in rust."}),"\n",(0,r.jsxs)(n.p,{children:["If you don't care about the details, just head over the ",(0,r.jsx)(n.a,{href:"/demos/lazyjson",children:"interactive demo"}),"! Otherwise, read on."]}),"\n",(0,r.jsx)(n.p,{children:"The parser consists of two main components, the tokenizer, and the tree builder."}),"\n",(0,r.jsx)(n.h1,{id:"tokenizer",children:"Tokenizer"}),"\n",(0,r.jsx)(n.p,{children:'The tokenizer is responsible for figuring out what each part of the text is. Just simple checks, for example: "Is this a number", "is this a comma", "is this whitespace", and so on.'}),"\n",(0,r.jsxs)(n.p,{children:["This step is called tokenization or often ",(0,r.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Lexical_analysis",children:"lexical analysis"}),"."]}),"\n",(0,r.jsx)(n.p,{children:'I implemented each "consumer" in its own, separate function. A consumer in my context just takes the input, and checks if it can identify the contents, for example, here is my operator consumer:'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"pub fn operator_consumer(inp: &mut CharQueue) -> Result<Option<Token>, TokenizationErr> {\n    let c = inp.peek().ok_or(TokenizationErr::new_out_of_bounds())?;\n\n    let tok = match c {\n        ':' => Token::new_json_assignment_op(inp.idx()),\n        '=' => Token::new_equal_assignment_op(inp.idx()),\n        _ => return Ok(None),\n    };\n\n    inp.advance_by(1);\n\n    Ok(Some(tok))\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"As you can see, well at least if you know rust a little bit, this function can return either an error or an optional token."}),"\n",(0,r.jsxs)(n.p,{children:["Then, in the main tokenization function, all of the consumers are combined. It loops over every one of them. If a function returns a token, we can move on to the next piece of text. If it returns ",(0,r.jsx)(n.code,{children:"None"}),", the text was not identified as consumable by this consumer, and we can check it with the next one."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"pub fn tokenize(inp: &str, config: &Config) -> Result<Vec<Token>, TokenizationErr> {\n    if inp.is_empty() {\n        return Err(TokenizationErr::new_no_inp());\n    }\n\n    let consumers: &[&Consumer] = &[\n        &line_comment_consumer,\n        &whitespace_consumer,\n        &delimiter_consumer,\n        &keyword_literal_consumer,\n        &number_literal_consumer,\n        &operator_consumer,\n        &separator_consumer,\n        &string_literal_consumer,\n    ];\n\n    let mut queue = CharQueue::new(inp);\n    let mut toks = Vec::new();\n\n    'o: while queue.has_remaining() {\n        for consumer in consumers {\n            let tok = consumer(&mut queue)?;\n\n            if let Some(tok) = tok {\n                // Omit unnecessary whitespace tokens\n                if tok.typ == TokenType::WhitespaceLiteral {\n                    continue 'o;\n                }\n\n                // Line comments are currently not supported by the treebuilder.\n                // So if they are allowed, we omitted them, and otherwise throw an\n                // error.\n                if tok.typ == TokenType::LineComment {\n                    if config.allow_line_comments {\n                        continue 'o;\n                    }\n\n                    return Err(TokenizationErr::new_line_comments_not_allowed(\n                        tok.from, tok.to,\n                    ));\n                }\n\n                toks.push(tok);\n                continue 'o;\n            }\n        }\n\n        panic!(\"{:?} was not consumed\", queue.peek());\n    }\n\n    Ok(toks)\n}\n"})}),"\n",(0,r.jsx)(n.h1,{id:"tree-builder",children:"Tree builder"}),"\n",(0,r.jsxs)(n.p,{children:["After obtaining a list of tokens, the tree builder can now check for valid patterns, for example: ",(0,r.jsx)(n.code,{children:"["}),", ",(0,r.jsx)(n.code,{children:"false"}),", ",(0,r.jsx)(n.code,{children:"]"}),", and build a tree of nodes out of it. The mentioned example would result in the following node structure: ",(0,r.jsx)(n.code,{children:"ArrayNode"})," -> ",(0,r.jsx)(n.code,{children:"entries"})," -> ",(0,r.jsx)(n.code,{children:"BoolNode"})," -> ",(0,r.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"The tree builder works fundamentally in the same way as the tokenizer. It combines a set of consumers, and checks if they could consume a given token composition."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"pub fn number_consumer(\n    inp: &mut Queue<Token>,\n    _: &Rc<VarDict>,\n    _: &Config,\n) -> Result<Option<Node>, TreebuilderErr> {\n    if t.typ != TokenType::NumberLiteral {\n        return Ok(None);\n    }\n\n    let i = inp.idx();\n    let t = inp.next().unwrap();\n\n    Ok(Some(NumberNode::new(i, t.val.clone()).into()))\n}\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'/// Consumes all possible forms of "value constellations". For example simple\n/// numbers (`1`), or arrays (`[1, 2]`), and so on. This consumer combines other\n/// "sub-consumers" to achieve this behavior.\npub fn value_consumer(\n    toks: &mut Peekable<TokenIndices>,\n    var_dict: &Rc<VarDict>,\n    config: &Config,\n) -> Result<Option<Node>, TreebuilderErr> {\n    let consumers: &[&Consumer] = &[\n        &array_consumer,\n        &keyword_consumer,\n        &variable_usage_consumer,\n        &number_consumer,\n        &object_consumer,\n        &string_consumer,\n    ];\n\n    for consumer in consumers {\n        let res = consumer(toks, var_dict, config)?;\n\n        if res.is_some() {\n            return Ok(res);\n        }\n    }\n\n    Ok(None)\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:'So this is the basic functionality of a JSON parser complete. But I wanted to add some of my own features. Mostly "fixing" things I always found to be annoying about the JSON format.'}),"\n",(0,r.jsx)(n.h1,{id:"trailing-commas",children:"Trailing commas"}),"\n",(0,r.jsx)(n.p,{children:"The JSON format does not permit having trailing commas, this can be most annoying when moving entries around. I've also seen that another argument for trailing comma that I've read, is that to add an entry, you would need the add the entry itself, and a comma on the previous line. In source control, this will show up as a two-line change, which it isn't."}),"\n",(0,r.jsx)(n.p,{children:"So I went and added a config, as I wanted to be able to turn this feature on and off. And started checking for trailing commas:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"consume_val_sep(inp)?;\n\n// Check if the next token is an object close, if yes, we have a trailing\n// separator.\nif consume_obj_cls(inp, opn_i)? {\n    if !config.allow_trailing_commas {\n        return Err(TreebuilderErr::new_trailing_sep(inp.idx() - 2));\n    }\n\n    return Ok(Some(ObjectNode::new(opn_i, inp.idx(), entries).into()));\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"I also added a custom error message for it, so when the option is disabled (no trailing commas allowed), the following will appear:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:'expected the next value or close (trailing separator not allowed), line: 1, char: 14\n\n{"foo": "bar",}\n             ^\n'})}),"\n",(0,r.jsx)(n.p,{children:"Speaking of error messages, I spend quite a lot of time making them as useful as possible."}),"\n",(0,r.jsx)(n.h1,{id:"error-messages",children:"Error messages"}),"\n",(0,r.jsx)(n.p,{children:"The parser was designed to tell the user what went wrong. For me, this was important, as I often found the error messages of the JavaScript JSON parser quite useless."}),"\n",(0,r.jsx)(n.h2,{id:"lets-look-at-a-few-error-messages",children:"Let's look at a few error messages"}),"\n",(0,r.jsxs)(n.h3,{id:"missing--inside-an-array",children:["Missing ",(0,r.jsx)(n.code,{children:","})," inside an array"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"expected a `,` but received a `KeywordLiteral`, line: 1, char: 8\n\n[false true]\n       ^^^^\n"})}),"\n",(0,r.jsx)(n.h3,{id:"missing-quotes-around-an-object-key",children:"Missing quotes around an object key"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"(to be fair, this one isn't all that obvious, but still, it marks what is wrong)"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:'expected a `StringLiteral` but received a `KeywordLiteral`, line: 1, char: 2\n\n{key: "val"}\n ^^^\n'})}),"\n",(0,r.jsx)(n.h3,{id:"forgot-to-close-the-object",children:"Forgot to close the object"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:'object was not terminated, line: 1, char: 1\n\n{"foo": "bar"\n^\n'})}),"\n",(0,r.jsx)(n.p,{children:"Next up: line comments."}),"\n",(0,r.jsx)(n.h1,{id:"line-comments",children:"Line comments"}),"\n",(0,r.jsx)(n.p,{children:"Provided the correct flag is set to true, the parser supports line comments. Well, the tokenizer just ignores them.\nIf the flag is not set, the output will be:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"line comments not allowed\n"})}),"\n",(0,r.jsx)(n.h1,{id:"emitting",children:"Emitting"}),"\n",(0,r.jsx)(n.p,{children:"Given that I have a complete tree of nodes, I implemented the opposite of parsing, emitting! I've implemented this somewhat limited. The emitter is not configurable at all, but that wasn't its purpose anyway. I mainly implemented it, so that one can see some sort of output, instead of just \"parsed successfully\". Also, the next feature would be hard to demonstrate without this."}),"\n",(0,r.jsx)(n.p,{children:"So let's look at the maybe biggest feature I added to JSON."}),"\n",(0,r.jsx)(n.h1,{id:"variables",children:"Variables"}),"\n",(0,r.jsx)(n.p,{children:"Yep, I added variables. Nothing really to say about this, except that they can be defined inside container nodes (arrays, and objects), and the scope of them is bound to the node it is defined in.\nLet's jump into some examples:"}),"\n",(0,r.jsx)(n.p,{children:"This is a valid variable declaration:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"{let foo = 10}\n"})}),"\n",(0,r.jsx)(n.p,{children:"And would simply output:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:"{}\n"})}),"\n",(0,r.jsx)(n.p,{children:"Actually using the variable:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:'{\n    let foo = "bar",\n    "foobar": foo\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"The output:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    "foobar": "bar"\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"Nested variables are supported as well:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:'{\n    let port = 3000,\n    let apiArgs = ["run", port],\n    let webArgs = ["bind", port],\n    "services": {\n        "api": apiArgs,\n        "web": webArgs\n    }\n}\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    "services": {\n        "api": [\n            "run",\n            3000\n        ],\n        "web": [\n            "bind",\n            3000\n        ]\n    }\n}\n'})}),"\n",(0,r.jsx)(n.h1,{id:"conclusion",children:"Conclusion"}),"\n",(0,r.jsxs)(n.p,{children:["This is, like all the others, a learning project, and not intended to be ",(0,r.jsx)(n.em,{children:"actually"})," used. There are some bugs, some errors, and definitely some improvements that could be made. But if you made it this far, definitely check out the ",(0,r.jsx)(n.a,{href:"/demos/lazyjson",children:"demo"}),"!"]})]})};return a?(0,r.jsx)(a,Object.assign({},e,{children:(0,r.jsx)(n,{})})):n()}},7331:function(e){e.exports={list:"tableOfContents_list__b8d6s",entry:"tableOfContents_entry__IfVwq",active:"tableOfContents_active__c_CsF"}},687:function(e){e.exports={title:"mdxPageLayout_title__J15LR"}},3219:function(e){e.exports={nav:"navBarLayout_nav__yApjk",active:"navBarLayout_active__WaOWi"}},3197:function(e){e.exports={container:"tableOfContentsLayout_container__EzUwh",toc:"tableOfContentsLayout_toc__ZjzLh",content:"tableOfContentsLayout_content__KYkIj"}}},function(e){e.O(0,[685,338,774,888,179],(function(){return n=4998,e(e.s=n);var n}));var n=e.O();_N_E=n}]);