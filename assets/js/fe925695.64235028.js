"use strict";(self.webpackChunktypegoose_website=self.webpackChunktypegoose_website||[]).push([[7961],{3905:function(e,t,r){r.d(t,{Zo:function(){return y},kt:function(){return c}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),d=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},y=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,y=s(e,["components","mdxType","originalType","parentName"]),u=d(r),c=a,m=u["".concat(p,".").concat(c)]||u[c]||l[c]||o;return r?n.createElement(m,i(i({ref:t},y),{},{components:r})):n.createElement(m,i({ref:t},y))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4700:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return y},default:function(){return u}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),i=["components"],s={id:"array-types",title:"Array Types & Fields"},p=void 0,d={unversionedId:"guides/advanced/array-types",id:"guides/advanced/array-types",isDocsHomePage:!1,title:"Array Types & Fields",description:"Array types & Fields",source:"@site/../docs/guides/advanced/array-types.md",sourceDirName:"guides/advanced",slug:"/guides/advanced/array-types",permalink:"/typegoose/docs/guides/advanced/array-types",editUrl:"https://github.com/typegoose/typegoose/edit/master/docs/../docs/guides/advanced/array-types.md",tags:[],version:"current",frontMatter:{id:"array-types",title:"Array Types & Fields"},sidebar:"guides",previous:{title:"Custom Types",permalink:"/typegoose/docs/guides/advanced/custom-types"},next:{title:"Models with same name",permalink:"/typegoose/docs/guides/advanced/models-with-same-name"}},y=[{value:"Array types &amp; Fields",id:"array-types--fields",children:[]},{value:"Why is the long type needed?",id:"why-is-the-long-type-needed",children:[]},{value:"Why is the <code>type</code> option always required?",id:"why-is-the-type-option-always-required",children:[]}],l={toc:y};function u(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"array-types--fields"},"Array types & Fields"),(0,o.kt)("p",null,"It is much easier to declare the array field's type as ",(0,o.kt)("inlineCode",{parentName:"p"},"type[]")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"Array<type>"),"."),(0,o.kt)("p",null,"But in some cases, Typescript could give you a warning, when you would like to use ",(0,o.kt)("a",{parentName:"p",href:"https://mongoosejs.com/docs/api/array.html"},"any mongoose array methods")," on the array field.\nTo avoid such behavior, you could always declare the array field via ",(0,o.kt)("inlineCode",{parentName:"p"},"mongoose.Types.Array<type>")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"mongoose.Schema.Types.Array<type>")),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"class ModelClass {\n  // required field, with empty array by default.\n  @prop({ type: String, required: true, default: [] })\n  public field!: mongoose.Types.Array<string>;\n}\n")),(0,o.kt)("h2",{id:"why-is-the-long-type-needed"},"Why is the long type needed?"),(0,o.kt)("p",null,"Mainly, because mongoose documents and their arrays fields have their pre-build methods, which slightly differ from ",(0,o.kt)("inlineCode",{parentName:"p"},"Array.method.prototype"),". But at runtime, these methods already exist (because an array is always an mongoose array). So, using ",(0,o.kt)("inlineCode",{parentName:"p"},"type[]")," is just more convenient way to write a shorter type instead of the ",(0,o.kt)("inlineCode",{parentName:"p"},"mongoose.Types")," if the functions are not used."),(0,o.kt)("p",null,"For more information you could look at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/typegoose/typegoose/issues/509"},"GitHub issue #509"),"."),(0,o.kt)("h2",{id:"why-is-the-type-option-always-required"},"Why is the ",(0,o.kt)("inlineCode",{parentName:"h2"},"type")," option always required?"),(0,o.kt)("p",null,"Because ",(0,o.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/decorators.html#metadata"},"Reflection"),' currently does not give out detailed information, it only "dumbs down" the type to ',(0,o.kt)("inlineCode",{parentName:"p"},"Array"),", see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/typegoose/typegoose/issues/300"},"typescript issue #300")," for more."))}u.isMDXComponent=!0}}]);