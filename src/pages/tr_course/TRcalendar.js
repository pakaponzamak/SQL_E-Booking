import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { Bai_Jamjuree } from "next/font/google";
import StartFireBase from "../../firebase/firebase_conf";
import { Analytics } from "@vercel/analytics/react";
import { getDatabase, ref, get, onValue, off, update } from "firebase/database";
import Swal from "sweetalert2";
const bai_jamjuree = Bai_Jamjuree({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [clickedDay, setClickedDay] = useState(null);
  const [dayMonthYear, setDayMonthYear] = useState(null);
  const [startIndex, setStartIndex] = useState(1);
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState(courses);
  const [users,setUsers] = useState([])
  const [message,setMessage] = useState("")
  const [courseCount,setCourseCount] = useState([])


  const scrollRef = useRef(null);
  //StartFireBase();
  const router = useRouter();
  const { firstName, employeeId, checkIn } = router.query;
  const refreshPage = () => {
    router.replace(router.asPath);
  };
  /*useEffect(() => {
    const db = getDatabase();
    const courseRef = ref(db, "courses");
    // Listen for changes in the 'users' reference
    onValue(courseRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // Convert the object of users into an array
        const coursesArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        // Set the users state with the retrieved data
        setCourses(coursesArray);
      }
    });
    // Clean up the listener when the component unmounts
    return () => {
      // Turn off the listener
      off(courseRef);
    };
  }, []);*/

    //------------------- Prepared For MySQL Database ----------------------//
  //------------------- Prepared For MySQL Database ----------------------//
  const fetchCourses = async () => {
    try {
      const response = await fetch(`/api/course_admin/tr_insert_api`, {
        method: 'GET',
      });

      if (response.ok) {
        const data = await response.json();
        setCourses(data);
      } else {
        console.error('Error:', response.status, response.statusText);
        //setMessage('Error occurred while fetching data.');
      }
    } catch (error) {
      console.error('Error:', error);
     // setMessage('Error occurred while fetching data.');
    }
  };
  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourseCount = async () => {
    try {
      const response = await fetch(`/api/course/course_count_api`, {
        method: 'GET',
      });

      if (response.ok) {
        const data = await response.json();
        setCourseCount(data);
      } else {
        console.error('Error:', response.status, response.statusText);
        //setMessage('Error occurred while fetching data.');
      }
    } catch (error) {
      console.error('Error:', error);
     // setMessage('Error occurred while fetching data.');
    }
  };
  useEffect(() => {
    fetchCourseCount();
    
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch(`/api/course/course_api`, {
        method: 'GET',
      });

      if (response.ok) {
        const data = await response.json();
        setUsers(data);
      } else {
        console.error('Error:', response.status, response.statusText);
        setMessage('Error occurred while fetching data.');
      }
    } catch (error) {
      console.error('Error:', error);
     setMessage('Error occurred while fetching data.');
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  //------------------- ---------------------------- ----------------------//
  //------------------- ---------------------------- ----------------------//
  //------------------- ---------------------------- ----------------------//

  //Auto go to current Date when entered
  useEffect(() => {
    // Scroll to current date section
    if (scrollRef.current) {
      const currentDateElement =
        scrollRef.current.querySelector(".current-date");
      if (currentDateElement) {
        currentDateElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
    setClickedDay(currentDate.getDate());
    setStartIndex(currentDate.getDate());
    const currentDay = currentDate.getDate();
    const currentMonth = `${currentDate.getMonth() + 1}`.padStart(2, "0");
    const currentYear = currentDate.getFullYear();
    const date =
      currentYear +
      "-" +
      currentMonth +
      "-" +
      currentDay.toString().padStart(2, "0");
    setDayMonthYear(date);
    console.log(dayMonthYear);
  }, []);

  const handleNumberClick = (day) => {
    setClickedDay(day);
    const currentMonth = `${currentDate.getMonth() + 1}`.padStart(2, "0");
    const currentYear = currentDate.getFullYear();
    //const currentDay = currentDate.getDate();
    //const date = new Date(currentYear, currentMonth, day);
    //const dayOfWeek = date.toLocaleDateString("th-TH", { weekday: "long" });

    const date =
      currentYear + "-" + currentMonth + "-" + day.toString().padStart(2, "0");
    setDayMonthYear(date);
    console.log(dayMonthYear);

    const filteredCourses = courses.filter((course) => {
      const courseDate = course.date;

      //console.log(courseDate)
      return courseDate === date;
    });

    setFilteredCourses(filteredCourses);
  };

  const previous7Days = () => {
    setStartIndex((prevStartIndex) => Math.max(1, prevStartIndex - 7));
  };

  const next7Days = () => {
    const daysInMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    ).getDate();
    setStartIndex((prevStartIndex) =>
      Math.min(prevStartIndex + 7, daysInMonth - 6)
    );
  };

  const previousMonth = () => {
    const previousDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - 1
    );
    setCurrentDate(previousDate);
    setStartIndex(1);
  };

  const nextMonth = () => {
    const nextDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1
    );
    setCurrentDate(nextDate);
    setStartIndex(1);
  };

  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const today = new Date();
  const todayDate = today.getDate();
  const todayMonth = today.getMonth();
  const todayYear = today.getFullYear();

  const days = [];
  for (let i = startIndex; i < startIndex + 7; i++) {
    if (i > daysInMonth) break;
    const date = new Date(currentYear, currentMonth, i);
    const dayOfWeek = date.toLocaleDateString("th-TH", { weekday: "short" });

    const isCurrentDate = i === todayDate;
    const isClickedDay =
      i === clickedDay &&
      currentYear === todayYear &&
      currentMonth === todayMonth &&
      i < todayDate;

    const isPastDate = date < today;

    const isDisabled = isPastDate && !isCurrentDate; // Set the disabled state based on whether it's a past date and not the current date

    const dayButtonClass = isClickedDay
      ? "rounded-xl text-right p-2 bg-blue-500 w-10 h-10 hover:bg-blue-600 text-white"
      : isDisabled
      ? "rounded-xl text-right p-2 bg-red-500 w-10 h-10 cursor-not-allowed text-white"
      : isCurrentDate &&
        i === todayDate &&
        todayMonth === currentMonth &&
        todayYear === currentYear
      ? "rounded-xl text-right p-2 bg-red-500 w-10 h-10 current-date text-white"
      : "text-right p-2 w-10 h-10 bg-slate-200 hover:bg-blue-300";

    const dayElement = (
      <div key={i} className="flex-none">
        <div className="text-center text-xs">{dayOfWeek}</div>
        <button
          onClick={() => handleNumberClick(i)}
          className={`${dayButtonClass} rounded-xl text-center justify-center items-center flex flex-col`}
          disabled={isDisabled} // Disable the button for past dates
          style={
            isPastDate && !isCurrentDate ? { backgroundColor: "#f1f5f9" } : null
          } // Change background color for past dates
        >
          <div className="text-center">{i}</div>
        </button>
      </div>
    );

    days.push(dayElement);
  }

  /*const countClickCheckHandler = async (course) => {
    const db = getDatabase();
    const userPickedCourse = courses.find((c) => c.id === course.id);

    if (!userPickedCourse.whoPickedThisCourse) {
      userPickedCourse.whoPickedThisCourse = []; // Ensure that it's an array when not present
    }

    if (userPickedCourse.whoPickedThisCourse.includes(employeeId)) {
      // The user has already picked the course, so we want to allow them to remove it
      const updatedCourses = courses.map((c) => {
        if (c.id === course.id) {
          return {
            ...c,
            number: c.number - 1,
            whoPickedThisCourse: c.whoPickedThisCourse.filter(
              (id) => id !== employeeId
            ),
          };
        }
        return c;
      });
      setCourses(updatedCourses);

      const postData = {
        number: userPickedCourse.number - 1,
        whoPickedThisCourse: userPickedCourse.whoPickedThisCourse.filter(
          (id) => id !== employeeId
        ),
      };
      const userData = {
        course: "N/A",
        date: "N/A",
        hall: "N/A",
        time:"N/A",
        plant:"N/A"
      }
      await update(
        ref(
          db,
          "courses/" +
            course.course +
            course.date +
            course.timeStart +
            course.onlineCode
        ),
        postData
      );
      await update(
        ref(
          db,
          "users/" +
            employeeId +
            "/courses"
        ),
        userData
      );
    } else {
      // The user has not picked the course, so we want to allow them to add it
      if (userPickedCourse.number + 1 > userPickedCourse.amount) {
        alert("เต็มแล้วครับพ่อหนุ่ม");
        return;
      }

      const updatedCourses = courses.map((c) => {
        if (c.id === course.id) {
          return {
            ...c,
            number: c.number + 1,
            whoPickedThisCourse: [...c.whoPickedThisCourse, employeeId],
          };
        }
        return c;
      });
      setCourses(updatedCourses);

      const postData = {
        number: userPickedCourse.number + 1,
        whoPickedThisCourse: [
          ...userPickedCourse.whoPickedThisCourse,
          employeeId,
        ],
      };
      const userData = {
        course: course.course,
        date: course.date,
        hall: course.hall,
        time:course.timeStart,
        
      }

      await update(
        ref(
          db,
          "courses/" +
            course.course +
            course.date +
            course.timeStart +
            course.onlineCode
        ),
        postData
      );
      await update(
        ref(
          db,
          "users/" +
            employeeId +
            "/courses"
        ),
        userData
      );
    }
  };*/
  
  const countClickCheckHandler = async (course) => {
    const userPickedCourse = users.find((user) => user.course_id === course.course_id && user.user_id === employeeId) 
    if(!userPickedCourse){
      ////// POST DATA To Course /////////
    try {
      const response = await fetch('/api/course/course_api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ course_id:course.course_id,
          user_id: employeeId,
          name: firstName,
          time_selected:course.time_Start,
          course:course.course_name,
          plant:course.plant,
          date:course.date_course,
          hall:course.hall,
          }),
      });
      if (response.ok) {
        const data = await response.json();
        //window.location.reload();
        //setMessage(data.message);
      } else {
        console.error('Error:', response.status, response.statusText);
        //window.location.reload();
        //setMessage('Error occurred while sending data.');
      }
    }catch (error) {
      console.error('Error:', error);
      //setMessage('Error occurred while sending data.');
    }
    //////// PUT UPDATE NUMBER AMOUNT /////////
    
    try {
      const response = await fetch('/api/course_admin/tr_insert_api', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ number:course.number+1,
            course_id:course.course_id
          }),
      });
      if (response.ok) {
        const data = await response.json();
        //setMessage(data.message);
        window.location.reload();
      } else {
        console.error('Error:', response.status, response.statusText);
        //window.location.reload();
        //setMessage('Error occurred while sending data.');
      }
    }catch (error) {
      console.error('Error:', error);
      //setMessage('Error occurred while sending data.');
    }
  } 
  }

  const removeUserHandler = async (course) => {
    
    const userPickedCourse = users.find((user) => user.course_id === course.course_id && user.user_id === employeeId)  
    if (userPickedCourse) {
      console.log(`Delete Course: ${course.course_id} with user ID: ${userPickedCourse.user_id}`);
      
      try {
        // Decrease the number by one using a PUT request
        await fetch('/api/course_admin/tr_insert_api', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            number: course.number - 1,
            course_id: course.course_id,
          }),
        });
  
        // Delete the course using a DELETE request
        const response = await fetch(`/api/course/course_api?course_id=${course.course_id}&user_id=${userPickedCourse.user_id}`, {
          method: 'DELETE',
        });
  
        if (response.ok) {
          const data = await response.json();
          console.log('Response status:', response.status);
          setCourses(data);
             console.log(`Delete data complete course_id = ${course.course_id} and user_id = ${userPickedCourse.user_id}`)
          // Reload the page after successfully completing both operations
         window.location.reload();
        } else {
          console.error('Error:', response.status, response.statusText);
          // Handle error or show an error message to the user
          
        }
      } catch (error) {
        console.error('Error:', error);
       
        // Handle error or show an error message to the user
      }
    }
    w
  };
  

  return (
    <main
      className={`m-2  ${bai_jamjuree.className} justify-center item-center `}
    >
      <Analytics />
      <div className="mb-1">
        <p className="mr-5  flex justify-end text-sm">
          ชื่อ :&nbsp; <strong>{firstName}</strong>&nbsp; ID : &nbsp;
          <strong>{employeeId}</strong>
        </p>
        <div className="border-b p-1 mb-2"></div>
      </div>
      <div className="flex justify-between text-center">
        <button onClick={previousMonth}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <h2 className="flex text-center justify-center font-bold text-2xl">
          {clickedDay ? (
            <>
              {clickedDay}&nbsp;
              {currentDate.toLocaleDateString("th-TH", {
                month: "long",
                year: "numeric",
              })}
            </>
          ) : (
            currentDate.toLocaleDateString("th-TH", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })
          )}
        </h2>
        <button onClick={nextMonth}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
      <div className="border-b p-1 mb-2"></div>

      <div ref={scrollRef} className="flex justify-between ">
        <button onClick={previous7Days} disabled={startIndex === 1}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <div className="flex text-center justify-center gap-2 overflow-x-auto">
          {days}
        </div>
        <button onClick={next7Days} disabled={startIndex + 7 > daysInMonth}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
      <div className="border-b p-1 mb-5"></div>
      <div>
        {courses
          .sort((a, b) => (a.time_Start > b.time_Start ? 1 : -1))
          .filter((course) => {
            const courseDate = course.date_course;
            return dayMonthYear === courseDate;
          })
          .map((courses) => {
            // Find the corresponding courseCount object by matching the key
      const correspondingCourseCount = courseCount.find(
        (count) => count.course_id === courses.course_id
      );
            return(
            
            <div
              key={courses.id}
              className=" m-3 p-2 rounded-xl bg-slate-200 drop-shadow-lg mb-5"
            >
              <div className="flex justify-between mb-2">
                <p>
                  Date :{" "}
                  <strong>
                    {new Date(courses.date_course).toLocaleDateString("th-TH", {
                      dateStyle: "long",
                    })}
                  </strong>
                </p>
              </div>
              <div className="flex justify-between mb-2">
                <p>
                  Course : <strong>{courses.course_name}</strong>
                </p>
                <p>
                  Plant : <strong>{courses.plant}</strong>
                </p>
              </div>
              <div className="flex justify-between mb-2">
                <h1>
                  Time :{" "}
                  <strong>
                    {courses.time_Start} - {courses.time_End}
                  </strong>
                </h1>
                <p>
                  Online : <strong>{courses.online_code}</strong>
                </p>
              </div>
              <div className="flex justify-between mb-2">
                <p>
                  Lecturer : <strong>{courses.lecturer}</strong>
                </p>
                <div>
                {correspondingCourseCount && (
            <p>
                  Onside :{" "}
                  
                  <strong>
                    {correspondingCourseCount.userCount} / {courses.amount}
                  </strong>
                </p>
          )}
          {!correspondingCourseCount && <p>Onside :{" "} <strong> 0 / {courses.amount}</strong></p>}
          </div>
                
              </div>
              <div className="flex justify-between mt-3">
                <p>
                  Place: <strong>{courses.hall}</strong>
                </p>
                {courses.number >= courses.amount && !users.find((c) => c.course_id === courses.course_id) ? (
                  <button
                    onClick={() => countClickCheckHandler(courses)}
                    className="bg-gray-400 text-white p-2 px-4 rounded-2xl font-semibold"
                  >
                    ที่นั่งเต็มแล้ว
                  </button>
                ) : (
                  <>
                   {users.find((user) => user.course_id === courses.course_id && user.user_id === employeeId) ? (
  <button
    onClick={() => removeUserHandler(courses)}
    className="bg-red-600 text-white p-2 px-4 rounded-2xl font-semibold"
  >
    ยกเลิก
  </button>
) : (
  <button
    onClick={() => countClickCheckHandler(courses)}
    className="bg-green-600 text-white p-2 px-4 rounded-2xl font-semibold"
  >
    เลือก
  </button>
)}



                  </>
                )}
              </div>
            </div>
          )})}
      </div>
    </main>
  );
}
