"use strict";
(() => {
var exports = {};
exports.id = 916;
exports.ids = [916];
exports.modules = {

/***/ 2527:
/***/ ((module) => {

module.exports = import("@firebase/util");;

/***/ }),

/***/ 5022:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ health_care)
/* harmony export */ });
/* harmony import */ var _firebase_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2527);
/* harmony import */ var _server_mySQL__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5754);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase_util__WEBPACK_IMPORTED_MODULE_0__]);
_firebase_util__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// Define a function to execute MySQL queries
async function executeQuery(query, values) {
    const connection = await _server_mySQL__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.getConnection();
    try {
        const [rows] = await connection.execute(query, values);
        return rows;
    } finally{
        connection.release();
    }
}
const getHealth = async ()=>{
    const query = "SELECT * FROM insert_health_care";
    try {
        const health = await executeQuery(query);
        return health;
    } catch (error) {
        console.error("Error fetching health records:", error);
        throw error; // Rethrow the error to handle it in the caller
    }
};
// Define a function to insert a new user into the MySQL database
async function postUser(health_care_name, date, timeStart, timeEnd, plant, doctor, whoPickedThis, alreadyPicked) {
    const query = "INSERT INTO insert_health_care (  health_care_name, date, timeStart, timeEnd, plant, doctor, whoPickedThis, alreadyPicked) VALUES (?, ?,?,?,?,?,?,?)";
    const values = [
        health_care_name,
        date,
        timeStart,
        timeEnd,
        plant,
        doctor,
        whoPickedThis,
        alreadyPicked
    ];
    try {
        await executeQuery(query, values);
    } catch (error) {
        throw error; // Rethrow the error to handle it in the caller
    }
}
// Define a function to update a health record in the MySQL database
async function updateUser(healthId, whoPickedThis, alreadyPicked) {
    const query = "UPDATE insert_health_care SET whoPickedThis = ?,alreadyPicked = ? WHERE health_id = ?";
    const values = [
        whoPickedThis,
        alreadyPicked,
        healthId
    ];
    try {
        await executeQuery(query, values);
    } catch (error) {
        throw error; // Rethrow the error to handle it in the caller
    }
}
async function deleteHealthCare(health_id) {
    const query = "DELETE FROM insert_health_care WHERE health_id = ?";
    const values = [
        health_id
    ];
    try {
        await executeQuery(query, values);
    } catch (error) {
        throw error; // Rethrow the error to handle it in the caller
    }
}
async function health_care(req, res) {
    if (req.method === "GET") {
        try {
            const health = await getHealth();
            res.status(200).json(health);
        } catch (error) {
            console.error("Error fetching health data:", error);
            res.status(500).json({
                error: "Internal Server Error"
            });
        }
    } else if (req.method === "POST") {
        // Handle POST request, e.g., insert data into MySQL
        const { health_care_name, date, timeStart, timeEnd, plant, doctor, whoPickedThis, alreadyPicked } = req.body;
        try {
            await postUser(health_care_name, date, timeStart, timeEnd, plant, doctor, whoPickedThis, alreadyPicked);
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
        const { health_id, whoPickedThis, alreadyPicked } = req.body; // Assuming you receive healthId and whoPickedThis in the request body
        try {
            await updateUser(health_id, whoPickedThis, alreadyPicked);
            res.status(200).json({
                message: "Data updated successfully"
            });
        } catch (error) {
            console.error("Error updating data:", error);
            res.status(500).json({
                error: "Internal Server Error"
            });
        }
    }
    if (req.method === "DELETE") {
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

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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
var __webpack_exports__ = (__webpack_exec__(5022));
module.exports = __webpack_exports__;

})();