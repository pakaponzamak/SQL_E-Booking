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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ course_counter)\n/* harmony export */ });\n/* harmony import */ var _server_mySQL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../server/mySQL */ \"(api)/./src/server/mySQL.js\");\n\n// Define a function to execute MySQL queries\nasync function executeQuery(query, values) {\n    const connection = await _server_mySQL__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getConnection();\n    try {\n        const [rows] = await connection.execute(query, values);\n        return rows;\n    } finally{\n        connection.release();\n    }\n}\n// Now you can use executeQuery to run MySQL queries\nconst getCourseCount = async ()=>{\n    const query = `\n    SELECT course_id, COUNT(*) AS userCount\n    FROM training_course\n    GROUP BY course_id\n  `;\n    const results = await executeQuery(query);\n    return results;\n};\nasync function course_counter(req, res) {\n    if (req.method === \"GET\") {\n        // Handle GET request, e.g., fetch data from MySQL\n        const courses = await getCourseCount();\n        res.status(200).json(courses);\n    } else {\n        res.status(405).json({\n            message: \"This method is not allow\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2NvdXJzZS9jb3Vyc2VfY291bnRfYXBpLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXlDO0FBRXpDLDZDQUE2QztBQUM3QyxlQUFlQyxhQUFhQyxLQUFLLEVBQUVDLE1BQU07SUFDdkMsTUFBTUMsYUFBYSxNQUFNSixtRUFBa0JLO0lBQzNDLElBQUk7UUFDRixNQUFNLENBQUNDLEtBQUssR0FBRyxNQUFNRixXQUFXRyxRQUFRTCxPQUFPQztRQUMvQyxPQUFPRztJQUNULFNBQVU7UUFDUkYsV0FBV0k7SUFDYjtBQUNGO0FBQ0Esb0RBQW9EO0FBQ3BELE1BQU1DLGlCQUFpQjtJQUNyQixNQUFNUCxRQUFRLENBQUM7Ozs7RUFJZixDQUFDO0lBQ0QsTUFBTVEsVUFBVSxNQUFNVCxhQUFhQztJQUNuQyxPQUFPUTtBQUNUO0FBRWUsZUFBZUMsZUFBZUMsR0FBRyxFQUFFQyxHQUFHO0lBQ25ELElBQUlELElBQUlFLFdBQVcsT0FBTztRQUN4QixrREFBa0Q7UUFDbEQsTUFBTUMsVUFBVSxNQUFNTjtRQUN0QkksSUFBSUcsT0FBTyxLQUFLQyxLQUFLRjtJQUN2QixPQUFPO1FBQ0xGLElBQUlHLE9BQU8sS0FBS0MsS0FBSztZQUFFQyxTQUFTO1FBQTJCO0lBQzdEO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lLWJvb2tpbmcvLi9zcmMvcGFnZXMvYXBpL2NvdXJzZS9jb3Vyc2VfY291bnRfYXBpLmpzPzk0MjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBvb2wgZnJvbSBcIi4uLy4uLy4uL3NlcnZlci9teVNRTFwiO1xuXG4vLyBEZWZpbmUgYSBmdW5jdGlvbiB0byBleGVjdXRlIE15U1FMIHF1ZXJpZXNcbmFzeW5jIGZ1bmN0aW9uIGV4ZWN1dGVRdWVyeShxdWVyeSwgdmFsdWVzKSB7XG4gIGNvbnN0IGNvbm5lY3Rpb24gPSBhd2FpdCBwb29sLmdldENvbm5lY3Rpb24oKTtcbiAgdHJ5IHtcbiAgICBjb25zdCBbcm93c10gPSBhd2FpdCBjb25uZWN0aW9uLmV4ZWN1dGUocXVlcnksIHZhbHVlcyk7XG4gICAgcmV0dXJuIHJvd3M7XG4gIH0gZmluYWxseSB7XG4gICAgY29ubmVjdGlvbi5yZWxlYXNlKCk7XG4gIH1cbn1cbi8vIE5vdyB5b3UgY2FuIHVzZSBleGVjdXRlUXVlcnkgdG8gcnVuIE15U1FMIHF1ZXJpZXNcbmNvbnN0IGdldENvdXJzZUNvdW50ID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBxdWVyeSA9IGBcbiAgICBTRUxFQ1QgY291cnNlX2lkLCBDT1VOVCgqKSBBUyB1c2VyQ291bnRcbiAgICBGUk9NIHRyYWluaW5nX2NvdXJzZVxuICAgIEdST1VQIEJZIGNvdXJzZV9pZFxuICBgO1xuICBjb25zdCByZXN1bHRzID0gYXdhaXQgZXhlY3V0ZVF1ZXJ5KHF1ZXJ5KTtcbiAgcmV0dXJuIHJlc3VsdHM7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBjb3Vyc2VfY291bnRlcihyZXEsIHJlcykge1xuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJHRVRcIikge1xuICAgIC8vIEhhbmRsZSBHRVQgcmVxdWVzdCwgZS5nLiwgZmV0Y2ggZGF0YSBmcm9tIE15U1FMXG4gICAgY29uc3QgY291cnNlcyA9IGF3YWl0IGdldENvdXJzZUNvdW50KCk7XG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oY291cnNlcyk7XG4gIH0gZWxzZSB7XG4gICAgcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBtZXNzYWdlOiBcIlRoaXMgbWV0aG9kIGlzIG5vdCBhbGxvd1wiIH0pO1xuICB9XG59XG4iXSwibmFtZXMiOlsicG9vbCIsImV4ZWN1dGVRdWVyeSIsInF1ZXJ5IiwidmFsdWVzIiwiY29ubmVjdGlvbiIsImdldENvbm5lY3Rpb24iLCJyb3dzIiwiZXhlY3V0ZSIsInJlbGVhc2UiLCJnZXRDb3Vyc2VDb3VudCIsInJlc3VsdHMiLCJjb3Vyc2VfY291bnRlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImNvdXJzZXMiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/course/course_count_api.js\n");

