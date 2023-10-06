"use strict";
(() => {
var exports = {};
exports.id = 189;
exports.ids = [189];
exports.modules = {

/***/ 7918:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parent_api)
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
async function getParent() {
    const query = "SELECT * FROM parent_data";
    try {
        const parent = await executeQuery(query);
        return parent;
    } catch (error) {
        console.error("Error fetching health records:", error);
        throw error; // Rethrow the error to handle it in the caller
    }
}
// Define a function to insert a new user into the MySQL database
async function postParent(user_id, parent_name) {
    const query = "INSERT INTO parent_data (user_id,parent_name) VALUES (?,?)";
    const values = [
        user_id,
        parent_name
    ];
    try {
        await executeQuery(query, values);
    } catch (error) {
        throw error; // Rethrow the error to handle it in the caller
    }
}
async function parent_api(req, res) {
    if (req.method === "GET") {
        try {
            const parent = await getParent();
            res.status(200).json(parent);
        } catch (error) {
            console.error("Error fetching health data:", error);
            res.status(500).json({
                error: "Internal Server Error"
            });
        }
    } else if (req.method === "POST") {
        const { user_id, parent_id, parent_name } = req.body;
        try {
            await postParent(user_id, parent_name);
            res.status(200).json({
                message: "Data inserted successfully"
            });
        } catch (error) {
            console.error("Error fetching health data:", error);
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
var __webpack_exports__ = (__webpack_exec__(7918));
module.exports = __webpack_exports__;

})();