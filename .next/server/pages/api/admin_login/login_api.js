"use strict";
(() => {
var exports = {};
exports.id = 31;
exports.ids = [31];
exports.modules = {

/***/ 3792:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ login)
/* harmony export */ });
/* harmony import */ var _server_mySQL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5754);

// Define a function to execute MySQL queries
async function executeQuery(query, values) {
    const connection = await _server_mySQL__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.getConnection();
    try {
        const [rows] = await connection.execute(query, values);
        return rows;
    } finally{
        connection.release();
    }
}
async function checkCredential(username, password) {
    const query = "SELECT * FROM admin WHERE username = ? AND password = ?";
    const admin = await executeQuery(query, [
        username,
        password
    ]);
    return admin;
}
async function login(req, res) {
    if (req.method === "GET") {
        const username = req.query.username;
        const password = req.query.password;
        try {
            const admin = await checkCredential(username, password);
            if (admin.length === 0) {
                // No admin data found in the database
                res.status(401).json({
                    message: "Unauthorized"
                });
                return;
            }
            if (admin.length === 1) {
                // Admin with matching username and password found
                res.status(200).json({
                    message: "Login successful"
                });
            } else {
                // More than one matching admin found (shouldn't happen with unique usernames)
                res.status(500).json({
                    message: "Internal Server Error"
                });
            }
        } catch (error) {
            res.status(500).json({
                message: "Internal Server Error",
                error: error.message
            });
        }
    } else {
        res.status(405).json({
            message: "This method is not allowed"
        });
    }
}


/***/ }),

/***/ 5754:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ mySQL)
});

;// CONCATENATED MODULE: external "mysql2/promise"
const promise_namespaceObject = require("mysql2/promise");
var promise_default = /*#__PURE__*/__webpack_require__.n(promise_namespaceObject);
;// CONCATENATED MODULE: ./src/server/mySQL.js

// Create a MySQL connection pool
const pool = promise_default().createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "Test_Booking",
    waitForConnections: true,
    connectionLimit: 500,
    queueLimit: 0
});
/* harmony default export */ const mySQL = (pool);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3792));
module.exports = __webpack_exports__;

})();