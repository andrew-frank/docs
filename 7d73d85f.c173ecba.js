(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{107:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return p}));var a=t(2),r=t(6),o=(t(0),t(163)),c={title:"Listen to balance changes"},i={unversionedId:"api/examples/promise/listen-to-multiple-balances-change",id:"api/examples/promise/listen-to-multiple-balances-change",isDocsHomePage:!1,title:"Listen to balance changes",description:"This example shows how to instantiate a Polkadot API object and use it to connect to a node and retrieve balance updates.",source:"@site/docs/api/examples/promise/listen-to-multiple-balances-change.md",slug:"/api/examples/promise/listen-to-multiple-balances-change",permalink:"/docs/api/examples/promise/listen-to-multiple-balances-change",editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/api/examples/promise/listen-to-multiple-balances-change.md",version:"current"},s=[],l={rightToc:s};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.a)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.a)("p",null,"This example shows how to instantiate a Polkadot API object and use it to connect to a node and retrieve balance updates."),Object(o.a)("pre",null,Object(o.a)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// Import the API\nconst { ApiPromise } = require('@polkadot/api');\n\n// Known account we want to use (available on dev chain, with funds)\nconst ALICE = '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY';\nconst BOB = '5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty';\n\nasync function main () {\n  // Create an await for the API\n  const api = await ApiPromise.create();\n\n  console.log('Tracking balances for:', [ALICE, BOB]);\n\n  // Subscribe and listen to several balance changes\n  api.query.system.account.multi([ALICE, BOB], (balances) => {\n    console.log('Change detected, new balances: ', balances.map(({ data: { free } }) => free));\n  });\n}\n\nmain().catch(console.error);\n")))}p.isMDXComponent=!0},163:function(e,n,t){"use strict";t.d(n,"a",(function(){return b}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),p=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(t),b=a,d=m["".concat(c,".").concat(b)]||m[b]||u[b]||o;return t?r.a.createElement(d,i(i({ref:n},l),{},{components:t})):r.a.createElement(d,i({ref:n},l))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=t[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);