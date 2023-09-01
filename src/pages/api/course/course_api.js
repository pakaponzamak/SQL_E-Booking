
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
const getCourses = async () => {
  const query = "SELECT * FROM training_course";
  const courses = await executeQuery(query);
  return courses;
};

  // Define a function to insert a new user into the MySQL database
  async function postCourse(
    course_id,
    user_id,
    name,
    time_selected,
    course,
    plant,
    date,
    hall,company,division,department,userFromPlant) {
    const query =
  'INSERT INTO training_course (course_id,user_id,name,time_selected,course,plant,date,hall,company,division,department,userFromPlant) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)';
    const values = [course_id,user_id,name,time_selected,course,plant,date,hall,company,division,department,userFromPlant];
    try {
      await executeQuery(query, values);
    } catch (error) {
      throw error; // Rethrow the error to handle it in the caller
    }
  }

  async function deleteUser(course_id,user_id)
{
  const query = "DELETE FROM training_course WHERE course_id = ? AND user_id = ?"
  const values = [course_id,user_id]
  try {
    await executeQuery(query,values);
  } catch (error) {
    throw error;
  }
}



export default async function course(req, res) {
  if (req.method === "GET") {
    // Handle GET request, e.g., fetch data from MySQL
    const courses = await getCourses();
    res.status(200).json(courses);
  } else if (req.method === "POST") {
    // Handle POST request, e.g., insert data into MySQL
    const {
      course_id,
        user_id,
        name,
        time_selected,
        course,
        plant,
        date,
        hall,company,division,department,userFromPlant
    } = req.body;

    try {
      await postCourse(
        course_id,
        user_id,
        name,
        time_selected,
        course,
        plant,
        date,
        hall,company,division,department,userFromPlant
      );
      res.status(200).json({ message: "Data inserted successfully" });
    } catch (error) {
      console.error("Error inserting data:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } 
  else if (req.method === 'PUT') {
    const { course_id ,user_id , name , time_selected , course , plant, date ,hall} = req.body
    try{

      res.status(200).json({ message: "Data inserted successfully" });
    } catch {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
  else if(req.method === 'DELETE') {
    const  course_id  = req.query.course_id;
    const  user_id = req.query.user_id;
    try{
      await deleteUser(course_id,user_id)
      res.status(200).json({ message: "Data inserted successfully" });
    }catch (error){
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
  else {
    res.status(405).json({ message: "This method is not allowed" });
  }
}
