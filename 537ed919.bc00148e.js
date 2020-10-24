(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{163:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var a=n(0),r=n.n(a);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),l=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),p=l(n),g=a,y=p["".concat(i,".").concat(g)]||p[g]||u[g]||s;return n?r.a.createElement(y,o(o({ref:t},c),{},{components:n})):r.a.createElement(y,o({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=p;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<s;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},90:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return l}));var a=n(2),r=n(6),s=(n(0),n(163)),i={title:"Addresses"},o={unversionedId:"ui-keyring/start/addresses",id:"ui-keyring/start/addresses",isDocsHomePage:!1,title:"Addresses",description:"As mentioned in previous sections, the keyring not only has the ability to manage accounts (i.e. keypairs), but also allows you to add addresses/contacts as well as contracts to the keyring. This is very useful in the case where you are developing a wallet and want to save external addresses to interact with.",source:"@site/docs/ui-keyring/start/addresses.md",slug:"/ui-keyring/start/addresses",permalink:"/docs/ui-keyring/start/addresses",editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/ui-keyring/start/addresses.md",version:"current",sidebar:"reference",previous:{title:"Accounts",permalink:"/docs/ui-keyring/start/accounts"},next:{title:"Loading saved pairs",permalink:"/docs/ui-keyring/start/loading"}},d=[{value:"Adding an address",id:"adding-an-address",children:[]},{value:"Removing an address",id:"removing-an-address",children:[]},{value:"Retrieving previously-saved",id:"retrieving-previously-saved",children:[]}],c={rightToc:d};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(s.a)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(s.a)("p",null,"As mentioned in previous sections, the keyring not only has the ability to manage accounts (i.e. keypairs), but also allows you to add addresses/contacts as well as contracts to the keyring. This is very useful in the case where you are developing a wallet and want to save external addresses to interact with."),Object(s.a)("p",null,"Here we will give an overview of working with addresses, the same concepts can be expanded to work with contracts."),Object(s.a)("h2",{id:"adding-an-address"},"Adding an address"),Object(s.a)("p",null,"For accounts, we have the ",Object(s.a)("inlineCode",{parentName:"p"},"addUri(...)")," endpoint that allows us to create and save an account. For addresses, we the keyring exposes ",Object(s.a)("inlineCode",{parentName:"p"},"saveAddress (address: string, meta: KeyringPair$Meta)"),", which we can use to save any address -"),Object(s.a)("pre",null,Object(s.a)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"...\n// add the address\nconst FAUCET_ADDR = 'FvnazYM5KAetYpXoVDfqt9WFcJogKbekXVJ3Fz5oW2Dv82P';\nconst json = keyring.saveAddress(FAUCET_ADDR, { name: 'Alex faucet' });\n\n// the faucet will now be in the list of available addresses\nkeyring.getAddresses().forEach(...)\n")),Object(s.a)("p",null,"From this point forward, the address is in your keyring and can be retrieved via the ",Object(s.a)("inlineCode",{parentName:"p"},"getAddresses()")," interface. The same call can be used to update the meta for the address, for instance if we wish to change the name above, we can do -"),Object(s.a)("pre",null,Object(s.a)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"...\nconst json = keyring.saveAddress(FAUCET_ADDR, { name: 'Alexander Faucet' });\n")),Object(s.a)("p",null,"And the already-saved address will be updated with the new metadata."),Object(s.a)("h2",{id:"removing-an-address"},"Removing an address"),Object(s.a)("p",null,"To clear and address and remove it from the keyring, we can use the ",Object(s.a)("inlineCode",{parentName:"p"},"forgetAddress(address: string)")," call, this mirrors the ",Object(s.a)("inlineCode",{parentName:"p"},"forgetAccount(address: string)")," and ",Object(s.a)("inlineCode",{parentName:"p"},"forgetContract(address: string)")," calls. For instance -"),Object(s.a)("pre",null,Object(s.a)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"...\n// remove the specific address\nkeyring.forgetAddress(FAUCET_ADDR);\n\n/// the faucet will not be in the list of addresses anymore\nkeyring.getAddresses().forEach(...)\n")),Object(s.a)("h2",{id:"retrieving-previously-saved"},"Retrieving previously-saved"),Object(s.a)("p",null,"With all interactions with the keyring, the information is persisted. In the next section we will take a look at ",Object(s.a)("a",Object(a.a)({parentName:"p"},{href:"/docs/ui-keyring/start/loading"}),"retrieval of saved information"),", typically done on first init."))}l.isMDXComponent=!0}}]);