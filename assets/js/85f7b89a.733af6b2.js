"use strict";(self.webpackChunktypegoose_website=self.webpackChunktypegoose_website||[]).push([[7563],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||s;return n?o.createElement(g,r(r({ref:t},c),{},{components:n})):o.createElement(g,r({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,r=new Array(s);r[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,r[1]=i;for(var p=2;p<s;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2043:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var o=n(2122),a=n(9756),s=(n(7294),n(3905)),r=["components"],i={id:"known-issues",title:"Known Issues"},l=void 0,p={unversionedId:"guides/known-issues",id:"guides/known-issues",isDocsHomePage:!1,title:"Known Issues",description:"Known Issues",source:"@site/../docs/guides/known-issues.md",sourceDirName:"guides",slug:"/guides/known-issues",permalink:"/typegoose/docs/guides/known-issues",editUrl:"https://github.com/typegoose/typegoose/edit/master/docs/../docs/guides/known-issues.md",tags:[],version:"current",frontMatter:{id:"known-issues",title:"Known Issues"},sidebar:"guides",previous:{title:"FAQ",permalink:"/typegoose/docs/guides/faq"},next:{title:"Using with class-transformer",permalink:"/typegoose/docs/guides/integration-examples/using-with-class-transformer"}},c=[{value:"Known Issues",id:"known-issues",children:[{value:"transpile-only",id:"transpile-only",children:[]},{value:"tsconfig-paths",id:"tsconfig-paths",children:[]},{value:"Self-Containing classes",id:"self-containing-classes",children:[]},{value:"Babel",id:"babel",children:[]},{value:"prop on get &amp; set",id:"prop-on-get--set",children:[]}]}],u={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,r);return(0,s.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"known-issues"},"Known Issues"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/Automattic/mongoose/issues?utf8=%E2%9C%93&q=is%3Aissue+involves%3Ahasezoey"},"Please look here first, to decide if it is a Typegoose or a Mongoose issue.")),(0,s.kt)("h3",{id:"transpile-only"},"transpile-only"),(0,s.kt)("p",null,"Never run ",(0,s.kt)("inlineCode",{parentName:"p"},"ts-node --transpile-only")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"tsc --transpile-only"),", otherwise sometimes types are missing completly or are the wrong type."),(0,s.kt)("h3",{id:"tsconfig-paths"},"tsconfig-paths"),(0,s.kt)("p",null,"TypeScript provides the option to alias paths (with ",(0,s.kt)("inlineCode",{parentName:"p"},"tsconfig-paths"),"), but is somehow incompatible with Typegoose, ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/szokodiakos/typegoose/issues/392"},"more info in here")),(0,s.kt)("h3",{id:"self-containing-classes"},"Self-Containing classes"),(0,s.kt)("p",null,"It is currently not possible to use a self-containing class (sub-documents)"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},'class SomeClass {\n  @prop()\n  public ref: SomeClass; // ERROR "Maximum Class Stack Size Exceeded"\n}\n')),(0,s.kt)("p",null,"For References, this will work"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"class SomeClass {\n  @prop({ ref: () => SomeClass }) // or hardcode the string\n  public ref: Ref<SomeClass>;\n}\n")),(0,s.kt)("h3",{id:"babel"},"Babel"),(0,s.kt)("p",null,"Using babel as a TypeScript compiler is known to cause problems (like incorrect types), we recommened you use ",(0,s.kt)("inlineCode",{parentName:"p"},"tsc")," directly, or ",(0,s.kt)("inlineCode",{parentName:"p"},"ts-node")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"ts-jest")," for jest-testing."),(0,s.kt)("p",null,"If Babel is still needed, then read ",(0,s.kt)("a",{parentName:"p",href:"https://babeljs.io/docs/en/babel-preset-typescript"},"Babel TypeScript preset")," and install the following plugins:  "),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"To reproduce the typescript decorators (",(0,s.kt)("inlineCode",{parentName:"li"},"experimentalDecorators"),"), use ",(0,s.kt)("a",{parentName:"li",href:"https://babeljs.io/docs/en/babel-plugin-proposal-decorators"},(0,s.kt)("inlineCode",{parentName:"a"},"@babel/plugin-proposal-decorators"))),(0,s.kt)("li",{parentName:"ul"},"To reproduce the decorator metadata output (",(0,s.kt)("inlineCode",{parentName:"li"},"emitDecoratorMetadata"),"), use ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/leonardfactory/babel-plugin-transform-typescript-metadata"},(0,s.kt)("inlineCode",{parentName:"a"},"babel-plugin-transform-typescript-metadata")))),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},(0,s.kt)("inlineCode",{parentName:"p"},"emitDecoratorMetadata")," is not strictly needed, see ",(0,s.kt)("a",{parentName:"p",href:"/typegoose/docs/guides/use-without-emitDecoratorMetadata"},"Use Without ",(0,s.kt)("inlineCode",{parentName:"a"},"emitDecoratorMetadata"))))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  plugins: [\n    ['@babel/plugin-proposal-decorators', { legacy: true }],\n    'babel-plugin-transform-typescript-metadata',\n  ]\n}\n")),(0,s.kt)("h3",{id:"prop-on-get--set"},"prop on get & set"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"@prop")," cannot be applied to ",(0,s.kt)("inlineCode",{parentName:"p"},"get")," & ",(0,s.kt)("inlineCode",{parentName:"p"},"set")," (ES6), because virtuals do not accept options & ",(0,s.kt)("a",{parentName:"p",href:"https://mongoosejs.com/docs/advanced_schemas.html#creating-from-es6-classes-using-loadclass"},(0,s.kt)("inlineCode",{parentName:"a"},"schema.loadClass"))," wouldn't load these."))}d.isMDXComponent=!0}}]);