import pool from "../../../server/mySQL";

// Define a function to execute MySQL queries
async function executeQuery(query, values) {
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.execute(query, values);
    return rows;
  } finally {
    connection.release();
  }
}

// Now you can use executeQuery to run MySQL queries
const getCourseUserPicked = async (user_id) => {
  const query = `
    SELECT course, plant, date, time_selected FROM your_table_name WHERE user_id = ?
  `;
  const results = await executeQuery(query, [user_id]);
  return results;
};

export default async function user_picked_course(req, res) {
  if (req.method === 'GET') {
    const user_id = req.query.param;
    // Handle GET request, e.g., fetch data from MySQL
    const courses = await getCourseUserPicked(user_id);
    res.status(200).json(courses);
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
