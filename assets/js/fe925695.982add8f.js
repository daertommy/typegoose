"use strict";(self.webpackChunktypegoose_website=self.webpackChunktypegoose_website||[]).push([[7961],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return c}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(r),c=o,m=u["".concat(p,".").concat(c)]||u[c]||y[c]||a;return r?n.createElement(m,i(i({ref:t},d),{},{components:r})):n.createElement(m,i({ref:t},d))}));function c(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4700:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return y}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],s={id:"array-types",title:"Array Types & Fields"},p=void 0,l={unversionedId:"guides/advanced/array-types",id:"guides/advanced/array-types",title:"Array Types & Fields",description:"Array types & Fields",source:"@site/../docs/guides/advanced/array-types.md",sourceDirName:"guides/advanced",slug:"/guides/advanced/array-types",permalink:"/typegoose/docs/guides/advanced/array-types",draft:!1,editUrl:"https://github.com/typegoose/typegoose/edit/master/docs/../docs/guides/advanced/array-types.md",tags:[],version:"current",frontMatter:{id:"array-types",title:"Array Types & Fields"},sidebar:"guides",previous:{title:"Custom Types",permalink:"/typegoose/docs/guides/advanced/custom-types"},next:{title:"Models with same name",permalink:"/typegoose/docs/guides/advanced/models-with-same-name"}},d={},y=[{value:"Array types &amp; Fields",id:"array-types--fields",level:2},{value:"Why is the long type needed?",id:"why-is-the-long-type-needed",level:2},{value:"Why is the <code>type</code> option always required?",id:"why-is-the-type-option-always-required",level:2}],u={toc:y};function c(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"array-types--fields"},"Array types & Fields"),(0,a.kt)("p",null,"It is much easier to declare the array field's type as ",(0,a.kt)("inlineCode",{parentName:"p"},"type[]")," instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"Array<type>"),"."),(0,a.kt)("p",null,"But in some cases, Typescript could give you a warning, when you would like to use ","any mongoose array methods\x3c!--",(0,a.kt)("a",{parentName:"p",href:"https://mongoosejs.com/docs/api/array.html"},"any mongoose array methods")," <-- the link is invalid for mongoose 6.0 and there is no proper replacement currently --\x3e on the array field.\nTo avoid such behavior, you could always declare the array field via ",(0,a.kt)("inlineCode",{parentName:"p"},"mongoose.Types.Array<type>")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"mongoose.Schema.Types.Array<type>")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"class ModelClass {\n  // required field, with empty array by default.\n  @prop({ type: String, required: true, default: [] })\n  public field!: mongoose.Types.Array<string>;\n}\n")),(0,a.kt)("h2",{id:"why-is-the-long-type-needed"},"Why is the long type needed?"),(0,a.kt)("p",null,"Mainly, because mongoose documents and their arrays fields have their pre-build methods, which slightly differ from ",(0,a.kt)("inlineCode",{parentName:"p"},"Array.method.prototype"),". But at runtime, these methods already exist (because an array is always an mongoose array). So, using ",(0,a.kt)("inlineCode",{parentName:"p"},"type[]")," is just more convenient way to write a shorter type instead of the ",(0,a.kt)("inlineCode",{parentName:"p"},"mongoose.Types")," if the functions are not used."),(0,a.kt)("p",null,"For more information you could look at ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/typegoose/typegoose/issues/509"},"GitHub issue #509"),"."),(0,a.kt)("h2",{id:"why-is-the-type-option-always-required"},"Why is the ",(0,a.kt)("inlineCode",{parentName:"h2"},"type")," option always required?"),(0,a.kt)("p",null,"Because ",(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/decorators.html#metadata"},"Reflection"),' currently does not give out detailed information, it only "dumbs down" the type to ',(0,a.kt)("inlineCode",{parentName:"p"},"Array"),", see ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/typegoose/typegoose/issues/300"},"typescript issue #300")," for more."))}c.isMDXComponent=!0}}]);