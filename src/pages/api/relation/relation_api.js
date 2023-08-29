import pool from '../../../server/mySQL'


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

    // Define a function to insert a new user into the MySQL database
async function postRelation(user_id	,health_id,relation_type,name,phone_num,doctor_type,time_selected,date_selected,picked_what,more_detail,plant) {
    const query =
  'INSERT INTO emp_relation (user_id	,health_id,relation_type,name,phone_num,doctor_type,time_selected,date_selected,picked_what,more_detail,plant) VALUES (?, ?,?,?,?,?,?,?,?,?,?)';
    const values = [user_id	,health_id,relation_type,name,phone_num,doctor_type,time_selected,date_selected,picked_what,more_detail,plant];
    try {
      await executeQuery(query, values);
    } catch (error) {
      throw error; // Rethrow the error to handle it in the caller
    }
  }
    // Now you can use executeQuery to run MySQL queries
const getUsersRelation = async () => {
    const query = 'SELECT * FROM emp_relation';
    const health = await executeQuery(query);
    return health;
  };
const updateRelationUser = async (relation_type,name,phone_num,more_detail,health_id) => {
  const query = 'UPDATE emp_relation SET relation_type = ?  , name = ? ,phone_num = ? ,more_detail = ? WHERE health_id = ?'
  const values = [relation_type,name,phone_num,more_detail,health_id];
  const relationUpdate = await executeQuery(query,values)
  return relationUpdate
}

async function deleteHealthCare(health_id) {
  const query =
    "DELETE FROM emp_relation WHERE health_id = ?";
  const values = [health_id];

  try {
    await executeQuery(query, values);
  } catch (error) {
    throw error; // Rethrow the error to handle it in the caller
  }
}

export default async function health(req,res)
{
    if (req.method === 'GET') {
        // Handle GET request, e.g., fetch data from MySQL
        const users = await getUsersRelation();
        res.status(200).json(users);
      }
   else if (req.method === 'POST') {
        // Handle POST request, e.g., insert data into MySQL
        const { user_id	,health_id,relation_type,name,phone_num,doctor_type,time_selected,date_selected,picked_what,more_detail,plant} = req.body;
      
        try {
          await postRelation(user_id	,health_id,relation_type,name,phone_num,doctor_type,time_selected,date_selected,picked_what,more_detail,plant);
          res.status(200).json({ message: 'Data inserted successfully' });
        } catch (error) {
          console.error('Error inserting data:', error);
          res.status(500).json({ error: 'Internal Server Error' });
        }
      }
  else if (req.method === 'PUT')
  {
    const {relation_type,name,phone_num,more_detail,health_id} = req.body

    try{
             await updateRelationUser (relation_type,name,phone_num,more_detail,health_id)
             res.status(200).json({ message: 'Data inserted successfully' });
        } catch (error) {
          console.error('Error inserting data:', error);
          res.status(500).json({ error: 'Internal Server Error' });
        }
  }
  else if (req.method === "DELETE") {
    const  health_id  = req.query.healthId;
    try {
      await deleteHealthCare(health_id)
      res.status(200).json({ message: "Data deleted successfully" });
    } catch (error) {
      console.error("Error deleting data:", error);
      res.status(500).json({ error: `Internal Server Error` });
    }
  }
}