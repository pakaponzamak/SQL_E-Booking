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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ health)\n/* harmony export */ });\n/* harmony import */ var _server_mySQL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../server/mySQL */ \"(api)/./src/server/mySQL.js\");\n\n// Define a function to execute MySQL queries\nasync function executeQuery(query, values) {\n    const connection = await _server_mySQL__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getConnection();\n    try {\n        const [rows] = await connection.execute(query, values);\n        return rows;\n    } finally{\n        connection.release();\n    }\n}\n// Define a function to insert a new user into the MySQL database\nasync function postUser(user_id, name) {\n    const query = \"INSERT INTO users (user_id,name) VALUES (?, ?)\";\n    const values = [\n        user_id,\n        name\n    ];\n    try {\n        await executeQuery(query, values);\n    } catch (error) {\n        throw error; // Rethrow the error to handle it in the caller\n    }\n}\n// Now you can use executeQuery to run MySQL queries\nconst getUsers = async ()=>{\n    const query = \"SELECT * FROM users\";\n    const users = await executeQuery(query);\n    return users;\n};\nasync function health(req, res) {\n    if (req.method === \"GET\") {\n        // Handle GET request, e.g., fetch data from MySQL\n        const users = await getUsers();\n        res.status(200).json(users);\n    } else if (req.method === \"POST\") {\n        // Handle POST request, e.g., insert data into MySQL\n        const { user_id, name } = req.body;\n        try {\n            await postUser(user_id, name);\n            res.status(200).json({\n                message: \"Data inserted successfully\"\n            });\n        } catch (error) {\n            console.error(\"Error inserting data:\", error);\n            res.status(500).json({\n                error: \"Internal Server Error\"\n            });\n        }\n    } else {\n        res.status(405).json({\n            message: \"This method is not allowed\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2luZGV4X2FwaS9pbmRleF9hcGkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBd0M7QUFHeEMsNkNBQTZDO0FBQzdDLGVBQWVDLGFBQWFDLEtBQUssRUFBRUMsTUFBTTtJQUNyQyxNQUFNQyxhQUFhLE1BQU1KLG1FQUFrQks7SUFDM0MsSUFBSTtRQUNGLE1BQU0sQ0FBQ0MsS0FBSyxHQUFHLE1BQU1GLFdBQVdHLFFBQVFMLE9BQU9DO1FBQy9DLE9BQU9HO0lBQ1QsU0FBVTtRQUNSRixXQUFXSTtJQUNiO0FBQ0Y7QUFFRSxpRUFBaUU7QUFDckUsZUFBZUMsU0FBU0MsT0FBTyxFQUFFQyxJQUFJO0lBQ2pDLE1BQU1ULFFBQ1I7SUFDRSxNQUFNQyxTQUFTO1FBQUNPO1FBQVNDO0tBQUs7SUFDOUIsSUFBSTtRQUNGLE1BQU1WLGFBQWFDLE9BQU9DO0lBQzVCLEVBQUUsT0FBT1MsT0FBTztRQUNkLE1BQU1BLE9BQU8sK0NBQStDO0lBQzlEO0FBQ0Y7QUFDRSxvREFBb0Q7QUFDeEQsTUFBTUMsV0FBVztJQUNiLE1BQU1YLFFBQVE7SUFDZCxNQUFNWSxRQUFRLE1BQU1iLGFBQWFDO0lBQ2pDLE9BQU9ZO0FBQ1Q7QUFFYSxlQUFlQyxPQUFPQyxHQUFHLEVBQUNDLEdBQUc7SUFFeEMsSUFBSUQsSUFBSUUsV0FBVyxPQUFPO1FBQ3RCLGtEQUFrRDtRQUNsRCxNQUFNSixRQUFRLE1BQU1EO1FBQ3BCSSxJQUFJRSxPQUFPLEtBQUtDLEtBQUtOO0lBQ3ZCLE9BQ0UsSUFBSUUsSUFBSUUsV0FBVyxRQUFRO1FBQzNCLG9EQUFvRDtRQUNwRCxNQUFNLEVBQUVSLE9BQU8sRUFBRUMsSUFBSSxFQUFFLEdBQUdLLElBQUlLO1FBRTlCLElBQUk7WUFDRixNQUFNWixTQUFTQyxTQUFRQztZQUN2Qk0sSUFBSUUsT0FBTyxLQUFLQyxLQUFLO2dCQUFFRSxTQUFTO1lBQTZCO1FBQy9ELEVBQUUsT0FBT1YsT0FBTztZQUNkVyxRQUFRWCxNQUFNLHlCQUF5QkE7WUFDdkNLLElBQUlFLE9BQU8sS0FBS0MsS0FBSztnQkFBRVIsT0FBTztZQUF3QjtRQUN4RDtJQUNGLE9BQ0s7UUFDSEssSUFBSUUsT0FBTyxLQUFLQyxLQUFLO1lBQUVFLFNBQVM7UUFBNkI7SUFDL0Q7QUFDTiIsInNvdXJjZXMiOlsid2VicGFjazovL2UtYm9va2luZy8uL3NyYy9wYWdlcy9hcGkvaW5kZXhfYXBpL2luZGV4X2FwaS5qcz9hZjMzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwb29sIGZyb20gJy4uLy4uLy4uL3NlcnZlci9teVNRTCdcblxuXG4vLyBEZWZpbmUgYSBmdW5jdGlvbiB0byBleGVjdXRlIE15U1FMIHF1ZXJpZXNcbmFzeW5jIGZ1bmN0aW9uIGV4ZWN1dGVRdWVyeShxdWVyeSwgdmFsdWVzKSB7XG4gICAgY29uc3QgY29ubmVjdGlvbiA9IGF3YWl0IHBvb2wuZ2V0Q29ubmVjdGlvbigpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBbcm93c10gPSBhd2FpdCBjb25uZWN0aW9uLmV4ZWN1dGUocXVlcnksIHZhbHVlcyk7XG4gICAgICByZXR1cm4gcm93cztcbiAgICB9IGZpbmFsbHkge1xuICAgICAgY29ubmVjdGlvbi5yZWxlYXNlKCk7XG4gICAgfVxuICB9XG5cbiAgICAvLyBEZWZpbmUgYSBmdW5jdGlvbiB0byBpbnNlcnQgYSBuZXcgdXNlciBpbnRvIHRoZSBNeVNRTCBkYXRhYmFzZVxuYXN5bmMgZnVuY3Rpb24gcG9zdFVzZXIodXNlcl9pZFx0LG5hbWUpIHtcbiAgICBjb25zdCBxdWVyeSA9XG4gICdJTlNFUlQgSU5UTyB1c2VycyAodXNlcl9pZCxuYW1lKSBWQUxVRVMgKD8sID8pJztcbiAgICBjb25zdCB2YWx1ZXMgPSBbdXNlcl9pZFx0LG5hbWVdO1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBleGVjdXRlUXVlcnkocXVlcnksIHZhbHVlcyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IGVycm9yOyAvLyBSZXRocm93IHRoZSBlcnJvciB0byBoYW5kbGUgaXQgaW4gdGhlIGNhbGxlclxuICAgIH1cbiAgfVxuICAgIC8vIE5vdyB5b3UgY2FuIHVzZSBleGVjdXRlUXVlcnkgdG8gcnVuIE15U1FMIHF1ZXJpZXNcbmNvbnN0IGdldFVzZXJzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHF1ZXJ5ID0gJ1NFTEVDVCAqIEZST00gdXNlcnMnO1xuICAgIGNvbnN0IHVzZXJzID0gYXdhaXQgZXhlY3V0ZVF1ZXJ5KHF1ZXJ5KTtcbiAgICByZXR1cm4gdXNlcnM7XG4gIH07XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhlYWx0aChyZXEscmVzKVxue1xuICAgIGlmIChyZXEubWV0aG9kID09PSAnR0VUJykge1xuICAgICAgICAvLyBIYW5kbGUgR0VUIHJlcXVlc3QsIGUuZy4sIGZldGNoIGRhdGEgZnJvbSBNeVNRTFxuICAgICAgICBjb25zdCB1c2VycyA9IGF3YWl0IGdldFVzZXJzKCk7XG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHVzZXJzKTtcbiAgICAgIH1cbiAgIGVsc2UgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xuICAgICAgICAvLyBIYW5kbGUgUE9TVCByZXF1ZXN0LCBlLmcuLCBpbnNlcnQgZGF0YSBpbnRvIE15U1FMXG4gICAgICAgIGNvbnN0IHsgdXNlcl9pZFx0LG5hbWUgfSA9IHJlcS5ib2R5O1xuICAgICAgXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgYXdhaXQgcG9zdFVzZXIodXNlcl9pZCxuYW1lKTtcbiAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lc3NhZ2U6ICdEYXRhIGluc2VydGVkIHN1Y2Nlc3NmdWxseScgfSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW5zZXJ0aW5nIGRhdGE6JywgZXJyb3IpO1xuICAgICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6ICdJbnRlcm5hbCBTZXJ2ZXIgRXJyb3InIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBtZXNzYWdlOiBcIlRoaXMgbWV0aG9kIGlzIG5vdCBhbGxvd2VkXCIgfSk7XG4gICAgICB9XG59Il0sIm5hbWVzIjpbInBvb2wiLCJleGVjdXRlUXVlcnkiLCJxdWVyeSIsInZhbHVlcyIsImNvbm5lY3Rpb24iLCJnZXRDb25uZWN0aW9uIiwicm93cyIsImV4ZWN1dGUiLCJyZWxlYXNlIiwicG9zdFVzZXIiLCJ1c2VyX2lkIiwibmFtZSIsImVycm9yIiwiZ2V0VXNlcnMiLCJ1c2VycyIsImhlYWx0aCIsInJlcSIsInJlcyIsIm1ldGhvZCIsInN0YXR1cyIsImpzb24iLCJib2R5IiwibWVzc2FnZSIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/index_api/index_api.js\n");

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