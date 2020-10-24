(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{108:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return r})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return l}));var n=a(2),i=a(6),o=(a(0),a(163)),s={title:"Extending types"},r={unversionedId:"api/start/types.extend",id:"api/start/types.extend",isDocsHomePage:!1,title:"Extending types",description:"Circling back to metadata, by default the metadata information (at this point in time), only returns the type names as they apply to any section, be it a call, event or query. As an example, this means that transfers are defined as balances.transfer(AccountId, Balance) with no details as to the mapping of the Balance type to a u128. (The underlying Polkadot/Substrate default)",source:"@site/docs/api/start/types.extend.md",slug:"/api/start/types.extend",permalink:"/docs/api/start/types.extend",editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/api/start/types.extend.md",version:"current",sidebar:"reference",previous:{title:"Type basics",permalink:"/docs/api/start/types.basics"},next:{title:"Custom RPC",permalink:"/docs/api/start/rpc.custom"}},c=[{value:"Extension",id:"extension",children:[]},{value:"Field ordering",id:"field-ordering",children:[]},{value:"User-defined structs",id:"user-defined-structs",children:[]},{value:"Definition clashes",id:"definition-clashes",children:[]},{value:"User-defined enum",id:"user-defined-enum",children:[]},{value:"Node and chain-specific types",id:"node-and-chain-specific-types",children:[]},{value:"Impact on extrinsics",id:"impact-on-extrinsics",children:[]},{value:"Custom RPC",id:"custom-rpc",children:[]}],p={rightToc:c};function l(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.a)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.a)("p",null,"Circling back to metadata, by default the metadata information (at this point in time), only returns the type names as they apply to any section, be it a call, event or query. As an example, this means that transfers are defined as ",Object(o.a)("inlineCode",{parentName:"p"},"balances.transfer(AccountId, Balance)")," with no details as to the mapping of the ",Object(o.a)("inlineCode",{parentName:"p"},"Balance")," type to a ",Object(o.a)("inlineCode",{parentName:"p"},"u128"),". (The underlying Polkadot/Substrate default)"),Object(o.a)("p",null,"Therefore to cater for all types, a mapping in done on the ",Object(o.a)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/polkadot-js/api/tree/master/packages/types/src/interfaces"}),"@polkadot/types library")," to define each of the types and align with their underlying structures as it maps to a default Polkadot or Substrate chain."),Object(o.a)("p",null,"Additionally, the API contains some logic for chain type detection, for instance in the case of Substrate 1.x based chains, it will define ",Object(o.a)("inlineCode",{parentName:"p"},"BlockNumber")," & ",Object(o.a)("inlineCode",{parentName:"p"},"Index")," (nonce) as a ",Object(o.a)("inlineCode",{parentName:"p"},"u64"),", while for current-generation chains, these will be defined as ",Object(o.a)("inlineCode",{parentName:"p"},"u32"),". Some of the work in maintaining the API for Polkadot/Substrate is the addition of types as they appear and gets used in the Rust codebase."),Object(o.a)("p",null,"There is the ",Object(o.a)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/start/install#betas"}),"recommendation")," to use a ",Object(o.a)("inlineCode",{parentName:"p"},"@polkadot/api@beta")," should you wish to track the master branches of Polkadot or Substrate, since master changes for the addition of new types do not make it into a stable release immediately."),Object(o.a)("h2",{id:"extension"},"Extension"),Object(o.a)("p",null,"As a blockchain toolkit, Substrate makes it easy to add your own modules and types. In most non-trivial implementations, this would mean that developers are adding specific types for their implementation as well. The API will get to know the names of these types via the metadata, however it won't understand what they are, which means it cannot encode or decode them. Additionally, when a type is mismatched between the node and the API, the decoding can fail, yielding issues such as ",Object(o.a)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/FAQ#the-node-returns-a-could-not-convert-error-on-send"}),"Could not convert errors")," when submitting transactions."),Object(o.a)("p",null,"To close this gap, the API allows for the injection of types, i.e. you can explicitly define (or override) types for the node/chain you are connecting to. In the simplest example, assuming you have a chain where your ",Object(o.a)("inlineCode",{parentName:"p"},"Balance")," type is a ",Object(o.a)("inlineCode",{parentName:"p"},"u64")," (as opposed to the default ",Object(o.a)("inlineCode",{parentName:"p"},"u128"),"), you need to let the API know -"),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"...\nconst api = await ApiPromise.create({\n  provider: wsProvider,\n  types: {\n    Balance: 'u64'\n  }\n});\n")),Object(o.a)("p",null,"The above introduces the ",Object(o.a)("inlineCode",{parentName:"p"},"types")," registry, effectively allowing overrides and the definition of new types. The override above would mean that immediately the API will treat all occurrences of ",Object(o.a)("inlineCode",{parentName:"p"},"Balance")," not as the default, but rather as the defined size."),Object(o.a)("h2",{id:"field-ordering"},"Field ordering"),Object(o.a)("p",null,"When defining any custom structures or types, it is critical that the following rules are applied -"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"Map exactly to what is defined in the Rust code, i.e. defining a ",Object(o.a)("inlineCode",{parentName:"li"},"SaleType")," cannot be ",Object(o.a)("inlineCode",{parentName:"li"},"u16")," on the one end and ",Object(o.a)("inlineCode",{parentName:"li"},"u32")," on the other end. If mismatches occur, the serialization will fail."),Object(o.a)("li",{parentName:"ul"},"Ensure that the field order is maintained in all definitions. The SCALE serialization is binary and contains no field names in the serialization, only the encoded values. Any decoding is therefore done based on the size of the type and the order thereof in the definitions.")),Object(o.a)("p",null,"These rules apply everywhere. Always ensure that the types match exactly between the environments and that the ordering is maintained, be it for structs, tuples or enums."),Object(o.a)("h2",{id:"user-defined-structs"},"User-defined structs"),Object(o.a)("p",null,"Registration also applies to any type that can be found on a specific chain, i.e. we can add any types that is available on a specific node -"),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"...\nconst api = await ApiPromise.create({\n  ...,\n  types: {\n    TransactionInput: {\n      parentOutput: 'Hash',\n      signature: 'Signature'\n    },\n    TransactionOutput: {\n      value: 'u128',\n      pubkey: 'Hash',\n      sale: 'u32'\n    },\n    Transaction: {\n      inputs: 'Vec<TransactionInput>',\n      outputs: 'Vec<TransactionOutput>'\n    }\n  }\n})\n")),Object(o.a)("p",null,"The example above defines non-primitive types (as found in the specific implementation) as structures. Additionally it also shows the user-defined types can depend on other user-defined types with ",Object(o.a)("inlineCode",{parentName:"p"},"Transaction")," referencing both ",Object(o.a)("inlineCode",{parentName:"p"},"TransactionInput")," and ",Object(o.a)("inlineCode",{parentName:"p"},"TransactionOutput"),". Here you can reference any known types, i.e. in the above we have referenced primitives such as ",Object(o.a)("inlineCode",{parentName:"p"},"u32")," and ",Object(o.a)("inlineCode",{parentName:"p"},"Signature")," (itself an alias for ",Object(o.a)("inlineCode",{parentName:"p"},"H512"),")."),Object(o.a)("h2",{id:"definition-clashes"},"Definition clashes"),Object(o.a)("p",null,"As explained in a previous section, the underlying API Codec types have a ",Object(o.a)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/start/types.basics"}),"number of built-in properties")," and in some cases it could be that your struct has a field that conflicts. These should be minimal, however it can happen. Take the following example where a defined ",Object(o.a)("inlineCode",{parentName:"p"},"hash")," property clashes with the same-name Codec property -"),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"Document: {\n  name: 'Text',\n  uri: 'Text',\n  hash: 'Text'\n}\n")),Object(o.a)("p",null,"For this struct the ",Object(o.a)("inlineCode",{parentName:"p"},"hash")," will not be exposed, but rather be kept as the built-in ",Object(o.a)("inlineCode",{parentName:"p"},"hash"),'. At this point it is important to know that the values "over-the-wire" for calls, queries, events and consts is in binary form, i.e. it is an encoding of the values only. So on the JS side you can apply a rename with no ill-effects. Here we rename the ',Object(o.a)("inlineCode",{parentName:"p"},"hash")," to ",Object(o.a)("inlineCode",{parentName:"p"},"docHash"),", which mean the value will be available on ",Object(o.a)("inlineCode",{parentName:"p"},"<instance>.docHash"),"."),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"Document: {\n  name: 'Text',\n  uri: 'Text',\n  docHash: 'Text'\n}\n")),Object(o.a)("h2",{id:"user-defined-enum"},"User-defined enum"),Object(o.a)("p",null,"One form of types that appear regularly is enums, these can be defined as follows -"),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"...\nconst api = await ApiPromise.create({\n  ...,\n  types: {\n    CLikeEnum: {\n      _enum: ['One', 'Two', 'Three']\n    },\n    TypedEnum: {\n      _enum: {\n        One: 'Compact<u32>',\n        Two: 'u64',\n        Three: 'Option<Balance>',\n        Four: null\n      }\n    }\n  }\n});\n")),Object(o.a)("p",null,"As seen in these examples, types are built up in terms of primitives and aligns with the Rust-type definition model with ",Object(o.a)("inlineCode",{parentName:"p"},"Compact"),", ",Object(o.a)("inlineCode",{parentName:"p"},"Option")," and ",Object(o.a)("inlineCode",{parentName:"p"},"Vec"),"."),Object(o.a)("h2",{id:"node-and-chain-specific-types"},"Node and chain-specific types"),Object(o.a)("p",null,"There are cases where a single API object can be used to connect to different types of nodes or chains, each including their own specific types. For these cases the ",Object(o.a)("inlineCode",{parentName:"p"},"typesChain")," and ",Object(o.a)("inlineCode",{parentName:"p"},"typesSpec")," injectors are made available."),Object(o.a)("p",null,"As a real-world example, the ",Object(o.a)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/polkadot-js/apps"}),"polkadot-js/apps UI")," can connect to a variety of chains. To support ",Object(o.a)("a",Object(n.a)({parentName:"p"},{href:"https://edgewa.re/"}),"Edgeware")," by default, the following node-type (",Object(o.a)("inlineCode",{parentName:"p"},"specName")," as per the runtime version) overrides are made -"),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { IdentityTypes } from 'edgeware-node-types/dist/identity';\nimport { SignalingTypes } from 'edgeware-node-types/dist/signaling';\nimport { VotingTypes } from 'edgeware-node-types/dist/voting';\n\n...\nconst api = await ApiPromise.create({\n  ...,\n  typesSpec: {\n    edgeware: {\n      ...IdentityTypes,\n      ...SignalingTypes,\n      ...VotingTypes\n    }\n  }\n});\n")),Object(o.a)("p",null,"In the same way ",Object(o.a)("inlineCode",{parentName:"p"},"typesChain")," can be used to match on the actual chain name, i.e. for a chain such as Kusama, the following overrides can be made (as per example only - Kusama uses the Polkadot defaults, so no overrides are needed) -"),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"...\nconst api = await ApiPromise.create({\n  ...,\n  typesChain: {\n    Kusama: {\n      BlockNumber: 'u32',\n      Index: 'u32'\n    }\n  }\n});\n")),Object(o.a)("p",null,"The ",Object(o.a)("inlineCode",{parentName:"p"},"types"),", ",Object(o.a)("inlineCode",{parentName:"p"},"typesChain")," and ",Object(o.a)("inlineCode",{parentName:"p"},"typesSpec")," overrides are all optional and all are applied, as applicable to a specific connection. From the options ",Object(o.a)("inlineCode",{parentName:"p"},"types")," are registered first, followed by ",Object(o.a)("inlineCode",{parentName:"p"},"typesSpec")," for node-specific overrides and finally ",Object(o.a)("inlineCode",{parentName:"p"},"typesChain")," for chain-specific overrides. The would mean is you have the following (contrived) example,"),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"...\nconst api = await ApiPromise.create({\n  ...,\n  types: {\n    Balance: 'u32',\n  }\n  typesChain: {\n    Balance: 'u128'\n  },\n  typesSpec: {\n    Balance: 'u64',\n  }\n});\n")),Object(o.a)("p",null,Object(o.a)("inlineCode",{parentName:"p"},"Balance")," would be defined as an ",Object(o.a)("inlineCode",{parentName:"p"},"u128")," at the end. Effectively based on the flow it is first registered as a ",Object(o.a)("inlineCode",{parentName:"p"},"u32"),", then overridden as a ",Object(o.a)("inlineCode",{parentName:"p"},"u64")," and finally overridden once more as a ",Object(o.a)("inlineCode",{parentName:"p"},"u128")," by the chain types."),Object(o.a)("h2",{id:"impact-on-extrinsics"},"Impact on extrinsics"),Object(o.a)("p",null,"When configuring your chain, be cognizant of the types you are using, and always ensure that any changes are replicated back to the API. In an earlier example we configured ",Object(o.a)("inlineCode",{parentName:"p"},"Balance")," as ",Object(o.a)("inlineCode",{parentName:"p"},"u64"),", in this case the same changes needs to be applied on the API, especially when there are mismatches compared to Substrate master. Not doing so means that failures will occur. The same would happen when your own types have mismatched fields or types are lacking fields on structs or enums."),Object(o.a)("p",null,"Mismatches also applies to any other chain-specific configured types and can have impacts on transactions. For instance you can customize ",Object(o.a)("inlineCode",{parentName:"p"},"Lookup")," and ",Object(o.a)("inlineCode",{parentName:"p"},"Address")," on your chain, changing the default lookup behavior. A real example of this is the Substrate master node vs the Substrate master node-template -"),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-rust"}),"/// The lookup mechanism to get account ID from whatever is passed in dispatchers.\ntype Lookup = Indices;\n...\n/// The address format for describing accounts.\npub type Address = <Indices as StaticLookup>::Source;\n")),Object(o.a)("p",null,"And this is what is defined on the node-template -"),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-rust"}),"/// The lookup mechanism to get account ID from whatever is passed in dispatchers.\ntype Lookup = IdentityLookup<AccountId>;\n...\n/// The address format for describing accounts.\npub type Address = AccountId;\n")),Object(o.a)("p",null,"Here the template was customized from the Substrate node defaults and the API needs to know how to map these types. Failure to make adjustments means transactions will fail. With this in mind the correct types that needs to be added here would be -"),Object(o.a)("pre",null,Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const api = await ApiPromise.create({\n  ...,\n  types: {\n    // mapping the actual specified address format\n    Address: 'AccountId',\n    // mapping the lookup\n    LookupSource: 'AccountId'\n  }\n});\n")),Object(o.a)("p",null,"Always look at customization and understand the impacts, replicating these changes between the node and the API. For the above the ",Object(o.a)("inlineCode",{parentName:"p"},"Address")," type is used in the construction of the ",Object(o.a)("inlineCode",{parentName:"p"},"UncheckedExtrinsic")," type, while the lookup type is applicable on transactions such as ",Object(o.a)("inlineCode",{parentName:"p"},"balances.transfer(to: LookupSource, value: Balance)")),Object(o.a)("h2",{id:"custom-rpc"},"Custom RPC"),Object(o.a)("p",null,"In addition to customizing your node's modules and types, you can also add custom RPC definitions. Like the type definitions in this section, ",Object(o.a)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/start/rpc.custom"}),"these can be defined and passed to the API")," for decoration."))}l.isMDXComponent=!0},163:function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));var n=a(0),i=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=i.a.createContext({}),l=function(e){var t=i.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(a),h=n,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||o;return a?i.a.createElement(m,r(r({ref:t},p),{},{components:a})):i.a.createElement(m,r({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=u;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:n,s[1]=r;for(var p=2;p<o;p++)s[p]=a[p];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);