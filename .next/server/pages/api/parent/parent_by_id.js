"use strict";
(() => {
var exports = {};
exports.id = 334;
exports.ids = [334];
exports.modules = {

/***/ 4228:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parent_by_id)
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
async function getParent(user_id) {
    const query = "SELECT * FROM parent_data WHERE user_id = ?";
    try {
        const parent = await executeQuery(query, [
            user_id
        ]);
        return parent;
    } catch (error) {
        console.error("Error fetching health records:", error);
        throw error; // Rethrow the error to handle it in the caller
    }
}
async function parent_by_id(req, res) {
    if (req.method === "GET") {
        const user_id = req.query.user_id;
        try {
            const data = await getParent(user_id);
            if (data.length !== 0) {
                // Admin with matching username and password found
                res.status(200).json(data);
            } else {
                // No matching admin found
                res.status(404).json({
                    message: "Parent not found"
                });
            }
        } catch (error) {
            console.error("Error fetching health data:", error);
            res.status(500).json({
                error: `Internal Server Errorrrr ${user_id}`
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
var __webpack_exports__ = (__webpack_exec__(4228));
module.exports = __webpack_exports__;

})();