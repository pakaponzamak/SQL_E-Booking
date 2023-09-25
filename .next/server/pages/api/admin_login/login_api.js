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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ login)\n/* harmony export */ });\n/* harmony import */ var _server_mySQL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../server/mySQL */ \"(api)/./src/server/mySQL.js\");\n\n// Define a function to execute MySQL queries\nasync function executeQuery(query, values) {\n    const connection = await _server_mySQL__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getConnection();\n    try {\n        const [rows] = await connection.execute(query, values);\n        return rows;\n    } finally{\n        connection.release();\n    }\n}\nasync function checkCredential(username, password) {\n    const query = \"SELECT * FROM admin WHERE username = ? AND password = ?\";\n    const admin = await executeQuery(query, [\n        username,\n        password\n    ]);\n    return admin;\n}\nasync function login(req, res) {\n    if (req.method === \"GET\") {\n        const username = req.query.username;\n        const password = req.query.password;\n        try {\n            const admin = await checkCredential(username, password);\n            if (admin.length === 0) {\n                // No admin data found in the database\n                res.status(401).json({\n                    message: \"Unauthorized\"\n                });\n                return;\n            }\n            if (admin.length === 1) {\n                // Admin with matching username and password found\n                res.status(200).json({\n                    message: \"Login successful\"\n                });\n            } else {\n                // More than one matching admin found (shouldn't happen with unique usernames)\n                res.status(500).json({\n                    message: \"Internal Server Error\"\n                });\n            }\n        } catch (error) {\n            res.status(500).json({\n                message: \"Internal Server Error\",\n                error: error.message\n            });\n        }\n    } else {\n        res.status(405).json({\n            message: \"This method is not allowed\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2FkbWluX2xvZ2luL2xvZ2luX2FwaS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUF5QztBQUV6Qyw2Q0FBNkM7QUFDN0MsZUFBZUMsYUFBYUMsS0FBSyxFQUFFQyxNQUFNO0lBQ3ZDLE1BQU1DLGFBQWEsTUFBTUosbUVBQWtCSztJQUMzQyxJQUFJO1FBQ0YsTUFBTSxDQUFDQyxLQUFLLEdBQUcsTUFBTUYsV0FBV0csUUFBUUwsT0FBT0M7UUFDL0MsT0FBT0c7SUFDVCxTQUFVO1FBQ1JGLFdBQVdJO0lBQ2I7QUFDRjtBQUVBLGVBQWVDLGdCQUFnQkMsUUFBUSxFQUFFQyxRQUFRO0lBQy9DLE1BQU1ULFFBQVE7SUFDZCxNQUFNVSxRQUFRLE1BQU1YLGFBQWFDLE9BQU87UUFBQ1E7UUFBVUM7S0FBUztJQUM1RCxPQUFPQztBQUNUO0FBRWUsZUFBZUMsTUFBTUMsR0FBRyxFQUFFQyxHQUFHO0lBQzFDLElBQUlELElBQUlFLFdBQVcsT0FBTztRQUN4QixNQUFNTixXQUFXSSxJQUFJWixNQUFNUTtRQUMzQixNQUFNQyxXQUFXRyxJQUFJWixNQUFNUztRQUMzQixJQUFJO1lBQ0YsTUFBTUMsUUFBUSxNQUFNSCxnQkFBZ0JDLFVBQVVDO1lBRTlDLElBQUlDLE1BQU1LLFdBQVcsR0FBRztnQkFDdEIsc0NBQXNDO2dCQUN0Q0YsSUFBSUcsT0FBTyxLQUFLQyxLQUFLO29CQUFFQyxTQUFTO2dCQUFlO2dCQUMvQztZQUNGO1lBRUEsSUFBSVIsTUFBTUssV0FBVyxHQUFHO2dCQUN0QixrREFBa0Q7Z0JBQ2xERixJQUFJRyxPQUFPLEtBQUtDLEtBQUs7b0JBQUVDLFNBQVM7Z0JBQW1CO1lBQ3JELE9BQU87Z0JBQ0wsOEVBQThFO2dCQUM5RUwsSUFBSUcsT0FBTyxLQUFLQyxLQUFLO29CQUFFQyxTQUFTO2dCQUF3QjtZQUMxRDtRQUNGLEVBQUUsT0FBT0MsT0FBTztZQUNkTixJQUFJRyxPQUFPLEtBQUtDLEtBQUs7Z0JBQUVDLFNBQVM7Z0JBQXlCQyxPQUFPQSxNQUFNRDtZQUFRO1FBQ2hGO0lBQ0YsT0FBTztRQUNMTCxJQUFJRyxPQUFPLEtBQUtDLEtBQUs7WUFBRUMsU0FBUztRQUE2QjtJQUMvRDtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZS1ib29raW5nLy4vc3JjL3BhZ2VzL2FwaS9hZG1pbl9sb2dpbi9sb2dpbl9hcGkuanM/ZWZhOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcG9vbCBmcm9tIFwiLi4vLi4vLi4vc2VydmVyL215U1FMXCI7XG5cbi8vIERlZmluZSBhIGZ1bmN0aW9uIHRvIGV4ZWN1dGUgTXlTUUwgcXVlcmllc1xuYXN5bmMgZnVuY3Rpb24gZXhlY3V0ZVF1ZXJ5KHF1ZXJ5LCB2YWx1ZXMpIHtcbiAgY29uc3QgY29ubmVjdGlvbiA9IGF3YWl0IHBvb2wuZ2V0Q29ubmVjdGlvbigpO1xuICB0cnkge1xuICAgIGNvbnN0IFtyb3dzXSA9IGF3YWl0IGNvbm5lY3Rpb24uZXhlY3V0ZShxdWVyeSwgdmFsdWVzKTtcbiAgICByZXR1cm4gcm93cztcbiAgfSBmaW5hbGx5IHtcbiAgICBjb25uZWN0aW9uLnJlbGVhc2UoKTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBjaGVja0NyZWRlbnRpYWwodXNlcm5hbWUsIHBhc3N3b3JkKSB7XG4gIGNvbnN0IHF1ZXJ5ID0gXCJTRUxFQ1QgKiBGUk9NIGFkbWluIFdIRVJFIHVzZXJuYW1lID0gPyBBTkQgcGFzc3dvcmQgPSA/XCI7XG4gIGNvbnN0IGFkbWluID0gYXdhaXQgZXhlY3V0ZVF1ZXJ5KHF1ZXJ5LCBbdXNlcm5hbWUsIHBhc3N3b3JkXSk7XG4gIHJldHVybiBhZG1pbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gbG9naW4ocmVxLCByZXMpIHtcbiAgaWYgKHJlcS5tZXRob2QgPT09ICdHRVQnKSB7XG4gICAgY29uc3QgdXNlcm5hbWUgPSByZXEucXVlcnkudXNlcm5hbWU7XG4gICAgY29uc3QgcGFzc3dvcmQgPSByZXEucXVlcnkucGFzc3dvcmQ7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGFkbWluID0gYXdhaXQgY2hlY2tDcmVkZW50aWFsKHVzZXJuYW1lLCBwYXNzd29yZCk7XG5cbiAgICAgIGlmIChhZG1pbi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgLy8gTm8gYWRtaW4gZGF0YSBmb3VuZCBpbiB0aGUgZGF0YWJhc2VcbiAgICAgICAgcmVzLnN0YXR1cyg0MDEpLmpzb24oeyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChhZG1pbi5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgLy8gQWRtaW4gd2l0aCBtYXRjaGluZyB1c2VybmFtZSBhbmQgcGFzc3dvcmQgZm91bmRcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiBcIkxvZ2luIHN1Y2Nlc3NmdWxcIiB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1vcmUgdGhhbiBvbmUgbWF0Y2hpbmcgYWRtaW4gZm91bmQgKHNob3VsZG4ndCBoYXBwZW4gd2l0aCB1bmlxdWUgdXNlcm5hbWVzKVxuICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6IFwiSW50ZXJuYWwgU2VydmVyIEVycm9yXCIgfSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogXCJJbnRlcm5hbCBTZXJ2ZXIgRXJyb3JcIiwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJlcy5zdGF0dXMoNDA1KS5qc29uKHsgbWVzc2FnZTogXCJUaGlzIG1ldGhvZCBpcyBub3QgYWxsb3dlZFwiIH0pO1xuICB9XG59XG4iXSwibmFtZXMiOlsicG9vbCIsImV4ZWN1dGVRdWVyeSIsInF1ZXJ5IiwidmFsdWVzIiwiY29ubmVjdGlvbiIsImdldENvbm5lY3Rpb24iLCJyb3dzIiwiZXhlY3V0ZSIsInJlbGVhc2UiLCJjaGVja0NyZWRlbnRpYWwiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiYWRtaW4iLCJsb2dpbiIsInJlcSIsInJlcyIsIm1ldGhvZCIsImxlbmd0aCIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/admin_login/login_api.js\n");

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
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/admin_login/login_api.js"));
module.exports = __webpack_exports__;

})();