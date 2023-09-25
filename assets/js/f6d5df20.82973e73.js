"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4714],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=u(n),s=a,f=c["".concat(p,".").concat(s)]||c[s]||m[s]||o;return n?r.createElement(f,l(l({ref:t},d),{},{components:n})):r.createElement(f,l({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},9621:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={title:"Community Examples"},l=void 0,i={unversionedId:"hardware/community",id:"hardware/community",title:"Community Examples",description:"Add your own example",source:"@site/docs/hardware/community.md",sourceDirName:"hardware",slug:"/hardware/community",permalink:"/hardware/community",draft:!1,editUrl:"https://github.com/janhq/jan/tree/main/docs/docs/hardware/community.md",tags:[],version:"current",lastUpdatedBy:"hiento09",lastUpdatedAt:1695640673,formattedLastUpdatedAt:"Sep 25, 2023",frontMatter:{title:"Community Examples"},sidebar:"hardwareSidebar",previous:{title:"Power Supply",permalink:"/hardware/concepts/power"},next:{title:"@dan-jan: 3090 Desktop",permalink:"/hardware/examples/3090x1-@dan-jan"}},p={},u=[{value:"Add your own example",id:"add-your-own-example",level:2},{value:"File and Title Convention",id:"file-and-title-convention",level:3},{value:"Content",id:"content",level:3},{value:"Affiliate Links",id:"affiliate-links",level:2},{value:"Longer-Term",id:"longer-term",level:2}],d={toc:u},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"add-your-own-example"},"Add your own example"),(0,a.kt)("p",null,"Add your own examples to this page by creating a new file in the ",(0,a.kt)("inlineCode",{parentName:"p"},"docs/docs/hardware/examples")," directory. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"docs\n\u2514\u2500\u2500 docs\n    \u2514\u2500\u2500 hardware\n        \u2514\u2500\u2500 examples\n            \u2514\u2500\u2500 3090x1-%40dan-jan.md\n            \u2514\u2500\u2500 3090x1-%40dan-jan.md\n            // highlight-next-line\n            \u2514\u2500\u2500 <YOUR_BUILD_HERE>.md\n")),(0,a.kt)("h3",{id:"file-and-title-convention"},"File and Title Convention"),(0,a.kt)("p",null,"We use a specific naming convention for the file name. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# Filename\n<hardware-type><quantity>-<username>.md\n3090x1-@dan-jan.md # Example\n\n# Title\n---\ntitle: <@github_username>: <hardware_x_quantity> <form-factor>\ntitle: @dan-jan: 3090 Desktop # Example\n---\n")),(0,a.kt)("h3",{id:"content"},"Content"),(0,a.kt)("p",null,"We highly recommend you include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Photos of your build"),(0,a.kt)("li",{parentName:"ul"},"List of the components (e.g. ",(0,a.kt)("a",{parentName:"li",href:"https://pcpartpicker.com"},"PCPartPicker"),")"),(0,a.kt)("li",{parentName:"ul"},"Dimensions"),(0,a.kt)("li",{parentName:"ul"},"Power consumption"),(0,a.kt)("li",{parentName:"ul"},"Noise level"),(0,a.kt)("li",{parentName:"ul"},"Any stats on token generation speeds"),(0,a.kt)("li",{parentName:"ul"},"List of models you have run successfully on the build")),(0,a.kt)("h2",{id:"affiliate-links"},"Affiliate Links"),(0,a.kt)("p",null,"You are allowed to include affiliate links in your example."),(0,a.kt)("h2",{id:"longer-term"},"Longer-Term"),(0,a.kt)("p",null,"We will likely build a simple web app to make it easier to add your own examples, sort and retrieve."))}m.isMDXComponent=!0}}]);