(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"./.storybook/preview.js":function(module,exports,__webpack_require__){"use strict";__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(exports,"__esModule",{value:!0}),exports.parameters=void 0;exports.parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}}},"./.storybook/preview.js-generated-config-entry.js":function(module,exports,__webpack_require__){"use strict";__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.weak-map.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _clientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/index.js"),_clientLogger=__webpack_require__("./node_modules/@storybook/client-logger/dist/esm/index.js"),config=function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}(__webpack_require__("./.storybook/preview.js"));function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(config).forEach((function(key){var value=config[key];switch(key){case"args":case"argTypes":return _clientLogger.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return(0,_clientApi.addDecorator)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return(0,_clientApi.addLoader)(loader,!1)}));case"parameters":return(0,_clientApi.addParameters)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return(0,_clientApi.addArgTypesEnhancer)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return(0,_clientApi.addArgsEnhancer)(enhancer)}));case"render":return(0,_clientApi.setGlobalRender)(value);case"globals":case"globalTypes":var v={};return v[key]=value,(0,_clientApi.addParameters)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./generated-stories-entry.js":function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__("./node_modules/@storybook/web-components/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$")],module,!1)}).call(this,__webpack_require__("./node_modules/webpack/buildin/module.js")(module))},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$":function(module,exports,__webpack_require__){var map={"./remark-element/remark-element.stories.ts":"./src/remark-element/remark-element.stories.ts"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$"},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$":function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"./src/remark-element/atom-one-dark.css.ts":function(module,exports,__webpack_require__){"use strict";__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;exports.default="\n\n.hljs {\n  color: #abb2bf;\n  background: #282c34;\n  display: block;\n}\n\n.hljs-comment,\n.hljs-quote {\n  color: #5c6370;\n  font-style: italic;\n}\n\n.hljs-doctag,\n.hljs-keyword,\n.hljs-formula {\n  color: #c678dd;\n}\n\n.hljs-section,\n.hljs-name,\n.hljs-selector-tag,\n.hljs-deletion,\n.hljs-subst {\n  color: #e06c75;\n}\n\n.hljs-literal {\n  color: #56b6c2;\n}\n\n.hljs-string,\n.hljs-regexp,\n.hljs-addition,\n.hljs-attribute,\n.hljs-meta .hljs-string {\n  color: #98c379;\n}\n\n.hljs-attr,\n.hljs-variable,\n.hljs-template-variable,\n.hljs-type,\n.hljs-selector-class,\n.hljs-selector-attr,\n.hljs-selector-pseudo,\n.hljs-number {\n  color: #d19a66;\n}\n\n.hljs-symbol,\n.hljs-bullet,\n.hljs-link,\n.hljs-meta,\n.hljs-selector-id,\n.hljs-title {\n  color: #61aeee;\n}\n\n.hljs-built_in,\n.hljs-title.class_,\n.hljs-class .hljs-title {\n  color: #e6c07b;\n}\n\n.hljs-emphasis {\n  font-style: italic;\n}\n\n.hljs-strong {\n  font-weight: bold;\n}\n\n.hljs-link {\n  text-decoration: underline;\n}\n"},"./src/remark-element/atom-one-light.css.ts":function(module,exports,__webpack_require__){"use strict";__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;exports.default="\n.hljs {\n  color: #383a42;\n  background: #fafafa;\n  display: block;\n}\n\n.hljs-comment,\n.hljs-quote {\n  color: #a0a1a7;\n  font-style: italic;\n}\n\n.hljs-doctag,\n.hljs-keyword,\n.hljs-formula {\n  color: #a626a4;\n}\n\n.hljs-section,\n.hljs-name,\n.hljs-selector-tag,\n.hljs-deletion,\n.hljs-subst {\n  color: #e45649;\n}\n\n.hljs-literal {\n  color: #0184bb;\n}\n\n.hljs-string,\n.hljs-regexp,\n.hljs-addition,\n.hljs-attribute,\n.hljs-meta .hljs-string {\n  color: #50a14f;\n}\n\n.hljs-attr,\n.hljs-variable,\n.hljs-template-variable,\n.hljs-type,\n.hljs-selector-class,\n.hljs-selector-attr,\n.hljs-selector-pseudo,\n.hljs-number {\n  color: #986801;\n}\n\n.hljs-symbol,\n.hljs-bullet,\n.hljs-link,\n.hljs-meta,\n.hljs-selector-id,\n.hljs-title {\n  color: #4078f2;\n}\n\n.hljs-built_in,\n.hljs-title.class_,\n.hljs-class .hljs-title {\n  color: #c18401;\n}\n\n.hljs-emphasis {\n  font-style: italic;\n}\n\n.hljs-strong {\n  font-weight: bold;\n}\n\n.hljs-link {\n  text-decoration: underline;\n}\n"},"./src/remark-element/github.css.ts":function(module,exports,__webpack_require__){"use strict";__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;exports.default="\n.hljs {\n  color: #24292e;\n  background: #ffffff;\n  display: block;\n}\n\n.hljs-doctag,\n.hljs-keyword,\n.hljs-meta .hljs-keyword,\n.hljs-template-tag,\n.hljs-template-variable,\n.hljs-type,\n.hljs-variable.language_ {\n/* prettylights-syntax-keyword */\ncolor: #d73a49;\n}\n\n.hljs-title,\n.hljs-title.class_,\n.hljs-title.class_.inherited__,\n.hljs-title.function_ {\n/* prettylights-syntax-entity */\ncolor: #6f42c1;\n}\n\n.hljs-attr,\n.hljs-attribute,\n.hljs-literal,\n.hljs-meta,\n.hljs-number,\n.hljs-operator,\n.hljs-variable,\n.hljs-selector-attr,\n.hljs-selector-class,\n.hljs-selector-id {\n/* prettylights-syntax-constant */\ncolor: #005cc5;\n}\n\n.hljs-regexp,\n.hljs-string,\n.hljs-meta .hljs-string {\n/* prettylights-syntax-string */\ncolor: #032f62;\n}\n\n.hljs-built_in,\n.hljs-symbol {\n/* prettylights-syntax-variable */\ncolor: #e36209;\n}\n\n.hljs-comment,\n.hljs-code,\n.hljs-formula {\n/* prettylights-syntax-comment */\ncolor: #6a737d;\n}\n\n.hljs-name,\n.hljs-quote,\n.hljs-selector-tag,\n.hljs-selector-pseudo {\n/* prettylights-syntax-entity-tag */\ncolor: #22863a;\n}\n\n.hljs-subst {\n/* prettylights-syntax-storage-modifier-import */\ncolor: #24292e;\n}\n\n.hljs-section {\n/* prettylights-syntax-markup-heading */\ncolor: #005cc5;\nfont-weight: bold;\n}\n\n.hljs-bullet {\n/* prettylights-syntax-markup-list */\ncolor: #735c0f;\n}\n\n.hljs-emphasis {\n/* prettylights-syntax-markup-italic */\ncolor: #24292e;\nfont-style: italic;\n}\n\n.hljs-strong {\n/* prettylights-syntax-markup-bold */\ncolor: #24292e;\nfont-weight: bold;\n}\n\n.hljs-addition {\n/* prettylights-syntax-markup-inserted */\ncolor: #22863a;\nbackground-color: #f0fff4;\n}\n\n.hljs-deletion {\n/* prettylights-syntax-markup-deleted */\ncolor: #b31d28;\nbackground-color: #ffeef0;\n}\n\n.hljs-char.escape_,\n.hljs-link,\n.hljs-params,\n.hljs-property,\n.hljs-punctuation,\n.hljs-tag {\n/* purposely ignored */\n}\n"},"./src/remark-element/remark-element.stories.ts":function(module,exports,__webpack_require__){"use strict";var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.WithInnerHTMLChart=exports.WithChart=exports.WithBlock=exports.Basic=void 0,__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");var _templateObject,_taggedTemplateLiteralLoose2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/taggedTemplateLiteralLoose.js")),_litHtml=__webpack_require__("./node_modules/lit-html/lit-html.js"),_unsafeHtml=__webpack_require__("./node_modules/lit/directives/unsafe-html.js");__webpack_require__("./src/remark-element/remark-element.ts");exports.default={title:"@gsmlg/remark-element",argTypes:{}};var Template=function(_ref){var debug=_ref.debug,innerHTML=_ref.innerHTML;return(0,_litHtml.html)(_templateObject||(_templateObject=(0,_taggedTemplateLiteralLoose2.default)(["<remark-element ?debug=","\n    >","</remark-element\n  >"])),debug,(0,_unsafeHtml.unsafeHTML)(innerHTML))},Basic=Template.bind({});exports.Basic=Basic,Basic.args={debug:!0,innerHTML:"\n# RemarkElement\nRender *markdown*"};var WithBlock=Template.bind({});exports.WithBlock=WithBlock,WithBlock.args={debug:!0,innerHTML:"\n### JavaScript code\n\n```js\nconst Hello = (who = 'world') => 'Hello ' + whoe;\nconsole.log(Hello());\nconsole.log(Hello('Josh'));\n```\n\n"};var WithChart=Template.bind({});exports.WithChart=WithChart,WithChart.args={debug:!0,innerHTML:"\n### Mermaid Chart\n\n```mermaid\ngraph TD;\n    A--\x3eB;\n    A--\x3eC;\n    B--\x3eD;\n    C--\x3eD;\n```\n"};var WithInnerHTMLChart=Template.bind({});exports.WithInnerHTMLChart=WithInnerHTMLChart,WithInnerHTMLChart.args={debug:!0,innerHTML:"\n### Mermaid Chart\n\n```mermaid\ngraph LR;\n    A--\x3eB;\n    A--\x3eC;\n    B--\x3eD;\n    C--\x3eD;\n```\n"},Basic.parameters=Object.assign({storySource:{source:"({ debug, innerHTML }) =>\n  html`<remark-element ?debug=${debug}\n    >${unsafeHTML(innerHTML)}</remark-element\n  >`"}},Basic.parameters),WithBlock.parameters=Object.assign({storySource:{source:"({ debug, innerHTML }) =>\n  html`<remark-element ?debug=${debug}\n    >${unsafeHTML(innerHTML)}</remark-element\n  >`"}},WithBlock.parameters),WithChart.parameters=Object.assign({storySource:{source:"({ debug, innerHTML }) =>\n  html`<remark-element ?debug=${debug}\n    >${unsafeHTML(innerHTML)}</remark-element\n  >`"}},WithChart.parameters),WithInnerHTMLChart.parameters=Object.assign({storySource:{source:"({ debug, innerHTML }) =>\n  html`<remark-element ?debug=${debug}\n    >${unsafeHTML(innerHTML)}</remark-element\n  >`"}},WithInnerHTMLChart.parameters)},"./src/remark-element/remark-element.ts":function(module,exports,__webpack_require__){"use strict";__webpack_require__("./node_modules/core-js/modules/es.reflect.construct.js");var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");__webpack_require__("./node_modules/core-js/modules/es.date.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.string.replace.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.exec.js");var _dec,_dec2,_class,_class2,_descriptor,_class3,_templateObject,_templateObject2,_taggedTemplateLiteralLoose2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/taggedTemplateLiteralLoose.js")),_initializerDefineProperty2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/initializerDefineProperty.js")),_classCallCheck2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/classCallCheck.js")),_createClass2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/createClass.js")),_assertThisInitialized2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/assertThisInitialized.js")),_get2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/get.js")),_inherits2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/inherits.js")),_possibleConstructorReturn2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),_getPrototypeOf2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),_applyDecoratedDescriptor2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/applyDecoratedDescriptor.js")),_lit=(_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/initializerWarningHelper.js")),__webpack_require__("./node_modules/lit/index.js")),_decorators=__webpack_require__("./node_modules/lit/decorators.js"),_until=__webpack_require__("./node_modules/lit/directives/until.js"),_unsafeHtml=__webpack_require__("./node_modules/lit/directives/unsafe-html.js"),_unified=__webpack_require__("./node_modules/unified/index.js"),_remarkParse=_interopRequireDefault(__webpack_require__("./node_modules/remark-parse/index.js")),_remarkGfm=_interopRequireDefault(__webpack_require__("./node_modules/remark-gfm/index.js")),_remarkRehype=_interopRequireDefault(__webpack_require__("./node_modules/remark-rehype/index.js")),_rehypeStringify=_interopRequireDefault(__webpack_require__("./node_modules/rehype-stringify/index.js")),_rehypeHighlight=_interopRequireDefault(__webpack_require__("./node_modules/rehype-highlight/index.js")),_mermaid=_interopRequireDefault(__webpack_require__("./node_modules/mermaid/dist/mermaid.esm.min.mjs")),_github=_interopRequireDefault(__webpack_require__("./src/remark-element/github.css.ts")),_atomOneLight=_interopRequireDefault(__webpack_require__("./src/remark-element/atom-one-light.css.ts")),_atomOneDark=_interopRequireDefault(__webpack_require__("./src/remark-element/atom-one-dark.css.ts"));function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var result,Super=(0,_getPrototypeOf2.default)(Derived);if(hasNativeReflectConstruct){var NewTarget=(0,_getPrototypeOf2.default)(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return(0,_possibleConstructorReturn2.default)(this,result)}}_dec=(0,_decorators.customElement)("remark-element"),_dec2=(0,_decorators.property)({type:Boolean,attribute:!0,reflect:!0}),_dec((_class3=function(_LitElement){(0,_inherits2.default)(RemarkElement,_LitElement);var _super=_createSuper(RemarkElement);function RemarkElement(){var _this;return(0,_classCallCheck2.default)(this,RemarkElement),_this=_super.call(this),(0,_initializerDefineProperty2.default)(_this,"debug",_descriptor,(0,_assertThisInitialized2.default)(_this)),_this._mid=void 0,_this._fragement=void 0,_this.observer=void 0,_mermaid.default.initialize({startOnLoad:!1}),_this._mid=_this.id||"t"+ +new Date,_this._fragement="",_this.observer=new MutationObserver((function(){_this.requestUpdate()})),_this.observer.observe((0,_assertThisInitialized2.default)(_this),{subtree:!0,childList:!0,attributes:!0}),_this}return(0,_createClass2.default)(RemarkElement,[{key:"_generate",value:function _generate(){var _this2=this,content=this.innerHTML;return(0,_unified.unified)().use(_remarkParse.default).use(_remarkGfm.default).use(_remarkRehype.default).use(_rehypeHighlight.default,{ignoreMissing:!0}).use(_rehypeStringify.default).process(content).then((function(vFile){return _this2._fragement=String(vFile),(0,_unsafeHtml.unsafeHTML)(String(vFile))}))}},{key:"updateMermaidChart",value:function updateMermaidChart(){var _this3=this,els=this.renderRoot.querySelectorAll("code.language-mermaid"),fragement=document.createElement("div");fragement.innerHTML=this._fragement;for(var contentEls=fragement.querySelectorAll("code.language-mermaid"),_loop=function(i){var boxId="mermaid-"+_this3._mid+"-"+i,box=document.getElementById(boxId);box||((box=document.createElement("div")).id=boxId,document.body.append(box),box.style.display="none");var el=els[i],txt=contentEls[i].innerText;_this3.debug&&console.log(txt);var decodedTxt=_this3._decodeEntities(txt);_this3.debug&&console.log(decodedTxt),_mermaid.default.mermaidAPI.render(box.id,decodedTxt,(function cb(svgGraph){_this3.debug&&console.log(svgGraph),el.innerHTML=svgGraph}))},i=0,len=els.length;i<len;i+=1)_loop(i)}},{key:"updated",value:function updated(){var _this4=this;requestAnimationFrame((function(){return _this4.updateMermaidChart()}))}},{key:"attributeChangedCallback",value:function attributeChangedCallback(name,old,value){(0,_get2.default)((0,_getPrototypeOf2.default)(RemarkElement.prototype),"attributeChangedCallback",this).call(this,name,old,value),this.debug&&console.log("attribute change: ",name,old,value),"debug"===name&&this.requestUpdate("debug",old)}},{key:"render",value:function render(){var md=this._generate();return(0,_lit.html)(_templateObject||(_templateObject=(0,_taggedTemplateLiteralLoose2.default)(["",""])),(0,_until.until)(md))}},{key:"_decodeEntities",value:function _decodeEntities(txt){return txt.replace(/&gt;/gi,">").replace(/&lt;/gi,"<")}}]),RemarkElement}(_lit.LitElement),_class3.styles=(0,_lit.css)(_templateObject2||(_templateObject2=(0,_taggedTemplateLiteralLoose2.default)(["\n    :host {\n      display: flex;\n      flex-direction: column;\n    }\n    li > * {\n      display: inline;\n    }\n    li > ul {\n      display: block;\n    }\n    ","\n    @media (prefers-color-scheme: dark) {\n      ","\n    }\n    @media (prefers-color-scheme: light) {\n      ","\n    }\n  "])),(0,_lit.unsafeCSS)(_github.default),(0,_lit.unsafeCSS)(_atomOneDark.default),(0,_lit.unsafeCSS)(_atomOneLight.default)),_class2=_class3,_descriptor=(0,_applyDecoratedDescriptor2.default)(_class2.prototype,"debug",[_dec2],{configurable:!0,enumerable:!0,writable:!0,initializer:function initializer(){return!1}}),_class=_class2))},"./storybook-init-framework-entry.js":function(module,exports,__webpack_require__){"use strict";__webpack_require__("./node_modules/@storybook/web-components/dist/esm/client/index.js")},0:function(module,exports,__webpack_require__){__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_require__("./storybook-init-framework-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/common/config.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/web-components/config.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/web-components/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-links/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/preset/addArgs.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addParameter.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-measure/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./.storybook/preview.js-generated-config-entry.js"),module.exports=__webpack_require__("./generated-stories-entry.js")},1:function(module,exports){}},[[0,6,7]]]);