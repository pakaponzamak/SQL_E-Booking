"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/course/course_count_api";
exports.ids = ["pages/api/course/course_count_api"];
exports.modules = {

/***/ "mysql2/promise":
/*!*********************************!*\
  !*** external "mysql2/promise" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("mysql2/promise");

/***/ }),

/***/ "(api)/./src/pages/api/course/course_count_api.js":
/*!**************************************************!*\
  !*** ./src/pages/api/course/course_count_api.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ course_counter)\n/* harmony export */ });\n/* harmony import */ var _server_mySQL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../server/mySQL */ \"(api)/./src/server/mySQL.js\");\n\n// Define a function to execute MySQL queries\nasync function executeQuery(query, values) {\n    const connection = await _server_mySQL__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getConnection();\n    try {\n        const [rows] = await connection.execute(query, values);\n        return rows;\n    } finally{\n        connection.release();\n    }\n}\n// Now you can use executeQuery to run MySQL queries\nconst getCourseCount = async ()=>{\n    const query = `\n    SELECT course_id, COUNT(*) AS userCount\n    FROM training_course\n    GROUP BY course_id\n  `;\n    const results = await executeQuery(query);\n    return results;\n};\nasync function course_counter(req, res) {\n    if (req.method === \"GET\") {\n        // Handle GET request, e.g., fetch data from MySQL\n        const courses = await getCourseCount();\n        res.status(200).json(courses);\n    } else {\n        res.status(405).json({\n            message: \"This method is not allow\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2NvdXJzZS9jb3Vyc2VfY291bnRfYXBpLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXlDO0FBRXpDLDZDQUE2QztBQUM3QyxlQUFlQyxhQUFhQyxLQUFLLEVBQUVDLE1BQU07SUFDckMsTUFBTUMsYUFBYSxNQUFNSixtRUFBa0JLO0lBQzNDLElBQUk7UUFDRixNQUFNLENBQUNDLEtBQUssR0FBRyxNQUFNRixXQUFXRyxRQUFRTCxPQUFPQztRQUMvQyxPQUFPRztJQUNULFNBQVU7UUFDUkYsV0FBV0k7SUFDYjtBQUNGO0FBRUYsb0RBQW9EO0FBQ3BELE1BQU1DLGlCQUFpQjtJQUNuQixNQUFNUCxRQUFRLENBQUM7Ozs7RUFJakIsQ0FBQztJQUNELE1BQU1RLFVBQVUsTUFBTVQsYUFBYUM7SUFDbkMsT0FBT1E7QUFDUDtBQUVhLGVBQWVDLGVBQWdCQyxHQUFHLEVBQUNDLEdBQUc7SUFHakQsSUFBR0QsSUFBSUUsV0FBVyxPQUNsQjtRQUVRLGtEQUFrRDtRQUNsRCxNQUFNQyxVQUFVLE1BQU1OO1FBQ3RCSSxJQUFJRyxPQUFPLEtBQUtDLEtBQUtGO0lBRTdCLE9BQU07UUFDRkYsSUFBSUcsT0FBTyxLQUFLQyxLQUFLO1lBQUNDLFNBQVU7UUFBMEI7SUFDOUQ7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL2UtYm9va2luZy8uL3NyYy9wYWdlcy9hcGkvY291cnNlL2NvdXJzZV9jb3VudF9hcGkuanM/OTQyMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcG9vbCBmcm9tIFwiLi4vLi4vLi4vc2VydmVyL215U1FMXCI7XG5cbi8vIERlZmluZSBhIGZ1bmN0aW9uIHRvIGV4ZWN1dGUgTXlTUUwgcXVlcmllc1xuYXN5bmMgZnVuY3Rpb24gZXhlY3V0ZVF1ZXJ5KHF1ZXJ5LCB2YWx1ZXMpIHtcbiAgICBjb25zdCBjb25uZWN0aW9uID0gYXdhaXQgcG9vbC5nZXRDb25uZWN0aW9uKCk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IFtyb3dzXSA9IGF3YWl0IGNvbm5lY3Rpb24uZXhlY3V0ZShxdWVyeSwgdmFsdWVzKTtcbiAgICAgIHJldHVybiByb3dzO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBjb25uZWN0aW9uLnJlbGVhc2UoKTtcbiAgICB9XG4gIH1cblxuLy8gTm93IHlvdSBjYW4gdXNlIGV4ZWN1dGVRdWVyeSB0byBydW4gTXlTUUwgcXVlcmllc1xuY29uc3QgZ2V0Q291cnNlQ291bnQgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcXVlcnkgPSBgXG4gICAgU0VMRUNUIGNvdXJzZV9pZCwgQ09VTlQoKikgQVMgdXNlckNvdW50XG4gICAgRlJPTSB0cmFpbmluZ19jb3Vyc2VcbiAgICBHUk9VUCBCWSBjb3Vyc2VfaWRcbiAgYDtcbiAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IGV4ZWN1dGVRdWVyeShxdWVyeSk7XG4gIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBjb3Vyc2VfY291bnRlciAocmVxLHJlcyl7XG5cblxuICAgIGlmKHJlcS5tZXRob2QgPT09ICdHRVQnKVxuICAgIHtcbiAgICBcbiAgICAgICAgICAgIC8vIEhhbmRsZSBHRVQgcmVxdWVzdCwgZS5nLiwgZmV0Y2ggZGF0YSBmcm9tIE15U1FMXG4gICAgICAgICAgICBjb25zdCBjb3Vyc2VzID0gYXdhaXQgZ2V0Q291cnNlQ291bnQoKTtcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGNvdXJzZXMpO1xuICAgICAgICAgIFxuICAgIH1lbHNlIHtcbiAgICAgICAgcmVzLnN0YXR1cyg0MDUpLmpzb24oe21lc3NhZ2UgOiBcIlRoaXMgbWV0aG9kIGlzIG5vdCBhbGxvd1wifSlcbiAgICB9XG59Il0sIm5hbWVzIjpbInBvb2wiLCJleGVjdXRlUXVlcnkiLCJxdWVyeSIsInZhbHVlcyIsImNvbm5lY3Rpb24iLCJnZXRDb25uZWN0aW9uIiwicm93cyIsImV4ZWN1dGUiLCJyZWxlYXNlIiwiZ2V0Q291cnNlQ291bnQiLCJyZXN1bHRzIiwiY291cnNlX2NvdW50ZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJjb3Vyc2VzIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/course/course_count_api.js\n");

