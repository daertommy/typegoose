"use strict";(self.webpackChunktypegoose_website=self.webpackChunktypegoose_website||[]).push([[8419],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4306:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={id:"is-document",title:"isDocument & isDocumentArray"},p=void 0,l={unversionedId:"api/functions/typeguards/is-document",id:"api/functions/typeguards/is-document",title:"isDocument & isDocumentArray",description:"isDocument",source:"@site/../docs/api/functions/typeguards/isDocument.md",sourceDirName:"api/functions/typeguards",slug:"/api/functions/typeguards/is-document",permalink:"/typegoose/versions/11.x/docs/api/functions/typeguards/is-document",draft:!1,editUrl:"https://github.com/typegoose/typegoose/edit/old/11.x/docs/../docs/api/functions/typeguards/isDocument.md",tags:[],version:"current",frontMatter:{id:"is-document",title:"isDocument & isDocumentArray"},sidebar:"docs",previous:{title:"getName",permalink:"/typegoose/versions/11.x/docs/api/functions/get-name"},next:{title:"isRefType & isRefTypeArray",permalink:"/typegoose/versions/11.x/docs/api/functions/typeguards/is-ref-type"}},c={},u=[{value:"isDocument",id:"isdocument",level:2},{value:"Example",id:"isdocument-example",level:3},{value:"isDocumentArray",id:"isdocumentarray",level:2},{value:"Overload 1",id:"isdocumentarray-overload1",level:3},{value:"Overload 2",id:"isdocumentarray-overload2",level:3},{value:"Description",id:"isdocumentarray-description",level:3},{value:"Example",id:"isdocumentarray-example",level:3}],m={toc:u},d="wrapper";function f(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"isdocument"},"isDocument"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Typings:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"function isDocument<T, S extends RefType>(doc: Ref<T, S> | null | undefined): doc is DocumentType<T>\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Parameters:")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"doc")," ",(0,o.kt)("span",{class:"badge badge--secondary"},"Required")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"Ref<T, S>")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The Document / Property to check")))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"isDocument")," checks if the Input (",(0,o.kt)("inlineCode",{parentName:"p"},"doc"),") is a instance of ",(0,o.kt)("inlineCode",{parentName:"p"},"mongoose.Model")," which makes it a Document."),(0,o.kt)("h3",{id:"isdocument-example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'class Cat {\n  @prop({ ref: \'Cat\' })\n  public partner: Ref<Cat>;\n\n  // this example could be smaller, but for demonstation purposes this is a longer version\n  public hasPartner(): boolean {\n    if (isDocument(this.partner)) {\n      // "this.partner" now has the type of "DocumentType<Cat>"\n      return true;\n    } else {\n      return false;\n    }\n  }\n}\n')),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Alternatively, since mongoose 6.4.0, ",(0,o.kt)("a",{parentName:"p",href:"https://mongoosejs.com/docs/api/document.html#document_Document-$assertPopulated"},(0,o.kt)("inlineCode",{parentName:"a"},"$assertPopulated"))," can also be used, but that function does not act as a type-guard only at runtime to actually check if a full path is populated.")),(0,o.kt)("h2",{id:"isdocumentarray"},"isDocumentArray"),(0,o.kt)("h3",{id:"isdocumentarray-overload1"},"Overload 1"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Typings:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"function isDocumentArray<T, S extends RefType>(\n  docs: mongoose.Types.Array<Ref<T, S>> | undefined\n): docs is mongoose.Types.Array<DocumentType<NonNullable<T>>>;\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Parameters:")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"docs")," ",(0,o.kt)("span",{class:"badge badge--secondary"},"Required")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"mongoose.Types.Array<Ref<T, S>>")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The Array to check all documents in")))),(0,o.kt)("h3",{id:"isdocumentarray-overload2"},"Overload 2"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Typings:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"function isDocumentArray<T, S extends RefType>(docs: Ref<T, S>[] | undefined): docs is DocumentType<NonNullable<T>>[];\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Parameters:")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"docs")," ",(0,o.kt)("span",{class:"badge badge--secondary"},"Required")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"Ref<T, S>[]")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The Array to check all documents in")))),(0,o.kt)("h3",{id:"isdocumentarray-description"},"Description"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"isDocumentArray")," checks if ",(0,o.kt)("strong",{parentName:"p"},"all")," the items in the given Array (",(0,o.kt)("inlineCode",{parentName:"p"},"docs"),") are a instance of ",(0,o.kt)("inlineCode",{parentName:"p"},"mongoose.Model"),".",(0,o.kt)("br",{parentName:"p"}),"\n","This function calls ",(0,o.kt)("a",{parentName:"p",href:"#isdocument"},(0,o.kt)("inlineCode",{parentName:"a"},"isDocument"))," for each item in the array.",(0,o.kt)("br",{parentName:"p"}),"\n","Only returns ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," if ",(0,o.kt)("strong",{parentName:"p"},"all")," items in the array return ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,o.kt)("h3",{id:"isdocumentarray-example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'class Cat {\n  @prop({ ref: \'Cat\' })\n  public kittens: Ref<Cat>;\n\n  // this example could be smaller, but for demonstation purposes this is a longer version\n  public areAllKittensExisting(): boolean {\n    if (isDocumentArray(this.kittens)) {\n      // "this.kittens" now has the type of "DocumentType<Cat>[]"\n      return true;\n    } else {\n      return false;\n    }\n  }\n}\n')))}f.isMDXComponent=!0}}]);