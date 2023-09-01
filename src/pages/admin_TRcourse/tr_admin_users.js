import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Bai_Jamjuree } from "next/font/google";
import { useRouter } from "next/router";
import DensoLogo from "../images/Denso_logo.png";
import { getDatabase, ref, remove, onValue, off } from "firebase/database";
import StartFireBase from "../../firebase/firebase_conf";
import Swal from "sweetalert2";

const bai = Bai_Jamjuree({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "700"],
});

export default function TRusers() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isHealthCareExpanded, setIsHealthCareExpanded] = useState(false);
  const [isCourseExpanded, setIsCourseExpanded] = useState(false);
  const [users, setUsers] = useState([]);
  const [courses, setCourses] = useState([]);
  const [courseCount, setCourseCount] = useState(0);

  StartFireBase();

  const fetchCourseUser = async () => {
    try {
      const response = await fetch("/api/course/course_api", {
        method: "GET",
      });

      if (response.ok) {
        const data = await response.json();
        setUsers(data);
      } else {
        console.error("Error:", response.status, response.statusText);
        //setMessage('Error occurred while fetching data.');
      }
    } catch (error) {
      console.error("Error:", error);
      // setMessage('Error occurred while fetching data.');
    }
  };
  useEffect(() => {
    fetchCourseUser();
  }, []);

  const router = useRouter();
  const { username, password} = router.query;

  const toggleHealthCareMenu = () => {
    setIsHealthCareExpanded(!isHealthCareExpanded);
    setIsCourseExpanded(false);
    setActiveMenu("healthcare");
  };

  const toggleCourseMenu = () => {
    setIsCourseExpanded(!isCourseExpanded);
    setIsHealthCareExpanded(false);
    setActiveMenu("trainingcourse");
  };

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    setIsHealthCareExpanded(false);
    setIsCourseExpanded(false);
    navigateToSection(menu);
  };

  const handleSubMenuClick = (menu) => {
    setActiveMenu(menu);
    navigateToSection(menu);
  };

  const isMenuActive = (menu) => {
    return activeMenu === menu;
  };

  const navigateToSection = (menu) => {
    switch (menu) {
      
      case "about":
        router.push(`../admin_TRcourse/admin_insert?username=${username}&password=${password}`);
        break;
      case "Option 4":
        router.push(`./tr_admin_users?username=${username}&password=${password}`);
        break;
      case "Option 5":
        router.push(`./tr_admin_course?username=${username}&password=${password}`);
        break;
        case "Option 2":
        router.push(`../admin_health/hc_admin_users?username=${username}&password=${password}`);
        break;
        case "Option 3":
          router.push(`../admin_health/hc_admin_list?username=${username}&password=${password}`);
          break;
          case "tr insert":
          router.push(`./tr_admin_insert?username=${username}&password=${password}`);
          break;
          case "Option 1":
          router.push(`../admin_health/hc_admin_insert?username=${username}&password=${password}`);
          break;

      // Add more cases for other menu items and corresponding routes
      default:
        break;
    }
  };

  // Add this function to handle the onClick event
  async function handleCourseClick(employeeId) {
    console.log(employeeId);
    // Filter the users array to include only courses that match the employeeId
    const matchingCourses = users.filter(
      (course) => course.user_id === employeeId
    );

    if (matchingCourses.length > 0) {
      Swal.fire({
        title: "คอร์สที่เลือก :",
        html: `<ul>${matchingCourses
          .map(
            (course) =>
              `<li>${course.course} <b>วันที่ : </b>${course.date} <b>เวลา : </b> ${course.time_selected}</li> <br>`
          )
          .join("")}</ul>`,
        icon: "info",
      });
    } else {
      // Handle case when no matching courses are found
      Swal.fire({
        title: "คอร์สที่เลือก :",
        text: "No courses found for this employee.",
        icon: "info",
      });
    }
  }

  const uniqueUserIds = new Set(); //For store user_id to check not to duplicate it

  return (
    <div className={`${bai.className} bg-slate-100 flex h-screen `}>
      <div className="w-58 bg-gray-800 rounded-3xl p-3 m-2 h-full overflow-y-auto">
        <div className="p-4 text-center">
          <Image
            src={DensoLogo}
            alt="Denso logo"
            width={150}
            className="mx-auto mb-2"
          />
          <h1 className="text-white text-xl font-bold italic">
            Admin Dashboard
          </h1>
        </div>

        <nav className="text-gray-300 flex-1 drop-shadow-lg">
          <ul className="space-y-2 py-4 mx-2">
            <li>
              <a
                href="#"
                className={`flex items-center px-4 py-3 ${
                  isMenuActive("healthcare")
                    ? "text-white border-b-2 border-blue-500 bg-blue-500 rounded-3xl"
                    : "text-gray-400 hover:text-white"
                }`}
                onClick={toggleHealthCareMenu}
              >
                <svg
                  className="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
                Health Care
              </a>
              {isHealthCareExpanded && (
                <ul className="space-y-2 ml-6">
                  <li>
                    <a
                      href="#"
                      className={`flex items-center px-4 py-3 ${
                        isMenuActive("Option 1")
                          ? "text-white border-b-2 border-blue-500 bg-blue-500 rounded-3xl"
                          : "text-gray-400 hover:text-white"
                      }`}
                      onClick={() => handleSubMenuClick("Option 1")}
                    >
                      <svg
                        className="h-6 w-6 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        ></path>
                      </svg>
                      <span className="">ใส่ข้อมูล</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className={`flex items-center px-4 py-3 ${
                        isMenuActive("Option 2")
                          ? "text-white border-b-2 border-blue-500 bg-blue-500 rounded-3xl"
                          : "text-gray-400 hover:text-white"
                      }`}
                      onClick={() => handleSubMenuClick("Option 2")}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                      </svg>

                      <span className="ml-2">ข้อมูลผู้ใช้งาน</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className={`flex items-center px-4 py-3 ${
                        isMenuActive("Option 3")
                          ? "text-white border-b-2 border-blue-500 bg-blue-500 rounded-3xl"
                          : "text-gray-400 hover:text-white"
                      }`}
                      onClick={() => handleSubMenuClick("Option 3")}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                      </svg>

                      <span className="ml-2">ตารางแพทย์</span>
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a
                href="#"
                className={`flex items-center px-4 py-3 ${
                  isMenuActive("trainingcourse")
                    ? "text-white border-b-2 border-blue-500 bg-blue-500 rounded-3xl"
                    : "text-gray-400 hover:text-white"
                }`}
                onClick={toggleCourseMenu}
              >
                <svg
                  className="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
                Training Course
              </a>
              {isCourseExpanded && (
                <ul className="space-y-2 ml-6">
                  <li>
                    <a
                      href="#"
                      className={`flex items-center px-4 py-3 ${
                        isMenuActive("tr insert")
                          ? "text-white border-b-2 border-blue-500 bg-blue-500 rounded-3xl"
                          : "text-gray-400 hover:text-white"
                      }`}
                      onClick={() => handleSubMenuClick("tr insert")}
                    >
                      <svg
                        className="h-6 w-6 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        ></path>
                      </svg>
                      <span className="">ใส่ข้อมูล</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className={`flex items-center px-4 py-3 ${
                        isMenuActive("Option 4")
                          ? "text-white border-b-2 border-blue-500 bg-blue-500 rounded-3xl"
                          : "text-gray-400 hover:text-white"
                      }`}
                      onClick={() => handleSubMenuClick("Option 4")}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                      </svg>
                      <span className="ml-2">ข้อมูลผู้ใช้งาน</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className={`flex items-center px-4 py-3 ${
                        isMenuActive("Option 5")
                          ? "text-white border-b-2 border-blue-500 bg-blue-500 rounded-3xl"
                          : "text-gray-400 hover:text-white"
                      }`}
                      onClick={() => handleSubMenuClick("Option 5")}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                      </svg>
                      <span className="ml-2">ตารางอบรม</span>
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a
                href="#"
                className={`flex items-center px-4 py-3 ${
                  isMenuActive("about")
                    ? "text-white border-b-2 border-blue-500 bg-blue-500 rounded-3xl"
                    : "text-gray-400 hover:text-white"
                }`}
                onClick={() => handleMenuClick("about")}
              >
                <svg
                  className="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  ></path>
                </svg>
                TBA
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex-1 w-min drop-shadow-lg">
        <div className="rounded-3xl m-2 bg-slate-300 p-3 h-full overflow-y-auto">
          <h1 className="font-extrabold text-3xl p-3 ">
            ข้อมูลผู้ใช้งานคอร์สอบรม
          </h1>
          <div className="border-b border-gray-800 mb-4"></div>
          <div className="text-center items-center">
            <div className="grid grid-cols-7 gap-3 mx-10 text-center font-bold">
              <div>รหัสพนักงาน</div>
              <div>ชื่อ - นามสกุล</div>
              <div>Company</div>
              <div>Plant</div>
              <div>Division</div>
              <div>Department</div>
            </div>

            {users.map((user) => {
              // Check if the user_id is already in the set
              if (!uniqueUserIds.has(user.user_id)) {
                // If it's not in the set, add it and render the user information
                uniqueUserIds.add(user.user_id);

                return (
                  <div
                    className="grid grid-cols-7 gap-3 mx-10 my-5"
                    key={user.id}
                  >
                    <div>
                      <strong>{user.user_id.toUpperCase()}</strong>
                    </div>
                    <div>{user.name}</div>
                    <div>{user.company}</div>
                    <div>{user.userFromPlant}</div>
                    <div>
                      <div className="whitespace-nowrap overflow-ellipsis">
                        {user.division}
                      </div>
                    </div>
                    <div>{user.department}</div>
                    <button
                      className="border border-orange-500 rounded-3xl bg-orange-500 text-white font-semibold"
                      onClick={() => handleCourseClick(user.user_id)}
                    >
                      ดูคอร์สที่เลือก
                    </button>
                  </div>
                );
              } else {
                // If the user_id is a duplicate, you can decide how to handle it.
                // For example, you can skip rendering or show a message.
                return null; // Skip rendering for duplicate user_ids
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
