"use strict";(self.webpackChunktypegoose_website=self.webpackChunktypegoose_website||[]).push([[7653],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||r;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(7294),o=n(6010),r={tabItem:"tabItem_Ymn6"};function l(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r.tabItem,l),hidden:n},t)}},4866:function(e,t,n){n.d(t,{Z:function(){return N}});var a=n(7462),o=n(7294),r=n(6010),l=n(2466),i=n(6550),s=n(1980),u=n(7392),c=n(12);function m(e){return function(e){return o.Children.map(e,(function(e){if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function p(e){var t=e.values,n=e.children;return(0,o.useMemo)((function(){var e=null!=t?t:m(n);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function d(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,r=(0,i.k6)(),l=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,s._X)(l),(0,o.useCallback)((function(e){if(l){var t=new URLSearchParams(r.location.search);t.set(l,e),r.replace(Object.assign({},r.location,{search:t.toString()}))}}),[l,r])]}function g(e){var t,n,a,r,l=e.defaultValue,i=e.queryString,s=void 0!==i&&i,u=e.groupId,m=p(e),g=(0,o.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var o=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:l,tabValues:m})})),h=g[0],b=g[1],v=f({queryString:s,groupId:u}),y=v[0],k=v[1],N=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),n=(0,c.Nk)(t),a=n[0],r=n[1],[a,(0,o.useCallback)((function(e){t&&r.set(e)}),[t,r])]),C=N[0],w=N[1],O=function(){var e=null!=y?y:C;return d({value:e,tabValues:m})?e:null}();return(0,o.useLayoutEffect)((function(){O&&b(O)}),[O]),{selectedValue:h,selectValue:(0,o.useCallback)((function(e){if(!d({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);b(e),k(e),w(e)}),[k,w,m]),tabValues:m}}var h=n(2389),b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){var t=e.className,n=e.block,i=e.selectedValue,s=e.selectValue,u=e.tabValues,c=[],m=(0,l.o5)().blockElementScrollPositionUntilNextRender,p=function(e){var t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==i&&(m(t),s(a))},d=function(e){var t,n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":var a,o=c.indexOf(e.currentTarget)+1;n=null!=(a=c[o])?a:c[0];break;case"ArrowLeft":var r,l=c.indexOf(e.currentTarget)-1;n=null!=(r=c[l])?r:c[c.length-1]}null==(t=n)||t.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},u.map((function(e){var t=e.value,n=e.label,l=e.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:function(e){return c.push(e)},onKeyDown:d,onClick:p},l,{className:(0,r.Z)("tabs__item",b.tabItem,null==l?void 0:l.className,{"tabs__item--active":i===t})}),null!=n?n:t)})))}function y(e){var t=e.lazy,n=e.children,a=e.selectedValue;if(n=Array.isArray(n)?n:[n],t){var r=n.find((function(e){return e.props.value===a}));return r?(0,o.cloneElement)(r,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},n.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function k(e){var t=g(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",b.tabList)},o.createElement(v,(0,a.Z)({},e,t)),o.createElement(y,(0,a.Z)({},e,t)))}function N(e){var t=(0,h.Z)();return o.createElement(k,(0,a.Z)({key:String(t)},e))}},1693:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return u},metadata:function(){return m},toc:function(){return d}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),l=n(4866),i=n(5162),s=["components"],u={id:"models-with-same-name",title:"Models with same name"},c=void 0,m={unversionedId:"guides/advanced/models-with-same-name",id:"guides/advanced/models-with-same-name",title:"Models with same name",description:"This Guide shows all the possibilities for a model to use different names.",source:"@site/../docs/guides/advanced/models-with-same-name.mdx",sourceDirName:"guides/advanced",slug:"/guides/advanced/models-with-same-name",permalink:"/typegoose/docs/guides/advanced/models-with-same-name",draft:!1,editUrl:"https://github.com/typegoose/typegoose/edit/master/docs/../docs/guides/advanced/models-with-same-name.mdx",tags:[],version:"current",frontMatter:{id:"models-with-same-name",title:"Models with same name"},sidebar:"guides",previous:{title:"Array Types & Fields",permalink:"/typegoose/docs/guides/advanced/array-types"},next:{title:"Reference other Classes",permalink:"/typegoose/docs/guides/advanced/reference-other-classes"}},p={},d=[{value:"SchemaOptions collection",id:"schemaoptions-collection",level:2},{value:"Typegoose Custom Options &quot;customName&quot;",id:"typegoose-custom-options-customname",level:2},{value:"Disable Caching",id:"disable-caching",level:2},{value:"Notes",id:"notes",level:2}],f={toc:d},g="wrapper";function h(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.kt)(g,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This Guide shows all the possibilities for a model to use different names."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If Classes with the same name are wanted, these methods need to be used so that Typegoose can differentiate between them")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Since ",(0,r.kt)("inlineCode",{parentName:"p"},"7.6.0")," the name can also be changed in ",(0,r.kt)("inlineCode",{parentName:"p"},"getModelForClass")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"buildSchema")," calls.")),(0,r.kt)("h2",{id:"schemaoptions-collection"},"SchemaOptions collection"),(0,r.kt)("p",null,"For this to work, ",(0,r.kt)("inlineCode",{parentName:"p"},"{ options: { automaticName } }")," must be true."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"{ schemaOptions: { collection } }")," can be used to set a custom collection a model should use.\nUsing ",(0,r.kt)("inlineCode",{parentName:"p"},"{ schemaOptions: { collection } }")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"automaticName")," automatically adds a suffix of the collection to the model's name."),(0,r.kt)("p",null,"Example without ",(0,r.kt)("inlineCode",{parentName:"p"},"automaticName"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"@modelOptions({ schemaOptions: { collection: 'Something' } })\nclass MultiModel {}\n\nconst model = getModelForClass(MultiModel);\nexpect(model.modelName).to.be.equal('MultiModel');\n")),(0,r.kt)("p",null,"Example with ",(0,r.kt)("inlineCode",{parentName:"p"},"automaticName"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"@modelOptions({ schemaOptions: { collection: 'Something' }, options: { automaticName: true } })\nclass MultiModel {}\n\nconst model = getModelForClass(MultiModel);\nexpect(model.modelName).to.be.equal('MultiModel_Something');\n")),(0,r.kt)("h2",{id:"typegoose-custom-options-customname"},'Typegoose Custom Options "customName"'),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"{ options: { customName } }")," can be used to set a custom model name."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"@modelOptions({ options: { customName: 'CustomName' } })\nclass CustomNameOption {}\n\nconst model = getModelForClass(CustomNameOption);\nexpect(model.modelName).to.be.equal('CustomName');\n")),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"{ options: { customName } }")," is used with ",(0,r.kt)("inlineCode",{parentName:"p"},"{ options: { automaticName: true } }"),", then it will be used as a ",(0,r.kt)("em",{parentName:"p"},"suffix")," of the normal name."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"@modelOptions({ options: { customName: 'CustomName', automaticName: true } })\nclass CustomNameOption {}\n\nconst model = getModelForClass(CustomNameOption);\nexpect(model.modelName).to.be.equal('CustomNameOption_CustomName');\n")),(0,r.kt)("h2",{id:"disable-caching"},"Disable Caching"),(0,r.kt)("p",null,"Since Typegoose ",(0,r.kt)("inlineCode",{parentName:"p"},"10.2.0")," there is also the option of disabling the cache globally with ",(0,r.kt)("a",{parentName:"p",href:"/typegoose/docs/api/functions/set-global-options"},(0,r.kt)("inlineCode",{parentName:"a"},"setGlobalOptions")),"'s ",(0,r.kt)("a",{parentName:"p",href:"/typegoose/docs/api/functions/set-global-options#disableglobalcaching"},(0,r.kt)("inlineCode",{parentName:"a"},"disableGlobalCaching"))," or locally via ",(0,r.kt)("a",{parentName:"p",href:"/typegoose/docs/api/decorators/model-options#disablecaching"},(0,r.kt)("inlineCode",{parentName:"a"},"@modelOptions")),"."),(0,r.kt)(l.Z,{groupId:"caching-global-local",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"global",label:"Disable Cache globally",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { setGlobalOptions, getModelForClass, prop } from \"@typegoose/typegoose\";\n\nsetGlobalOptions({ globalOptions: { disableGlobalCaching: true } });\n\nclass Kitten {\n  @prop()\n  public name: string;\n}\n\nconst KittenModelDefault = getModelForClass(Kitten);\nconst KittenModelCon1 = getModelForClass(Kitten, { existingConnection: mongoose.createConnection() });\n\n// OR\n{\n  class Kitten {\n    @prop()\n    public name: string;\n  }\n\n  const KittenModel = getModelForClass(Kitten);\n  assert.ok(!!KittenModel.schema.path('name'));\n}\n{\n  class Kitten {\n    @prop()\n    public nameTag: string;\n  }\n\n  const KittenModel = getModelForClass(Kitten, { existingConnection: mongoose.createConnection() }); // still requires being defined on a different connection / mongoose instance\n  assert.ok(!!KittenModel.schema.path('nameTag'));\n}\n"))),(0,r.kt)(i.Z,{value:"local",label:"Disable Cache locally",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { modelOptions, getModelForClass, prop } from \"@typegoose/typegoose\";\n\n@modelOptions({ options: { disableCache: true } })\nclass Kitten {\n  @prop()\n  public name: string;\n}\n\nconst KittenModelDefault = getModelForClass(Kitten);\nconst KittenModelCon1 = getModelForClass(Kitten, { existingConnection: mongoose.createConnection() });\n\n// OR\n{\n  class Kitten {\n    @prop()\n    public name: string;\n  }\n\n  const KittenModel = getModelForClass(Kitten, { options: { disableCaching: true } });\n  assert.ok(!!KittenModel.schema.path('name'));\n}\n{\n  class Kitten {\n    @prop()\n    public nameTag: string;\n  }\n\n  const KittenModel = getModelForClass(Kitten, { existingConnection: mongoose.createConnection(), options: { disableCaching: true } }); // still requires being defined on a different connection / mongoose instance\n  assert.ok(!!KittenModel.schema.path('nameTag'));\n}\n")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Models still cannot be defined more than once in the same connection / mongoose instance.")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Setting the Cache to be disabled globally will make some functions that rely on it error, see ",(0,r.kt)("a",{parentName:"p",href:"/typegoose/docs/guides/error-warning-details#cache-disabled-e033"},(0,r.kt)("inlineCode",{parentName:"a"},"E033"))," and ",(0,r.kt)("a",{parentName:"p",href:"/typegoose/docs/api/functions/set-global-options#disableglobalcaching"},(0,r.kt)("inlineCode",{parentName:"a"},"disableGlobalCaching"))," which effects it will have.")),(0,r.kt)("h2",{id:"notes"},"Notes"),(0,r.kt)("p",null,"For more details on the usage of these naming features, please look into ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/typegoose/typegoose/blob/r6/master/test/tests/customName.test.ts"},"the tests that are written for them.")),(0,r.kt)("p",null,"See also ",(0,r.kt)("a",{parentName:"p",href:"/typegoose/docs/guides/advanced/name-generation"},"Typegoose's Name Generation")," for a complete (and hopefully simple) way to understand name generation."))}h.isMDXComponent=!0}}]);