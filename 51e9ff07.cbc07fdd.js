(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{163:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),d=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=d(n),h=a,m=u["".concat(r,".").concat(h)]||u[h]||l[h]||o;return n?i.a.createElement(m,s(s({ref:t},c),{},{components:n})):i.a.createElement(m,s({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},87:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return d}));var a=n(2),i=n(6),o=(n(0),n(163)),r={title:"Custom RPC"},s={unversionedId:"api/start/rpc.custom",id:"api/start/rpc.custom",isDocsHomePage:!1,title:"Custom RPC",description:"In previous sections we looked at the injection of types, as in use and defined in modules from the node. Another area that can be customized is RPC definitions, and like with the types, the API provides the capability to add user-defined RPCs (in addition to the Polkadot/Substrate base) to allow use of these RPCs via the API.",source:"@site/docs/api/start/rpc.custom.md",slug:"/api/start/rpc.custom",permalink:"/docs/api/start/rpc.custom",editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/api/start/rpc.custom.md",version:"current",sidebar:"reference",previous:{title:"Extending types",permalink:"/docs/api/start/types.extend"},next:{title:"Type creation",permalink:"/docs/api/start/types.create"}},p=[{value:"Custom definitions",id:"custom-definitions",children:[]},{value:"Definition breakdown",id:"definition-breakdown",children:[]},{value:"Type creation",id:"type-creation",children:[]}],c={rightToc:p};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.a)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.a)("p",null,"In previous sections we looked at the injection of types, as in use and defined in modules from the node. Another area that can be customized is RPC definitions, and like with the types, the API provides the capability to add user-defined RPCs (in addition to the Polkadot/Substrate base) to allow use of these RPCs via the API."),Object(o.a)("h2",{id:"custom-definitions"},"Custom definitions"),Object(o.a)("p",null,"RPCs are exposed as a method on a specific module, this means that once available you can call any rpc via the ",Object(o.a)("inlineCode",{parentName:"p"},"api.rpc.<module>.<method>(...params[])")," endpoints. To extend with user-defined RPCs, the injection can happen at the time of API creation with the addition of the ",Object(o.a)("inlineCode",{parentName:"p"},"rpc")," key (in addition to any other params, such as ",Object(o.a)("inlineCode",{parentName:"p"},"types")," or ",Object(o.a)("inlineCode",{parentName:"p"},"provider"),") -"),Object(o.a)("pre",null,Object(o.a)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"...\nconst api = await ApiPromise.create({\n  rpc: {\n    firstModule: {\n      testMethod: {\n        description: 'Just a test method',\n        params: [\n          {\n            name: 'index',\n            type: 'u64'\n          },\n          {\n            name: 'at',\n            type: 'Hash',\n            isOptional: true\n          }\n        ],\n        type: 'Balance'\n      },\n      anotherMethod: { ... },\n      ...\n    },\n    anotherModule: { ... },\n    ...\n  },\n  ...\n});\n")),Object(o.a)("p",null,"In the above example we have defined a new method, which is now available on the RPCs as ",Object(o.a)("inlineCode",{parentName:"p"},"api.rpc.firstModule.testMethod(index: u64, at?: Hash) => Promise<Balance>"),". In the case of optional params, we have added the ",Object(o.a)("inlineCode",{parentName:"p"},"isOptional: true")," flag alongside the ",Object(o.a)("inlineCode",{parentName:"p"},"name")," & ",Object(o.a)("inlineCode",{parentName:"p"},"type")," in the param definition."),Object(o.a)("p",null,"Be aware that while defined, the method will only appear on the API if it is in the list as returned by ",Object(o.a)("inlineCode",{parentName:"p"},"api.rpc.rpc.methods()"),", which is the list of known RPCs the node exposes. When making changes to the node, always ensure that it does expose the RPC method correctly, otherwise it will not be decorated."),Object(o.a)("h2",{id:"definition-breakdown"},"Definition breakdown"),Object(o.a)("p",null,"While the above example should be self-explanatory, it is important to understand the structure. The ",Object(o.a)("inlineCode",{parentName:"p"},"rpc: { ... }")," definitions are keyed first and foremost by the name of the module exposing the RPC. This means that when we have 2 modules ",Object(o.a)("inlineCode",{parentName:"p"},"firstModule")," & ",Object(o.a)("inlineCode",{parentName:"p"},"testModule"),", the first-level structure would follow the following pattern,"),Object(o.a)("pre",null,Object(o.a)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"...\nconst api = await ApiPromise.create({\n  rpc: {\n    firstModule: { ... },\n    testModule: { ... }\n  }\n});\n")),Object(o.a)("p",null,"Inside the specific module definitions, the key is the actual expose RPC method. As we have seen in the first example, we expose a ",Object(o.a)("inlineCode",{parentName:"p"},"testMethod")," on ",Object(o.a)("inlineCode",{parentName:"p"},"firstModule"),". For the method definitions, apart from the description, we have definitions for the params and return a single result ",Object(o.a)("inlineCode",{parentName:"p"},"type"),"."),Object(o.a)("p",null,"Params itself, as an array, contains fields for ",Object(o.a)("inlineCode",{parentName:"p"},"name"),", ",Object(o.a)("inlineCode",{parentName:"p"},"type")," and an optional flag ",Object(o.a)("inlineCode",{parentName:"p"},"isOptional")," that indicates that the field is not required when making the call. (And example of this use would be in cases such as ",Object(o.a)("inlineCode",{parentName:"p"},"state.getStorage(key, blockHash?)")," where the last param is optional)"),Object(o.a)("h2",{id:"type-creation"},"Type creation"),Object(o.a)("p",null,"While the API always converts all the inputs into the underlying type required by the operation, be it for RPC, query or transaction, in some cases you may want to ",Object(o.a)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/start/types.create"}),"create an instance of a type")," yourself."))}d.isMDXComponent=!0}}]);