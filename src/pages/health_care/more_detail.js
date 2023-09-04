import { Analytics } from "@vercel/analytics/react";
import { Bai_Jamjuree } from "next/font/google";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Link from "next/link";
import Swal from "sweetalert2";
import health from "../api/health/health_api";

const bai_jamjuree = Bai_Jamjuree({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export default function appointment() {
  const router = useRouter();
  const { firstName, employeeId, date, time, healthID,doctor_type,plant } = router.query;
  const [company, setCompany] = useState("");
  const [relation, setRelation] = useState("");
  const [telphoneNum, setTelephoneNum] = useState("");
  const [symptom, setSymptom] = useState("");
  const [user, setUser] = useState([]);
  const [parent, setParent] = useState([]);
  const [name, setName] = useState("");

  console.log(employeeId);
  const confirmHandler = async () => {
    // Check if any of the fields are empty
    if (
      employeeId.trim() === "" ||
      relation.trim() === "" ||
      company.trim() === "" ||
      telphoneNum.trim() === "" ||
      symptom.trim() === ""
    ) {
      alert("กรุณากรอกข้อมูล");
      return; // Don't proceed if any field is empty
    }

    Swal.fire({
      title: `${doctor_type}`,
      html: `</b><br>ชื่อ : <b>${name}</b><br>วันที่ : <b>${new Date(date).toLocaleDateString(
        "th-TH",
        {
          year: "numeric",
          month: "long",
          day: "numeric",
        }
      )}</b><br>เวลา : <b>${time}</b><br>สถานที่ : <b>${
        plant
      }</b>`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#16a34a",
      cancelButtonColor: "#D43732",
      confirmButtonText: "ยืนยัน",
      cancelButtonText: "ยกเลิก",
    }).then(async (result) => {
      if (result.isConfirmed)
      /////// POST Method ///////////
      try {
        const response = await fetch("/api/health/health_api", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            health_id: healthID,
            user_id: employeeId,
            name: name,
            doctor_type: doctor_type,
            phone_num: telphoneNum,
            time_selected: time,
            date_selected: date,
            plant: plant,
            checkInTime: "",
            picked_what: doctor_type,
            checkIn: 0,
            more_detail: symptom,
          }),
         
        });

        if (response.ok) {
          const data = await response.json();
        } else {
          console.error("Error:", response.status, response.statusText);
          alert("Error")
        }
      } catch (error) {
        console.error("Error:", error);
       // setMessage("Error occurred while sending data.");
      }
    
     ///////////// PUT Method ////////////
     try {
      const response = await fetch(
        "/api/health_admin/hc_insert_api",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            health_id: healthID,
            whoPickedThis: employeeId,
            alreadyPicked: 1,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        //setMessage(data.message);
        router.push({
          pathname: `./confirmation`,
          query: { firstName, employeeId },
        });
      } else {
        console.error("Error:", response.status, response.statusText);
        //setMessage("Error occurred while sending data.");
        //window.location.reload();
        
      }
    } catch (error) {
      console.error("Error:", error);
     // setMessage("Error occurred while sending data.");
    }
  
  })
    /*Swal.fire({
      title: "สำเร็จ",
      icon: "success",
    }).then(async (result) => {
      if (result.isConfirmed) {
        //////////////////////////////////////////////
        try {
          const response = await fetch("/api/health/health_api", {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              phone_num: telphoneNum,
              health_id: healthID,
              more_detail: symptom,
              company: company,
            }),
          });

          if (response.ok) {
            const data = await response.json();
            //setMessage(data.message);
          } else {
            console.error("Error:", response.status, response.statusText);
            //setMessage('Error occurred while sending data.');
          }
        } catch (error) {
          console.error("Error:", error);
          setMessage("Error occurred while sending data.");
        }
        //////////////////////////////////////
        router.push({
          pathname: `./confirmation`,
          query: { firstName, employeeId },
        });
      }
    });*/
  };



  const relationFetch = async () => {
    try {
      const response = await fetch(
        `/api/parent/parent_by_id?user_id=${employeeId}`,
        {
          method: "GET",
        }
      );

      if (response.ok) {
        const data = await response.json();
        setParent(data);
      } else {
        console.error("Error:", response.status, response.statusText);
        //alert("ผิดพลาด");
        router.push(`/`)
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  useEffect(() => {
    relationFetch();
  }, []);

  console.log(parent);
  return (
    <main className={`${bai_jamjuree.className}`}>
      <div>
        <Analytics />
        <h1 className="text-center text-3xl mt-5 mb-5">ข้อมูลเพิ่มเติม</h1>
      </div>
      <div className="text-center bg-[#ffd0d1] h-auto rounded-3xl">
        <p className="p-2 text-xl">วันที่ต้องการจอง</p>
        <div className="border mx-10 bg-white rounded-xl py-3 text-2xl">
          {new Date(date).toLocaleDateString("th-TH", {
            dateStyle: "long",
          })}{" "}
          เวลา {time} น.
        </div>
        <div className="mt-4 border mx-10 bg-white rounded-xl py-3 text-2xl">
          {employeeId}
        </div>
        <div className="mx-16 my-5 bg-white">
          <Box sx={{}}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                เลือก Company
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={company}
                label="เลือก Company"
                onChange={(e) => setCompany(e.target.value)}
              >
                <MenuItem value={"DNTH-SRG"}>DNTH-SRG</MenuItem>
                <MenuItem value={"DNTH-WGR"}>DNTH-WGR</MenuItem>
                <MenuItem value={"DNTH-BPK"}>DNTH-BPK</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        <div>
          <div>สถานะผู้ติดต่อ</div>
          <div className="mx-16 mt-3 bg-white">
            <Box sx={{}}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  สถานะผู้ติดต่อ
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={relation}
                  label="สถานะผู้ติดต่อ"
                  onChange={(e) => setRelation(e.target.value)}
                >
                  <MenuItem value={"employee"}>พนักงาน</MenuItem>
                  <MenuItem value={"parent"}>บิดา-มารดา</MenuItem>
                  <MenuItem value={"child"}>บุตร</MenuItem>
                  <MenuItem value={"mirried"}>คู่สมรส</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
          <div className="mx-16 mt-3 bg-white">
            <Box sx={{}}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  ชื่อ
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={name}
                  label="ชื่อ"
                  onChange={(e) => setName(e.target.value)}>

                  {parent.map((option, index) => (
                    <MenuItem key={index} value={option.parent_name}>
                      {option.parent_name}
                    </MenuItem>
                  ))}

                </Select>
              </FormControl>
            </Box>
          </div>
          <div className="mt-3 mx-10">
            <input
              className="rounded-xl m-1 border w-full p-3 "
              placeholder="เบอร์ติดต่อ"
              type="text"
              name="tel"
              id="tel"
              required="required"
              onChange={(e) => setTelephoneNum(e.target.value)}
            ></input>
            <textarea
              className="rounded-xl m-1 border w-full p-2"
              placeholder="ระบุอาการเบื้องต้น"
              name="detail"
              id="detail"
              required="required"
              maxLength="50"
              rows="4" // Specify the number of visible lines
              onChange={(e) => setSymptom(e.target.value)}
            ></textarea>
          </div>
        </div>

        <div className="mt-5  text-center mx-16 flex justify-between pb-10">
        <Link href={`./HCcalendar?firstName=${firstName}&employeeId=${employeeId}`}>
        <button
            className="border bg-[#E45A6B] px-10 py-4 text-xl rounded-2xl  text-white font-bold"
          
          >
            กลับ
          </button>
        </Link>

          <button
            className="border bg-[#E45A6B] px-10 py-4 text-xl rounded-2xl  text-white font-bold"
            onClick={() => {
              confirmHandler();
            }}
          >
            ยืนยัน
          </button>

       
        </div>
      </div>
    </main>
  );
}
