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

// Now you can use executeQuery to run MySQL queries
const getCourses = async () => {
  const query = 'SELECT * FROM insert_TR';
  const courses = await executeQuery(query);
  return courses;
};

  // Define a function to insert a new user into the MySQL database
async function postUser(course_name	,time_Start,time_End,date_course,lecturer	,amount,hall,plant,online_code,number) {
  const query =
'INSERT INTO insert_TR (course_name	,time_Start,time_End,date_course,lecturer	,amount,hall,plant,online_code,number) VALUES (?, ?,?,?,?,?,?,?,?,?)';
  const values = [course_name	,time_Start,time_End,date_course,lecturer	,amount,hall,plant,online_code,number];
  try {
    await executeQuery(query, values);
  } catch (error) {
    throw error; // Rethrow the error to handle it in the caller
  }
}

async function deleteCourse(course_id) {
  const query =
    "DELETE FROM insert_TR WHERE course_id = ?";
  const values = [course_id];

  try {
    await executeQuery(query, values);
  } catch (error) {
    throw error; // Rethrow the error to handle it in the caller
  }
}

async function updateAmount(number,course_id) {
  const query = "UPDATE insert_TR SET number = ? WHERE course_id = ?"
  const values = [number,course_id]
  try {
    await executeQuery(query,values)
  } catch (error) {
    throw error;
  }
}


export default async function tr_insert(req, res) {
  if (req.method === 'GET') {
    // Handle GET request, e.g., fetch data from MySQL
    const courses = await getCourses();
    res.status(200).json(courses);
  } else if (req.method === 'PUT') {
    // Handle PUT request
    const { number, course_id } = req.body;
    try {
      await updateAmount(number, course_id);
      res.status(200).json({ message: 'Data updated successfully' });
    } catch {
      res.status(500).json({ message: 'Error updating data' });
    }
  } else if (req.method === 'POST') {
    // Handle POST request, e.g., insert data into MySQL
    const {
      course_name,
      time_Start,
      time_End,
      date_course,
      lecturer,
      amount,
      hall,
      plant,
      online_code,
      number,
    } = req.body;

    try {
      await postUser(
        course_name,
        time_Start,
        time_End,
        date_course,
        lecturer,
        amount,
        hall,
        plant,
        online_code,
        number
      );
      res.status(200).json({ message: 'Data inserted successfully' });
    } catch (error) {
      console.error('Error inserting data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else if (req.method === 'DELETE') {
    const course_id = req.query.course_id;
    try {
      await deleteCourse(course_id);
      res.status(200).json({ message: 'Data deleted successfully' });
    } catch {
      res.status(500).json({ message: 'Error deleting data' });
    }
  } else {
    res.status(405).json({ error: 'This Method is Not Supported' });
  }
}
