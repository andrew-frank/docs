(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{161:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,y=p["".concat(c,".").concat(d)]||p[d]||m[d]||o;return n?r.a.createElement(y,l(l({ref:t},s),{},{components:n})):r.a.createElement(y,l({ref:t},s))}));d.displayName="MDXCreateElement";var y=n(166),b=n(22),f=n(185),h=n(2),g=n(6),v=n(165),j=n(164),k=n(183),O=n(176),E=n(180),N=n(181),C=n(182),x=n(179),P=n(168),w=n(171),_=n(65),T=n.n(_);var S=function e(t,n){return"link"===t.type?Object(k.a)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))};function I(e){var t,n,o,c=e.item,l=e.onItemClick,i=e.collapsible,s=e.activePath,u=Object(g.a)(e,["item","onItemClick","collapsible","activePath"]),p=c.items,m=c.label,d=S(c,s),y=(n=d,o=Object(a.useRef)(n),Object(a.useEffect)((function(){o.current=n}),[n]),o.current),b=Object(a.useState)((function(){return!!i&&(!d&&c.collapsed)})),f=b[0],j=b[1];Object(a.useEffect)((function(){d&&!y&&f&&j(!1)}),[d,y,f]);var k=Object(a.useCallback)((function(e){e.preventDefault(),j((function(e){return!e}))}),[j]);return 0===p.length?null:r.a.createElement("li",{className:Object(v.a)("menu__list-item",{"menu__list-item--collapsed":f}),key:m},r.a.createElement("a",Object(h.a)({className:Object(v.a)("menu__link",(t={"menu__link--sublist":i,"menu__link--active":i&&d},t[T.a.menuLinkText]=!i,t)),onClick:i?k:void 0,href:i?"#!":void 0},u),m),r.a.createElement("ul",{className:"menu__list"},p.map((function(e){return r.a.createElement(L,{tabIndex:f?"-1":"0",key:e.label,item:e,onItemClick:l,collapsible:i,activePath:s})}))))}function D(e){var t=e.item,n=e.onItemClick,a=e.activePath,o=(e.collapsible,Object(g.a)(e,["item","onItemClick","activePath","collapsible"])),c=t.href,l=t.label,i=S(t,a);return r.a.createElement("li",{className:"menu__list-item",key:l},r.a.createElement(P.a,Object(h.a)({className:Object(v.a)("menu__link",{"menu__link--active":i}),to:c},Object(w.a)(c)?{isNavLink:!0,exact:!0,onClick:n}:{target:"_blank",rel:"noreferrer noopener"},o),l))}function L(e){switch(e.item.type){case"category":return r.a.createElement(I,e);case"link":default:return r.a.createElement(D,e)}}var M=function(e){var t,n,o=e.path,c=e.sidebar,l=e.sidebarCollapsible,i=void 0===l||l,s=Object(a.useState)(!1),u=s[0],p=s[1],m=Object(j.a)().navbar,d=m.title,b=m.hideOnScroll,f=Object(y.a)().isClient,g=Object(C.a)(),k=g.logoLink,w=g.logoLinkProps,_=g.logoImageUrl,S=g.logoAlt,I=Object(O.a)().isAnnouncementBarClosed,D=Object(x.a)().scrollY;Object(E.a)(u);var M=Object(N.a)();return Object(a.useEffect)((function(){M===N.b.desktop&&p(!1)}),[M]),r.a.createElement("div",{className:Object(v.a)(T.a.sidebar,(t={},t[T.a.sidebarWithHideableNavbar]=b,t))},b&&r.a.createElement(P.a,Object(h.a)({tabIndex:-1,className:T.a.sidebarLogo,to:k},w),null!=_&&r.a.createElement("img",{key:f,src:_,alt:S}),null!=d&&r.a.createElement("strong",null,d)),r.a.createElement("div",{className:Object(v.a)("menu","menu--responsive",T.a.menu,(n={"menu--show":u},n[T.a.menuWithAnnouncementBar]=!I&&0===D,n))},r.a.createElement("button",{"aria-label":u?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:function(){p(!u)}},u?r.a.createElement("span",{className:Object(v.a)(T.a.sidebarMenuIcon,T.a.sidebarMenuCloseIcon)},"\xd7"):r.a.createElement("svg",{"aria-label":"Menu",className:T.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement("ul",{className:"menu__list"},c.map((function(e){return r.a.createElement(L,{key:e.label,item:e,onItemClick:function(e){e.target.blur(),p(!1)},collapsible:i,activePath:o})})))))},B={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},A={Prism:n(20).a,theme:B};function R(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function W(){return(W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var F=/\r\n|\r|\n/,$=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},z=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},J=function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=W({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=W({},n,{backgroundColor:null}),r};function H(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var U=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),R(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?J(e.theme,e.language):void 0;return t.themeDict=n})),R(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,o=W({},H(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),c=t.getThemeDict(t.props);return void 0!==c&&(o.style=c.plain),void 0!==r&&(o.style=void 0!==o.style?W({},o.style,r):r),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),R(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return o[n[0]];var c=a?{display:"inline-block"}:{},l=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[c].concat(l))}})),R(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,o=e.token,c=W({},H(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==r&&(c.style=void 0!==c.style?W({},c.style,r):r),void 0!==n&&(c.key=n),a&&(c.className+=" "+a),c}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,o=this.getThemeDict(this.props),c=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],a=[0],r=[e.length],o=0,c=0,l=[],i=[l];c>-1;){for(;(o=a[c]++)<r[c];){var s=void 0,u=t[c],p=n[c][o];if("string"==typeof p?(u=c>0?u:["plain"],s=p):(u=z(u,p.type),p.alias&&(u=z(u,p.alias)),s=p.content),"string"==typeof s){var m=s.split(F),d=m.length;l.push({types:u,content:m[0]});for(var y=1;y<d;y++)$(l),i.push(l=[]),l.push({types:u,content:m[y]})}else c++,t.push(u),n.push(s),a.push(0),r.push(s.length)}c--,t.pop(),n.pop(),a.pop(),r.pop()}return $(l),i}(void 0!==c?t.tokenize(a,c,n):[a]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component),X=n(202),Y=n.n(X),q=n(203),G=n.n(q),K={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},Q=n(174),V=function(){var e=Object(j.a)().prism,t=Object(Q.a)().isDarkTheme,n=e.theme||K,a=e.darkTheme||n;return t?a:n},Z=n(66),ee=n.n(Z),te=/{([\d,-]+)}/,ne=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),a=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+a+")\\s*$")},ae=/title=".*"/,re=function(e){var t=e.children,n=e.className,o=e.metastring,c=Object(j.a)().prism,l=Object(a.useState)(!1),i=l[0],s=l[1],u=Object(a.useState)(!1),p=u[0],m=u[1];Object(a.useEffect)((function(){m(!0)}),[]);var d=Object(a.useRef)(null),y=[],b="",f=V();if(o&&te.test(o)){var g=o.match(te)[1];y=G.a.parse(g).filter((function(e){return e>0}))}o&&ae.test(o)&&(b=o.match(ae)[0].split("title=")[1].replace(/"+/g,""));var k=n&&n.replace(/language-/,"");!k&&c.defaultLanguage&&(k=c.defaultLanguage);var O=t.replace(/\n$/,"");if(0===y.length&&void 0!==k){for(var E,N="",C=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return ne(["js","jsBlock"]);case"jsx":case"tsx":return ne(["js","jsBlock","jsx"]);case"html":return ne(["js","jsBlock","html"]);case"python":case"py":return ne(["python"]);default:return ne()}}(k),x=t.replace(/\n$/,"").split("\n"),P=0;P<x.length;){var w=P+1,_=x[P].match(C);if(null!==_){switch(_.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":N+=w+",";break;case"highlight-start":E=w;break;case"highlight-end":N+=E+"-"+(w-1)+","}x.splice(P,1)}else P+=1}y=G.a.parse(N),O=x.join("\n")}var T=function(){Y()(O),s(!0),setTimeout((function(){return s(!1)}),2e3)};return r.a.createElement(U,Object(h.a)({},A,{key:String(p),theme:f,code:O,language:k}),(function(e){var t,n,a=e.className,o=e.style,c=e.tokens,l=e.getLineProps,s=e.getTokenProps;return r.a.createElement(r.a.Fragment,null,b&&r.a.createElement("div",{style:o,className:ee.a.codeBlockTitle},b),r.a.createElement("div",{className:ee.a.codeBlockContent},r.a.createElement("button",{tabIndex:0,ref:d,type:"button","aria-label":"Copy code to clipboard",className:Object(v.a)(ee.a.copyButton,(t={},t[ee.a.copyButtonWithTitle]=b,t)),onClick:T},i?"Copied":"Copy"),r.a.createElement("div",{className:Object(v.a)(a,ee.a.codeBlock,(n={},n[ee.a.codeBlockWithTitle]=b,n))},r.a.createElement("div",{className:ee.a.codeBlockLines,style:o},c.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=l({line:e,key:t});return y.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),r.a.createElement("div",Object(h.a)({key:t},n),e.map((function(e,t){return r.a.createElement("span",Object(h.a)({key:t},s({token:e,key:t})))})))}))))))}))},oe=(n(67),n(68)),ce=n.n(oe),le=function(e){return function(t){var n,a=t.id,o=Object(g.a)(t,["id"]),c=Object(j.a)().navbar.hideOnScroll;return a?r.a.createElement(e,o,r.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(v.a)("anchor",(n={},n[ce.a.enhancedAnchor]=!c,n)),id:a}),o.children,r.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:"hash-link",href:"#"+a,title:"Direct link to heading"},"#")):r.a.createElement(e,o)}},ie=n(69),se=n.n(ie),ue={code:function(e){var t=e.children;return"string"==typeof t?t.includes("\n")?r.a.createElement(re,e):r.a.createElement("code",e):t},a:function(e){return r.a.createElement(P.a,e)},pre:function(e){return r.a.createElement("div",Object(h.a)({className:se.a.mdxCodeBlock},e))},h1:le("h1"),h2:le("h2"),h3:le("h3"),h4:le("h4"),h5:le("h5"),h6:le("h6")},pe=n(187),me=n(170),de=n(70),ye=n.n(de),be=n(184);function fe(e){var t,n,a=e.currentDocRoute,o=e.versionMetadata,c=e.children,l=Object(y.a)(),i=l.siteConfig,s=l.isClient,u=o.pluginId,m=o.permalinkToSidebar,d=o.docsSidebars,b=o.version,h=m[a.path],g=d[h];return r.a.createElement(f.a,{key:s,searchMetadatas:{version:b,tag:Object(be.b)(u,b)}},r.a.createElement("div",{className:ye.a.docPage},g&&r.a.createElement("div",{className:ye.a.docSidebarContainer,role:"complementary"},r.a.createElement(M,{key:h,sidebar:g,path:a.path,sidebarCollapsible:null===(t=null===(n=i.themeConfig)||void 0===n?void 0:n.sidebarCollapsible)||void 0===t||t})),r.a.createElement("main",{className:ye.a.docMainContainer},r.a.createElement(p,{components:ue},c))))}t.default=function(e){var t=e.route.routes,n=e.versionMetadata,a=e.location,o=t.find((function(e){return Object(me.matchPath)(a.pathname,e)}));return o?r.a.createElement(fe,{currentDocRoute:o,versionMetadata:n},Object(b.a)(t)):r.a.createElement(pe.default,e)}},202:function(e,t,n){"use strict";const a=(e,{target:t=document.body}={})=>{const n=document.createElement("textarea"),a=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const r=document.getSelection();let o=!1;r.rangeCount>0&&(o=r.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch(l){}return n.remove(),o&&(r.removeAllRanges(),r.addRange(o)),a&&a.focus(),c};e.exports=a,e.exports.default=a},203:function(e,t){e.exports.parse=function(e){var t=e.split(",").map((function(e){return function(e){if(/^-?\d+$/.test(e))return parseInt(e,10);var t;if(t=e.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){var n=t[1],a=t[2],r=t[3];if(n&&r){var o=[],c=(n=parseInt(n))<(r=parseInt(r))?1:-1;"-"!=a&&".."!=a&&"\u2025"!=a||(r+=c);for(var l=n;l!=r;l+=c)o.push(l);return o}}return[]}(e)}));return 0===t.length?[]:1===t.length?Array.isArray(t[0])?t[0]:t:t.reduce((function(e,t){return Array.isArray(e)||(e=[e]),Array.isArray(t)||(t=[t]),e.concat(t)}))}}}]);