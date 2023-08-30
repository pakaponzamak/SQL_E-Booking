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
const getCourseCount = async () => {
    const query = `
    SELECT course_id, COUNT(*) AS userCount
    FROM training_course
    GROUP BY course_id
  `;
  const results = await executeQuery(query);
  return results;
  };

export default async function course_counter (req,res){


    if(req.method === 'GET')
    {
    
            // Handle GET request, e.g., fetch data from MySQL
            const courses = await getCourseCount();
            res.status(200).json(courses);
          
    }else {
        res.status(405).json({message : "Not Good"})
    }
}