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
    (0,vue__WEBPACK_IMPORTED_MODULE_1__.onMounted)(function () {
      console.log('home mounted');
    });
    console.log('home setup');
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
  return _c("div", [_vm._v("\n    HOME\n    "), _c("p", [_vm._v(_vm._s(_setup.user.name))]), _vm._v(" "), _c("p", [_vm._v(_vm._s(_setup.count))]), _vm._v(" "), _c("button", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQzFCLEVBQUUscUZBQU07QUFDUixFQUFFLDRFQUFNO0FBQ1IsRUFBRSxxRkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ0EsaUVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q2dLLENBQUMsaUVBQWUsb0xBQUcsRUFBQzs7Ozs7Ozs7OztBQ0FuTSxvSUFBNkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcnItMC0xL0hvbWUudnVlIiwid2VicGFjazovL3Nyci0wLTEvLi9zcmMvcGFnZXMvSG9tZS52dWUiLCJ3ZWJwYWNrOi8vc3JyLTAtMS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvZXMvb2JqZWN0L2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly9zcnItMC0xLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvb2JqZWN0LWFzc2lnbi5qcyIsIndlYnBhY2s6Ly9zcnItMC0xLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9tb2R1bGVzL2VzLm9iamVjdC5hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vc3JyLTAtMS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvc3RhYmxlL29iamVjdC9hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vc3JyLTAtMS8uL3NyYy9wYWdlcy9Ib21lLnZ1ZT8yYTYwIiwid2VicGFjazovL3Nyci0wLTEvLi9zcmMvcGFnZXMvSG9tZS52dWU/OTgxYyIsIndlYnBhY2s6Ly9zcnItMC0xLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lLWNvcmVqczMvY29yZS1qcy1zdGFibGUvb2JqZWN0L2Fzc2lnbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgSE9NRVxuICAgICAgICA8cD57eyB1c2VyLm5hbWUgfX08L3A+XG4gICAgICAgIDxwPnt7IGNvdW50ICB9fTwvcD5cbiAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJvbkFkZENsaWNrXCI+KzwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIEBjbGljaz1cIm9uU3ViQ2xpY2tcIj4tPC9idXR0b24+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuPHNjcmlwdCBzZXR1cD5cbmltcG9ydCB7IGNvbXB1dGVkLCBnZXRDdXJyZW50SW5zdGFuY2UsIG9uTW91bnRlZCB9IGZyb20gXCJ2dWVcIjtcblxub25Nb3VudGVkKCgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnaG9tZSBtb3VudGVkJylcbn0pXG5cbmNvbnNvbGUubG9nKCdob21lIHNldHVwJylcblxuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wcyh7XG4gICAgbXNnOiBTdHJpbmdcbn0pXG5cbmNvbnN0IHZtID0gZ2V0Q3VycmVudEluc3RhbmNlKClcbmNvbnN0IHN0b3JlID0gdm0ucHJveHkuJHN0b3JlXG5jb25zdCB1c2VyID0gY29tcHV0ZWQoKCkgPT4gc3RvcmUuc3RhdGUudXNlcilcbmNvbnN0IGNvdW50ID0gY29tcHV0ZWQoKCkgPT4gc3RvcmUuc3RhdGUuY291bnQpXG5cbmZ1bmN0aW9uIG9uQWRkQ2xpY2soKSB7XG4gICAgc3RvcmUuY29tbWl0KCdzZXRDb3VudCcsIGNvdW50LnZhbHVlICsgMSlcbn1cblxuZnVuY3Rpb24gb25TdWJDbGljaygpIHtcbiAgICBzdG9yZS5jb21taXQoJ3NldENvdW50JywgY291bnQudmFsdWUgIC0xKVxufSAgIFxuXG48L3NjcmlwdD5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgLy8g6Ieq5a6a5LmJ77yM5Luj5pu/c2VydmVyUHJlZmV0Y2gg5pu054G15rS75LqbXG4gICAgYXN5bmNEYXRhKHtzdG9yZSwgcm91dGV9KSB7XG4gICAgICAgIC8vIOinpuWPkSBhY3Rpb24g5ZCO77yM5Lya6L+U5ZueIFByb21pc2VcbiAgICAgICAgcmV0dXJuIHN0b3JlLmRpc3BhdGNoKCdmZXRjaFVzZXInKVxuICAgIH0sXG4gICAgLy8gdnVlIHNzcuWGhemDqOiwg+eUqFxuICAgIC8vIHNlcnZlclByZWZldGNoKHZtKSB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCdzZXJ2ZXJQcmVmZXRjaCcsIHZtLiRzdG9yZSwgdm0uJHJvdXRlKVxuICAgIC8vICAgICByZXR1cm4gdm0uJHN0b3JlLmRpc3BhdGNoKCdmZXRjaFVzZXInKVxuICAgIC8vIH1cbn1cbjwvc2NyaXB0PiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHZhciBfdm0gPSB0aGlzLFxuICAgIF9jID0gX3ZtLl9zZWxmLl9jLFxuICAgIF9zZXR1cCA9IF92bS5fc2VsZi5fc2V0dXBQcm94eVxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF92bS5fdihcIlxcbiAgICBIT01FXFxuICAgIFwiKSxcbiAgICBfYyhcInBcIiwgW192bS5fdihfdm0uX3MoX3NldHVwLnVzZXIubmFtZSkpXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcInBcIiwgW192bS5fdihfdm0uX3MoX3NldHVwLmNvdW50KSldKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiYnV0dG9uXCIsIHsgb246IHsgY2xpY2s6IF9zZXR1cC5vbkFkZENsaWNrIH0gfSwgW192bS5fdihcIitcIildKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiYnV0dG9uXCIsIHsgb246IHsgY2xpY2s6IF9zZXR1cC5vblN1YkNsaWNrIH0gfSwgW192bS5fdihcIi1cIildKSxcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzLm9iamVjdC5hc3NpZ24nKTtcbnZhciBwYXRoID0gcmVxdWlyZSgnLi4vLi4vaW50ZXJuYWxzL3BhdGgnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBwYXRoLk9iamVjdC5hc3NpZ247XG4iLCIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIG9iamVjdEtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scycpO1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1wcm9wZXJ0eS1pcy1lbnVtZXJhYmxlJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmRleGVkLW9iamVjdCcpO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWFzc2lnbiAtLSBzYWZlXG52YXIgJGFzc2lnbiA9IE9iamVjdC5hc3NpZ247XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgY29uY2F0ID0gdW5jdXJyeVRoaXMoW10uY29uY2F0KTtcblxuLy8gYE9iamVjdC5hc3NpZ25gIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuYXNzaWduXG5tb2R1bGUuZXhwb3J0cyA9ICEkYXNzaWduIHx8IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gc2hvdWxkIGhhdmUgY29ycmVjdCBvcmRlciBvZiBvcGVyYXRpb25zIChFZGdlIGJ1ZylcbiAgaWYgKERFU0NSSVBUT1JTICYmICRhc3NpZ24oeyBiOiAxIH0sICRhc3NpZ24oZGVmaW5lUHJvcGVydHkoe30sICdhJywge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICBkZWZpbmVQcm9wZXJ0eSh0aGlzLCAnYicsIHtcbiAgICAgICAgdmFsdWU6IDMsXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9XG4gIH0pLCB7IGI6IDIgfSkpLmIgIT09IDEpIHJldHVybiB0cnVlO1xuICAvLyBzaG91bGQgd29yayB3aXRoIHN5bWJvbHMgYW5kIHNob3VsZCBoYXZlIGRldGVybWluaXN0aWMgcHJvcGVydHkgb3JkZXIgKFY4IGJ1ZylcbiAgdmFyIEEgPSB7fTtcbiAgdmFyIEIgPSB7fTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLXN5bWJvbCAtLSBzYWZlXG4gIHZhciBzeW1ib2wgPSBTeW1ib2woKTtcbiAgdmFyIGFscGhhYmV0ID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0JztcbiAgQVtzeW1ib2xdID0gNztcbiAgYWxwaGFiZXQuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGNocikgeyBCW2Nocl0gPSBjaHI7IH0pO1xuICByZXR1cm4gJGFzc2lnbih7fSwgQSlbc3ltYm9sXSAhPSA3IHx8IG9iamVjdEtleXMoJGFzc2lnbih7fSwgQikpLmpvaW4oJycpICE9IGFscGhhYmV0O1xufSkgPyBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBzb3VyY2UpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFycyAtLSByZXF1aXJlZCBmb3IgYC5sZW5ndGhgXG4gIHZhciBUID0gdG9PYmplY3QodGFyZ2V0KTtcbiAgdmFyIGFyZ3VtZW50c0xlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIHZhciBpbmRleCA9IDE7XG4gIHZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUuZjtcbiAgdmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gcHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUuZjtcbiAgd2hpbGUgKGFyZ3VtZW50c0xlbmd0aCA+IGluZGV4KSB7XG4gICAgdmFyIFMgPSBJbmRleGVkT2JqZWN0KGFyZ3VtZW50c1tpbmRleCsrXSk7XG4gICAgdmFyIGtleXMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPyBjb25jYXQob2JqZWN0S2V5cyhTKSwgZ2V0T3duUHJvcGVydHlTeW1ib2xzKFMpKSA6IG9iamVjdEtleXMoUyk7XG4gICAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgIHZhciBqID0gMDtcbiAgICB2YXIga2V5O1xuICAgIHdoaWxlIChsZW5ndGggPiBqKSB7XG4gICAgICBrZXkgPSBrZXlzW2orK107XG4gICAgICBpZiAoIURFU0NSSVBUT1JTIHx8IGNhbGwocHJvcGVydHlJc0VudW1lcmFibGUsIFMsIGtleSkpIFRba2V5XSA9IFNba2V5XTtcbiAgICB9XG4gIH0gcmV0dXJuIFQ7XG59IDogJGFzc2lnbjtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGFzc2lnbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtYXNzaWduJyk7XG5cbi8vIGBPYmplY3QuYXNzaWduYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmFzc2lnblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1hc3NpZ24gLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiQoeyB0YXJnZXQ6ICdPYmplY3QnLCBzdGF0OiB0cnVlLCBhcml0eTogMiwgZm9yY2VkOiBPYmplY3QuYXNzaWduICE9PSBhc3NpZ24gfSwge1xuICBhc3NpZ246IGFzc2lnblxufSk7XG4iLCJ2YXIgcGFyZW50ID0gcmVxdWlyZSgnLi4vLi4vZXMvb2JqZWN0L2Fzc2lnbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHBhcmVudDtcbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vSG9tZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWE5MGVjMDMmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vSG9tZS52dWU/dnVlJnR5cGU9c2NyaXB0JnNldHVwPXRydWUmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vSG9tZS52dWU/dnVlJnR5cGU9c2NyaXB0JnNldHVwPXRydWUmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2NjL0QvdnVlLXNzci1kZW1vL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzVhOTBlYzAzJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzVhOTBlYzAzJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzVhOTBlYzAzJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Ib21lLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01YTkwZWMwMyZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc1YTkwZWMwMycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL3BhZ2VzL0hvbWUudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hvbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZzZXR1cD10cnVlJmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ib21lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmc2V0dXA9dHJ1ZSZsYW5nPWpzJlwiIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy1wdXJlL3N0YWJsZS9vYmplY3QvYXNzaWduXCIpOyJdLCJuYW1lcyI6WyJhc3luY0RhdGEiLCJzdG9yZSIsInJvdXRlIiwiZGlzcGF0Y2giLCJjb21wdXRlZCIsImdldEN1cnJlbnRJbnN0YW5jZSIsIm9uTW91bnRlZCIsImNvbnNvbGUiLCJsb2ciLCJ2bSIsInByb3h5IiwiJHN0b3JlIiwidXNlciIsInN0YXRlIiwiY291bnQiLCJvbkFkZENsaWNrIiwiY29tbWl0IiwidmFsdWUiLCJvblN1YkNsaWNrIiwicmVuZGVyIiwiX3ZtIiwiX2MiLCJfc2VsZiIsIl9zZXR1cCIsIl9zZXR1cFByb3h5IiwiX3YiLCJfcyIsIm5hbWUiLCJvbiIsImNsaWNrIiwic3RhdGljUmVuZGVyRm5zIiwiX3dpdGhTdHJpcHBlZCJdLCJzb3VyY2VSb290IjoiIn0=