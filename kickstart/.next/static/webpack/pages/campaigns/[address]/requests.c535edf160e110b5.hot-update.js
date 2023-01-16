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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @web3-react/core */ \"./node_modules/@web3-react/core/dist/core.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! web3 */ \"./node_modules/web3/dist/web3.min.js\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction RequestRow(param) {\n    let { request , address , index , approversCount  } = param;\n    _s();\n    const { active , account , library , chainId , connector , activate , deactivate  } = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_1__.useWeb3React)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [approveLoading, setApproveLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [finalizeLoading, setFinalizeLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const onApprove = async ()=>{\n        setApproveLoading(true);\n        try {\n            const campaign = getCampaignContract(library, address);\n            await campaign.methods.approveRequest(index).send({\n                from: account\n            });\n            router.replace(\"/campaigns/\".concat(address, \"/requests\"));\n        } catch (err) {\n            alert(err.message);\n        }\n        setApproveLoading(false);\n    };\n    const web3 = new (web3__WEBPACK_IMPORTED_MODULE_4___default())();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Table.Row, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Table.Cell, {\n                children: index + 1\n            }, void 0, false, {\n                fileName: \"/Users/ankit/Desktop/practice/kickstart/components/RequestRow.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Table.Cell, {\n                children: request.description\n            }, void 0, false, {\n                fileName: \"/Users/ankit/Desktop/practice/kickstart/components/RequestRow.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Table.Cell, {\n                children: [\n                    web3.utils.fromWei(request.value, \"ether\"),\n                    \" ETH\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ankit/Desktop/practice/kickstart/components/RequestRow.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Table.Cell, {\n                children: request.recipient\n            }, void 0, false, {\n                fileName: \"/Users/ankit/Desktop/practice/kickstart/components/RequestRow.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Table.Cell, {\n                children: [\n                    request.approvalCount,\n                    \" / \",\n                    approversCount\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ankit/Desktop/practice/kickstart/components/RequestRow.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Table.Cell, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                    color: \"green\",\n                    children: \"Approve\"\n                }, void 0, false, {\n                    fileName: \"/Users/ankit/Desktop/practice/kickstart/components/RequestRow.js\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ankit/Desktop/practice/kickstart/components/RequestRow.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Table.Cell, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                    secondary: true,\n                    children: \"Finalize\"\n                }, void 0, false, {\n                    fileName: \"/Users/ankit/Desktop/practice/kickstart/components/RequestRow.js\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ankit/Desktop/practice/kickstart/components/RequestRow.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ankit/Desktop/practice/kickstart/components/RequestRow.js\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, this);\n}\n_s(RequestRow, \"KnoEfgVre9g04jMU6ZjXusELors=\", false, function() {\n    return [\n        _web3_react_core__WEBPACK_IMPORTED_MODULE_1__.useWeb3React,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = RequestRow;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RequestRow);\nvar _c;\n$RefreshReg$(_c, \"RequestRow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1JlcXVlc3RSb3cuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFBZ0Q7QUFDUjtBQUNBO0FBQ1U7QUFDMUI7QUFFeEIsU0FBU08sV0FBVyxLQUEyQyxFQUFFO1FBQTdDLEVBQUVDLFFBQU8sRUFBRUMsUUFBTyxFQUFFQyxNQUFLLEVBQUVDLGVBQWMsRUFBRSxHQUEzQzs7SUFDbEIsTUFBTSxFQUFFQyxPQUFNLEVBQUVDLFFBQU8sRUFBRUMsUUFBTyxFQUFFQyxRQUFPLEVBQUVDLFVBQVMsRUFBRUMsU0FBUSxFQUFFQyxXQUFVLEVBQUUsR0FDMUVsQiw4REFBWUE7SUFFZCxNQUFNbUIsU0FBU2xCLHNEQUFTQTtJQUV4QixNQUFNLENBQUNtQixnQkFBZ0JDLGtCQUFrQixHQUFHbEIsK0NBQVFBLENBQUMsS0FBSztJQUMxRCxNQUFNLENBQUNtQixpQkFBaUJDLG1CQUFtQixHQUFHcEIsK0NBQVFBLENBQUMsS0FBSztJQUU1RCxNQUFNcUIsWUFBWSxVQUFZO1FBQzVCSCxrQkFBa0IsSUFBSTtRQUN0QixJQUFJO1lBQ0YsTUFBTUksV0FBV0Msb0JBQW9CWixTQUFTTDtZQUU5QyxNQUFNZ0IsU0FBU0UsT0FBTyxDQUFDQyxjQUFjLENBQUNsQixPQUFPbUIsSUFBSSxDQUFDO2dCQUNoREMsTUFBTWpCO1lBQ1I7WUFFQU0sT0FBT1ksT0FBTyxDQUFDLGNBQXNCLE9BQVJ0QixTQUFRO1FBQ3ZDLEVBQUUsT0FBT3VCLEtBQUs7WUFDWkMsTUFBTUQsSUFBSUUsT0FBTztRQUNuQjtRQUNBYixrQkFBa0IsS0FBSztJQUN6QjtJQUVBLE1BQU1jLE9BQU8sSUFBSTdCLDZDQUFJQTtJQUVyQixxQkFDRSw4REFBQ0Qsd0RBQVM7OzBCQUNSLDhEQUFDQSx5REFBVTswQkFBRUssUUFBUTs7Ozs7OzBCQUNyQiw4REFBQ0wseURBQVU7MEJBQUVHLFFBQVE4QixXQUFXOzs7Ozs7MEJBQ2hDLDhEQUFDakMseURBQVU7O29CQUFFOEIsS0FBS0ksS0FBSyxDQUFDQyxPQUFPLENBQUNoQyxRQUFRaUMsS0FBSyxFQUFFO29CQUFTOzs7Ozs7OzBCQUN4RCw4REFBQ3BDLHlEQUFVOzBCQUFFRyxRQUFRa0MsU0FBUzs7Ozs7OzBCQUM5Qiw4REFBQ3JDLHlEQUFVOztvQkFDUkcsUUFBUW1DLGFBQWE7b0JBQUM7b0JBQUloQzs7Ozs7OzswQkFFN0IsOERBQUNOLHlEQUFVOzBCQUNULDRFQUFDRCxxREFBTUE7b0JBQUN3QyxPQUFNOzhCQUFROzs7Ozs7Ozs7OzswQkFFeEIsOERBQUN2Qyx5REFBVTswQkFDVCw0RUFBQ0QscURBQU1BO29CQUFDeUMsU0FBUzs4QkFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJMUI7R0E1Q1N0Qzs7UUFFTFAsMERBQVlBO1FBRUNDLGtEQUFTQTs7O0tBSmpCTTtBQThDVCwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1JlcXVlc3RSb3cuanM/Y2EzMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VXZWIzUmVhY3QgfSBmcm9tIFwiQHdlYjMtcmVhY3QvY29yZVwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiwgVGFibGUgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCBXZWIzIGZyb20gXCJ3ZWIzXCI7XG5cbmZ1bmN0aW9uIFJlcXVlc3RSb3coeyByZXF1ZXN0LCBhZGRyZXNzLCBpbmRleCwgYXBwcm92ZXJzQ291bnQgfSkge1xuICBjb25zdCB7IGFjdGl2ZSwgYWNjb3VudCwgbGlicmFyeSwgY2hhaW5JZCwgY29ubmVjdG9yLCBhY3RpdmF0ZSwgZGVhY3RpdmF0ZSB9ID1cbiAgICB1c2VXZWIzUmVhY3QoKTtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBbYXBwcm92ZUxvYWRpbmcsIHNldEFwcHJvdmVMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2ZpbmFsaXplTG9hZGluZywgc2V0RmluYWxpemVMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBvbkFwcHJvdmUgPSBhc3luYyAoKSA9PiB7XG4gICAgc2V0QXBwcm92ZUxvYWRpbmcodHJ1ZSk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNhbXBhaWduID0gZ2V0Q2FtcGFpZ25Db250cmFjdChsaWJyYXJ5LCBhZGRyZXNzKTtcblxuICAgICAgYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5hcHByb3ZlUmVxdWVzdChpbmRleCkuc2VuZCh7XG4gICAgICAgIGZyb206IGFjY291bnQsXG4gICAgICB9KTtcblxuICAgICAgcm91dGVyLnJlcGxhY2UoYC9jYW1wYWlnbnMvJHthZGRyZXNzfS9yZXF1ZXN0c2ApO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgYWxlcnQoZXJyLm1lc3NhZ2UpO1xuICAgIH1cbiAgICBzZXRBcHByb3ZlTG9hZGluZyhmYWxzZSk7XG4gIH07XG5cbiAgY29uc3Qgd2ViMyA9IG5ldyBXZWIzKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8VGFibGUuUm93PlxuICAgICAgPFRhYmxlLkNlbGw+e2luZGV4ICsgMX08L1RhYmxlLkNlbGw+XG4gICAgICA8VGFibGUuQ2VsbD57cmVxdWVzdC5kZXNjcmlwdGlvbn08L1RhYmxlLkNlbGw+XG4gICAgICA8VGFibGUuQ2VsbD57d2ViMy51dGlscy5mcm9tV2VpKHJlcXVlc3QudmFsdWUsIFwiZXRoZXJcIil9IEVUSDwvVGFibGUuQ2VsbD5cbiAgICAgIDxUYWJsZS5DZWxsPntyZXF1ZXN0LnJlY2lwaWVudH08L1RhYmxlLkNlbGw+XG4gICAgICA8VGFibGUuQ2VsbD5cbiAgICAgICAge3JlcXVlc3QuYXBwcm92YWxDb3VudH0gLyB7YXBwcm92ZXJzQ291bnR9XG4gICAgICA8L1RhYmxlLkNlbGw+XG4gICAgICA8VGFibGUuQ2VsbD5cbiAgICAgICAgPEJ1dHRvbiBjb2xvcj1cImdyZWVuXCI+QXBwcm92ZTwvQnV0dG9uPlxuICAgICAgPC9UYWJsZS5DZWxsPlxuICAgICAgPFRhYmxlLkNlbGw+XG4gICAgICAgIDxCdXR0b24gc2Vjb25kYXJ5PkZpbmFsaXplPC9CdXR0b24+XG4gICAgICA8L1RhYmxlLkNlbGw+XG4gICAgPC9UYWJsZS5Sb3c+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3RSb3c7XG4iXSwibmFtZXMiOlsidXNlV2ViM1JlYWN0IiwidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIkJ1dHRvbiIsIlRhYmxlIiwiV2ViMyIsIlJlcXVlc3RSb3ciLCJyZXF1ZXN0IiwiYWRkcmVzcyIsImluZGV4IiwiYXBwcm92ZXJzQ291bnQiLCJhY3RpdmUiLCJhY2NvdW50IiwibGlicmFyeSIsImNoYWluSWQiLCJjb25uZWN0b3IiLCJhY3RpdmF0ZSIsImRlYWN0aXZhdGUiLCJyb3V0ZXIiLCJhcHByb3ZlTG9hZGluZyIsInNldEFwcHJvdmVMb2FkaW5nIiwiZmluYWxpemVMb2FkaW5nIiwic2V0RmluYWxpemVMb2FkaW5nIiwib25BcHByb3ZlIiwiY2FtcGFpZ24iLCJnZXRDYW1wYWlnbkNvbnRyYWN0IiwibWV0aG9kcyIsImFwcHJvdmVSZXF1ZXN0Iiwic2VuZCIsImZyb20iLCJyZXBsYWNlIiwiZXJyIiwiYWxlcnQiLCJtZXNzYWdlIiwid2ViMyIsIlJvdyIsIkNlbGwiLCJkZXNjcmlwdGlvbiIsInV0aWxzIiwiZnJvbVdlaSIsInZhbHVlIiwicmVjaXBpZW50IiwiYXBwcm92YWxDb3VudCIsImNvbG9yIiwic2Vjb25kYXJ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/RequestRow.js\n"));

/***/ })

});