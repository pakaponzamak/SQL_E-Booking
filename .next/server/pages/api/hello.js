"use strict";
(() => {
var exports = {};
exports.id = 453;
exports.ids = [453];
exports.modules = {

/***/ 2543:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
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
// Now you can use executeQuery to run MySQL queries
const getUsers = async ()=>{
    const query = "SELECT * FROM users";
    const users = await executeQuery(query);
    return users;
};
// Define a function to insert a new user into the MySQL database
async function postUser(fname, date) {
    const query = "INSERT INTO users (user_id, name) VALUES (?, ?)";
    const values = [
        date,
        fname
    ];
    try {
        await executeQuery(query, values);
    } catch (error) {
        throw error; // Rethrow the error to handle it in the caller
    }
}
async function deleteUserByFname(fname) {
    const query = "DELETE FROM users WHERE name = ?"; // Assuming 'id' is the unique identifier for your records
    const values = [
        fname
    ];
    try {
        await executeQuery(query, values);
    } catch (error) {
        throw error;
    }
}
async function updateUser(fname, date) {
    const query = "UPDATE employee SET date = ? WHERE name = ?";
    const values = [
        date,
        fname
    ];
    try {
        await executeQuery(query, values);
    } catch (error) {
        throw error;
    }
}
async function handler(req, res) {
    if (req.method === "GET") {
        // Handle GET request, e.g., fetch data from MySQL
        const users = await getUsers();
        res.status(200).json(users);
    } else if (req.method === "POST") {
        // Handle POST request, e.g., insert data into MySQL
        const { date, fname } = req.body;
        try {
            await postUser(fname, date);
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
        const { date, fname } = req.body;
        // Check if a record with the specified fname exists before attempting the update
        const users = await getUsers(); // Assuming you have a function to fetch users from the database
        const userToUpdate = users.find((user)=>user.name === fname);
        if (!userToUpdate) {
            // No matching record found, return a 404 response
            res.status(404).json({
                message: "No name found in the database"
            });
            return;
        }
        try {
            await updateUser(fname, date);
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
        // Handle DELETE request, e.g., delete data from MySQL based on fname
        const fnameToDelete = req.query.fname; // Assuming you're passing the fname as a query parameter
        // Check if a record with the specified fname exists before attempting deletion
        const users = await getUsers(); // Assuming you have a function to fetch users from the database
        const userToDelete = users.find((user)=>user.name === fnameToDelete);
        if (!userToDelete) {
            // No matching record found, return an appropriate response
            res.status(404).json({
                message: "No name found in the database"
            });
            return;
        }
        try {
            await deleteUserByFname(fnameToDelete);
            res.status(200).json({
                message: "Data deleted successfully"
            });
        } catch (error) {
            console.error("Error deleting data:", error);
            res.status(500).json({
                error: "Internal Server Error"
            });
        }
    } else {
        res.status(405).json({
            error: "Method Not Allowed"
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
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2543));
module.exports = __webpack_exports__;

})();