/***/ }),

/***/ "(api)/./src/server/mySQL.js":
/*!*****************************!*\
  !*** ./src/server/mySQL.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql2/promise */ \"mysql2/promise\");\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql2_promise__WEBPACK_IMPORTED_MODULE_0__);\n\n// Create a MySQL connection pool\nconst pool = mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default().createPool({\n    host: \"localhost\",\n    user: \"root\",\n    password: \"\",\n    database: \"Test_Booking\",\n    waitForConnections: true,\n    connectionLimit: 500,\n    queueLimit: 0\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pool);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvc2VydmVyL215U1FMLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFtQztBQUVuQyxpQ0FBaUM7QUFDakMsTUFBTUMsT0FBT0QsZ0VBQWdCRSxDQUFDO0lBQzVCQyxNQUFNO0lBQ05DLE1BQU07SUFDTkMsVUFBVTtJQUNWQyxVQUFVO0lBQ1ZDLG9CQUFvQjtJQUNwQkMsaUJBQWlCO0lBQ2pCQyxZQUFZO0FBQ2Q7QUFFQSxpRUFBZVIsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2UtYm9va2luZy8uL3NyYy9zZXJ2ZXIvbXlTUUwuanM/YTRiYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbXlzcWwgZnJvbSAnbXlzcWwyL3Byb21pc2UnO1xuXG4vLyBDcmVhdGUgYSBNeVNRTCBjb25uZWN0aW9uIHBvb2xcbmNvbnN0IHBvb2wgPSBteXNxbC5jcmVhdGVQb29sKHtcbiAgaG9zdDogJ2xvY2FsaG9zdCcsXG4gIHVzZXI6ICdyb290JyxcbiAgcGFzc3dvcmQ6ICcnLFxuICBkYXRhYmFzZTogJ1Rlc3RfQm9va2luZycsXG4gIHdhaXRGb3JDb25uZWN0aW9uczogdHJ1ZSxcbiAgY29ubmVjdGlvbkxpbWl0OiA1MDAsXG4gIHF1ZXVlTGltaXQ6IDAsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcG9vbDsiXSwibmFtZXMiOlsibXlzcWwiLCJwb29sIiwiY3JlYXRlUG9vbCIsImhvc3QiLCJ1c2VyIiwicGFzc3dvcmQiLCJkYXRhYmFzZSIsIndhaXRGb3JDb25uZWN0aW9ucyIsImNvbm5lY3Rpb25MaW1pdCIsInF1ZXVlTGltaXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/server/mySQL.js\n");

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