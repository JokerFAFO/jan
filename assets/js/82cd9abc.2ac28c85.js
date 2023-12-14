"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[202],{85456:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var a=s(85893),t=s(11151);const r={title:"Threads",slug:"/specs/threads",description:"Jan is a ChatGPT-alternative that runs on your own computer, with a local API server.",keywords:["Jan AI","Jan","ChatGPT alternative","local AI","private AI","conversational AI","no-subscription fee","large language model"]},i=void 0,d={id:"specs/engineering/threads",title:"Threads",description:"Jan is a ChatGPT-alternative that runs on your own computer, with a local API server.",source:"@site/docs/specs/engineering/threads.md",sourceDirName:"specs/engineering",slug:"/specs/threads",permalink:"/specs/threads",draft:!1,unlisted:!1,editUrl:"https://github.com/janhq/jan/tree/main/docs/docs/specs/engineering/threads.md",tags:[],version:"current",lastUpdatedBy:"Faisal Amir",lastUpdatedAt:1702524780,formattedLastUpdatedAt:"Dec 14, 2023",frontMatter:{title:"Threads",slug:"/specs/threads",description:"Jan is a ChatGPT-alternative that runs on your own computer, with a local API server.",keywords:["Jan AI","Jan","ChatGPT alternative","local AI","private AI","conversational AI","no-subscription fee","large language model"]},sidebar:"specsSidebar",previous:{title:"Engine",permalink:"/specs/engine"},next:{title:"Messages",permalink:"/specs/messages"}},o={},l=[{value:"Overview",id:"overview",level:2},{value:"Folder Structure",id:"folder-structure",level:2},{value:"<code>thread.json</code>",id:"threadjson",level:2},{value:"Example",id:"example",level:3},{value:"API Reference",id:"api-reference",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.admonition,{type:"caution",children:(0,a.jsx)(n.p,{children:"This is currently under development."})}),"\n",(0,a.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"Threads"})," are conversations between an ",(0,a.jsx)(n.code,{children:"assistant"})," and the user:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Users can tweak ",(0,a.jsx)(n.code,{children:"model"})," params and ",(0,a.jsx)(n.code,{children:"assistant"})," behavior within each thread."]}),"\n",(0,a.jsx)(n.li,{children:"Users can import and export threads."}),"\n",(0,a.jsxs)(n.li,{children:["An ",(0,a.jsx)(n.a,{href:"https://platform.openai.com/docs/api-reference/threads",children:"OpenAI Thread API"})," compatible endpoint at ",(0,a.jsx)(n.code,{children:"localhost:1337/v1/threads"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"folder-structure",children:"Folder Structure"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Threads are saved in the ",(0,a.jsx)(n.code,{children:"/threads"})," folder."]}),"\n",(0,a.jsx)(n.li,{children:"Threads are organized by folders, one for each thread, and can be easily zipped, exported, and cleared."}),"\n",(0,a.jsxs)(n.li,{children:["Thread folders follow the naming: ",(0,a.jsx)(n.code,{children:"assistant_id"})," + ",(0,a.jsx)(n.code,{children:"thread_created_at"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["Thread folders also contain ",(0,a.jsx)(n.code,{children:"messages.jsonl"})," files. See ",(0,a.jsx)(n.a,{href:"/specs/messages",children:"messages"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"janroot/\n    threads/\n        assistant_name_unix_timestamp/    # Thread `ID`\n            thread.json\n"})}),"\n",(0,a.jsx)(n.h2,{id:"threadjson",children:(0,a.jsx)(n.code,{children:"thread.json"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Each ",(0,a.jsx)(n.code,{children:"thread"})," folder contains a ",(0,a.jsx)(n.code,{children:"thread.json"})," file, which is a representation of a thread."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"thread.json"})," contains metadata and model parameter overrides."]}),"\n",(0,a.jsx)(n.li,{children:"There are no required fields."}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,a.jsxs)(n.p,{children:["Here's a standard example ",(0,a.jsx)(n.code,{children:"thread.json"})," for a conversation between the user and the default Jan assistant."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'"id": "thread_....",                  // Defaults to foldername\n"object": "thread",                   // Defaults to "thread"\n"title": "funny physics joke",        // Defaults to ""\n"assistants": [\n  {\n    "assistant_id": "jan",            // Defaults to "jan"\n    "model": {                        // Defaults to the currently active model (can be changed before thread is begun)\n      "id": "...",\n      "settings": {},                 // Defaults to and overrides assistant.json\'s "settings" (and if none, then model.json "settings")\n      "parameters": {},               // Defaults to and overrides assistant.json\'s "parameters" (and if none, then model.json "parameters")\n    }\n  },\n],\n"created": 1231231                    // Defaults to file creation time\n"metadata": {},                       // Defaults to {}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"api-reference",children:"API Reference"}),"\n",(0,a.jsxs)(n.p,{children:["Jan's Threads API is compatible with ",(0,a.jsx)(n.a,{href:"https://platform.openai.com/docs/api-reference/threads",children:"OpenAI's Threads API"}),", with additional methods for managing threads locally."]}),"\n",(0,a.jsxs)(n.p,{children:["See ",(0,a.jsx)(n.a,{href:"https://jan.ai/api-reference#tag/Threads",children:"Jan Threads API"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>d,a:()=>i});var a=s(67294);const t={},r=a.createContext(t);function i(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);