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

async function getParent(user_id){
    const query = "SELECT * FROM parent_data WHERE user_id = ?";
    try {
        const parent = await executeQuery(query,[user_id]);
        return parent;
      } catch (error) {
        console.error('Error fetching health records:', error);
        throw error; // Rethrow the error to handle it in the caller
      }
}

export default async function parent_by_id(req,res)
  {
    if (req.method === 'GET'){
        const user_id = req.query.user_id;
        try {
            const data = await getParent(user_id);
            if (data.length !== 0) {
                // Admin with matching username and password found
                res.status(200).json(data);
              } else {
                // No matching admin found
                res.status(404).json({ message: "Parent not found" });
              }
          } catch (error) {
            console.error("Error fetching health data:", error);
            res.status(500).json({ error: `Internal Server Errorrrr ${user_id}` });
          }
    } 
    else {
        res.status(405).json({ message: "This method is not allowed" });
      }
  }