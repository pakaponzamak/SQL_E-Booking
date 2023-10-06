"use strict";
(() => {
var exports = {};
exports.id = 678;
exports.ids = [678];
exports.modules = {

/***/ 4474:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ user_picked_course)
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
const getCourseUserPicked = async (user_id)=>{
    const query = `
    SELECT course, plant, date, time_selected FROM your_table_name WHERE user_id = ?
  `;
    const results = await executeQuery(query, [
        user_id
    ]);
    return results;
};
async function user_picked_course(req, res) {
    if (req.method === "GET") {
        const user_id = req.query.param;
        // Handle GET request, e.g., fetch data from MySQL
        const courses = await getCourseUserPicked(user_id);
        res.status(200).json(courses);
    } else {
        res.status(405).json({
            message: "Method Not Allowed"
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
var __webpack_exports__ = (__webpack_exec__(4474));
module.exports = __webpack_exports__;

})();