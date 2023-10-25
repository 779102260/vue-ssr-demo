(self["webpackChunksrr_0_1"] = self["webpackChunksrr_0_1"] || []).push([["src_pages_Home_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/pages/Home.vue?vue&type=script&setup=true&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/pages/Home.vue?vue&type=script&setup=true&lang=js& ***!
  \********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/assign */ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/assign.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");

var __default__ = {
  // 自定义，代替serverPrefetch 更灵活些
  asyncData: function asyncData(_ref) {
    var store = _ref.store,
      route = _ref.route;
    // 触发 action 后，会返回 Promise
    return store.dispatch('fetchUser');
  } // vue ssr内部调用
  // serverPrefetch(vm) {
  //     console.log('serverPrefetch', vm.$store, vm.$route)
  //     return vm.$store.dispatch('fetchUser')
  // }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/_babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(__default__, {
  __name: 'Home',
  props: {
    msg: String
  },
  setup: function setup(__props) {
    var props = __props;
    var vm = (0,vue__WEBPACK_IMPORTED_MODULE_1__.getCurrentInstance)();
    var store = vm.proxy.$store;
    var user = (0,vue__WEBPACK_IMPORTED_MODULE_1__.computed)(function () {
      return store.state.user;
    });
    var count = (0,vue__WEBPACK_IMPORTED_MODULE_1__.computed)(function () {
      return store.state.count;
    });
    function onAddClick() {
      store.commit('setCount', count.value + 1);
    }
    function onSubClick() {
      store.commit('setCount', count.value - 1);
    }
    return {
      __sfc: true,
      props: props,
      vm: vm,
      store: store,
      user: user,
      count: count,
      onAddClick: onAddClick,
      onSubClick: onSubClick
    };
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/pages/Home.vue?vue&type=template&id=5a90ec03&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/pages/Home.vue?vue&type=template&id=5a90ec03& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c("div", [_vm._v("\n    HOME"), _c("span", [_vm._v("~")]), _vm._v("BIG\n    "), _c("p", [_vm._v(_vm._s(_setup.user.name))]), _vm._v(" "), _c("p", [_vm._v(_vm._s(_setup.count))]), _vm._v(" "), _c("button", {
    on: {
      click: _setup.onAddClick
    }
  }, [_vm._v("+")]), _vm._v(" "), _c("button", {
    on: {
      click: _setup.onSubClick
    }
  }, [_vm._v("-")])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/core-js-pure/es/object/assign.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js-pure/es/object/assign.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es.object.assign */ "./node_modules/core-js-pure/modules/es.object.assign.js");
var path = __webpack_require__(/*! ../../internals/path */ "./node_modules/core-js-pure/internals/path.js");

module.exports = path.Object.assign;


/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-assign.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-assign.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js-pure/internals/descriptors.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js-pure/internals/function-uncurry-this.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js-pure/internals/function-call.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js-pure/internals/fails.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js-pure/internals/object-keys.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js-pure/internals/object-get-own-property-symbols.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js-pure/internals/object-property-is-enumerable.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js-pure/internals/to-object.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js-pure/internals/indexed-object.js");

// eslint-disable-next-line es/no-object-assign -- safe
var $assign = Object.assign;
// eslint-disable-next-line es/no-object-defineproperty -- required for testing
var defineProperty = Object.defineProperty;
var concat = uncurryThis([].concat);

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
module.exports = !$assign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS && $assign({ b: 1 }, $assign(defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line es/no-symbol -- safe
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return $assign({}, A)[symbol] != 7 || objectKeys($assign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? concat(objectKeys(S), getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || call(propertyIsEnumerable, S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.object.assign.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.object.assign.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js-pure/internals/export.js");
var assign = __webpack_require__(/*! ../internals/object-assign */ "./node_modules/core-js-pure/internals/object-assign.js");

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
// eslint-disable-next-line es/no-object-assign -- required for testing
$({ target: 'Object', stat: true, arity: 2, forced: Object.assign !== assign }, {
  assign: assign
});


/***/ }),

/***/ "./node_modules/core-js-pure/stable/object/assign.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/stable/object/assign.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var parent = __webpack_require__(/*! ../../es/object/assign */ "./node_modules/core-js-pure/es/object/assign.js");

module.exports = parent;


/***/ }),

/***/ "./src/pages/Home.vue":
/*!****************************!*\
  !*** ./src/pages/Home.vue ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Home_vue_vue_type_template_id_5a90ec03___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=5a90ec03& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/pages/Home.vue?vue&type=template&id=5a90ec03&");
/* harmony import */ var _Home_vue_vue_type_script_setup_true_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&setup=true&lang=js& */ "./src/pages/Home.vue?vue&type=script&setup=true&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
  _Home_vue_vue_type_script_setup_true_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_5a90ec03___WEBPACK_IMPORTED_MODULE_2__.render,
  _Home_vue_vue_type_template_id_5a90ec03___WEBPACK_IMPORTED_MODULE_2__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/pages/Home.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/pages/Home.vue?vue&type=script&setup=true&lang=js&":
/*!****************************************************************!*\
  !*** ./src/pages/Home.vue?vue&type=script&setup=true&lang=js& ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_setup_true_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=script&setup=true&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/pages/Home.vue?vue&type=script&setup=true&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_setup_true_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/assign.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/object/assign.js ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! core-js-pure/stable/object/assign */ "./node_modules/core-js-pure/stable/object/assign.js");

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MUIsRUFBRSxxRkFBTTtBQUNSLEVBQUUsNEVBQU07QUFDUixFQUFFLHFGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDZ0ssQ0FBQyxpRUFBZSxvTEFBRyxFQUFDOzs7Ozs7Ozs7O0FDQW5NLG9JQUE2RCIsInNvdXJjZXMiOlsid2VicGFjazovL3Nyci0wLTEvSG9tZS52dWUiLCJ3ZWJwYWNrOi8vc3JyLTAtMS8uL3NyYy9wYWdlcy9Ib21lLnZ1ZSIsIndlYnBhY2s6Ly9zcnItMC0xLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9lcy9vYmplY3QvYXNzaWduLmpzIiwid2VicGFjazovL3Nyci0wLTEvLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9vYmplY3QtYXNzaWduLmpzIiwid2VicGFjazovL3Nyci0wLTEvLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL21vZHVsZXMvZXMub2JqZWN0LmFzc2lnbi5qcyIsIndlYnBhY2s6Ly9zcnItMC0xLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9zdGFibGUvb2JqZWN0L2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly9zcnItMC0xLy4vc3JjL3BhZ2VzL0hvbWUudnVlPzJhNjAiLCJ3ZWJwYWNrOi8vc3JyLTAtMS8uL3NyYy9wYWdlcy9Ib21lLnZ1ZT85ODFjIiwid2VicGFjazovL3Nyci0wLTEvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9jb3JlLWpzLXN0YWJsZS9vYmplY3QvYXNzaWduLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICBIT01FPHNwYW4+fjwvc3Bhbj5CSUdcbiAgICAgICAgPHA+e3sgdXNlci5uYW1lIH19PC9wPlxuICAgICAgICA8cD57eyBjb3VudCAgfX08L3A+XG4gICAgICAgIDxidXR0b24gQGNsaWNrPVwib25BZGRDbGlja1wiPis8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJvblN1YkNsaWNrXCI+LTwvYnV0dG9uPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQgc2V0dXA+XG5pbXBvcnQgeyBjb21wdXRlZCwgZ2V0Q3VycmVudEluc3RhbmNlLCBvbk1vdW50ZWQgfSBmcm9tIFwidnVlXCI7XG5cbmNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHMoe1xuICAgIG1zZzogU3RyaW5nXG59KVxuXG5jb25zdCB2bSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG5jb25zdCBzdG9yZSA9IHZtLnByb3h5LiRzdG9yZVxuY29uc3QgdXNlciA9IGNvbXB1dGVkKCgpID0+IHN0b3JlLnN0YXRlLnVzZXIpXG5jb25zdCBjb3VudCA9IGNvbXB1dGVkKCgpID0+IHN0b3JlLnN0YXRlLmNvdW50KVxuXG5mdW5jdGlvbiBvbkFkZENsaWNrKCkge1xuICAgIHN0b3JlLmNvbW1pdCgnc2V0Q291bnQnLCBjb3VudC52YWx1ZSArIDEpXG59XG5cbmZ1bmN0aW9uIG9uU3ViQ2xpY2soKSB7XG4gICAgc3RvcmUuY29tbWl0KCdzZXRDb3VudCcsIGNvdW50LnZhbHVlICAtMSlcbn0gICBcblxuPC9zY3JpcHQ+XG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICAgIC8vIOiHquWumuS5ie+8jOS7o+abv3NlcnZlclByZWZldGNoIOabtOeBtea0u+S6m1xuICAgIGFzeW5jRGF0YSh7c3RvcmUsIHJvdXRlfSkge1xuICAgICAgICAvLyDop6blj5EgYWN0aW9uIOWQju+8jOS8mui/lOWbniBQcm9taXNlXG4gICAgICAgIHJldHVybiBzdG9yZS5kaXNwYXRjaCgnZmV0Y2hVc2VyJylcbiAgICB9LFxuICAgIC8vIHZ1ZSBzc3LlhoXpg6josIPnlKhcbiAgICAvLyBzZXJ2ZXJQcmVmZXRjaCh2bSkge1xuICAgIC8vICAgICBjb25zb2xlLmxvZygnc2VydmVyUHJlZmV0Y2gnLCB2bS4kc3RvcmUsIHZtLiRyb3V0ZSlcbiAgICAvLyAgICAgcmV0dXJuIHZtLiRzdG9yZS5kaXNwYXRjaCgnZmV0Y2hVc2VyJylcbiAgICAvLyB9XG59XG48L3NjcmlwdD4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICB2YXIgX3ZtID0gdGhpcyxcbiAgICBfYyA9IF92bS5fc2VsZi5fYyxcbiAgICBfc2V0dXAgPSBfdm0uX3NlbGYuX3NldHVwUHJveHlcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICBfdm0uX3YoXCJcXG4gICAgSE9NRVwiKSxcbiAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIn5cIildKSxcbiAgICBfdm0uX3YoXCJCSUdcXG4gICAgXCIpLFxuICAgIF9jKFwicFwiLCBbX3ZtLl92KF92bS5fcyhfc2V0dXAudXNlci5uYW1lKSldKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwicFwiLCBbX3ZtLl92KF92bS5fcyhfc2V0dXAuY291bnQpKV0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJidXR0b25cIiwgeyBvbjogeyBjbGljazogX3NldHVwLm9uQWRkQ2xpY2sgfSB9LCBbX3ZtLl92KFwiK1wiKV0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJidXR0b25cIiwgeyBvbjogeyBjbGljazogX3NldHVwLm9uU3ViQ2xpY2sgfSB9LCBbX3ZtLl92KFwiLVwiKV0pLFxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXMub2JqZWN0LmFzc2lnbicpO1xudmFyIHBhdGggPSByZXF1aXJlKCcuLi8uLi9pbnRlcm5hbHMvcGF0aCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHBhdGguT2JqZWN0LmFzc2lnbjtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgb2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qta2V5cycpO1xudmFyIGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzJyk7XG52YXIgcHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciBJbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luZGV4ZWQtb2JqZWN0Jyk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtYXNzaWduIC0tIHNhZmVcbnZhciAkYXNzaWduID0gT2JqZWN0LmFzc2lnbjtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBjb25jYXQgPSB1bmN1cnJ5VGhpcyhbXS5jb25jYXQpO1xuXG4vLyBgT2JqZWN0LmFzc2lnbmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5hc3NpZ25cbm1vZHVsZS5leHBvcnRzID0gISRhc3NpZ24gfHwgZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBzaG91bGQgaGF2ZSBjb3JyZWN0IG9yZGVyIG9mIG9wZXJhdGlvbnMgKEVkZ2UgYnVnKVxuICBpZiAoREVTQ1JJUFRPUlMgJiYgJGFzc2lnbih7IGI6IDEgfSwgJGFzc2lnbihkZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGRlZmluZVByb3BlcnR5KHRoaXMsICdiJywge1xuICAgICAgICB2YWx1ZTogMyxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2VcbiAgICAgIH0pO1xuICAgIH1cbiAgfSksIHsgYjogMiB9KSkuYiAhPT0gMSkgcmV0dXJuIHRydWU7XG4gIC8vIHNob3VsZCB3b3JrIHdpdGggc3ltYm9scyBhbmQgc2hvdWxkIGhhdmUgZGV0ZXJtaW5pc3RpYyBwcm9wZXJ0eSBvcmRlciAoVjggYnVnKVxuICB2YXIgQSA9IHt9O1xuICB2YXIgQiA9IHt9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tc3ltYm9sIC0tIHNhZmVcbiAgdmFyIHN5bWJvbCA9IFN5bWJvbCgpO1xuICB2YXIgYWxwaGFiZXQgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3QnO1xuICBBW3N5bWJvbF0gPSA3O1xuICBhbHBoYWJldC5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAoY2hyKSB7IEJbY2hyXSA9IGNocjsgfSk7XG4gIHJldHVybiAkYXNzaWduKHt9LCBBKVtzeW1ib2xdICE9IDcgfHwgb2JqZWN0S2V5cygkYXNzaWduKHt9LCBCKSkuam9pbignJykgIT0gYWxwaGFiZXQ7XG59KSA/IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzIC0tIHJlcXVpcmVkIGZvciBgLmxlbmd0aGBcbiAgdmFyIFQgPSB0b09iamVjdCh0YXJnZXQpO1xuICB2YXIgYXJndW1lbnRzTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgdmFyIGluZGV4ID0gMTtcbiAgdmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZS5mO1xuICB2YXIgcHJvcGVydHlJc0VudW1lcmFibGUgPSBwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZS5mO1xuICB3aGlsZSAoYXJndW1lbnRzTGVuZ3RoID4gaW5kZXgpIHtcbiAgICB2YXIgUyA9IEluZGV4ZWRPYmplY3QoYXJndW1lbnRzW2luZGV4KytdKTtcbiAgICB2YXIga2V5cyA9IGdldE93blByb3BlcnR5U3ltYm9scyA/IGNvbmNhdChvYmplY3RLZXlzKFMpLCBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoUykpIDogb2JqZWN0S2V5cyhTKTtcbiAgICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgdmFyIGogPSAwO1xuICAgIHZhciBrZXk7XG4gICAgd2hpbGUgKGxlbmd0aCA+IGopIHtcbiAgICAgIGtleSA9IGtleXNbaisrXTtcbiAgICAgIGlmICghREVTQ1JJUFRPUlMgfHwgY2FsbChwcm9wZXJ0eUlzRW51bWVyYWJsZSwgUywga2V5KSkgVFtrZXldID0gU1trZXldO1xuICAgIH1cbiAgfSByZXR1cm4gVDtcbn0gOiAkYXNzaWduO1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgYXNzaWduID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1hc3NpZ24nKTtcblxuLy8gYE9iamVjdC5hc3NpZ25gIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuYXNzaWduXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWFzc2lnbiAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuJCh7IHRhcmdldDogJ09iamVjdCcsIHN0YXQ6IHRydWUsIGFyaXR5OiAyLCBmb3JjZWQ6IE9iamVjdC5hc3NpZ24gIT09IGFzc2lnbiB9LCB7XG4gIGFzc2lnbjogYXNzaWduXG59KTtcbiIsInZhciBwYXJlbnQgPSByZXF1aXJlKCcuLi8uLi9lcy9vYmplY3QvYXNzaWduJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcGFyZW50O1xuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Ib21lLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01YTkwZWMwMyZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Ib21lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmc2V0dXA9dHJ1ZSZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Ib21lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmc2V0dXA9dHJ1ZSZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvY2MvRC92dWUtc3NyLWRlbW8vbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNWE5MGVjMDMnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNWE5MGVjMDMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNWE5MGVjMDMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0hvbWUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTVhOTBlYzAzJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzVhOTBlYzAzJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvcGFnZXMvSG9tZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSG9tZS52dWU/dnVlJnR5cGU9c2NyaXB0JnNldHVwPXRydWUmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hvbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZzZXR1cD10cnVlJmxhbmc9anMmXCIiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzLXB1cmUvc3RhYmxlL29iamVjdC9hc3NpZ25cIik7Il0sIm5hbWVzIjpbImFzeW5jRGF0YSIsInN0b3JlIiwicm91dGUiLCJkaXNwYXRjaCIsImNvbXB1dGVkIiwiZ2V0Q3VycmVudEluc3RhbmNlIiwib25Nb3VudGVkIiwidm0iLCJwcm94eSIsIiRzdG9yZSIsInVzZXIiLCJzdGF0ZSIsImNvdW50Iiwib25BZGRDbGljayIsImNvbW1pdCIsInZhbHVlIiwib25TdWJDbGljayIsInJlbmRlciIsIl92bSIsIl9jIiwiX3NlbGYiLCJfc2V0dXAiLCJfc2V0dXBQcm94eSIsIl92IiwiX3MiLCJuYW1lIiwib24iLCJjbGljayIsInN0YXRpY1JlbmRlckZucyIsIl93aXRoU3RyaXBwZWQiXSwic291cmNlUm9vdCI6IiJ9