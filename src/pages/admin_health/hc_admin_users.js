import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Bai_Jamjuree } from "next/font/google";
import { useRouter } from "next/router";
import DensoLogo from "../images/Denso_logo.png";
import * as XLSX from 'xlsx';
const bai = Bai_Jamjuree({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "700"],
});

export default function TRusers() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isHealthCareExpanded, setIsHealthCareExpanded] = useState(false);
  const [isCourseExpanded, setIsCourseExpanded] = useState(false);
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
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
      //setMessage('Error occurred while fetching data.');
    }
  };
  useEffect(() => {
    fetchUsers();
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
        router.push(`../admin_TRcourse/tr_admin_users?username=${username}&password=${password}`);
        break;
      case "Option 5":
        router.push(`../admin_TRcourse/tr_admin_course?username=${username}&password=${password}`);
        break;
      case "Option 2":
        router.push(`./hc_admin_users?username=${username}&password=${password}`);
        break;
      case "Option 3":
        router.push(`./hc_admin_list?username=${username}&password=${password}`);
        break;
      case "tr insert":
        router.push(`../admin_TRcourse/tr_admin_insert?username=${username}&password=${password}`);
        break;
      case "Option 1":
        router.push(`./hc_admin_insert?username=${username}&password=${password}`);
        break;
      // Add more cases for other menu items and corresponding routes
      default:
        break;
    }
  };

  // Function to export data to Excel
  const exportAllToExcel = () => {
    const workbook = XLSX.utils.book_new();  
    const worksheetData = users
      .filter((user) => user.doctor_type !== '')
      .sort((a, b) => (a.created_at < b.created_at ? 1 : -1))
      .map((user) => [
        
        user.user_id,
        user.name,
        user.doctor_type,
        user.date_selected && !isNaN(new Date(user.date_selected))
          ? new Date(user.date_selected).toLocaleDateString('th-TH', {
              dateStyle: 'long',
            })
          : '',
        user.time_selected,
        user.plant,
        user.checkIn ? 'เช็คอินแล้ว' : 'ยังไม่ได้เช็คอิน',
        user.checkIn ? user.created_at.toString() : '',
      ]);
  
    const worksheet = XLSX.utils.aoa_to_sheet([
      ['Employee ID', 'First Name', 'Type', 'Date', 'Time', 'Plant', 'Check-In Status', 'Check-In Time'],
      ...worksheetData,
    ]);
  
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Users Data');
  
    XLSX.writeFile(workbook, 'users_data.xlsx');
  };


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
           
          </ul>
        </nav>
      </div>

      <div className="flex-1 w-min drop-shadow-lg">
        <div className="rounded-3xl m-2 bg-slate-300 p-3 h-full overflow-y-auto">
        <div className="flex justify-between">
          <h1 className="font-extrabold text-3xl p-3 ">
            ข้อมูลผู้ใช้งานระบบรักษาพยาบาล
          </h1>
         {/* <div><button className="text-green-700  bg-white p-1 px-2 rounded-3xl mr-3"
                  onClick={exportAllToExcel}>Export All</button>
                  
                    </div>*/}
                  </div>
          <div className="border-b border-gray-800 mb-4"></div>
          <div className="text-center items-center">
            <div className="grid grid-cols-6 gap-3 mx-5 text-center font-bold">
              <div>รหัสพนักงาน</div>
              <div>ชื่อ-นามสกุล</div>
              
              <div>ประเภท</div>
              <div>วันที่ - เวลา</div>
              <div>Plant</div>
              <div>สถานะ</div>
            </div>
            {users
              .filter(
                (user) =>
                  user.doctor_type !== "N/A" 
              )
              .sort((a, b) => (a.checkInTime < b.checkInTime ? 1 : -1))
              .map((user) => (
                <div
                  className="grid grid-cols-7 gap-3 mx-5 my-5 "
                  key={user.health_id}
                >
                  <div className="col-span-1"><strong>{user.user_id?.toUpperCase()}</strong></div>
                  <div className="col-span-1">{user.name}</div>
                  
                      
                      <div className="col-span-1">
                        <strong>{user.doctor_type}</strong>
                      </div>
                      <div className="col-span-1">
                        {user.date_selected && !isNaN(new Date(user.date_selected))
                          ? new Date(user.date_selected).toLocaleDateString(
                              "th-TH",
                              {
                                dateStyle: "long",
                              }
                            )
                          : " "}{" "}
                        {user.time_selected}
                      </div>

                      <div className="col-span-1">{user.plant}</div>
                      <div
                        className={`text-center p-1 rounded-xl justify-center flex overflow-hidden text-white ${
                          user.checkIn ? "bg-green-500" : "bg-red-500"
                        }`}
                      >
                        <div className="flex items-center text-center">
                          <div className="text-center">
                            {user.checkIn ? (
                              <>
                                เช็คอินแล้ว{" "}
                                <span className="font-bold">
                                  {/*user.created_at*/}
                                </span>
                              </>
                            ) : (
                              "ยังไม่ได้เช็คอิน"
                            )}
                          </div>
                        </div>
                      </div>
              { /*      <button
                  className="border border-orange-500 rounded-3xl bg-orange-500 text-white font-semibold mx-3 my-3"
                  
                >
                  ดูข้อมูลเพิ่มเติม
                </button> */}
                 
                  
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
