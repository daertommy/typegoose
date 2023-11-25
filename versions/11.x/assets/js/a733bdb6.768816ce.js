"use strict";(self.webpackChunktypegoose_website=self.webpackChunktypegoose_website||[]).push([[8437],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return y}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),d=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(c.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=d(n),g=r,y=l["".concat(c,".").concat(g)]||l[g]||u[g]||i;return n?o.createElement(y,a(a({ref:t},p),{},{components:n})):o.createElement(y,a({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[l]="string"==typeof e?e:r,a[1]=s;for(var d=2;d<i;d++)a[d]=n[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},6203:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return y},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return l}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],s={id:"using-objectid-type",title:"Using ObjectId Type"},c=void 0,d={unversionedId:"guides/advanced/using-objectid-type",id:"guides/advanced/using-objectid-type",title:"Using ObjectId Type",description:"Using the type ObjectId can be done by defining it as follows:",source:"@site/../docs/guides/advanced/objectId.md",sourceDirName:"guides/advanced",slug:"/guides/advanced/using-objectid-type",permalink:"/typegoose/versions/11.x/docs/guides/advanced/using-objectid-type",draft:!1,editUrl:"https://github.com/typegoose/typegoose/edit/old/11.x/docs/../docs/guides/advanced/objectId.md",tags:[],version:"current",frontMatter:{id:"using-objectid-type",title:"Using ObjectId Type"},sidebar:"guides",previous:{title:"Change _id Type",permalink:"/typegoose/versions/11.x/docs/guides/advanced/change-id-type"},next:{title:"Non-Nested Discriminators",permalink:"/typegoose/versions/11.x/docs/guides/advanced/non-nested-discriminators"}},p={},l=[],u={toc:l},g="wrapper";function y(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)(g,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Using the type ",(0,i.kt)("inlineCode",{parentName:"p"},"ObjectId")," can be done by defining it as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import * as mongoose from 'mongoose';\nimport { prop } from '@typegoose/typegoose';\n\nclass FooModel {\n  @prop()\n  userId: mongoose.Types.ObjectId;\n}\n")),(0,i.kt)("p",null,"You need to refer to the full length type since defining it as ",(0,i.kt)("inlineCode",{parentName:"p"},"type ObjectId = mongoose.Types.ObjectId")," and referencing that will lead to it being an ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")," at compile time, meaning Typegoose will translate the property type to ",(0,i.kt)("inlineCode",{parentName:"p"},"Mixed"),"."),(0,i.kt)("p",null,"In order to query this model later you should use the type ",(0,i.kt)("inlineCode",{parentName:"p"},"mongoose.Types.ObjectId"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const FooModel = getModelForClass(FooModel);\nFooModel.findOne({ userId: new mongoose.Types.ObjectId('5e997f95d6a35f3a0def3339') });\n")))}y.isMDXComponent=!0}}]);