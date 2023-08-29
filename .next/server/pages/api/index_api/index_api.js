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
exports.id = "pages/api/index_api/index_api";
exports.ids = ["pages/api/index_api/index_api"];
exports.modules = {

/***/ "mysql2/promise":
/*!*********************************!*\
  !*** external "mysql2/promise" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("mysql2/promise");

/***/ }),

/***/ "(api)/./src/pages/api/index_api/index_api.js":
/*!**********************************************!*\
  !*** ./src/pages/api/index_api/index_api.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ health)\n/* harmony export */ });\n/* harmony import */ var _server_mySQL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../server/mySQL */ \"(api)/./src/server/mySQL.js\");\n\n// Define a function to execute MySQL queries\nasync function executeQuery(query, values) {\n    const connection = await _server_mySQL__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getConnection();\n    try {\n        const [rows] = await connection.execute(query, values);\n        return rows;\n    } finally{\n        connection.release();\n    }\n}\n// Define a function to insert a new user into the MySQL database\nasync function postUser(user_id, name) {\n    const query = \"INSERT INTO users (user_id,name) VALUES (?, ?)\";\n    const values = [\n        user_id,\n        name\n    ];\n    try {\n        await executeQuery(query, values);\n    } catch (error) {\n        throw error; // Rethrow the error to handle it in the caller\n    }\n}\n// Now you can use executeQuery to run MySQL queries\nconst getUsers = async ()=>{\n    const query = \"SELECT * FROM users\";\n    const users = await executeQuery(query);\n    return users;\n};\nasync function health(req, res) {\n    if (req.method === \"GET\") {\n        // Handle GET request, e.g., fetch data from MySQL\n        const users = await getUsers();\n        res.status(200).json(users);\n    } else if (req.method === \"POST\") {\n        // Handle POST request, e.g., insert data into MySQL\n        const { user_id, name } = req.body;\n        try {\n            await postUser(user_id, name);\n            res.status(200).json({\n                message: \"Data inserted successfully\"\n            });\n        } catch (error) {\n            console.error(\"Error inserting data:\", error);\n            res.status(500).json({\n                error: \"Internal Server Error\"\n            });\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2luZGV4X2FwaS9pbmRleF9hcGkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBd0M7QUFHeEMsNkNBQTZDO0FBQzdDLGVBQWVDLGFBQWFDLEtBQUssRUFBRUMsTUFBTTtJQUNyQyxNQUFNQyxhQUFhLE1BQU1KLG1FQUFrQks7SUFDM0MsSUFBSTtRQUNGLE1BQU0sQ0FBQ0MsS0FBSyxHQUFHLE1BQU1GLFdBQVdHLFFBQVFMLE9BQU9DO1FBQy9DLE9BQU9HO0lBQ1QsU0FBVTtRQUNSRixXQUFXSTtJQUNiO0FBQ0Y7QUFFRSxpRUFBaUU7QUFDckUsZUFBZUMsU0FBU0MsT0FBTyxFQUFFQyxJQUFJO0lBQ2pDLE1BQU1ULFFBQ1I7SUFDRSxNQUFNQyxTQUFTO1FBQUNPO1FBQVNDO0tBQUs7SUFDOUIsSUFBSTtRQUNGLE1BQU1WLGFBQWFDLE9BQU9DO0lBQzVCLEVBQUUsT0FBT1MsT0FBTztRQUNkLE1BQU1BLE9BQU8sK0NBQStDO0lBQzlEO0FBQ0Y7QUFDRSxvREFBb0Q7QUFDeEQsTUFBTUMsV0FBVztJQUNiLE1BQU1YLFFBQVE7SUFDZCxNQUFNWSxRQUFRLE1BQU1iLGFBQWFDO0lBQ2pDLE9BQU9ZO0FBQ1Q7QUFFYSxlQUFlQyxPQUFPQyxHQUFHLEVBQUNDLEdBQUc7SUFFeEMsSUFBSUQsSUFBSUUsV0FBVyxPQUFPO1FBQ3RCLGtEQUFrRDtRQUNsRCxNQUFNSixRQUFRLE1BQU1EO1FBQ3BCSSxJQUFJRSxPQUFPLEtBQUtDLEtBQUtOO0lBQ3ZCLE9BQ0UsSUFBSUUsSUFBSUUsV0FBVyxRQUFRO1FBQzNCLG9EQUFvRDtRQUNwRCxNQUFNLEVBQUVSLE9BQU8sRUFBRUMsSUFBSSxFQUFFLEdBQUdLLElBQUlLO1FBRTlCLElBQUk7WUFDRixNQUFNWixTQUFTQyxTQUFRQztZQUN2Qk0sSUFBSUUsT0FBTyxLQUFLQyxLQUFLO2dCQUFFRSxTQUFTO1lBQTZCO1FBQy9ELEVBQUUsT0FBT1YsT0FBTztZQUNkVyxRQUFRWCxNQUFNLHlCQUF5QkE7WUFDdkNLLElBQUlFLE9BQU8sS0FBS0MsS0FBSztnQkFBRVIsT0FBTztZQUF3QjtRQUN4RDtJQUNGO0FBQ04iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lLWJvb2tpbmcvLi9zcmMvcGFnZXMvYXBpL2luZGV4X2FwaS9pbmRleF9hcGkuanM/YWYzMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcG9vbCBmcm9tICcuLi8uLi8uLi9zZXJ2ZXIvbXlTUUwnXG5cblxuLy8gRGVmaW5lIGEgZnVuY3Rpb24gdG8gZXhlY3V0ZSBNeVNRTCBxdWVyaWVzXG5hc3luYyBmdW5jdGlvbiBleGVjdXRlUXVlcnkocXVlcnksIHZhbHVlcykge1xuICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBhd2FpdCBwb29sLmdldENvbm5lY3Rpb24oKTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgW3Jvd3NdID0gYXdhaXQgY29ubmVjdGlvbi5leGVjdXRlKHF1ZXJ5LCB2YWx1ZXMpO1xuICAgICAgcmV0dXJuIHJvd3M7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGNvbm5lY3Rpb24ucmVsZWFzZSgpO1xuICAgIH1cbiAgfVxuXG4gICAgLy8gRGVmaW5lIGEgZnVuY3Rpb24gdG8gaW5zZXJ0IGEgbmV3IHVzZXIgaW50byB0aGUgTXlTUUwgZGF0YWJhc2VcbmFzeW5jIGZ1bmN0aW9uIHBvc3RVc2VyKHVzZXJfaWRcdCxuYW1lKSB7XG4gICAgY29uc3QgcXVlcnkgPVxuICAnSU5TRVJUIElOVE8gdXNlcnMgKHVzZXJfaWQsbmFtZSkgVkFMVUVTICg/LCA/KSc7XG4gICAgY29uc3QgdmFsdWVzID0gW3VzZXJfaWRcdCxuYW1lXTtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgZXhlY3V0ZVF1ZXJ5KHF1ZXJ5LCB2YWx1ZXMpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aHJvdyBlcnJvcjsgLy8gUmV0aHJvdyB0aGUgZXJyb3IgdG8gaGFuZGxlIGl0IGluIHRoZSBjYWxsZXJcbiAgICB9XG4gIH1cbiAgICAvLyBOb3cgeW91IGNhbiB1c2UgZXhlY3V0ZVF1ZXJ5IHRvIHJ1biBNeVNRTCBxdWVyaWVzXG5jb25zdCBnZXRVc2VycyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBxdWVyeSA9ICdTRUxFQ1QgKiBGUk9NIHVzZXJzJztcbiAgICBjb25zdCB1c2VycyA9IGF3YWl0IGV4ZWN1dGVRdWVyeShxdWVyeSk7XG4gICAgcmV0dXJuIHVzZXJzO1xuICB9O1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoZWFsdGgocmVxLHJlcylcbntcbiAgICBpZiAocmVxLm1ldGhvZCA9PT0gJ0dFVCcpIHtcbiAgICAgICAgLy8gSGFuZGxlIEdFVCByZXF1ZXN0LCBlLmcuLCBmZXRjaCBkYXRhIGZyb20gTXlTUUxcbiAgICAgICAgY29uc3QgdXNlcnMgPSBhd2FpdCBnZXRVc2VycygpO1xuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih1c2Vycyk7XG4gICAgICB9XG4gICBlbHNlIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcbiAgICAgICAgLy8gSGFuZGxlIFBPU1QgcmVxdWVzdCwgZS5nLiwgaW5zZXJ0IGRhdGEgaW50byBNeVNRTFxuICAgICAgICBjb25zdCB7IHVzZXJfaWRcdCxuYW1lIH0gPSByZXEuYm9keTtcbiAgICAgIFxuICAgICAgICB0cnkge1xuICAgICAgICAgIGF3YWl0IHBvc3RVc2VyKHVzZXJfaWQsbmFtZSk7XG4gICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiAnRGF0YSBpbnNlcnRlZCBzdWNjZXNzZnVsbHknIH0pO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluc2VydGluZyBkYXRhOicsIGVycm9yKTtcbiAgICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiAnSW50ZXJuYWwgU2VydmVyIEVycm9yJyB9KTtcbiAgICAgICAgfVxuICAgICAgfVxufSJdLCJuYW1lcyI6WyJwb29sIiwiZXhlY3V0ZVF1ZXJ5IiwicXVlcnkiLCJ2YWx1ZXMiLCJjb25uZWN0aW9uIiwiZ2V0Q29ubmVjdGlvbiIsInJvd3MiLCJleGVjdXRlIiwicmVsZWFzZSIsInBvc3RVc2VyIiwidXNlcl9pZCIsIm5hbWUiLCJlcnJvciIsImdldFVzZXJzIiwidXNlcnMiLCJoZWFsdGgiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzdGF0dXMiLCJqc29uIiwiYm9keSIsIm1lc3NhZ2UiLCJjb25zb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/index_api/index_api.js\n");

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
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/index_api/index_api.js"));
module.exports = __webpack_exports__;

})();