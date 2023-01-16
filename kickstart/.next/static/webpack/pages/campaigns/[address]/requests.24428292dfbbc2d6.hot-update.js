"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/campaigns/[address]/requests",{

/***/ "./components/RequestRow.js":
/*!**********************************!*\
  !*** ./components/RequestRow.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @web3-react/core */ \"./node_modules/@web3-react/core/dist/core.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction RequestRow(param) {\n    let { request , address , index  } = param;\n    _s();\n    const { active , account , library , chainId , connector , activate , deactivate  } = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_1__.useWeb3React)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Table.Row, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Table.Cell, {\n                children: index + 1\n            }, void 0, false, {\n                fileName: \"/Users/ankit/Desktop/practice/kickstart/components/RequestRow.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Table.Cell, {\n                children: request.description\n            }, void 0, false, {\n                fileName: \"/Users/ankit/Desktop/practice/kickstart/components/RequestRow.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Table.Cell, {\n                children: [\n                    library ? library.utils.fromWei(request.value, \"ether\") : \"\",\n                    \" ETH\",\n                    library ? \"YES\" : \"NO\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ankit/Desktop/practice/kickstart/components/RequestRow.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Table.Cell, {\n                children: request.recipient\n            }, void 0, false, {\n                fileName: \"/Users/ankit/Desktop/practice/kickstart/components/RequestRow.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Table.Cell, {\n                children: request.approvalCount\n            }, void 0, false, {\n                fileName: \"/Users/ankit/Desktop/practice/kickstart/components/RequestRow.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Table.Cell, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                    primary: true,\n                    children: \"Approve\"\n                }, void 0, false, {\n                    fileName: \"/Users/ankit/Desktop/practice/kickstart/components/RequestRow.js\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ankit/Desktop/practice/kickstart/components/RequestRow.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Table.Cell, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                    secondary: true,\n                    children: \"Finalize\"\n                }, void 0, false, {\n                    fileName: \"/Users/ankit/Desktop/practice/kickstart/components/RequestRow.js\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ankit/Desktop/practice/kickstart/components/RequestRow.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ankit/Desktop/practice/kickstart/components/RequestRow.js\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n_s(RequestRow, \"l+75rLlN5HVPOuVlHzVf+nSnjYA=\", false, function() {\n    return [\n        _web3_react_core__WEBPACK_IMPORTED_MODULE_1__.useWeb3React\n    ];\n});\n_c = RequestRow;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RequestRow);\nvar _c;\n$RefreshReg$(_c, \"RequestRow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1JlcXVlc3RSb3cuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUFnRDtBQUN0QjtBQUN3QjtBQUVsRCxTQUFTSSxXQUFXLEtBQTJCLEVBQUU7UUFBN0IsRUFBRUMsUUFBTyxFQUFFQyxRQUFPLEVBQUVDLE1BQUssRUFBRSxHQUEzQjs7SUFDbEIsTUFBTSxFQUFFQyxPQUFNLEVBQUVDLFFBQU8sRUFBRUMsUUFBTyxFQUFFQyxRQUFPLEVBQUVDLFVBQVMsRUFBRUMsU0FBUSxFQUFFQyxXQUFVLEVBQUUsR0FDMUVkLDhEQUFZQTtJQUVkLHFCQUNFLDhEQUFDRyx3REFBUzs7MEJBQ1IsOERBQUNBLHlEQUFVOzBCQUFFSSxRQUFROzs7Ozs7MEJBQ3JCLDhEQUFDSix5REFBVTswQkFBRUUsUUFBUVksV0FBVzs7Ozs7OzBCQUNoQyw4REFBQ2QseURBQVU7O29CQUNSTyxVQUFVQSxRQUFRUSxLQUFLLENBQUNDLE9BQU8sQ0FBQ2QsUUFBUWUsS0FBSyxFQUFFLFdBQVcsRUFBRTtvQkFBQztvQkFDN0RWLFVBQVUsUUFBUSxJQUFJOzs7Ozs7OzBCQUV6Qiw4REFBQ1AseURBQVU7MEJBQUVFLFFBQVFnQixTQUFTOzs7Ozs7MEJBQzlCLDhEQUFDbEIseURBQVU7MEJBQUVFLFFBQVFpQixhQUFhOzs7Ozs7MEJBQ2xDLDhEQUFDbkIseURBQVU7MEJBQ1QsNEVBQUNELHFEQUFNQTtvQkFBQ3FCLE9BQU87OEJBQUM7Ozs7Ozs7Ozs7OzBCQUVsQiw4REFBQ3BCLHlEQUFVOzBCQUNULDRFQUFDRCxxREFBTUE7b0JBQUNzQixTQUFTOzhCQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQUkxQjtHQXRCU3BCOztRQUVMSiwwREFBWUE7OztLQUZQSTtBQXdCVCwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1JlcXVlc3RSb3cuanM/Y2EzMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VXZWIzUmVhY3QgfSBmcm9tIFwiQHdlYjMtcmVhY3QvY29yZVwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQnV0dG9uLCBUYWJsZSB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuXG5mdW5jdGlvbiBSZXF1ZXN0Um93KHsgcmVxdWVzdCwgYWRkcmVzcywgaW5kZXggfSkge1xuICBjb25zdCB7IGFjdGl2ZSwgYWNjb3VudCwgbGlicmFyeSwgY2hhaW5JZCwgY29ubmVjdG9yLCBhY3RpdmF0ZSwgZGVhY3RpdmF0ZSB9ID1cbiAgICB1c2VXZWIzUmVhY3QoKTtcblxuICByZXR1cm4gKFxuICAgIDxUYWJsZS5Sb3c+XG4gICAgICA8VGFibGUuQ2VsbD57aW5kZXggKyAxfTwvVGFibGUuQ2VsbD5cbiAgICAgIDxUYWJsZS5DZWxsPntyZXF1ZXN0LmRlc2NyaXB0aW9ufTwvVGFibGUuQ2VsbD5cbiAgICAgIDxUYWJsZS5DZWxsPlxuICAgICAgICB7bGlicmFyeSA/IGxpYnJhcnkudXRpbHMuZnJvbVdlaShyZXF1ZXN0LnZhbHVlLCBcImV0aGVyXCIpIDogXCJcIn0gRVRIXG4gICAgICAgIHtsaWJyYXJ5ID8gXCJZRVNcIiA6IFwiTk9cIn1cbiAgICAgIDwvVGFibGUuQ2VsbD5cbiAgICAgIDxUYWJsZS5DZWxsPntyZXF1ZXN0LnJlY2lwaWVudH08L1RhYmxlLkNlbGw+XG4gICAgICA8VGFibGUuQ2VsbD57cmVxdWVzdC5hcHByb3ZhbENvdW50fTwvVGFibGUuQ2VsbD5cbiAgICAgIDxUYWJsZS5DZWxsPlxuICAgICAgICA8QnV0dG9uIHByaW1hcnk+QXBwcm92ZTwvQnV0dG9uPlxuICAgICAgPC9UYWJsZS5DZWxsPlxuICAgICAgPFRhYmxlLkNlbGw+XG4gICAgICAgIDxCdXR0b24gc2Vjb25kYXJ5PkZpbmFsaXplPC9CdXR0b24+XG4gICAgICA8L1RhYmxlLkNlbGw+XG4gICAgPC9UYWJsZS5Sb3c+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3RSb3c7XG4iXSwibmFtZXMiOlsidXNlV2ViM1JlYWN0IiwiUmVhY3QiLCJCdXR0b24iLCJUYWJsZSIsIlJlcXVlc3RSb3ciLCJyZXF1ZXN0IiwiYWRkcmVzcyIsImluZGV4IiwiYWN0aXZlIiwiYWNjb3VudCIsImxpYnJhcnkiLCJjaGFpbklkIiwiY29ubmVjdG9yIiwiYWN0aXZhdGUiLCJkZWFjdGl2YXRlIiwiUm93IiwiQ2VsbCIsImRlc2NyaXB0aW9uIiwidXRpbHMiLCJmcm9tV2VpIiwidmFsdWUiLCJyZWNpcGllbnQiLCJhcHByb3ZhbENvdW50IiwicHJpbWFyeSIsInNlY29uZGFyeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/RequestRow.js\n"));

/***/ })

});