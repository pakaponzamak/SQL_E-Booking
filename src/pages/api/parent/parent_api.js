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


async function getParent(){
    const query = "SELECT * FROM parent_data";
    try {
        const parent = await executeQuery(query);
        return parent;
      } catch (error) {
        console.error('Error fetching health records:', error);
        throw error; // Rethrow the error to handle it in the caller
      }
}

  // Define a function to insert a new user into the MySQL database
  async function postParent(user_id,parent_id,parent_name) {
    const query =
  'INSERT INTO parent_data (user_id,parent_id,parent_name) VALUES (?, ?,?)';
    const values = [user_id,parent_id,parent_name];
    try {
      await executeQuery(query, values);
    } catch (error) {
      throw error; // Rethrow the error to handle it in the caller
    }
  }


  export default async function parent_api(req,res)
  {
    if (req.method === 'GET'){
        try {
            const parent = await getParent();
            res.status(200).json(parent);
          } catch (error) {
            console.error("Error fetching health data:", error);
            res.status(500).json({ error: "Internal Server Error" });
          }
    } else if (req.method === 'POST'){
      const {user_id,parent_id,parent_name} = req.body
        try{
          await postParent(user_id,parent_id,parent_name);
          res.status(200).json({ message: 'Data inserted successfully' });
        }catch (error) {
          console.error("Error fetching health data:", error);
          res.status(500).json({ error: "Internal Server Error" });
        }
    }
    
    
    
    else {
        res.status(405).json({ message: "This method is not allowed" });
      }
  }