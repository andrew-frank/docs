(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{163:function(e,n,t){"use strict";t.d(n,"a",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),p=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),b=p(t),m=r,f=b["".concat(i,".").concat(m)]||b[m]||l[m]||o;return t?a.a.createElement(f,s(s({ref:n},u),{},{components:t})):a.a.createElement(f,s({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=b;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=t[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},72:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return p}));var r=t(2),a=t(6),o=(t(0),t(163)),i={title:"Unsubscribe from listening to updates"},s={unversionedId:"api/examples/promise/unsubscribe",id:"api/examples/promise/unsubscribe",isDocsHomePage:!1,title:"Unsubscribe from listening to updates",description:"This example shows how to subscribe to and later unsubscribe from listening to block updates.",source:"@site/docs/api/examples/promise/unsubscribe.md",slug:"/api/examples/promise/unsubscribe",permalink:"/docs/api/examples/promise/unsubscribe",editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/api/examples/promise/unsubscribe.md",version:"current",sidebar:"reference",previous:{title:"Listen to balance changes",permalink:"/docs/api/examples/promise/listen-to-balance-change"},next:{title:"Read storage",permalink:"/docs/api/examples/promise/read-storage"}},c=[],u={rightToc:c};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.a)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(o.a)("p",null,"This example shows how to subscribe to and later unsubscribe from listening to block updates."),Object(o.a)("p",null,"In this example we're calling the built-in unsubscribe() function after a timeOut of 20s to cleanup and unsubscribe from listening to updates."),Object(o.a)("pre",null,Object(o.a)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"// Import the API\nconst { ApiPromise } = require('@polkadot/api');\n\nasync function main () {\n  // Create a new instance of the api\n  const api = await ApiPromise.create();\n\n  // Subscribe to chain updates and log the current block number on update.\n  const unsubscribe = await api.rpc.chain.subscribeNewHeads((header) => {\n    console.log(`Chain is at block: #${header.number}`);\n  });\n\n  // In this example we're calling the unsubscribe() function that is being\n  // returned by the api call function after 20s.\n  setTimeout(() => {\n    unsubscribe();\n    console.log('Unsubscribed');\n  }, 20000);\n}\n\nmain().catch(console.error);\n")))}p.isMDXComponent=!0}}]);