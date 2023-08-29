import {
  getDatabase,
  ref,
  onValue,
  off,
  remove,
  push,
  update,
  set,
} from "firebase/database";
import StartFireBase from "../../firebase/firebase_conf";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import { Bai_Jamjuree } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Swal from "sweetalert2";

const bai_jamjuree = Bai_Jamjuree({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export default function confirmation() {
  StartFireBase();
  const router = useRouter();
  const { firstName, employeeId, checkIn } = router.query;
  const [users, setUsers] = useState([]);
  const [healthCare, setHealthCare] = useState([]);
  const [showBtn, setShowBtn] = useState(false);
  const [name, setName] = useState("");
  const [emp, setEmp] = useState("");
  const [checkInStatus, setCheckInStatus] = useState("");
  const [relationUser, setRelationUser] = useState([]);

  var today = new Date();
  var options = { month: "short", day: "numeric" };
  var date = today.toLocaleDateString("th-TH", options);
  var hours = today.getHours().toString().padStart(2, "0");
  var minutes = today.getMinutes().toString().padStart(2, "0");
  var time = hours + ":" + minutes;
  var dateTime = date + " " + time;

  useEffect(() => {
    const db = getDatabase();
    const healthRef = ref(db, "health");

    onValue(healthRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const healthArray = Object.keys(data).map((key) => {
          const health = {
            id: key,
            ...data[key],
            health: data[key]?.health || null,
          };
          return health;
        });

        setHealthCare(healthArray);
      }
    });

    return () => {
      off(healthRef);
    };
  }, []);

  /*useEffect(() => {
    const db = getDatabase();
    const usersRef = ref(db, "users");

    onValue(usersRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const usersArray = Object.keys(data).map((key) => {
          const user = {
            id: key,
            ...data[key],
            user: data[key]?.user || null,
          };
          return user;
        });

        setUsers(usersArray);
      }
    });

    return () => {
      off(usersRef);
    };
  }, []);*/

 /* useEffect(() => {
    const db = getDatabase();
    const usersRef = ref(db, "relation_health_care");

    onValue(usersRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const usersArray = Object.keys(data).map((key) => {
          const user = {
            id: key,
            ...data[key],
            user: data[key]?.user || null,
          };
          return user;
        });

        setRelationUser(usersArray);
      }
    });

    return () => {
      off(usersRef);
    };
  }, []);*/

  ///////// MySQL DATAABASE ////////////////////// MySQL DATAABASE /////////////
  ///////// MySQL DATAABASE ////////////////////// MySQL DATAABASE /////////////
  ///////// MySQL DATAABASE ////////////////////// MySQL DATAABASE /////////////
  const fetchHealthCare = async () => {
    try {
      const response = await fetch('/api/health/health_api', {
        method: 'GET',
      });

      if (response.ok) {
        const data = await response.json();
        setUsers(data);
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
    fetchHealthCare();
  }, []);

  const fetchRelativeUser = async () => {
    try {
      const response = await fetch('/api/relation/relation_api', {
        method: 'GET',
      });

      if (response.ok) {
        const data = await response.json();
        setRelationUser(data);
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
    fetchRelativeUser();
  }, []);
  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    // Perform an effect for data
    fetchCheckIn();
  }, [users]);

  function isAppointmentWithin15Minutes(appointmentTime, appointmentDate) {
    const currentTime = new Date(); // Get the current time
    const date = currentTime.toISOString().split("T")[0];
    const currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();

    const startTime = appointmentTime.split(":");
    const appointmentHour = parseInt(startTime[0]);
    const appointmentMinute = parseInt(startTime[1]);

    // Compare the date of the appointment and the current date
    if (date === appointmentDate.split("T")[0]) {
      // If the date is the same, check the time
      const timeDiffInMinutes =
        (appointmentHour - currentHour) * 60 +
        (appointmentMinute - currentMinute);

      // Check if the appointment time is within 15 minutes of the current time
      if (timeDiffInMinutes > 15 && timeDiffInMinutes >= 0) {
        console.log(
          "The user can check in. It's within 15 minutes of the appointment."
        );
        return true;
      } else {
        console.log(
          "The appointment time has passed. The user cannot check in."
        );
        return false;
      }
    } else {
      return true;
    }
  }

  // Function to update the appointment data to "N/A" if the user didn't come within 15 minutes before the appointment
  function updateAppointmentToNAIfNotComing(user) {
    if (user?.health?.time) {
      const isNotWithin15Minutes = !isAppointmentWithin15Minutes(
        user.health.time,
        user.health.date
      );
      if (isNotWithin15Minutes && user.health.checkIn === false) {
        // The appointment time is not within the next 15 minutes
        // Update the appointment data to "N/A"
        const db = getDatabase();
        const userRef = ref(db, `users/${user.id}/health`);
        const healthDataToUpdate = {
          type: "N/A",
          time: "N/A",
          date: "N/A",
          plant: "N/A",
          relationship: "N/A",
          checkInTime: "N/A",
          pickedWhat: "N/A",
          checkIn: false,
        };

        update(userRef, healthDataToUpdate);
        console.log(`Updated appointment for user with ID: ${user.id}`);
      } else console.log("Check in already cannot delete");
    }
  }
  // Now you can use the updateAppointmentToNAIfNotComing function inside the useEffect
  useEffect(() => {
    if (users.length > 0) {
      users.forEach((user) => {
        updateAppointmentToNAIfNotComing(user);
      });
    }
  }, [users]);

  const fetchCheckIn = async () => {
    let already = false;
    for (const user of users) {
      if (
        fetchCheckInHandler(
          user.user_id,
          user.name         
        )
      ) {
        already = true;
        break; // Exit the loop when a matching user is found
      }
    }
  };

  function fetchCheckInHandler(idParameter, nameParameter, checkinParameter) {
    const anotherEmployeeId = employeeId;
    const anotherName = firstName;
    //const buttonId = e.target.id;
    if (idParameter === anotherEmployeeId && nameParameter === anotherName) {
      setName(nameParameter);
      setEmp(idParameter);
      if (checkinParameter === true) {
        setCheckInStatus("เช็คอินเรียบร้อยแล้ว");
      } else if (checkinParameter === false) {
        setCheckInStatus("ยังไม่ได้เช็คอิน");
      }
      return true;
    }
  }

  const confirmHandler = async (e) => {
    // Show the confirmation dialog
    Swal.fire({
      title: 'ท่านต้องการจะ "เช็คอิน" หรือไม่',
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#16a34a",
      cancelButtonColor: "#D43732",
      confirmButtonText: "ยืนยัน",
      cancelButtonText: "ยกเลิก",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await fetch(`/api/health/health_api?healthId=${e.health_id}`, {
            method: 'DELETE',
          });
  
          if (response.ok) {
            // The record has been deleted successfully
            console.log(`Record with ID ${e.health_id} deleted.`);
            Swal.fire({
              title: 'เช็คอินสำเร็จ',
              icon: 'success'
            }).then(() => {
              // Reload the page after successful deletion
              window.location.reload();
            });
          } else {
            console.error('Error:', response.status, response.statusText);
            setMessage('Error occurred while deleting data.');
          }
        } catch (error) {
          console.error('Error:', error);
          setMessage('Error occurred while deleting data.');
        }
      }
    });
  };
  

  const cancelHandler = async (e) => {
    Swal.fire({
      title: 'ท่านต้องการจะ "ยกเลิก" การจองหรือไม่',
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#16a34a",
      cancelButtonColor: "#D43732",
      confirmButtonText: "ยืนยัน",
      cancelButtonText: "ยกเลิก",
    }).then(async(result) => {
      if (result.isConfirmed) {
        try {
          const response = await fetch(`/api/health/health_api?healthId=${e.health_id}`, {
            method: 'DELETE',
    
          });
      
          if (response.ok) {
            // The record has been deleted successfully
            console.log(`Record with ID ${e.health_id} deleted.`);
            Swal.fire({
              title: 'ยกเลิกสำเร็จ',
              icon: 'success'
            }).then(() => {
              // Reload the page after successful deletion
              window.location.reload();
            });
          } else {
            console.error('Error:', response.status, response.statusText);
            setMessage('Error occurred while deleting data.');
          }
        } catch (error) {
          console.error('Error:', error);
          setMessage('Error occurred while deleting data.');
        }
        /////// PUT Method ////////////
        try {
          const response = await fetch('/api/health_admin/hc_insert_api', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ health_id: e.health_id,
              whoPickedThis: '',
              alreadyPicked:0,
            
              }),
          });
        
          if (response.ok) {
            const data = await response.json();
            //setMessage(data.message);
            
          } else {
            console.error('Error:', response.status, response.statusText);
            //setMessage('Error occurred while sending data.');
          }
        }catch (error) {
          console.error('Error:', error);
          setMessage('Error occurred while sending data.');
        }
      }
    });
  };

  ///////////// Relation Users ///////////
  const relationCancelButtonHandler = async (e) => {
    Swal.fire({
      title: 'ท่านต้องการจะ "ยกเลิก" การจองหรือไม่',
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#16a34a",
      cancelButtonColor: "#D43732",
      confirmButtonText: "ยืนยัน",
      cancelButtonText: "ยกเลิก",
    }).then(async(result) => {
      if (result.isConfirmed) {
        try {
          const response = await fetch(`/api/relation/relation_api?healthId=${e.health_id}`, {
            method: 'DELETE',
    
          });
      
          if (response.ok) {
            // The record has been deleted successfully
            console.log(`Record with ID ${e.health_id} deleted.`);
            Swal.fire({
              title: 'ยกเลิกสำเร็จ',
              icon: 'success'
            }).then(() => {
              // Reload the page after successful deletion
              window.location.reload();
            });
          } else {
            console.error('Error:', response.status, response.statusText);
            setMessage('Error occurred while deleting data.');
          }
        } catch (error) {
          console.error('Error:', error);
          setMessage('Error occurred while deleting data.');
        }
        /////// PUT Method ////////////
        try {
          const response = await fetch('/api/health_admin/hc_insert_api', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ health_id: e.health_id,
              whoPickedThis: '',
              alreadyPicked:0,
            
              }),
          });
        
          if (response.ok) {
            const data = await response.json();
            //setMessage(data.message);
            
          } else {
            console.error('Error:', response.status, response.statusText);
            //setMessage('Error occurred while sending data.');
          }
        }catch (error) {
          console.error('Error:', error);
          setMessage('Error occurred while sending data.');
        }
      }
    });
  };

  const relationConfirmButtonHandler = async (e) => {
    Swal.fire({
      title: 'ท่านต้องการจะ "เช็คอิน" หรือไม่',
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#16a34a",
      cancelButtonColor: "#D43732",
      confirmButtonText: "ยืนยัน",
      cancelButtonText: "ยกเลิก",
    }).then(async(result) => {
      if (result.isConfirmed) {
        try {
          const response = await fetch(`/api/relation/relation_api?healthId=${e.health_id}`, {
            method: 'DELETE',
    
          });
      
          if (response.ok) {
            // The record has been deleted successfully
            console.log(`Record with ID ${e.health_id} deleted.`);
            Swal.fire({
              title: 'เช็คอินสำเร็จ',
              icon: 'success'
            }).then(() => {
              // Reload the page after successful deletion
              window.location.reload();
            });
          } else {
            console.error('Error:', response.status, response.statusText);
            setMessage('Error occurred while deleting data.');
          }
        } catch (error) {
          console.error('Error:', error);
          setMessage('Error occurred while deleting data.');
        }
      }
    });
  }


  return (
    <div className={`${bai_jamjuree.className}  max-h-screen bg-slate-100 h-screen w-screen`}>
      <Analytics />
      <div className="max-h-screen bg-slate-100 h-screen w-screen">
        <div className="flex justify-center item-center mb-10">
          <div>
            
              {users.map((user) => {
                //const timeStart = getTimeFromString(user.health.time);
                if (user.user_id === emp && user.name === name) {
                  return (
                    <div className="border p-6  mb-10 mt-16  rounded-xl bg-white drop-shadow-md">
            <div className="text mb-3 text-left ">ประวัติการจอง</div>
                    <div className=" mx-2">
                      
                      <div className="border-b mb-3"></div>
                      <div className="text-center mb-4 text-2xl ">
                        <div>
                          <strong>
                            {user.doctor_type === ''
                              ? "ไม่พบคิวแพทย์"
                              : user.doctor_type}
                          </strong>
                        </div>
                      </div>
                      <div className="flex justify-between mt-3">
                        <div className="mb-1">
                          วันที่ :{" "}
                          <strong>
                            {user.date_selected &&
                            !isNaN(new Date(user.date_selected))
                              ? new Date(user.date_selected).toLocaleDateString(
                                  "th-TH",
                                  {
                                    dateStyle: "long",
                                  }
                                )
                              : "-"}{" "}
                          </strong>
                        </div>
                        <div className="mb-1">
                          เวลา :{" "}
                          <strong>
                            {user.time_selected === ''
                              ? "-"
                              : user.time_selected}
                          </strong>
                        </div>
                      </div>
                      {/* Render other user data */}

                        <div>
                          <div className="mb-1">
                            Plant :{" "}
                            <strong>
                              {user.plant === ''
                                ? "-"
                                : user.plant}
                            </strong>
                          </div>
                          <p className="mb-1">
                            ชื่อ : <strong>{user.name}</strong>
                          </p>
                          <p className="mb-1">
                            ID :{" "}
                            <strong>{user.user_id.toUpperCase()}</strong>
                          </p>
                          <p className="mb-3">
                            อาการ : <strong>{user.more_detail}</strong>
                          </p>
                          <div className="mb-5 border-b mt-6 "></div>
                        </div>
                        <div className="justify-between flex  gap-10 mx-10 mt-2">
              <button
                onClick={() => cancelHandler(user)}
                className="flex-grow text-white bg-[#D43732] hover:bg-[#FF4D49] transition-colors duration-300 text-lg text-center px-8 py-3 rounded-xl font-semibold"
              >
                ยกเลิก
              </button>
              <button
                onClick={() => confirmHandler(user)}
                id="confirm-btn"
                className="flex-grow text-white bg-[#16a34a] hover:bg-[#0E8A37] transition-colors duration-300 text-lg text-center px-8 py-3 rounded-xl font-semibold"
              >
                เช็คอิน
              </button>
            </div>
                    </div>
                    </div>
                  );
                }
                
                return null;
                
              })}
              
                   
          </div>
        </div>

        <div className="flex justify-center item-center">
          <div>
            {relationUser.map((user) => {
              if (user.user_id === employeeId) {
                return (
                  <div className="border p-6  mb-10 mt-2  rounded-xl bg-white drop-shadow-md">
                    <div className="mx-2">
                      <div className="text mb-2 text-left">
                        ประวัติการจองของญาติ
                      </div>
                      <div className="border-b mb-3"></div>
                      <div className="text-center mb-4 text-2xl">
                        <div>
                          <strong>
                            {user.doctor_type === null ? "ไม่พบคิวแพทย์" : user.doctor_type}
                          </strong>
                        </div>
                      </div>
                      <div className="flex justify-between mt-3">
                        <div className="mb-1">
                          วันที่ :{" "}
                          <strong>
                            {user.date_selected && !isNaN(new Date(user.date_selected))
                              ? new Date(user.date_selected).toLocaleDateString(
                                  "th-TH",
                                  {
                                    dateStyle: "long",
                                  }
                                )
                              : "-"}{" "}
                          </strong>
                        </div>
                        <div className="mb-1">
                          เวลา :{" "}
                          <strong>
                            {user.time_selected === "N/A" ? "-" : user.time_selected}
                          </strong>
                        </div>
                      </div>
                      {/* Render other user data */}
                      {user && (
                        <div>
                          <div className="mb-1">
                            Plant :{" "}
                            <strong>
                              {user.plant === "" ? "-" : user.plant}
                            </strong>
                          </div>
                          <p className="mb-1">
                            ชื่อ : <strong>{user.name}</strong>
                          </p>
                          <p>
                            อาการ : <strong>{user.more_detail}</strong>
                          </p>
                        </div>
                      )}
                      <div className="mb-5 border-b mt-6 "></div>
                    </div>
                    <div className="justify-between flex  gap-10 mx-10 mt-2">
                      <button
                        onClick={() => relationCancelButtonHandler(user)}
                        className="flex-grow text-white bg-[#D43732] hover:bg-[#FF4D49] transition-colors duration-300 text-lg text-center px-8 py-3 rounded-xl font-semibold"
                      >
                        ยกเลิก
                      </button>
                      <button
                        onClick={() => relationConfirmButtonHandler(user)}
                        id="confirm-btn"
                        className="flex-grow text-white bg-[#16a34a] hover:bg-[#0E8A37] transition-colors duration-300 text-lg text-center px-8 py-3 rounded-xl font-semibold"
                      >
                        เช็คอิน
                      </button>
                    </div>
                  </div>
                );
              }
              return null;
            })}
            
           {/* Check if no matching IDs were found */}
    {users.every((user) => user.user_id !== employeeId) && (
      <div className="text-center text-lg text-gray-500 mt-4">
        ไม่พบคิวแพทย์ของคุณ.
      </div>
    )}
      
          </div>
        </div>
      </div>
    </div>
  );
}
