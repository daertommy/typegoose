"use strict";(self.webpackChunktypegoose_website=self.webpackChunktypegoose_website||[]).push([[9991],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=d(n),u=a,h=m["".concat(l,".").concat(u)]||m[u]||c[u]||r;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<r;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9137:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return p},default:function(){return m}});var o=n(2122),a=n(9756),r=(n(7294),n(3905)),i=["components"],s={id:"migrate-6",title:"Migrate to 6.0.0"},l=void 0,d={unversionedId:"guides/migration/migrate-6",id:"guides/migration/migrate-6",isDocsHomePage:!1,title:"Migrate to 6.0.0",description:"These are the changes made for 6.0.0 that are breaking or just important to know.",source:"@site/../docs/guides/migration/migrate-6.md",sourceDirName:"guides/migration",slug:"/guides/migration/migrate-6",permalink:"/typegoose/docs/guides/migration/migrate-6",editUrl:"https://github.com/typegoose/typegoose/edit/master/docs/../docs/guides/migration/migrate-6.md",tags:[],version:"current",frontMatter:{id:"migrate-6",title:"Migrate to 6.0.0"},sidebar:"guides",previous:{title:"Migrate to 7.0.0",permalink:"/typegoose/docs/guides/migration/migrate-7"}},p=[{value:"Requirements changed",id:"requirements-changed",children:[]},{value:"InstanceType changed",id:"instancetype-changed",children:[]},{value:"<code>getModelForClass</code>, <code>setModelForClass</code>, <code>buildSchema</code>",id:"getmodelforclass-setmodelforclass-buildschema",children:[]},{value:"ModelOptions",id:"modeloptions",children:[]},{value:"Hooks",id:"hooks",children:[]},{value:"Methods (staticMethod, instanceMethod, virtuals)",id:"methods-staticmethod-instancemethod-virtuals",children:[]},{value:"setModelForClass is deprecated",id:"setmodelforclass-is-deprecated",children:[]},{value:"ModelType is abstracted",id:"modeltype-is-abstracted",children:[]},{value:"IC data.ts collections are now Map&lt;T, S&gt;",id:"ic-datats-collections-are-now-mapt-s",children:[]},{value:"Notes",id:"notes",children:[]}],c={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"These are the changes made for 6.0.0 that are breaking or just important to know."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Important, Read this first")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This Guide is written for migration from version ",(0,r.kt)("inlineCode",{parentName:"p"},"5.9.2")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"6.0.0"),", for versions ",(0,r.kt)("inlineCode",{parentName:"p"},">6.0.0 <7.0.0"),", please consult the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/typegoose/typegoose/blob/master/CHANGELOG.md"},"CHANGELOG")))),(0,r.kt)("h2",{id:"requirements-changed"},"Requirements changed"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Typescript ",(0,r.kt)("inlineCode",{parentName:"li"},"3.5")," is now required / recommended"),(0,r.kt)("li",{parentName:"ul"},"Mongoose ",(0,r.kt)("inlineCode",{parentName:"li"},"5.7.1")," or higher is now required")),(0,r.kt)("h2",{id:"instancetype-changed"},"InstanceType changed"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"InstanceType<T>")," was renamed to ",(0,r.kt)("inlineCode",{parentName:"p"},"DocumentType<T>")),(0,r.kt)("h2",{id:"getmodelforclass-setmodelforclass-buildschema"},(0,r.kt)("inlineCode",{parentName:"h2"},"getModelForClass"),", ",(0,r.kt)("inlineCode",{parentName:"h2"},"setModelForClass"),", ",(0,r.kt)("inlineCode",{parentName:"h2"},"buildSchema")),(0,r.kt)("p",null,'They are not in the Typegoose class anymore. They are now outsourced, which means the new syntax is the following (for a "seamless" migration the Typegoose Class still exists and has the functions, but the will be deprecated):'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { getModelForClass } from 'typegoose';\nclass Name {}\n\nconst NameModel = getModelForClass(Name);\n")),(0,r.kt)("p",null,"Note: Typegoose Class still has all the functions, but they are marked deprecated & are just passthroughs to the new functions."),(0,r.kt)("h2",{id:"modeloptions"},"ModelOptions"),(0,r.kt)("p",null,"Use the following decorator now."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"@modelOptions({ schemaOptions: {} })\nclass Name {}\n")),(0,r.kt)("p",null,"Otherwise, the functions still override the settings made in ",(0,r.kt)("inlineCode",{parentName:"p"},"modelOptions")),(0,r.kt)("h2",{id:"hooks"},"Hooks"),(0,r.kt)("p",null,"Hooks recieved a change (in 6.0.0-13) for the types to comply with the latest mongoose (5.6.8)",(0,r.kt)("br",{parentName:"p"}),"\n","-> no workarounds or typedefs required anymore."),(0,r.kt)("h2",{id:"methods-staticmethod-instancemethod-virtuals"},"Methods (staticMethod, instanceMethod, virtuals)"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"@staticMethod")," & ",(0,r.kt)("inlineCode",{parentName:"p"},"@instanceMethod")," were deprecated in favor of ",(0,r.kt)("inlineCode",{parentName:"p"},"schema.loadClass()"),". These decorators are no longer needed, because the methods are auto-detected."),(0,r.kt)("p",null,"For ",(0,r.kt)("a",{parentName:"p",href:"https://mongoosejs.com/docs/tutorials/virtuals.html"},"virtuals"),", simply use ",(0,r.kt)("inlineCode",{parentName:"p"},"get somevalue() { return ''; }")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"set somevalue(val: string) { }")," (",(0,r.kt)("inlineCode",{parentName:"p"},"@prop")," is no longer needed). [",(0,r.kt)("a",{parentName:"p",href:"/typegoose/docs/api/virtuals#get--set"},"New Documentation"),"]"),(0,r.kt)("p",null,"For ",(0,r.kt)("a",{parentName:"p",href:"https://mongoosejs.com/docs/tutorials/virtuals.html#populate"},"populating virtuals"),", use ",(0,r.kt)("inlineCode",{parentName:"p"},"@prop({ localField, foreignField })"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"overwrite")," option is no longer needed. [",(0,r.kt)("a",{parentName:"p",href:"/typegoose/docs/api/virtuals#virtual-populate"},"New Documentation"),"]"),(0,r.kt)("p",null,"Update: ",(0,r.kt)("inlineCode",{parentName:"p"},"@staticMethod")," & ",(0,r.kt)("inlineCode",{parentName:"p"},"@instanceMethod")," were removed in 6.1.0-1"),(0,r.kt)("h2",{id:"setmodelforclass-is-deprecated"},"setModelForClass is deprecated"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"setModelForClass()")," has been deprecated, because Mongoose would throw an OverwriteModelError if it was attempted to overwrite a model.",(0,r.kt)("br",{parentName:"p"}),"\n","-> use ",(0,r.kt)("inlineCode",{parentName:"p"},"getModelForClass()")),(0,r.kt)("h2",{id:"modeltype-is-abstracted"},"ModelType is abstracted"),(0,r.kt)("p",null,"The type ",(0,r.kt)("inlineCode",{parentName:"p"},"ModelType")," has been abstracted to ",(0,r.kt)("inlineCode",{parentName:"p"},"ReturnModelType<typeof Class>")," with documentation. But, if for any reason ",(0,r.kt)("inlineCode",{parentName:"p"},"ModelType")," is needed, it needs to be imported from ",(0,r.kt)("inlineCode",{parentName:"p"},"@typegoose/typegoose/lib/types"),"."),(0,r.kt)("h2",{id:"ic-datats-collections-are-now-mapt-s"},"[IC]"," data.ts collections are now Map<T, S>"),(0,r.kt)("p",null,"data.ts's collections got refactored to use ES6 Maps"),(0,r.kt)("h2",{id:"notes"},"Notes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[IC]"," The internal handling of schema creation has changed a bit, however we tried to keep the inputs & outputs the same, meaning in some edge-cases schema creation might not work as expected.")),(0,r.kt)("hr",null),(0,r.kt)("sub",null,"*`IC` means `internal change`*"))}m.isMDXComponent=!0}}]);