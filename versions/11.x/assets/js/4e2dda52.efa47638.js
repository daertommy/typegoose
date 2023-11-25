"use strict";(self.webpackChunktypegoose_website=self.webpackChunktypegoose_website||[]).push([[9705],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return y}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=p(n),m=o,y=l["".concat(c,".").concat(m)]||l[m]||d[m]||s;return n?r.createElement(y,a(a({ref:t},u),{},{components:n})):r.createElement(y,a({ref:t},u))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[l]="string"==typeof e?e:o,a[1]=i;for(var p=2;p<s;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9481:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return y},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return l}});var r=n(7462),o=n(3366),s=(n(7294),n(3905)),a=["components"],i={id:"custom-types",title:"Custom Types"},c=void 0,p={unversionedId:"guides/advanced/custom-types",id:"guides/advanced/custom-types",title:"Custom Types",description:"A Custom Type needs to have the following properties for Typegoose to work:",source:"@site/../docs/guides/advanced/custom-types.md",sourceDirName:"guides/advanced",slug:"/guides/advanced/custom-types",permalink:"/typegoose/versions/11.x/docs/guides/advanced/custom-types",draft:!1,editUrl:"https://github.com/typegoose/typegoose/edit/old/11.x/docs/../docs/guides/advanced/custom-types.md",tags:[],version:"current",frontMatter:{id:"custom-types",title:"Custom Types"},sidebar:"guides",previous:{title:"Nesting Classes",permalink:"/typegoose/versions/11.x/docs/guides/nesting-classes"},next:{title:"Array Types & Fields",permalink:"/typegoose/versions/11.x/docs/guides/advanced/array-types"}},u={},l=[],d={toc:l},m="wrapper";function y(e){var t=e.components,n=(0,o.Z)(e,a);return(0,s.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"A Custom Type needs to have the following properties for Typegoose to work:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"name"),": to show what the type is"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"prototype.OptionsConstructor"),": to know where options are mapped to"),(0,s.kt)("li",{parentName:"ul"},"inherit / extend ",(0,s.kt)("inlineCode",{parentName:"li"},"mongoose.SchemaType"))),(0,s.kt)("p",null,"Please look at ",(0,s.kt)("a",{parentName:"p",href:"https://mongoosejs.com/docs/customschematypes.html"},"Mongoose's Documentation")," on how to create and register a custom type."))}y.isMDXComponent=!0}}]);