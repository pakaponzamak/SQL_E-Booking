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
exports.id = "pages/api/admin_login/login_api";
exports.ids = ["pages/api/admin_login/login_api"];
exports.modules = {

/***/ "mysql2/promise":
/*!*********************************!*\
  !*** external "mysql2/promise" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("mysql2/promise");

/***/ }),

/***/ "(api)/./src/pages/api/admin_login/login_api.js":
/*!************************************************!*\
  !*** ./src/pages/api/admin_login/login_api.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ login)\n/* harmony export */ });\n/* harmony import */ var _server_mySQL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../server/mySQL */ \"(api)/./src/server/mySQL.js\");\n\n// Define a function to execute MySQL queries\nasync function executeQuery(query, values) {\n    const connection = await _server_mySQL__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getConnection();\n    try {\n        const [rows] = await connection.execute(query, values);\n        return rows;\n    } finally{\n        connection.release();\n    }\n}\nasync function checkCredential() {\n    const query = \"SELECT * FROM admin\";\n    const admin = await executeQuery(query);\n    return admin;\n}\nasync function login(req, res) {\n    if (req.method === \"GET\") {\n        const username = req.query.username;\n        const password = req.query.password;\n        try {\n            const adminData = await checkCredential();\n            if (adminData.length === 0) {\n                // No admin data found in the database\n                res.status(401).json({\n                    message: \"Unauthorized\"\n                });\n                return;\n            }\n            // Use the find method to search for the admin record\n            const admin = adminData.find((adminRecord)=>adminRecord.username === username && adminRecord.password === password);\n            if (admin) {\n                // Admin with matching username and password found\n                res.status(200).json({\n                    message: \"Login successful\"\n                });\n            } else {\n                // No matching admin found\n                res.status(401).json({\n                    message: \"Unauthorized\"\n                });\n            }\n        } catch (error) {\n            res.status(500).json({\n                message: \"Internal Server Error\",\n                error: error.message\n            });\n        }\n    } else {\n        res.status(405).json({\n            message: \"This method is not allowed\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2FkbWluX2xvZ2luL2xvZ2luX2FwaS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUF5QztBQUV6Qyw2Q0FBNkM7QUFDN0MsZUFBZUMsYUFBYUMsS0FBSyxFQUFFQyxNQUFNO0lBQ3ZDLE1BQU1DLGFBQWEsTUFBTUosbUVBQWtCSztJQUMzQyxJQUFJO1FBQ0YsTUFBTSxDQUFDQyxLQUFLLEdBQUcsTUFBTUYsV0FBV0csUUFBUUwsT0FBT0M7UUFDL0MsT0FBT0c7SUFDVCxTQUFVO1FBQ1JGLFdBQVdJO0lBQ2I7QUFDRjtBQUVBLGVBQWVDO0lBQ2IsTUFBTVAsUUFBUTtJQUNkLE1BQU1RLFFBQVEsTUFBTVQsYUFBYUM7SUFDakMsT0FBT1E7QUFDVDtBQUVlLGVBQWVDLE1BQU1DLEdBQUcsRUFBRUMsR0FBRztJQUMxQyxJQUFJRCxJQUFJRSxXQUFXLE9BQU87UUFDeEIsTUFBTUMsV0FBV0gsSUFBSVYsTUFBTWE7UUFDM0IsTUFBTUMsV0FBV0osSUFBSVYsTUFBTWM7UUFDM0IsSUFBSTtZQUNGLE1BQU1DLFlBQVksTUFBTVI7WUFDeEIsSUFBSVEsVUFBVUMsV0FBVyxHQUFHO2dCQUMxQixzQ0FBc0M7Z0JBQ3RDTCxJQUFJTSxPQUFPLEtBQUtDLEtBQUs7b0JBQUVDLFNBQVM7Z0JBQWU7Z0JBQy9DO1lBQ0Y7WUFFQSxxREFBcUQ7WUFDckQsTUFBTVgsUUFBUU8sVUFBVUssS0FBS0MsQ0FBQUEsY0FBZUEsWUFBWVIsYUFBYUEsWUFBWVEsWUFBWVAsYUFBYUE7WUFFMUcsSUFBSU4sT0FBTztnQkFDVCxrREFBa0Q7Z0JBQ2xERyxJQUFJTSxPQUFPLEtBQUtDLEtBQUs7b0JBQUVDLFNBQVM7Z0JBQW1CO1lBQ3JELE9BQU87Z0JBQ0wsMEJBQTBCO2dCQUMxQlIsSUFBSU0sT0FBTyxLQUFLQyxLQUFLO29CQUFFQyxTQUFTO2dCQUFlO1lBQ2pEO1FBQ0YsRUFBRSxPQUFPRyxPQUFPO1lBQ2RYLElBQUlNLE9BQU8sS0FBS0MsS0FBSztnQkFBRUMsU0FBUztnQkFBeUJHLE9BQU9BLE1BQU1IO1lBQVE7UUFDaEY7SUFDRixPQUFPO1FBQ0xSLElBQUlNLE9BQU8sS0FBS0MsS0FBSztZQUFFQyxTQUFTO1FBQTZCO0lBQy9EO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lLWJvb2tpbmcvLi9zcmMvcGFnZXMvYXBpL2FkbWluX2xvZ2luL2xvZ2luX2FwaS5qcz9lZmE5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwb29sIGZyb20gXCIuLi8uLi8uLi9zZXJ2ZXIvbXlTUUxcIjtcblxuLy8gRGVmaW5lIGEgZnVuY3Rpb24gdG8gZXhlY3V0ZSBNeVNRTCBxdWVyaWVzXG5hc3luYyBmdW5jdGlvbiBleGVjdXRlUXVlcnkocXVlcnksIHZhbHVlcykge1xuICBjb25zdCBjb25uZWN0aW9uID0gYXdhaXQgcG9vbC5nZXRDb25uZWN0aW9uKCk7XG4gIHRyeSB7XG4gICAgY29uc3QgW3Jvd3NdID0gYXdhaXQgY29ubmVjdGlvbi5leGVjdXRlKHF1ZXJ5LCB2YWx1ZXMpO1xuICAgIHJldHVybiByb3dzO1xuICB9IGZpbmFsbHkge1xuICAgIGNvbm5lY3Rpb24ucmVsZWFzZSgpO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGNoZWNrQ3JlZGVudGlhbCgpIHtcbiAgY29uc3QgcXVlcnkgPSBcIlNFTEVDVCAqIEZST00gYWRtaW5cIjtcbiAgY29uc3QgYWRtaW4gPSBhd2FpdCBleGVjdXRlUXVlcnkocXVlcnkpO1xuICByZXR1cm4gYWRtaW47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGxvZ2luKHJlcSwgcmVzKSB7XG4gIGlmIChyZXEubWV0aG9kID09PSAnR0VUJykge1xuICAgIGNvbnN0IHVzZXJuYW1lID0gcmVxLnF1ZXJ5LnVzZXJuYW1lO1xuICAgIGNvbnN0IHBhc3N3b3JkID0gcmVxLnF1ZXJ5LnBhc3N3b3JkO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBhZG1pbkRhdGEgPSBhd2FpdCBjaGVja0NyZWRlbnRpYWwoKTtcbiAgICAgIGlmIChhZG1pbkRhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIC8vIE5vIGFkbWluIGRhdGEgZm91bmQgaW4gdGhlIGRhdGFiYXNlXG4gICAgICAgIHJlcy5zdGF0dXMoNDAxKS5qc29uKHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBVc2UgdGhlIGZpbmQgbWV0aG9kIHRvIHNlYXJjaCBmb3IgdGhlIGFkbWluIHJlY29yZFxuICAgICAgY29uc3QgYWRtaW4gPSBhZG1pbkRhdGEuZmluZChhZG1pblJlY29yZCA9PiBhZG1pblJlY29yZC51c2VybmFtZSA9PT0gdXNlcm5hbWUgJiYgYWRtaW5SZWNvcmQucGFzc3dvcmQgPT09IHBhc3N3b3JkKTtcblxuICAgICAgaWYgKGFkbWluKSB7XG4gICAgICAgIC8vIEFkbWluIHdpdGggbWF0Y2hpbmcgdXNlcm5hbWUgYW5kIHBhc3N3b3JkIGZvdW5kXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVzc2FnZTogXCJMb2dpbiBzdWNjZXNzZnVsXCIgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBObyBtYXRjaGluZyBhZG1pbiBmb3VuZFxuICAgICAgICByZXMuc3RhdHVzKDQwMSkuanNvbih7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogXCJJbnRlcm5hbCBTZXJ2ZXIgRXJyb3JcIiwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJlcy5zdGF0dXMoNDA1KS5qc29uKHsgbWVzc2FnZTogXCJUaGlzIG1ldGhvZCBpcyBub3QgYWxsb3dlZFwiIH0pO1xuICB9XG59XG4iXSwibmFtZXMiOlsicG9vbCIsImV4ZWN1dGVRdWVyeSIsInF1ZXJ5IiwidmFsdWVzIiwiY29ubmVjdGlvbiIsImdldENvbm5lY3Rpb24iLCJyb3dzIiwiZXhlY3V0ZSIsInJlbGVhc2UiLCJjaGVja0NyZWRlbnRpYWwiLCJhZG1pbiIsImxvZ2luIiwicmVxIiwicmVzIiwibWV0aG9kIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImFkbWluRGF0YSIsImxlbmd0aCIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwiZmluZCIsImFkbWluUmVjb3JkIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/admin_login/login_api.js\n");

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
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/admin_login/login_api.js"));
module.exports = __webpack_exports__;

})();