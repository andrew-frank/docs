(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{103:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),o=(n(0),n(163)),i={title:"Overview",slug:"/ui-keyring"},c={unversionedId:"ui-keyring/intro",id:"ui-keyring/intro",isDocsHomePage:!1,title:"Overview",description:"The @polkadot/ui-keyring package provides a wrapper around the @polkadot/keyring package, specifically for use in browser environments. The ui-keyring only extends the keyring, but does not replace it. All underlying account management functions are provided by the base keyring, the browser-specific extensions allows for transparent management of account state in storage.",source:"@site/docs/ui-keyring/intro.md",slug:"/ui-keyring",permalink:"/docs/ui-keyring",editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/ui-keyring/intro.md",version:"current",sidebar:"reference",previous:{title:"Vue",permalink:"/docs/ui-identicon/vue"},next:{title:"Overview",permalink:"/docs/ui-keyring/start"}},s=[],p={rightToc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.a)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.a)("p",null,"The ",Object(o.a)("a",Object(r.a)({parentName:"p"},{href:"https://www.npmjs.com/package/@polkadot/ui-keyring"}),"@polkadot/ui-keyring")," package provides a wrapper around the ",Object(o.a)("a",Object(r.a)({parentName:"p"},{href:"https://www.npmjs.com/package/@polkadot/keyring"}),"@polkadot/keyring")," package, specifically for use in browser environments. The ",Object(o.a)("inlineCode",{parentName:"p"},"ui-keyring")," only extends the ",Object(o.a)("inlineCode",{parentName:"p"},"keyring"),", but does not replace it. All underlying account management functions are provided by the base keyring, the browser-specific extensions allows for transparent management of account state in storage."),Object(o.a)("p",null,"Additionally where the base keyring is focussed on accounts, the ",Object(o.a)("inlineCode",{parentName:"p"},"ui-keyring")," extends this to cater for an address-book, contracts and allows for accounts to be tied to a specific chain. Since UIs are typically split into different parts, it also allows for subscriptions on accounts, so notifications are available when accounts are added or removed."),Object(o.a)("p",null,"To get started, follow the ",Object(o.a)("a",Object(r.a)({parentName:"p"},{href:"/docs/ui-keyring/start"}),"getting started")," journey for installation and use."))}u.isMDXComponent=!0},163:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),f=r,y=d["".concat(i,".").concat(f)]||d[f]||l[f]||o;return n?a.a.createElement(y,c(c({ref:t},p),{},{components:n})):a.a.createElement(y,c({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);