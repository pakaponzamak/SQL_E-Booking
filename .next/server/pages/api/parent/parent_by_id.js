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
exports.id = "pages/api/parent/parent_by_id";
exports.ids = ["pages/api/parent/parent_by_id"];
exports.modules = {

/***/ "mysql2/promise":
/*!*********************************!*\
  !*** external "mysql2/promise" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("mysql2/promise");

/***/ }),

/***/ "(api)/./src/pages/api/parent/parent_by_id.js":
/*!**********************************************!*\
  !*** ./src/pages/api/parent/parent_by_id.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ parent_by_id)\n/* harmony export */ });\n/* harmony import */ var _server_mySQL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../server/mySQL */ \"(api)/./src/server/mySQL.js\");\n\n// Define a function to execute MySQL queries\nasync function executeQuery(query, values) {\n    const connection = await _server_mySQL__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getConnection();\n    try {\n        const [rows] = await connection.execute(query, values);\n        return rows;\n    } finally{\n        connection.release();\n    }\n}\nasync function getParent(user_id) {\n    const query = \"SELECT * FROM parent_data WHERE user_id = ?\";\n    try {\n        const parent = await executeQuery(query, [\n            user_id\n        ]);\n        return parent;\n    } catch (error) {\n        console.error(\"Error fetching health records:\", error);\n        throw error; // Rethrow the error to handle it in the caller\n    }\n}\nasync function parent_by_id(req, res) {\n    if (req.method === \"GET\") {\n        const user_id = req.query.user_id;\n        try {\n            const data = await getParent(user_id);\n            if (data.length !== 0) {\n                // Admin with matching username and password found\n                res.status(200).json(data);\n            } else {\n                // No matching admin found\n                res.status(404).json({\n                    message: \"Parent not found\"\n                });\n            }\n        } catch (error) {\n            console.error(\"Error fetching health data:\", error);\n            res.status(500).json({\n                error: `Internal Server Errorrrr ${user_id}`\n            });\n        }\n    } else {\n        res.status(405).json({\n            message: \"This method is not allowed\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3BhcmVudC9wYXJlbnRfYnlfaWQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBeUM7QUFFekMsNkNBQTZDO0FBQzdDLGVBQWVDLGFBQWFDLEtBQUssRUFBRUMsTUFBTTtJQUN2QyxNQUFNQyxhQUFhLE1BQU1KLG1FQUFrQks7SUFDM0MsSUFBSTtRQUNGLE1BQU0sQ0FBQ0MsS0FBSyxHQUFHLE1BQU1GLFdBQVdHLFFBQVFMLE9BQU9DO1FBQy9DLE9BQU9HO0lBQ1QsU0FBVTtRQUNSRixXQUFXSTtJQUNiO0FBQ0Y7QUFFQSxlQUFlQyxVQUFVQyxPQUFPO0lBQzVCLE1BQU1SLFFBQVE7SUFDZCxJQUFJO1FBQ0EsTUFBTVMsU0FBUyxNQUFNVixhQUFhQyxPQUFNO1lBQUNRO1NBQVE7UUFDakQsT0FBT0M7SUFDVCxFQUFFLE9BQU9DLE9BQU87UUFDZEMsUUFBUUQsTUFBTSxrQ0FBa0NBO1FBQ2hELE1BQU1BLE9BQU8sK0NBQStDO0lBQzlEO0FBQ047QUFFZSxlQUFlRSxhQUFhQyxHQUFHLEVBQUNDLEdBQUc7SUFFOUMsSUFBSUQsSUFBSUUsV0FBVyxPQUFNO1FBQ3JCLE1BQU1QLFVBQVVLLElBQUliLE1BQU1RO1FBQzFCLElBQUk7WUFDQSxNQUFNUSxPQUFPLE1BQU1ULFVBQVVDO1lBQzdCLElBQUlRLEtBQUtDLFdBQVcsR0FBRztnQkFDbkIsa0RBQWtEO2dCQUNsREgsSUFBSUksT0FBTyxLQUFLQyxLQUFLSDtZQUN2QixPQUFPO2dCQUNMLDBCQUEwQjtnQkFDMUJGLElBQUlJLE9BQU8sS0FBS0MsS0FBSztvQkFBRUMsU0FBUztnQkFBbUI7WUFDckQ7UUFDSixFQUFFLE9BQU9WLE9BQU87WUFDZEMsUUFBUUQsTUFBTSwrQkFBK0JBO1lBQzdDSSxJQUFJSSxPQUFPLEtBQUtDLEtBQUs7Z0JBQUVULE9BQU8sQ0FBQyx5QkFBeUIsRUFBRUYsUUFBUSxDQUFDO1lBQUM7UUFDdEU7SUFDTixPQUNLO1FBQ0RNLElBQUlJLE9BQU8sS0FBS0MsS0FBSztZQUFFQyxTQUFTO1FBQTZCO0lBQy9EO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lLWJvb2tpbmcvLi9zcmMvcGFnZXMvYXBpL3BhcmVudC9wYXJlbnRfYnlfaWQuanM/NmRjMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcG9vbCBmcm9tIFwiLi4vLi4vLi4vc2VydmVyL215U1FMXCI7XG5cbi8vIERlZmluZSBhIGZ1bmN0aW9uIHRvIGV4ZWN1dGUgTXlTUUwgcXVlcmllc1xuYXN5bmMgZnVuY3Rpb24gZXhlY3V0ZVF1ZXJ5KHF1ZXJ5LCB2YWx1ZXMpIHtcbiAgY29uc3QgY29ubmVjdGlvbiA9IGF3YWl0IHBvb2wuZ2V0Q29ubmVjdGlvbigpO1xuICB0cnkge1xuICAgIGNvbnN0IFtyb3dzXSA9IGF3YWl0IGNvbm5lY3Rpb24uZXhlY3V0ZShxdWVyeSwgdmFsdWVzKTtcbiAgICByZXR1cm4gcm93cztcbiAgfSBmaW5hbGx5IHtcbiAgICBjb25uZWN0aW9uLnJlbGVhc2UoKTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRQYXJlbnQodXNlcl9pZCl7XG4gICAgY29uc3QgcXVlcnkgPSBcIlNFTEVDVCAqIEZST00gcGFyZW50X2RhdGEgV0hFUkUgdXNlcl9pZCA9ID9cIjtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSBhd2FpdCBleGVjdXRlUXVlcnkocXVlcnksW3VzZXJfaWRdKTtcbiAgICAgICAgcmV0dXJuIHBhcmVudDtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGhlYWx0aCByZWNvcmRzOicsIGVycm9yKTtcbiAgICAgICAgdGhyb3cgZXJyb3I7IC8vIFJldGhyb3cgdGhlIGVycm9yIHRvIGhhbmRsZSBpdCBpbiB0aGUgY2FsbGVyXG4gICAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHBhcmVudF9ieV9pZChyZXEscmVzKVxuICB7XG4gICAgaWYgKHJlcS5tZXRob2QgPT09ICdHRVQnKXtcbiAgICAgICAgY29uc3QgdXNlcl9pZCA9IHJlcS5xdWVyeS51c2VyX2lkO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldFBhcmVudCh1c2VyX2lkKTtcbiAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgICAgIC8vIEFkbWluIHdpdGggbWF0Y2hpbmcgdXNlcm5hbWUgYW5kIHBhc3N3b3JkIGZvdW5kXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oZGF0YSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gTm8gbWF0Y2hpbmcgYWRtaW4gZm91bmRcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2U6IFwiUGFyZW50IG5vdCBmb3VuZFwiIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBoZWFsdGggZGF0YTpcIiwgZXJyb3IpO1xuICAgICAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogYEludGVybmFsIFNlcnZlciBFcnJvcnJyciAke3VzZXJfaWR9YCB9KTtcbiAgICAgICAgICB9XG4gICAgfSBcbiAgICBlbHNlIHtcbiAgICAgICAgcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBtZXNzYWdlOiBcIlRoaXMgbWV0aG9kIGlzIG5vdCBhbGxvd2VkXCIgfSk7XG4gICAgICB9XG4gIH0iXSwibmFtZXMiOlsicG9vbCIsImV4ZWN1dGVRdWVyeSIsInF1ZXJ5IiwidmFsdWVzIiwiY29ubmVjdGlvbiIsImdldENvbm5lY3Rpb24iLCJyb3dzIiwiZXhlY3V0ZSIsInJlbGVhc2UiLCJnZXRQYXJlbnQiLCJ1c2VyX2lkIiwicGFyZW50IiwiZXJyb3IiLCJjb25zb2xlIiwicGFyZW50X2J5X2lkIiwicmVxIiwicmVzIiwibWV0aG9kIiwiZGF0YSIsImxlbmd0aCIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/parent/parent_by_id.js\n");

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
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/parent/parent_by_id.js"));
module.exports = __webpack_exports__;

})();