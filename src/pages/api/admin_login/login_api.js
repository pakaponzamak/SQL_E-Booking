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

async function checkCredential() {
  const query = "SELECT * FROM admin";
  const admin = await executeQuery(query);
  return admin;
}

export default async function login(req, res) {
  if (req.method === 'GET') {
    const username = req.query.username;
    const password = req.query.password;
    try {
      const adminData = await checkCredential();
      if (adminData.length === 0) {
        // No admin data found in the database
        res.status(401).json({ message: "Unauthorized" });
        return;
      }

      // Use the find method to search for the admin record
      const admin = adminData.find(adminRecord => adminRecord.username === username && adminRecord.password === password);

      if (admin) {
        // Admin with matching username and password found
        res.status(200).json({ message: "Login successful" });
      } else {
        // No matching admin found
        res.status(401).json({ message: "Unauthorized" });
      }
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
  } else {
    res.status(405).json({ message: "This method is not allowed" });
  }
}
