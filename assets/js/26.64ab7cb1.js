(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{59:function(t,n,s){"use strict";s.r(n);var a=s(0),o=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"vue-构造函数整理-全局api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-构造函数整理-全局api","aria-hidden":"true"}},[t._v("#")]),t._v(" Vue 构造函数整理-全局API")]),s("p",[t._v("这里是对 "),s("code",[t._v("Vue")]),t._v(" 构造函数全局API(静态属性和方法)的整理，便于看源码时查看方法的对应位置。")]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// initGlobalAPI")]),t._v("\nVue"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config\nVue"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\twarn"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\textend"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tmergeOptions"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tdefineReactive\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nVue"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token keyword"}},[t._v("set")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("set")]),t._v("\nVue"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token keyword"}},[t._v("delete")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" del\nVue"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nextTick "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" nextTick\nVue"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("options "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tcomponents"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tKeepAlive\n\t\t"),s("span",{attrs:{class:"token comment"}},[t._v("// Transition 和 TransitionGroup 组件在 runtime/index.js 文件中被添加")]),t._v("\n\t\t"),s("span",{attrs:{class:"token comment"}},[t._v("// Transition,")]),t._v("\n    \t"),s("span",{attrs:{class:"token comment"}},[t._v("// TransitionGroup")]),t._v("\n\t"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tdirectives"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Object"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("create")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("null")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{attrs:{class:"token comment"}},[t._v("// 在 runtime/index.js 文件中，为 directives 添加了两个平台化的指令 model 和 show")]),t._v("\n\t"),s("span",{attrs:{class:"token comment"}},[t._v("// directives:{")]),t._v("\n\t"),s("span",{attrs:{class:"token comment"}},[t._v("//\tmodel,")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("//\tshow")]),t._v("\n\t"),s("span",{attrs:{class:"token comment"}},[t._v("// },")]),t._v("\n\tfilters"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Object"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("create")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("null")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t_base"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Vue\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// initUse ***************** global-api/use.js")]),t._v("\nVue"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function-variable function"}},[t._v("use")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("plugin"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Function "),s("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" Object"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// initMixin ***************** global-api/mixin.js")]),t._v("\nVue"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function-variable function"}},[t._v("mixin")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mixin"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Object"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// initExtend ***************** global-api/extend.js")]),t._v("\nVue"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cid "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("0")]),t._v("\nVue"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function-variable function"}},[t._v("extend")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("extendOptions"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Object"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Function "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// initAssetRegisters ***************** global-api/assets.js")]),t._v("\nVue"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("component "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("\nVue"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("directive "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("\nVue"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function-variable function"}},[t._v("filter")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  id"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  definition"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Function "),s("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" Object\n"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Function "),s("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" Object "),s("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// expose FunctionalRenderContext for ssr runtime helper installation")]),t._v("\nObject"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("defineProperty")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Vue"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'FunctionalRenderContext'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  value"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" FunctionalRenderContext\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nVue"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("version "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'__VERSION__'")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// entry-runtime-with-compiler.js")]),t._v("\nVue"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("compile "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" compileToFunctions\n")])])])}],!1,null,null,null);n.default=o.exports}}]);