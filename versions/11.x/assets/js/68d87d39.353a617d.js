"use strict";(self.webpackChunktypegoose_website=self.webpackChunktypegoose_website||[]).push([[2974],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return g}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(r),d=o,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(g,a(a({ref:t},c),{},{components:r})):n.createElement(g,a({ref:t},c))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1310:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],s={id:"migrate-7",title:"Migrate to 7.0.0"},l=void 0,p={unversionedId:"guides/migration/migrate-7",id:"guides/migration/migrate-7",title:"Migrate to 7.0.0",description:"These are the changes made for 7.0.0 that are breaking or just important to know",source:"@site/../docs/guides/migration/migrate-7.md",sourceDirName:"guides/migration",slug:"/guides/migration/migrate-7",permalink:"/typegoose/versions/11.x/docs/guides/migration/migrate-7",draft:!1,editUrl:"https://github.com/typegoose/typegoose/edit/old/11.x/docs/../docs/guides/migration/migrate-7.md",tags:[],version:"current",frontMatter:{id:"migrate-7",title:"Migrate to 7.0.0"},sidebar:"guides",previous:{title:"Migrate to 8.0.0",permalink:"/typegoose/versions/11.x/docs/guides/migration/migrate-8"},next:{title:"Migrate to 6.0.0",permalink:"/typegoose/versions/11.x/docs/guides/migration/migrate-6"}},c={},m=[{value:"Requirements changed",id:"requirements-changed",level:2},{value:"Deprecation removals",id:"deprecation-removals",level:2},{value:"arrayProp options removed",id:"arrayprop-options-removed",level:3},{value:"Typegoose class got removed",id:"typegoose-class-got-removed",level:3},{value:"IC all remaining cache-maps got moved to reflection",id:"ic-all-remaining-cache-maps-got-moved-to-reflection",level:2},{value:"IC almost all &quot;if-throw&quot; blocks got replaced with &quot;assertion&quot; functions",id:"ic-almost-all-if-throw-blocks-got-replaced-with-assertion-functions",level:2},{value:"IC The Testing Framework for Typegoose changed to Jest",id:"ic-the-testing-framework-for-typegoose-changed-to-jest",level:2}],u={toc:m},d="wrapper";function g(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"These are the changes made for 7.0.0 that are breaking or just important to know"),(0,i.kt)("admonition",{title:"Important, Read this first",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This Guide is written for migration from version ",(0,i.kt)("inlineCode",{parentName:"p"},"6.5.0")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"7.0.0"),", for versions ",(0,i.kt)("inlineCode",{parentName:"p"},">7.0.0 <8.0.0"),", please consult the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/typegoose/typegoose/blob/master/CHANGELOG.md"},"CHANGELOG"))),(0,i.kt)("h2",{id:"requirements-changed"},"Requirements changed"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Nodejs 8 & 9 are now unsupported, lowest supported version is now ",(0,i.kt)("inlineCode",{parentName:"li"},"10.15")),(0,i.kt)("li",{parentName:"ul"},"Typescript ",(0,i.kt)("inlineCode",{parentName:"li"},"3.8")," is now required (",(0,i.kt)("inlineCode",{parentName:"li"},"4.9")," is recommended)"),(0,i.kt)("li",{parentName:"ul"},"Mongoose ",(0,i.kt)("inlineCode",{parentName:"li"},"5.9.10")," or higher is now required")),(0,i.kt)("h2",{id:"deprecation-removals"},"Deprecation removals"),(0,i.kt)("h3",{id:"arrayprop-options-removed"},"arrayProp options removed"),(0,i.kt)("p",null,"The following options got removed:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"itemsRef")," got replaced with just ",(0,i.kt)("inlineCode",{parentName:"li"},"ref")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"itemsRefPath")," got replaced with just ",(0,i.kt)("inlineCode",{parentName:"li"},"refPath")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"itemsRefType")," got replaced with just ",(0,i.kt)("inlineCode",{parentName:"li"},"refType"))),(0,i.kt)("h3",{id:"typegoose-class-got-removed"},"Typegoose class got removed"),(0,i.kt)("p",null,"In 6.0.0 it was announced that the ",(0,i.kt)("inlineCode",{parentName:"p"},"Typegoose")," class was useless and will be removed in a future version. Now, in 7.0.0, it was completely removed."),(0,i.kt)("h2",{id:"ic-all-remaining-cache-maps-got-moved-to-reflection"},"[IC]"," all remaining cache-maps got moved to reflection"),(0,i.kt)("p",null,"All possible cache-maps that were in ",(0,i.kt)("inlineCode",{parentName:"p"},"data.ts")," were refactored to be in the reflection of the class."),(0,i.kt)("h2",{id:"ic-almost-all-if-throw-blocks-got-replaced-with-assertion-functions"},"[IC]",' almost all "if-throw" blocks got replaced with "assertion" functions'),(0,i.kt)("p",null,"Typescript 3.7 introduced a new type-keyword ",(0,i.kt)("a",{parentName:"p",href:"https://devblogs.microsoft.com/typescript/announcing-typescript-3-7/#assertion-functions"},(0,i.kt)("inlineCode",{parentName:"a"},"asserts"))," and now almost every occurrence has been replaced with a custom assertion function."),(0,i.kt)("h2",{id:"ic-the-testing-framework-for-typegoose-changed-to-jest"},"[IC]"," The Testing Framework for Typegoose changed to Jest"),(0,i.kt)("p",null,"For Typegoose 7.0.0, the Testing Framework change from ",(0,i.kt)("inlineCode",{parentName:"p"},"mocha + chai")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"jest")),(0,i.kt)("hr",null),(0,i.kt)("sub",null,"*`IC` means `Internal Change`*"))}g.isMDXComponent=!0}}]);