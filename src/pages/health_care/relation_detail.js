import { Analytics } from "@vercel/analytics/react";
import { Bai_Jamjuree, Telex } from "next/font/google";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Link from "next/link";
import Swal from "sweetalert2";

import { getDatabase, ref, remove, onValue, off,update } from "firebase/database";
import StartFireBase from "../../firebase/firebase_conf";

const bai_jamjuree = Bai_Jamjuree({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export default function relation_detail() {
  const router = useRouter();
  const { firstName, employeeId, date, timeStart, doctor ,healthID} = router.query;
  const [relation, setRelation] = useState("");
  
  const [name, setName] = useState("");
  const [tel,setTel] = useState("");
  const [symptom,setSymptom] = useState("");
  const [addRelation, setAddRelation] = useState("true");

  StartFireBase();

  useEffect(() => {


  }, []);

  const alertHandler = async () => {
    // Check if any of the fields are empty
    if (
        name.trim() === "" ||
        tel.trim() === "" ||
        symptom.trim() === "" ||
      relation.trim() === ""
    ) {
      alert("กรุณากรอกข้อมูล");
      return; // Don't proceed if any field is empty
    }
  
    Swal.fire({
      title: 'สำเร็จ',
      icon: 'success'
    }).then(async(result) => {
      if (result.isConfirmed) {
        ////////////// PUT Method ///////////////
        try {
          const response = await fetch('/api/relation/relation_api', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ relation_type: relation,
              name: name,
              phone_num:tel,
              more_detail:symptom,
              health_id:healthID
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
          //setMessage('Error occurred while sending data.');
        }
  
        router.push({
          pathname: `./confirmation`,
          query: { firstName, employeeId },
        });
      }
    });
  };

  return (
    <main className={`${bai_jamjuree.className}`}>
      <div>
        <Analytics />
        <h1 className="text-center text-3xl mt-10 mb-5">ข้อมูลเพิ่มเติม</h1>
      </div>
      <div className="text-center bg-[#ffd0d1] h-auto rounded-3xl">
        <p className="p-2 text-xl">วันที่ต้องการจอง</p>
        <div className="border mx-10 bg-white rounded-xl py-3 text-2xl">
          {new Date(date).toLocaleDateString("th-TH", {
            dateStyle: "long",
          })}{" "}
          เวลา {timeStart} น.
        </div>
        <div className="mt-4 border mx-10 bg-white rounded-xl py-3 text-2xl">
          {doctor}
        </div>
        <div>
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
                  <MenuItem value={"พนักงาน"}>พนักงาน</MenuItem>
                  <MenuItem value={"บิดา-มารดา"}>บิดา-มารดา</MenuItem>
                  <MenuItem value={"บุตร"}>บุตร</MenuItem>
                  <MenuItem value={"คู่สมรส"}>คู่สมรส</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
          <div className="mt-3 mx-10">
          <input
              className="rounded-xl m-1 border w-full p-3 "
              placeholder="ชื่อ - นามสกุล"
              type="text"
              name="tel"
              id="tel"
              required="required"
              onChange={(e) => setName(e.target.value)}
            ></input>
            <input
              className="rounded-xl m-1 border w-full p-3 "
              placeholder="เบอร์ติดต่อ"
              type="text"
              name="tel"
              id="tel"
              required="required"
              onChange={(e) => setTel(e.target.value)}
            ></input>
            <textarea
              className="rounded-xl m-1 border w-full p-2"
              placeholder="อาการเบื้องต้น"
              name="detail"
              id="detail"
              required="required"
              maxLength="50"
              rows="4" // Specify the number of visible lines
              onChange={(e) => setSymptom(e.target.value)}
            ></textarea>
          </div>
        </div>

        <div className="mt-5  text-center mx-16   pb-10">
          <button className="border bg-[#E45A6B] px-16 py-4 text-xl rounded-2xl  text-white font-bold"
           onClick={() => {alertHandler()}}>
            ยืนยัน
          </button>
        </div>
      </div>
    </main>
  );
}
