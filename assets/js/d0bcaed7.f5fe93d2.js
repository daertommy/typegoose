"use strict";(self.webpackChunktypegoose_website=self.webpackChunktypegoose_website||[]).push([[7298],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=o.createContext({}),p=function(e){var n=o.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return o.createElement(i.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},c=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),c=p(t),d=a,g=c["".concat(i,".").concat(d)]||c[d]||m[d]||s;return t?o.createElement(g,l(l({ref:n},u),{},{components:t})):o.createElement(g,l({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,l=new Array(s);l[0]=c;var r={};for(var i in n)hasOwnProperty.call(n,i)&&(r[i]=n[i]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var p=2;p<s;p++)l[p]=t[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}c.displayName="MDXCreateElement"},5162:function(e,n,t){t.d(n,{Z:function(){return l}});var o=t(7294),a=t(6010),s="tabItem_Ymn6";function l(e){var n=e.children,t=e.hidden,l=e.className;return o.createElement("div",{role:"tabpanel",className:(0,a.Z)(s,l),hidden:t},n)}},5488:function(e,n,t){t.d(n,{Z:function(){return d}});var o=t(7462),a=t(7294),s=t(6010),l=t(2389),r=t(7392),i=t(7094),p=t(2466),u="tabList__CuJ",m="tabItem_LNqP";function c(e){var n,t,l=e.lazy,c=e.block,d=e.defaultValue,g=e.values,f=e.groupId,y=e.className,h=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=g?g:h.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),k=(0,r.l)(b,(function(e,n){return e.value===n.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===d?d:null!=(n=null!=d?d:null==(t=h.find((function(e){return e.props.default})))?void 0:t.props.value)?n:h[0].props.value;if(null!==v&&!b.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var C=(0,i.U)(),w=C.tabGroupChoices,N=C.setTabGroupChoices,T=(0,a.useState)(v),I=T[0],x=T[1],S=[],M=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var O=w[f];null!=O&&O!==I&&b.some((function(e){return e.value===O}))&&x(O)}var F=function(e){var n=e.currentTarget,t=S.indexOf(n),o=b[t].value;o!==I&&(M(n),x(o),null!=f&&N(f,String(o)))},Z=function(e){var n,t=null;switch(e.key){case"Enter":F(e);break;case"ArrowRight":var o,a=S.indexOf(e.currentTarget)+1;t=null!=(o=S[a])?o:S[0];break;case"ArrowLeft":var s,l=S.indexOf(e.currentTarget)-1;t=null!=(s=S[l])?s:S[S.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:(0,s.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":c},y)},b.map((function(e){var n=e.value,t=e.label,l=e.attributes;return a.createElement("li",(0,o.Z)({role:"tab",tabIndex:I===n?0:-1,"aria-selected":I===n,key:n,ref:function(e){return S.push(e)},onKeyDown:Z,onClick:F},l,{className:(0,s.Z)("tabs__item",m,null==l?void 0:l.className,{"tabs__item--active":I===n})}),null!=t?t:n)}))),l?(0,a.cloneElement)(h.filter((function(e){return e.props.value===I}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==I})}))))}function d(e){var n=(0,l.Z)();return a.createElement(c,(0,o.Z)({key:String(n)},e))}},1076:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return d}});var o=t(7462),a=t(3366),s=(t(7294),t(3905)),l=t(5488),r=t(5162),i=["components"],p={id:"common-plugins",title:"Common Plugins"},u=void 0,m={unversionedId:"guides/integration-examples/common-plugins",id:"guides/integration-examples/common-plugins",title:"Common Plugins",description:"Typegoose supports mongoose plugins and this Guide will showcase how to use some plugins, more plugins or updating their versions can be done with a PR to typegoose's repository.",source:"@site/../docs/guides/integration-examples/common-plugins.mdx",sourceDirName:"guides/integration-examples",slug:"/guides/integration-examples/common-plugins",permalink:"/typegoose/docs/guides/integration-examples/common-plugins",draft:!1,editUrl:"https://github.com/typegoose/typegoose/edit/master/docs/../docs/guides/integration-examples/common-plugins.mdx",tags:[],version:"current",frontMatter:{id:"common-plugins",title:"Common Plugins"},sidebar:"guides",previous:{title:"Using with @deepkit/type",permalink:"/typegoose/docs/guides/integration-examples/using-with-deepkit-type"},next:{title:"Typegoose Logger",permalink:"/typegoose/docs/guides/advanced/logger"}},c={},d=[{value:"mongoose-autopopulate",id:"mongoose-autopopulate",level:2},{value:"mongoose-findorcreate",id:"mongoose-findorcreate",level:2},{value:"mongoose-sequence",id:"mongoose-sequence",level:2},{value:"@typegoose/auto-increment",id:"typegooseauto-increment",level:2},{value:"AutoIncrementSimple",id:"autoincrementsimple",level:3},{value:"AutoIncrementID",id:"autoincrementid",level:3}],g={toc:d};function f(e){var n=e.components,t=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,o.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Typegoose supports mongoose plugins and this Guide will showcase how to use some plugins, more plugins or updating their versions can be done with a PR to ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/typegoose/typegoose"},"typegoose's repository"),"."),(0,s.kt)("p",null,"If the Example does not have tabs for ",(0,s.kt)("inlineCode",{parentName:"p"},"esModuleInterop"),", then assume it is only written and tested for ",(0,s.kt)("inlineCode",{parentName:"p"},"esModuleInterop: false"),"."),(0,s.kt)("h2",{id:"mongoose-autopopulate"},"mongoose-autopopulate"),(0,s.kt)("p",null,"Last updated for:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-txt"},"@typegoose/typegoose@9.0.0\nmongoose-autopopulate@0.14.0\n")),(0,s.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"npm",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save mongoose-autopopulate\n"))),(0,s.kt)(r.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add mongoose-autopopulate\n")))),(0,s.kt)("p",null,"Typegoose has the prop option ",(0,s.kt)("inlineCode",{parentName:"p"},"autopopulate")," implemented, but it only has an effect, if ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/mongodb-js/mongoose-autopopulate"},(0,s.kt)("inlineCode",{parentName:"a"},"mongoose-autopopulate"))," is installed and used too."),(0,s.kt)(l.Z,{groupId:"esModuleInterop",mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"esModuleInterop-false",label:"esModuleInterop: false",default:!0,mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import * as mongoose from 'mongoose';\nimport * as autopopulate from 'mongoose-autopopulate';\nimport { plugin, prop, Ref, getModelForClass } from '@typegoose/typegoose';\n\n@plugin(autopopulate as any) // this is a dirty fix, because the types of this plugin don't work with \"esModuleInterop: false\"\nclass SomeClass {\n  @prop({ autopopulate: true, ref: 'SomeReferencedClass' })\n  public populateField: Ref<SomeReferencedClass>;\n}\n\nclass SomeReferencedClass {\n  // a dummy property is required, otherwise the class will equal to others\n  @prop()\n  public dummy?: string;\n}\n\nconst SomeClassModel = getModelForClass(SomeClass);\nconst SomeReferencedClassModel = getModelForClass(SomeReferencedClass);\n\n(async () => {\n  await mongoose.connect(`mongodb://localhost:27017/`, { dbName: 'guides' });\n\n  const reference = await SomeReferencedClassModel.create({ dummy: 'hello' });\n  const { _id: id } = await SomeClassModel.create({ populateField: reference } as SomeClass);\n\n  console.log(await SomeClassModel.findById(id).exec()); // output will be populated\n\n  await mongoose.disconnect();\n})();\n"))),(0,s.kt)(r.Z,{value:"esModuleInterop-true",label:"esModuleInterop: true",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import * as mongoose from 'mongoose';\nimport autopopulate from 'mongoose-autopopulate';\nimport { plugin, prop, Ref, getModelForClass } from '@typegoose/typegoose';\n\n@plugin(autopopulate)\nclass SomeClass {\n  @prop({ autopopulate: true, ref: 'SomeReferencedClass' })\n  public populateField: Ref<SomeReferencedClass>;\n}\n\nclass SomeReferencedClass {\n  // a dummy property is required, otherwise the class will equal to others\n  @prop()\n  public dummy?: string;\n}\n\nconst SomeClassModel = getModelForClass(SomeClass);\nconst SomeReferencedClassModel = getModelForClass(SomeReferencedClass);\n\n(async () => {\n  await mongoose.connect(`mongodb://localhost:27017/`, { dbName: 'guides' });\n\n  const reference = await SomeReferencedClassModel.create({ dummy: 'hello' });\n  const { _id: id } = await SomeClassModel.create({ populateField: reference } as SomeClass);\n\n  console.log(await SomeClassModel.findById(id).exec()); // output will be populated\n\n  await mongoose.disconnect();\n})();\n")))),(0,s.kt)("admonition",{type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"If you have a ",(0,s.kt)("inlineCode",{parentName:"p"},"ref")," which refers back to its own class/model, like having a User class with a ",(0,s.kt)("inlineCode",{parentName:"p"},"createdBy")," field referring back to User, then you'll need to set the ",(0,s.kt)("inlineCode",{parentName:"p"},"maxDepth")," prop of ",(0,s.kt)("inlineCode",{parentName:"p"},"autocomplete")," to 1. If you don't do this, Mongoose will do recursive calls to\nthe user collection 10 times, extremely delaying the output of the query. Below is an example of how to set ",(0,s.kt)("inlineCode",{parentName:"p"},"maxDepth"),".")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},'// the types of "autopopulate" may change depending on the tsconfig option "esModuleInterop"\n@plugin(autopopulate as any) // this is a dirty fix, because the types of this plugin don\'t work\nclass SomeClass {\n  @prop({ autopopulate: { maxDepth: 1 }, ref: \'SomeReferencedClass\' })\n  public populateField: Ref<SomeReferencedClass>;\n}\n')),(0,s.kt)("h2",{id:"mongoose-findorcreate"},"mongoose-findorcreate"),(0,s.kt)("p",null,"Last updated for:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-txt"},"@typegoose/typegoose@9.0.0\nmongoose-findorcreate@3.0.0\n")),(0,s.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"npm",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save mongoose-findorcreate\n"))),(0,s.kt)(r.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add mongoose-findorcreate\n")))),(0,s.kt)("p",null,"Typegoose has a default class for ",(0,s.kt)("inlineCode",{parentName:"p"},"mongoose-findorcreate")," that has all the types it needs. Here's how to use it:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { DocumentType, getModelForClass, plugin, prop, defaultClasses } from '@typegoose/typegoose';\nimport * as mongoose from 'mongoose';\nimport * as findorcreate from 'mongoose-findorcreate';\n\n@plugin(findorcreate)\nclass SomeClass extends defaultClasses.FindOrCreate {\n  @prop()\n  public someField!: string;\n}\n\nconst SomeClassModel = getModelForClass(SomeClass);\n\n(async () => {\n  await mongoose.connect(`mongodb://localhost:27017/`, { dbName: 'guides' });\n\n  console.log(await SomeClassModel.findOrCreate({ someField: 'Hello' }));\n  console.log(await SomeClassModel.findOrCreate({ someField: 'Hello' })); // both will give the same output\n\n  await mongoose.disconnect();\n})();\n")),(0,s.kt)("h2",{id:"mongoose-sequence"},"mongoose-sequence"),(0,s.kt)("p",null,"Last updated for:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-txt"},"@typegoose/typegoose@7.1.0\nmongoose-sequence@5.0.0\n")),(0,s.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"npm",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save mongoose-sequence\n"))),(0,s.kt)(r.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add mongoose-sequence\n")))),(0,s.kt)("p",null,"To use ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/ramiel/mongoose-sequence"},(0,s.kt)("inlineCode",{parentName:"a"},"mongoose-sequence")),", import the plugin and use it like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import AutoIncrementFactory from 'mongoose-sequence';\n\n// AutoIncrement now is the instance\nconst AutoIncrement = AutoIncrementFactory(mongoose);\n\n@plugin(AutoIncrement, { inc_field: '_id', start_seq: 200 })\nclass SomeClass extends defaultClasses.Base<number> {\n  @prop()\n  public _id: number;\n}\n\n// The Plugin options can be applied too\n@plugin<mongoose.SequenceOptions>(AutoIncrement, { inc_field: '_id' }) // Note: \"start_seq\" is not in the \"SequenceOptions\" type\nclass SomeClass extends defaultClasses.Base<number> {\n  @prop()\n  public _id!: number;\n}\n")),(0,s.kt)("p",null,"For more details, see ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/ramiel/mongoose-sequence/issues/83"},"this issue"),"."),(0,s.kt)("h2",{id:"typegooseauto-increment"},"@typegoose/auto-increment"),(0,s.kt)("p",null,"Last updated for:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-txt"},"@typegoose/typegoose@9.7.0\n@typegoose/auto-increment@1.2.0\n")),(0,s.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"npm",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @typegoose/auto-increment\n"))),(0,s.kt)(r.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @typegoose/auto-increment\n")))),(0,s.kt)("p",null,"The Typegoose project provides an ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/typegoose/auto-increment"},(0,s.kt)("inlineCode",{parentName:"a"},"auto-increment")," plugin")," for Mongoose. Here is how to use it:"),(0,s.kt)("h3",{id:"autoincrementsimple"},"AutoIncrementSimple"),(0,s.kt)("p",null,"Always increments the field on each save"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"@plugin(AutoIncrementSimple, [{ field: 'someIncrementedField' }])\nclass SomeClass {\n  @prop() // does not need to be empty\n  public someIncrementedField: number;\n}\n\nconst SomeModel = getModelForClass(SomeClass);\n\nconst doc = await SomeModel.create({ someIncrementedField: 10 });\n\nawait doc.save(); // someIncrementedField will be 11\n")),(0,s.kt)("h3",{id:"autoincrementid"},"AutoIncrementID"),(0,s.kt)("p",null,"Only increases the field if the document is ",(0,s.kt)("em",{parentName:"p"},"new")," and the counter is stored in a counter-collection (default field: ",(0,s.kt)("inlineCode",{parentName:"p"},"_id"),")."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"@plugin(AutoIncrementID, {})\nclass SomeClass {\n  @prop()\n  public _id: number;\n\n  @prop() // does not need to be empty\n  public someIncrementedField: number;\n}\n\nconst SomeModel = getModelForClass(SomeClass);\n\nconst doc = await SomeModel.create({ someIncrementedField: 10 }); // _id will be 1\n")),(0,s.kt)("hr",null),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"Some or all of the listed plugins might not have a ",(0,s.kt)("inlineCode",{parentName:"p"},"@types")," package, so types have to be mostly manually declared.")))}f.isMDXComponent=!0}}]);