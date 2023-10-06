"use strict";
(() => {
var exports = {};
exports.id = 358;
exports.ids = [358];
exports.modules = {

/***/ 2630:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ health)
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
// Define a function to insert a new user into the MySQL database
async function postUser(user_id, name) {
    const query = "INSERT INTO users (user_id,name) VALUES (?, ?)";
    const values = [
        user_id,
        name
    ];
    try {
        await executeQuery(query, values);
    } catch (error) {
        throw error; // Rethrow the error to handle it in the caller
    }
}
// Now you can use executeQuery to run MySQL queries
const getUsers = async ()=>{
    const query = "SELECT * FROM users";
    const users = await executeQuery(query);
    return users;
};
async function checkCredential(employeeId, firstName) {
    const query = "SELECT * FROM users WHERE user_id = ? AND name = ?";
    const user = await executeQuery(query, [
        employeeId,
        firstName
    ]);
    return user;
}
async function health(req, res) {
    if (req.method === "GET") {
        const firstName = req.query.firstName;
        const employeeId = req.query.employeeId;
        try {
            const user = await checkCredential(employeeId, firstName);
            if (user.length === 0) {
                res.status(401).json({
                    message: "Unauthorized"
                });
                return;
            }
            if (user.length === 1) {
                // user with matching username and password found
                res.status(200).json({
                    message: "Login successful"
                });
            } else {
                // More than one matching user found (shouldn't happen with unique usernames)
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
    } else if (req.method === "POST") {
        // Handle POST request, e.g., insert data into MySQL
        const { user_id, name } = req.body;
        try {
            await postUser(user_id, name);
            res.status(200).json({
                message: "Data inserted successfully"
            });
        } catch (error) {
            console.error("Error inserting data:", error);
            res.status(500).json({
                error: "Internal Server Error"
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
var __webpack_exports__ = (__webpack_exec__(2630));
module.exports = __webpack_exports__;

})();