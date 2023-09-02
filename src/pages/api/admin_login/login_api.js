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

async function checkCredential(username, password) {
  const query = "SELECT * FROM admin WHERE username = ? AND password = ?";
  const admin = await executeQuery(query, [username, password]);
  return admin;
}

export default async function login(req, res) {
  if (req.method === 'GET') {
    const username = req.query.username;
    const password = req.query.password;
    try {
      const admin = await checkCredential(username, password);

      if (admin.length === 0) {
        // No admin data found in the database
        res.status(401).json({ message: "Unauthorized" });
        return;
      }

      if (admin.length === 1) {
        // Admin with matching username and password found
        res.status(200).json({ message: "Login successful" });
      } else {
        // More than one matching admin found (shouldn't happen with unique usernames)
        res.status(500).json({ message: "Internal Server Error" });
      }
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
  } else {
    res.status(405).json({ message: "This method is not allowed" });
  }
}
