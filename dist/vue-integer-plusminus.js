!function(e){var t={};function n(s){if(t[s])return t[s].exports;var o=t[s]={i:s,l:!1,exports:{}};return e[s].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(s,o,function(t){return e[t]}.bind(null,o));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="C:\\nodejs\\projects\\vue-integer-plusminus\\dist",n(n.s=5)}([function(module,exports,__webpack_require__){eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(2);\nif(typeof content === 'string') content = [[module.i, content, '']];\n// add the styles to the DOM\nvar update = __webpack_require__(4)(content, {});\nif(content.locals) module.exports = content.locals;\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/IntegerPlusminus.vue?./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options")},function(module,__webpack_exports__,__webpack_require__){"use strict";eval("/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_IntegerPlusminus_vue_vue_type_style_index_0_id_6d3208b0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);\n/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_IntegerPlusminus_vue_vue_type_style_index_0_id_6d3208b0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_IntegerPlusminus_vue_vue_type_style_index_0_id_6d3208b0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);\n/* unused harmony reexport * */\n /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_IntegerPlusminus_vue_vue_type_style_index_0_id_6d3208b0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./src/components/IntegerPlusminus.vue?")},function(module,exports,__webpack_require__){eval('exports = module.exports = __webpack_require__(3)();\nexports.push([module.i, ".int-pm[data-v-6d3208b0] {\\n  display: flex;\\n  text-align: center;\\n}\\n.int-pm .int-pm-value[data-v-6d3208b0] {\\n    border-width: 1px 0;\\n    border-color: #CCC;\\n    border-style: solid;\\n    padding: 0 10px;\\n}\\n.int-pm .int-pm-btn[data-v-6d3208b0] {\\n    border: 1px solid #CCC;\\n    background-color: #DDD;\\n    cursor: pointer;\\n    padding: 5px 10px;\\n}\\n.int-pm .int-pm-btn[data-v-6d3208b0]:hover {\\n      background-color: #CCC;\\n}\\n.int-pm .int-pm-btn.disabled[data-v-6d3208b0] {\\n      background-color: #EEE;\\n      color: #777;\\n      cursor: not-allowed;\\n}\\n.int-pm .int-pm-btn.disabled[data-v-6d3208b0]:hover {\\n        background-color: #EEE;\\n}\\n.int-pm.int-pm-vertical[data-v-6d3208b0] {\\n    flex-direction: column;\\n}\\n.int-pm.int-pm-vertical .int-pm-value[data-v-6d3208b0] {\\n      border-width: 0 1px;\\n      padding: 5px 10px;\\n}\\n", ""]);\n\n//# sourceURL=webpack:///./src/components/IntegerPlusminus.vue?./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options')},function(module,exports){eval('/*\r\n\tMIT License http://www.opensource.org/licenses/mit-license.php\r\n\tAuthor Tobias Koppers @sokra\r\n*/\r\n// css base code, injected by the css-loader\r\nmodule.exports = function() {\r\n\tvar list = [];\r\n\r\n\t// return the list of modules as css string\r\n\tlist.toString = function toString() {\r\n\t\tvar result = [];\r\n\t\tfor(var i = 0; i < this.length; i++) {\r\n\t\t\tvar item = this[i];\r\n\t\t\tif(item[2]) {\r\n\t\t\t\tresult.push("@media " + item[2] + "{" + item[1] + "}");\r\n\t\t\t} else {\r\n\t\t\t\tresult.push(item[1]);\r\n\t\t\t}\r\n\t\t}\r\n\t\treturn result.join("");\r\n\t};\r\n\r\n\t// import a list of modules into the list\r\n\tlist.i = function(modules, mediaQuery) {\r\n\t\tif(typeof modules === "string")\r\n\t\t\tmodules = [[null, modules, ""]];\r\n\t\tvar alreadyImportedModules = {};\r\n\t\tfor(var i = 0; i < this.length; i++) {\r\n\t\t\tvar id = this[i][0];\r\n\t\t\tif(typeof id === "number")\r\n\t\t\t\talreadyImportedModules[id] = true;\r\n\t\t}\r\n\t\tfor(i = 0; i < modules.length; i++) {\r\n\t\t\tvar item = modules[i];\r\n\t\t\t// skip already imported module\r\n\t\t\t// this implementation is not 100% perfect for weird media query combinations\r\n\t\t\t//  when a module is imported multiple times with different media queries.\r\n\t\t\t//  I hope this will never occur (Hey this way we have smaller bundles)\r\n\t\t\tif(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {\r\n\t\t\t\tif(mediaQuery && !item[2]) {\r\n\t\t\t\t\titem[2] = mediaQuery;\r\n\t\t\t\t} else if(mediaQuery) {\r\n\t\t\t\t\titem[2] = "(" + item[2] + ") and (" + mediaQuery + ")";\r\n\t\t\t\t}\r\n\t\t\t\tlist.push(item);\r\n\t\t\t}\r\n\t\t}\r\n\t};\r\n\treturn list;\r\n};\r\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/lib/css-base.js?')},function(module,exports){eval('/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\nvar stylesInDom = {},\n\tmemoize = function(fn) {\n\t\tvar memo;\n\t\treturn function () {\n\t\t\tif (typeof memo === "undefined") memo = fn.apply(this, arguments);\n\t\t\treturn memo;\n\t\t};\n\t},\n\tisOldIE = memoize(function() {\n\t\treturn /msie [6-9]\\b/.test(self.navigator.userAgent.toLowerCase());\n\t}),\n\tgetHeadElement = memoize(function () {\n\t\treturn document.head || document.getElementsByTagName("head")[0];\n\t}),\n\tsingletonElement = null,\n\tsingletonCounter = 0,\n\tstyleElementsInsertedAtTop = [];\n\nmodule.exports = function(list, options) {\n\tif(typeof DEBUG !== "undefined" && DEBUG) {\n\t\tif(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");\n\t}\n\n\toptions = options || {};\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (typeof options.singleton === "undefined") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the bottom of <head>.\n\tif (typeof options.insertAt === "undefined") options.insertAt = "bottom";\n\n\tvar styles = listToStyles(list);\n\taddStylesToDom(styles, options);\n\n\treturn function update(newList) {\n\t\tvar mayRemove = [];\n\t\tfor(var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\t\tfor(var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor(var j = 0; j < domStyle.parts.length; j++)\n\t\t\t\t\tdomStyle.parts[j]();\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n}\n\nfunction addStylesToDom(styles, options) {\n\tfor(var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles(list) {\n\tvar styles = [];\n\tvar newStyles = {};\n\tfor(var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\t\tif(!newStyles[id])\n\t\t\tstyles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse\n\t\t\tnewStyles[id].parts.push(part);\n\t}\n\treturn styles;\n}\n\nfunction insertStyleElement(options, styleElement) {\n\tvar head = getHeadElement();\n\tvar lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];\n\tif (options.insertAt === "top") {\n\t\tif(!lastStyleElementInsertedAtTop) {\n\t\t\thead.insertBefore(styleElement, head.firstChild);\n\t\t} else if(lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\thead.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\thead.appendChild(styleElement);\n\t\t}\n\t\tstyleElementsInsertedAtTop.push(styleElement);\n\t} else if (options.insertAt === "bottom") {\n\t\thead.appendChild(styleElement);\n\t} else {\n\t\tthrow new Error("Invalid value for parameter \'insertAt\'. Must be \'top\' or \'bottom\'.");\n\t}\n}\n\nfunction removeStyleElement(styleElement) {\n\tstyleElement.parentNode.removeChild(styleElement);\n\tvar idx = styleElementsInsertedAtTop.indexOf(styleElement);\n\tif(idx >= 0) {\n\t\tstyleElementsInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement(options) {\n\tvar styleElement = document.createElement("style");\n\tstyleElement.type = "text/css";\n\tinsertStyleElement(options, styleElement);\n\treturn styleElement;\n}\n\nfunction createLinkElement(options) {\n\tvar linkElement = document.createElement("link");\n\tlinkElement.rel = "stylesheet";\n\tinsertStyleElement(options, linkElement);\n\treturn linkElement;\n}\n\nfunction addStyle(obj, options) {\n\tvar styleElement, update, remove;\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\t\tstyleElement = singletonElement || (singletonElement = createStyleElement(options));\n\t\tupdate = applyToSingletonTag.bind(null, styleElement, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);\n\t} else if(obj.sourceMap &&\n\t\ttypeof URL === "function" &&\n\t\ttypeof URL.createObjectURL === "function" &&\n\t\ttypeof URL.revokeObjectURL === "function" &&\n\t\ttypeof Blob === "function" &&\n\t\ttypeof btoa === "function") {\n\t\tstyleElement = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, styleElement);\n\t\tremove = function() {\n\t\t\tremoveStyleElement(styleElement);\n\t\t\tif(styleElement.href)\n\t\t\t\tURL.revokeObjectURL(styleElement.href);\n\t\t};\n\t} else {\n\t\tstyleElement = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, styleElement);\n\t\tremove = function() {\n\t\t\tremoveStyleElement(styleElement);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle(newObj) {\n\t\tif(newObj) {\n\t\t\tif(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)\n\t\t\t\treturn;\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\t\treturn textStore.filter(Boolean).join(\'\\n\');\n\t};\n})();\n\nfunction applyToSingletonTag(styleElement, index, remove, obj) {\n\tvar css = remove ? "" : obj.css;\n\n\tif (styleElement.styleSheet) {\n\t\tstyleElement.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = styleElement.childNodes;\n\t\tif (childNodes[index]) styleElement.removeChild(childNodes[index]);\n\t\tif (childNodes.length) {\n\t\t\tstyleElement.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyleElement.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag(styleElement, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyleElement.setAttribute("media", media)\n\t}\n\n\tif(styleElement.styleSheet) {\n\t\tstyleElement.styleSheet.cssText = css;\n\t} else {\n\t\twhile(styleElement.firstChild) {\n\t\t\tstyleElement.removeChild(styleElement.firstChild);\n\t\t}\n\t\tstyleElement.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink(linkElement, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\tif(sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += "\\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";\n\t}\n\n\tvar blob = new Blob([css], { type: "text/css" });\n\n\tvar oldSrc = linkElement.href;\n\n\tlinkElement.href = URL.createObjectURL(blob);\n\n\tif(oldSrc)\n\t\tURL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/addStyles.js?')},function(module,__webpack_exports__,__webpack_require__){"use strict";eval('// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// EXPORTS\n__webpack_require__.d(__webpack_exports__, "IntegerPlusminus", function() { return /* reexport */ IntegerPlusminus; });\n\n// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/IntegerPlusminus.vue?vue&type=template&id=6d3208b0&scoped=true&\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    "div",\n    { staticClass: "int-pm", class: { "int-pm-vertical": _vm.vertical } },\n    [\n      _c(\n        "button",\n        {\n          staticClass: "int-pm-btn",\n          class: _vm.getBtnClass(true),\n          attrs: {\n            "aria-label": _vm.decrementAriaLabel,\n            disabled: _vm.disabled\n          },\n          on: {\n            click: function($event) {\n              _vm.vertical ? _vm.increment() : _vm.decrement()\n            }\n          }\n        },\n        [\n          _vm._t(_vm.vertical ? "increment" : "decrement", [\n            _vm._v(_vm._s(_vm.vertical ? "+" : "-"))\n          ])\n        ],\n        2\n      ),\n      _vm._v(" "),\n      _c(\n        "div",\n        {\n          ref: "spinbutton",\n          staticClass: "int-pm-value",\n          attrs: {\n            role: "spinbutton",\n            tabindex: "0",\n            "aria-valuenow": _vm.value,\n            "aria-valuemin": _vm.min,\n            "aria-valuemax": _vm.max,\n            "aria-label": _vm.spinButtonAriaLabel\n          }\n        },\n        [_vm._t("default", [_vm._v(_vm._s(_vm.intValue))])],\n        2\n      ),\n      _vm._v(" "),\n      _c("input", {\n        attrs: { type: "hidden", name: _vm.formName },\n        domProps: { value: _vm.intValue }\n      }),\n      _vm._v(" "),\n      _c(\n        "button",\n        {\n          staticClass: "int-pm-btn",\n          class: _vm.getBtnClass(false),\n          attrs: {\n            "aria-label": _vm.incrementAriaLabel,\n            disabled: _vm.disabled\n          },\n          on: {\n            click: function($event) {\n              _vm.vertical ? _vm.decrement() : _vm.increment()\n            }\n          }\n        },\n        [\n          _vm._t(_vm.vertical ? "decrement" : "increment", [\n            _vm._v(_vm._s(_vm.vertical ? "-" : "+"))\n          ])\n        ],\n        2\n      )\n    ]\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n// CONCATENATED MODULE: ./src/components/IntegerPlusminus.vue?vue&type=template&id=6d3208b0&scoped=true&\n\n// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3!./node_modules/vue-loader/lib??vue-loader-options!./src/components/IntegerPlusminus.vue?vue&type=script&lang=js&\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ var IntegerPlusminusvue_type_script_lang_js_ = ({\n  name: \'IntegerPlusminus\',\n  props: {\n    value: {\n      default: 0,\n      type: Number\n    },\n    min: {\n      default: 0,\n      type: Number\n    },\n    max: {\n      default: undefined,\n      type: Number\n    },\n    step: {\n      default: 1,\n      type: Number\n    },\n    stepIncrement: {\n      default: 0,\n      type: Number\n    },\n    stepDecrement: {\n      default: 0,\n      type: Number\n    },\n    vertical: {\n      default: false,\n      type: Boolean\n    },\n    incrementAriaLabel: {\n      default: null,\n      type: String\n    },\n    decrementAriaLabel: {\n      default: null,\n      type: String\n    },\n    spinButtonAriaLabel: {\n      default: null,\n      type: String\n    },\n    disabled: {\n      default: false,\n      type: Boolean\n    },\n    formName: {\n      default: \'integerPlusMinus\',\n      type: String\n    }\n  },\n  data: function data() {\n    return {\n      intValue: 0\n    };\n  },\n\n  computed: {\n    canIncrement: function canIncrement() {\n      if (this.disabled) return false;\n      return this.max === undefined || this.intValue + this.incrementValue <= this.max;\n    },\n    canDecrement: function canDecrement() {\n      if (this.disabled) return false;\n      return this.intValue - this.decrementValue >= this.min;\n    },\n    incrementValue: function incrementValue() {\n      return this.stepIncrement > 0 ? this.stepIncrement : this.step;\n    },\n    decrementValue: function decrementValue() {\n      return this.stepDecrement > 0 ? this.stepDecrement : this.step;\n    }\n  },\n  mounted: function mounted() {\n    window.addEventListener(\'keydown\', this.keyUp);\n  },\n\n  methods: {\n    keyUp: function keyUp(event) {\n      if (this.isSpinButtonFocused()) {\n        if (event.keyCode === 33 || event.keyCode === 38) {\n          // page up || up arrow\n          this.increment();\n          event.preventDefault();\n        }\n\n        if (event.keyCode === 34 || event.keyCode === 40) {\n          // page down || down arrow\n          this.decrement();\n          event.preventDefault();\n        }\n\n        if (event.keyCode === 36) {\n          // home button\n          this.setToMin();\n          event.preventDefault();\n        }\n\n        // if max, set to max\n        if (this.max !== undefined && event.keyCode === 35) {\n          // end button\n          this.setToMax();\n          event.preventDefault();\n        }\n      }\n    },\n    isSpinButtonFocused: function isSpinButtonFocused() {\n      return document.activeElement === this.$refs.spinbutton;\n    },\n    getBtnClass: function getBtnClass(firstBtn) {\n      var btnClass = \'int-pm-\';\n      if (firstBtn && !this.vertical || !firstBtn && this.vertical) {\n        btnClass += \'decrement\';\n        if (!this.canDecrement) btnClass += \' disabled\';\n      } else {\n        btnClass += \'increment\';\n        if (!this.canIncrement) btnClass += \' disabled\';\n      }\n      return btnClass;\n    },\n    setToMin: function setToMin() {\n      if (this.disabled) return;\n      this.intValue = this.min;\n      this.$emit(\'input\', this.intValue);\n    },\n    setToMax: function setToMax() {\n      if (this.disabled) return;\n      this.intValue = this.max;\n      this.$emit(\'input\', this.intValue);\n    },\n    increment: function increment() {\n      if (this.canIncrement) {\n        this.intValue = this.intValue + this.incrementValue;\n        this.$emit(\'ipm-increment\', this.intValue);\n        this.$emit(\'input\', this.intValue);\n      }\n    },\n    decrement: function decrement() {\n      if (this.canDecrement) {\n        this.intValue = this.intValue - this.decrementValue;\n        this.$emit(\'ipm-decrement\', this.intValue);\n        this.$emit(\'input\', this.intValue);\n      }\n    }\n  },\n  watch: {\n    value: {\n      handler: function handler(newVal, oldVal) {\n        this.intValue = newVal;\n      }\n    }\n  },\n  created: function created() {\n    this.intValue = this.value;\n    if (this.step < 1) this.step = 1;\n    if (this.stepIncrement < 0) this.stepIncrement = 0;\n    if (this.stepDecrement < 0) this.stepDecrement = 0;\n    if (this.max < this.min) this.max = undefined;\n  }\n});\n// CONCATENATED MODULE: ./src/components/IntegerPlusminus.vue?vue&type=script&lang=js&\n /* harmony default export */ var components_IntegerPlusminusvue_type_script_lang_js_ = (IntegerPlusminusvue_type_script_lang_js_); \n// EXTERNAL MODULE: ./src/components/IntegerPlusminus.vue?vue&type=style&index=0&id=6d3208b0&lang=scss&scoped=true&\nvar IntegerPlusminusvue_type_style_index_0_id_6d3208b0_lang_scss_scoped_true_ = __webpack_require__(1);\n\n// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js\n/* globals __VUE_SSR_CONTEXT__ */\n\n// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).\n// This module is a runtime utility for cleaner component module output and will\n// be included in the final webpack user bundle.\n\nfunction normalizeComponent (\n  scriptExports,\n  render,\n  staticRenderFns,\n  functionalTemplate,\n  injectStyles,\n  scopeId,\n  moduleIdentifier, /* server only */\n  shadowMode /* vue-cli only */\n) {\n  // Vue.extend constructor export interop\n  var options = typeof scriptExports === \'function\'\n    ? scriptExports.options\n    : scriptExports\n\n  // render functions\n  if (render) {\n    options.render = render\n    options.staticRenderFns = staticRenderFns\n    options._compiled = true\n  }\n\n  // functional template\n  if (functionalTemplate) {\n    options.functional = true\n  }\n\n  // scopedId\n  if (scopeId) {\n    options._scopeId = \'data-v-\' + scopeId\n  }\n\n  var hook\n  if (moduleIdentifier) { // server build\n    hook = function (context) {\n      // 2.3 injection\n      context =\n        context || // cached call\n        (this.$vnode && this.$vnode.ssrContext) || // stateful\n        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional\n      // 2.2 with runInNewContext: true\n      if (!context && typeof __VUE_SSR_CONTEXT__ !== \'undefined\') {\n        context = __VUE_SSR_CONTEXT__\n      }\n      // inject component styles\n      if (injectStyles) {\n        injectStyles.call(this, context)\n      }\n      // register component module identifier for async chunk inferrence\n      if (context && context._registeredComponents) {\n        context._registeredComponents.add(moduleIdentifier)\n      }\n    }\n    // used by ssr in case component is cached and beforeCreate\n    // never gets called\n    options._ssrRegister = hook\n  } else if (injectStyles) {\n    hook = shadowMode\n      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }\n      : injectStyles\n  }\n\n  if (hook) {\n    if (options.functional) {\n      // for template-only hot-reload because in that case the render fn doesn\'t\n      // go through the normalizer\n      options._injectStyles = hook\n      // register for functional component in vue file\n      var originalRender = options.render\n      options.render = function renderWithStyleInjection (h, context) {\n        hook.call(context)\n        return originalRender(h, context)\n      }\n    } else {\n      // inject component registration as beforeCreate hook\n      var existing = options.beforeCreate\n      options.beforeCreate = existing\n        ? [].concat(existing, hook)\n        : [hook]\n    }\n  }\n\n  return {\n    exports: scriptExports,\n    options: options\n  }\n}\n\n// CONCATENATED MODULE: ./src/components/IntegerPlusminus.vue\n\n\n\n\n\n\n/* normalize component */\n\nvar component = normalizeComponent(\n  components_IntegerPlusminusvue_type_script_lang_js_,\n  render,\n  staticRenderFns,\n  false,\n  null,\n  "6d3208b0",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = "src/components/IntegerPlusminus.vue"\n/* harmony default export */ var IntegerPlusminus = (component.exports);\n// CONCATENATED MODULE: ./src/main.js\n\n\n\n\n//# sourceURL=webpack:///./src/main.js_+_6_modules?')}]);