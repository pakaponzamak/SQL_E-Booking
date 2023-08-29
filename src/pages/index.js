import Image from "next/image";
import { Bai_Jamjuree } from "next/font/google";
import DensoLogo from "./images/Denso_logo.png";
import { useState, useEffect } from "react";
import StartFireBase from "../firebase/firebase_conf";
import { getDatabase, ref, onValue, off,set } from "firebase/database";
import { useRouter } from "next/router";
import { Analytics } from '@vercel/analytics/react';
import Swal from 'sweetalert2'
const bai_jamjuree = Bai_Jamjuree({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export default function Home() {
  StartFireBase();
  const [users, setUsers] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [forgotName, setForgotName] = useState("");
  const [employeeId, setEmployee_id] = useState("");
  const router = useRouter();
  const [showContent, setShowContent] = useState(false);


  /*useEffect(() => {
    const db = getDatabase();
    const usersRef = ref(db, "users");
    onValue(usersRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const usersArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setUsers(usersArray);
      }
    });
    return () => {
      off(usersRef);
    };
  }, []);*/

  const userIsNotCheckHandler = async (e) => {
    let userFound = false;
    for (const user of users) {
      if (checkUser(user.name, user.user_id, user.checkIn)) {
        userFound = true;
        break;
      }
    }
    if (!userFound) {
      try {
        const response = await fetch('/api/index_api/index_api', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name: firstName, user_id: employeeId }),
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
        //setMessage('Error occurred while fetching data.');
      }
      Toast.fire({
        icon: 'success',
        title: `ยินดีต้อนรับ ${firstName}`
      })
      router.push(
        `/form_selection?firstName=${firstName}&employeeId=${employeeId}`
      );
    }
  };

  /////////////////// MYSQL SECTION //////////////////////////
  /////////////////// MYSQL SECTION //////////////////////////
  /////////////////// MYSQL SECTION //////////////////////////
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('/api/index_api/index_api', {
          method: 'GET',
        });
  
        if (response.ok) {
          const data = await response.json();
          setUsers(data);
          console.log(data); // Log the data here
        } else {
          console.error('Error:', response.status, response.statusText);
          // Handle errors as needed
        }
      } catch (error) {
        console.error('Error:', error);
        // Handle errors as needed
      }
    };
  
    fetchUserData();
  }, []);
  /////////////////////////////////////////////////////////////

  function checkUser(idParameter, nameParameter, checkinParameter) {
    const emp_id = employeeId;
    const name = firstName;
    if (idParameter === emp_id && nameParameter === name) {
      let checkIn = checkinParameter;
      Toast.fire({
        icon: 'success',
        title: `ยินดีต้อนรับ ${firstName}`
      })
      router.push(
        `/form_selection?firstName=${firstName}&employeeId=${employeeId}`
      );
      return true;
    }
    if (idParameter === emp_id && nameParameter !== name) {
      Toast.fire({
        icon: 'error',
        title: `รหัสพนักงานไม่ตรงกับชื่อ`
      })
      return true;
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    userIsNotCheckHandler();
    

  };

  const handleToggleContent = () => {
    setShowContent(!showContent);
  };
  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  return (
    <main
      className={`flex justify-center items-center m-7  mt-16 ${bai_jamjuree.className}`}
    >
      <Analytics />
      <div className="relative flex flex-col items-center">
        {" "}
        {/* Add flex flex-col items-center class */}
        <form
          className="place-content-center text-center pt-10 "
          onSubmit={handleSubmit}
        >
          {/* Your form content here */}
          <Image
            src={DensoLogo}
            alt="Denso logo"
            width={300}
            className="mb-8"
          />
          <div className="font-extrabold text-[#D43732] italic">
            DNTH Electronic Form
          </div>
          <div className="mb-8 font-extrabold text-[#D43732] italic">
            (ระบบฟอร์มออนไลน์)
          </div>
          <div className="drop-shadow-lg flex flex-col items-center">
            <div>
              <input
                className="border px-5 py-3 rounded-2xl mb-6"
                placeholder="ชื่อ"
                type="text"
                name="username"
                id="username"
                required
                onChange={(e) => setFirstName(e.target.value.toLowerCase())}
              />
            </div>
            <div className="">
              <input
                className="border px-5 py-3 rounded-2xl mb-8"
                placeholder="รหัสพนักงาน"
                type="text"
                name="employee_id"
                id="employee_id"
                required
                onChange={(e) => setEmployee_id(e.target.value.toLowerCase())}
              />
            </div>
          </div>

          <button
            type="submit"
            className="text-white bg-[#D43732] hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 rounded-2xl text-xl px-16 py-3 text-center 
                             mb- dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            เข้าสู่ระบบ
          </button>
        </form>
        <div className="flex justify-end ">
          <div className="text-sm text-slate-500 mb-5 text-right mt-4  mx-2  ">
            {/* Move the "ลืมรหัสผ่าน?" button outside the form */}
            <div onClick={handleToggleContent}>ลืมรหัสผ่าน?</div>
            {showContent && (
              <div
                className="relative bg-white p-5 border rounded-xl  top-2 z-10 border-slate-400"
                onClick={handleContentClick}
              >
                <div className="space-y-2">
                  <div>
                    <input
                      className="border px-5 py-3 rounded-2xl mb-2"
                      placeholder="รหัสพนักงาน"
                      type="text"
                      name="username"
                      id="username"
                      required
                      onChange={(e) =>
                        setForgotName(e.target.value.toLowerCase())
                      }
                    />
                  </div>
                  <div className="flex justify-center">
                    {" "}
                    {/* Add flex justify-center to center the button */}
                    <button
                      className="border rounded-xl px-10 py-2 bg-red-500 text-white text-center"
                      onClick={() => {
                        // Loop through the users array to find the matching firstName
                        let matchedFirstName = null;
                        for (const user of users) {
                          if (user.employeeId === forgotName) {
                            matchedFirstName = user.firstName;
                            break;
                          }
                        }

                        if (matchedFirstName) {
                          alert(
                            `รหัสพนักงาน "${forgotName}" ตรงกับชื่อ "${matchedFirstName}"`
                          );
                        } else {
                          alert(`ไม่พบข้อมูลของท่านกรุณาตรวจสอบรหัสพนักงาน`);
                        }
                      }}
                    >
                      ยืนยัน
                    </button>
                    
                  </div>
                </div>
                
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
