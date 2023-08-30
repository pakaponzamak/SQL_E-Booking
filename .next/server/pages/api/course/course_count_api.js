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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ course_counter)\n/* harmony export */ });\n/* harmony import */ var _server_mySQL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../server/mySQL */ \"(api)/./src/server/mySQL.js\");\n\n// Define a function to execute MySQL queries\nasync function executeQuery(query, values) {\n    const connection = await _server_mySQL__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getConnection();\n    try {\n        const [rows] = await connection.execute(query, values);\n        return rows;\n    } finally{\n        connection.release();\n    }\n}\n// Now you can use executeQuery to run MySQL queries\nconst getCourseCount = async ()=>{\n    const query = `\n    SELECT course_id, COUNT(*) AS userCount\n    FROM training_course\n    GROUP BY course_id\n  `;\n    const results = await executeQuery(query);\n    return results;\n};\nasync function course_counter(req, res) {\n    if (req.method === \"GET\") {\n        // Handle GET request, e.g., fetch data from MySQL\n        const courses = await getCourseCount();\n        res.status(200).json(courses);\n    } else {\n        res.status(405).json({\n            message: \"Not Good\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2NvdXJzZS9jb3Vyc2VfY291bnRfYXBpLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXlDO0FBRXpDLDZDQUE2QztBQUM3QyxlQUFlQyxhQUFhQyxLQUFLLEVBQUVDLE1BQU07SUFDckMsTUFBTUMsYUFBYSxNQUFNSixtRUFBa0JLO0lBQzNDLElBQUk7UUFDRixNQUFNLENBQUNDLEtBQUssR0FBRyxNQUFNRixXQUFXRyxRQUFRTCxPQUFPQztRQUMvQyxPQUFPRztJQUNULFNBQVU7UUFDUkYsV0FBV0k7SUFDYjtBQUNGO0FBRUYsb0RBQW9EO0FBQ3BELE1BQU1DLGlCQUFpQjtJQUNuQixNQUFNUCxRQUFRLENBQUM7Ozs7RUFJakIsQ0FBQztJQUNELE1BQU1RLFVBQVUsTUFBTVQsYUFBYUM7SUFDbkMsT0FBT1E7QUFDUDtBQUVhLGVBQWVDLGVBQWdCQyxHQUFHLEVBQUNDLEdBQUc7SUFHakQsSUFBR0QsSUFBSUUsV0FBVyxPQUNsQjtRQUVRLGtEQUFrRDtRQUNsRCxNQUFNQyxVQUFVLE1BQU1OO1FBQ3RCSSxJQUFJRyxPQUFPLEtBQUtDLEtBQUtGO0lBRTdCLE9BQU07UUFDRkYsSUFBSUcsT0FBTyxLQUFLQyxLQUFLO1lBQUNDLFNBQVU7UUFBVTtJQUM5QztBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZS1ib29raW5nLy4vc3JjL3BhZ2VzL2FwaS9jb3Vyc2UvY291cnNlX2NvdW50X2FwaS5qcz85NDIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwb29sIGZyb20gXCIuLi8uLi8uLi9zZXJ2ZXIvbXlTUUxcIjtcblxuLy8gRGVmaW5lIGEgZnVuY3Rpb24gdG8gZXhlY3V0ZSBNeVNRTCBxdWVyaWVzXG5hc3luYyBmdW5jdGlvbiBleGVjdXRlUXVlcnkocXVlcnksIHZhbHVlcykge1xuICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBhd2FpdCBwb29sLmdldENvbm5lY3Rpb24oKTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgW3Jvd3NdID0gYXdhaXQgY29ubmVjdGlvbi5leGVjdXRlKHF1ZXJ5LCB2YWx1ZXMpO1xuICAgICAgcmV0dXJuIHJvd3M7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGNvbm5lY3Rpb24ucmVsZWFzZSgpO1xuICAgIH1cbiAgfVxuXG4vLyBOb3cgeW91IGNhbiB1c2UgZXhlY3V0ZVF1ZXJ5IHRvIHJ1biBNeVNRTCBxdWVyaWVzXG5jb25zdCBnZXRDb3Vyc2VDb3VudCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBxdWVyeSA9IGBcbiAgICBTRUxFQ1QgY291cnNlX2lkLCBDT1VOVCgqKSBBUyB1c2VyQ291bnRcbiAgICBGUk9NIHRyYWluaW5nX2NvdXJzZVxuICAgIEdST1VQIEJZIGNvdXJzZV9pZFxuICBgO1xuICBjb25zdCByZXN1bHRzID0gYXdhaXQgZXhlY3V0ZVF1ZXJ5KHF1ZXJ5KTtcbiAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGNvdXJzZV9jb3VudGVyIChyZXEscmVzKXtcblxuXG4gICAgaWYocmVxLm1ldGhvZCA9PT0gJ0dFVCcpXG4gICAge1xuICAgIFxuICAgICAgICAgICAgLy8gSGFuZGxlIEdFVCByZXF1ZXN0LCBlLmcuLCBmZXRjaCBkYXRhIGZyb20gTXlTUUxcbiAgICAgICAgICAgIGNvbnN0IGNvdXJzZXMgPSBhd2FpdCBnZXRDb3Vyc2VDb3VudCgpO1xuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oY291cnNlcyk7XG4gICAgICAgICAgXG4gICAgfWVsc2Uge1xuICAgICAgICByZXMuc3RhdHVzKDQwNSkuanNvbih7bWVzc2FnZSA6IFwiTm90IEdvb2RcIn0pXG4gICAgfVxufSJdLCJuYW1lcyI6WyJwb29sIiwiZXhlY3V0ZVF1ZXJ5IiwicXVlcnkiLCJ2YWx1ZXMiLCJjb25uZWN0aW9uIiwiZ2V0Q29ubmVjdGlvbiIsInJvd3MiLCJleGVjdXRlIiwicmVsZWFzZSIsImdldENvdXJzZUNvdW50IiwicmVzdWx0cyIsImNvdXJzZV9jb3VudGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiY291cnNlcyIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/course/course_count_api.js\n");

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