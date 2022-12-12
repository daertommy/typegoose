"use strict";(self.webpackChunktypegoose_website=self.webpackChunktypegoose_website||[]).push([[6163],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2879:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={id:"get-class-for-document",title:"getClassForDocument"},c=void 0,p={unversionedId:"api/functions/get-class-for-document",id:"api/functions/get-class-for-document",title:"getClassForDocument",description:"Removed in 10.0",source:"@site/../docs/api/functions/getClassForDocument.md",sourceDirName:"api/functions",slug:"/api/functions/get-class-for-document",permalink:"/typegoose/docs/api/functions/get-class-for-document",draft:!1,editUrl:"https://github.com/typegoose/typegoose/edit/master/docs/../docs/api/functions/getClassForDocument.md",tags:[],version:"current",frontMatter:{id:"get-class-for-document",title:"getClassForDocument"},sidebar:"docs",previous:{title:"getModelForClass",permalink:"/typegoose/docs/api/functions/get-model-for-class"},next:{title:"getClass",permalink:"/typegoose/docs/api/functions/get-class"}},l={},u=[{value:"Example",id:"example",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("span",{class:"badge badge--danger"},"Removed in 10.0"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Typings:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function getClassForDocument(document: mongoose.Document): NewableFunction | undefined\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters:")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"document")," ",(0,a.kt)("span",{class:"badge badge--secondary"},"Required")),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"mongoose.Document")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The Document to get the Class from")))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"getClassForDocument")," is used to get a Class from a document (which either has a ",(0,a.kt)("inlineCode",{parentName:"p"},".typegooseName")," function or property), this function is a more specific case of ",(0,a.kt)("a",{parentName:"p",href:"/typegoose/docs/api/functions/get-class"},(0,a.kt)("inlineCode",{parentName:"a"},"getClass")),"."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This function only works if the schema has been created with ",(0,a.kt)("a",{parentName:"p",href:"/typegoose/docs/api/functions/build-schema"},(0,a.kt)("inlineCode",{parentName:"a"},"buildSchema"))," or a property / function has been manually added.")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This Function has been removed in typegoose 10.0, use ",(0,a.kt)("a",{parentName:"p",href:"/typegoose/docs/api/functions/get-class"},(0,a.kt)("inlineCode",{parentName:"a"},"getClass"))," instead.")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'class Kitten {\n  @prop()\n  public name?: string;\n}\n\nconst KittenModel = getModelForClass(Kitten);\n\nconst doc = new KittenModel();\n\ngetClassForDocument(doc) === Kitten; // should be "true"\n')))}d.isMDXComponent=!0}}]);