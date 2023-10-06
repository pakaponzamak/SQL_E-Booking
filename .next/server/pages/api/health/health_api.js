"use strict";
(() => {
var exports = {};
exports.id = 691;
exports.ids = [691];
exports.modules = {

/***/ 3053:
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
async function postUser(health_id, user_id, name, doctor_type, phone_num, time_selected, date_selected, plant, checkInTime, picked_what, checkIn, more_detail, company) {
    const query = "INSERT INTO health_care (health_id, user_id, name, doctor_type, phone_num, time_selected, date_selected, plant, checkInTime, picked_what, checkIn, more_detail,company) VALUES (?, ?,?,?,?,?,?,?,?,?,?,?,?)";
    const values = [
        health_id,
        user_id,
        name,
        doctor_type,
        phone_num,
        time_selected,
        date_selected,
        plant,
        checkInTime,
        picked_what,
        checkIn,
        more_detail,
        company
    ];
    try {
        await executeQuery(query, values);
    } catch (error) {
        throw error; // Rethrow the error to handle it in the caller
    }
}
// Now you can use executeQuery to run MySQL queries
const getHealth = async ()=>{
    const query = "SELECT * FROM health_care";
    const health = await executeQuery(query);
    return health;
};
async function updatedHealth(phone_num, more_detail, health_id, company) {
    const query = "UPDATE health_care SET phone_num = ?,more_detail = ?,company = ? WHERE health_id = ?";
    const values = [
        phone_num,
        more_detail,
        company,
        health_id
    ];
    try {
        await executeQuery(query, values);
    } catch (error) {
        throw error; // Rethrow the error to handle it in the caller
    }
}
async function deleteHealthCare(health_id) {
    const query = "DELETE FROM health_care WHERE health_id = ?";
    const values = [
        health_id
    ];
    try {
        await executeQuery(query, values);
    } catch (error) {
        throw error; // Rethrow the error to handle it in the caller
    }
}
async function health(req, res) {
    if (req.method === "GET") {
        // Handle GET request, e.g., fetch data from MySQL
        const health = await getHealth();
        res.status(200).json(health);
    } else if (req.method === "POST") {
        // Handle POST request, e.g., insert data into MySQL
        const { health_id, user_id, name, doctor_type, phone_num, time_selected, date_selected, plant, checkInTime, picked_what, checkIn, more_detail, company } = req.body;
        try {
            await postUser(health_id, user_id, name, doctor_type, phone_num, time_selected, date_selected, plant, checkInTime, picked_what, checkIn, more_detail, company);
            res.status(200).json({
                message: "Data inserted successfully"
            });
        } catch (error) {
            console.error("Error inserting data:", error);
            res.status(500).json({
                error: "Internal Server Error"
            });
        }
    } else if (req.method === "PUT") {
        // Handle PUT request, e.g., update data in MySQL
        const { phone_num, more_detail, health_id, company } = req.body; // Assuming you receive healthId and whoPickedThis in the request body
        try {
            await updatedHealth(phone_num, more_detail, health_id, company);
            res.status(200).json({
                message: "Data updated successfully"
            });
        } catch (error) {
            console.error("Error updating data:", error);
            res.status(500).json({
                error: "Internal Server Error"
            });
        }
    } else if (req.method === "DELETE") {
        const health_id = req.query.healthId;
        try {
            await deleteHealthCare(health_id);
            res.status(200).json({
                message: "Data deleted successfully"
            });
        } catch (error) {
            console.error("Error deleting data:", error);
            res.status(500).json({
                error: `Internal Server Error`
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
var __webpack_exports__ = (__webpack_exec__(3053));
module.exports = __webpack_exports__;

})();