/***/ }),

/***/ "(api)/./src/server/mySQL.js":
/*!*****************************!*\
  !*** ./src/server/mySQL.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql2/promise */ \"mysql2/promise\");\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql2_promise__WEBPACK_IMPORTED_MODULE_0__);\n\n// Create a MySQL connection pool\nconst pool = mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default().createPool({\n    host: \"localhost\",\n    user: \"root\",\n    password: \"\",\n    database: \"Test_Booking\",\n    waitForConnections: true,\n    connectionLimit: 10,\n    queueLimit: 0\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pool);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvc2VydmVyL215U1FMLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFtQztBQUVuQyxpQ0FBaUM7QUFDakMsTUFBTUMsT0FBT0QsZ0VBQWdCRSxDQUFDO0lBQzVCQyxNQUFNO0lBQ05DLE1BQU07SUFDTkMsVUFBVTtJQUNWQyxVQUFVO0lBQ1ZDLG9CQUFvQjtJQUNwQkMsaUJBQWlCO0lBQ2pCQyxZQUFZO0FBQ2Q7QUFFQSxpRUFBZVIsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2UtYm9va2luZy8uL3NyYy9zZXJ2ZXIvbXlTUUwuanM/YTRiYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbXlzcWwgZnJvbSAnbXlzcWwyL3Byb21pc2UnO1xuXG4vLyBDcmVhdGUgYSBNeVNRTCBjb25uZWN0aW9uIHBvb2xcbmNvbnN0IHBvb2wgPSBteXNxbC5jcmVhdGVQb29sKHtcbiAgaG9zdDogJ2xvY2FsaG9zdCcsXG4gIHVzZXI6ICdyb290JyxcbiAgcGFzc3dvcmQ6ICcnLFxuICBkYXRhYmFzZTogJ1Rlc3RfQm9va2luZycsXG4gIHdhaXRGb3JDb25uZWN0aW9uczogdHJ1ZSxcbiAgY29ubmVjdGlvbkxpbWl0OiAxMCxcbiAgcXVldWVMaW1pdDogMCxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBwb29sOyJdLCJuYW1lcyI6WyJteXNxbCIsInBvb2wiLCJjcmVhdGVQb29sIiwiaG9zdCIsInVzZXIiLCJwYXNzd29yZCIsImRhdGFiYXNlIiwid2FpdEZvckNvbm5lY3Rpb25zIiwiY29ubmVjdGlvbkxpbWl0IiwicXVldWVMaW1pdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/server/mySQL.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/course/course_count_api.js"));
module.exports = __webpack_exports__;

})();