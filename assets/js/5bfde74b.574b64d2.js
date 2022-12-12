"use strict";(self.webpackChunktypegoose_website=self.webpackChunktypegoose_website||[]).push([[9524],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||r;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},697:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],s={id:"get-class",title:"getClass"},l=void 0,p={unversionedId:"api/functions/get-class",id:"api/functions/get-class",title:"getClass",description:"Typings:",source:"@site/../docs/api/functions/getClass.md",sourceDirName:"api/functions",slug:"/api/functions/get-class",permalink:"/typegoose/docs/api/functions/get-class",draft:!1,editUrl:"https://github.com/typegoose/typegoose/edit/master/docs/../docs/api/functions/getClass.md",tags:[],version:"current",frontMatter:{id:"get-class",title:"getClass"},sidebar:"docs",previous:{title:"getClassForDocument",permalink:"/typegoose/docs/api/functions/get-class-for-document"},next:{title:"buildSchema",permalink:"/typegoose/docs/api/functions/build-schema"}},c={},u=[{value:"Example",id:"example",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Typings:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"function getClass(\n  input:\n    | mongoose.Document\n    | { typegooseName: () => string }\n    | { typegooseName: string }\n    | string\n    | any\n): NewableFunction | undefined\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters:")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"input")," ",(0,r.kt)("span",{class:"badge badge--secondary"},"Required")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"any")),(0,r.kt)("td",{parentName:"tr",align:"left"},"A Input to get a name from")))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"getClass")," is used to get a Class from a variety of inputs, which include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mongoose.Document"),"; Get the name to look-up from ",(0,r.kt)("inlineCode",{parentName:"li"},"doc.constructor.modelName"),", only applies if no ",(0,r.kt)("inlineCode",{parentName:"li"},"typegooseName")," function or property is present"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"{ typegooseName: () => string }"),": Get the name to look-up from the ",(0,r.kt)("inlineCode",{parentName:"li"},"typegooseName")," function (currently automatically added by typegoose)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"{ typegooseName: string }"),": Get the name to look-up from the ",(0,r.kt)("inlineCode",{parentName:"li"},"typegooseName")," getter / property."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"string"),": Directly specify the name to look-up."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"any"),": Try to get a Class from any of the above, without having proper types.")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This look-up only works if the class has been correctly registered with ",(0,r.kt)("a",{parentName:"p",href:"/typegoose/docs/api/functions/add-model-to-typegoose"},(0,r.kt)("inlineCode",{parentName:"a"},"addModelToTypegoose"))," (automatically done when calling ",(0,r.kt)("a",{parentName:"p",href:"/typegoose/docs/api/functions/get-model-for-class"},(0,r.kt)("inlineCode",{parentName:"a"},"getModelForClass"))," or ",(0,r.kt)("a",{parentName:"p",href:"/typegoose/docs/api/functions/get-discriminator-model-for-class"},(0,r.kt)("inlineCode",{parentName:"a"},"getDiscriminatorModelForClass")),", but ",(0,r.kt)("strong",{parentName:"p"},"not")," for ",(0,r.kt)("a",{parentName:"p",href:"/typegoose/docs/api/functions/build-schema"},(0,r.kt)("inlineCode",{parentName:"a"},"buildSchema")),").")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Any class that got compiled with ",(0,r.kt)("a",{parentName:"p",href:"/typegoose/docs/api/functions/build-schema"},(0,r.kt)("inlineCode",{parentName:"a"},"buildSchema"))," (transparently used by ",(0,r.kt)("a",{parentName:"p",href:"/typegoose/docs/api/functions/get-model-for-class"},(0,r.kt)("inlineCode",{parentName:"a"},"getModelForClass"))," or ",(0,r.kt)("a",{parentName:"p",href:"/typegoose/docs/api/functions/get-discriminator-model-for-class"},(0,r.kt)("inlineCode",{parentName:"a"},"getDiscriminatorModelForClass")),") a ",(0,r.kt)("inlineCode",{parentName:"p"},"typegooseName")," function gets automatically added.\nThis even makes it possible to get the class from sub-documents / sub-classes.")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'// Nested-GetClass & Document-GetClass\nclass Food {\n  @prop()\n  public name: string;\n}\n\nclass Kitten {\n  @prop()\n  public currentFood: Food;\n}\n\nconst KittenModel = getModelForClass(Kitten);\n\nconst input = new KittenModel();\n\n// Nested\ngetClass(input.currentFood) === Food; // should be "true"\n// Document\ngetClass(input) === Kitten; // should be "true"\n// by string\ngetClass(\'Kitten\') == Kitten; // should be "true"\n')))}d.isMDXComponent=!0}}]);