import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useRouter } from "next/router";
import Swal from "sweetalert2";

export default function DropdownMenu() {
  const [company, setCompany] = useState("");
  const [division, setDivision] = useState("");
  const [department, setDepartment] = useState("");
  const [plant, setPlant] = useState("");
  const [section, setSection] = useState("");
  const router = useRouter();
  const { firstName, employeeId, checkIn } = router.query;

  const submitHandler = () => {
    if (
      company.trim() === "" ||
      division.trim() === "" ||
      department.trim() === ""
      //plant.trim() === ""
    ) {
      alert("กรุณากรอกข้อมูล");
      return;
    } else {
      router.push(
        `./TRcalendar?firstName=${firstName}&employeeId=${employeeId}&checkIn=${checkIn}&company=${company}&division=${division}&department=${department}&plant=${plant}`
      );
    }
  };

  return (
    <main>
      <div className="mb-28">
        <p className="mr-5  flex justify-end text-sm mt-2">
          ชื่อ :&nbsp; <strong>{firstName}</strong>&nbsp; ID : &nbsp;
          <strong>{employeeId}</strong>
        </p>
        <div className="border-b p-1 mb-2 mx-3"></div>
      </div>

      <div className="mx-20 my-5">
        <Box sx={{}}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">เลือก Company</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={company}
              label="เลือก Company"
              onChange={(e) => setCompany(e.target.value)}
            >
              <MenuItem value={"DNTH"}>DNTH</MenuItem>
              <MenuItem value={"DIAT"}>DIAT</MenuItem>
              <MenuItem value={"DSTH"}>DSTH</MenuItem>
              <MenuItem value={"DELT"}>DELT</MenuItem>
              <MenuItem value={"DIMA"}>DIMA</MenuItem>
              <MenuItem value={"SDM"}>SDM</MenuItem>
              <MenuItem value={"SUD"}>SUD</MenuItem>
              <MenuItem value={"ASTH"}>ASTH</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
      <div className="mx-20 my-5">
        {/* Conditionally render another MenuItem */}
        {company === "DNTH" && (
          <Box sx={{}}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">เลือก Plant</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={plant}
                label="เลือก Plant"
                onChange={(e) => setPlant(e.target.value)}
              >
                <MenuItem value={"SRG"}>SRG</MenuItem>
                <MenuItem value={"WGR"}>WGR</MenuItem>
                <MenuItem value={"BPK"}>BPK</MenuItem>
              </Select>
            </FormControl>
          </Box>
        )}
      </div>

      <div className="mx-20 my-5">
        <Box sx={{}}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">เลือก Section</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={section}
              label="เลือก Section"
              onChange={(e) => setSection(e.target.value)}
            >
              <MenuItem value={"Section"}>AR</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>

      <div className="text-center">
        <div>
          <div></div>
          <input
            className=" px-10 py-3 rounded-xl m-1 border"
            placeholder="Division"
            type="text"
            name="division"
            id="division"
            required="required"
            onChange={(e) => setDivision(e.target.value)}
          ></input>
        </div>
        <div>
          <div></div>
          <input
            className=" px-10 py-3 rounded-xl m-1 border"
            placeholder="Department"
            type="text"
            name="department"
            id="department"
            required="required"
            onChange={(e) => setDepartment(e.target.value)}
          ></input>
        </div>
      </div>

      <div className="text-center mt-5">
        <button
          type="button"
          onClick={submitHandler}
          class="text-white bg-[#D43732] hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 rounded-xl text-xl px-28 py-3 text-center 
                                mr-2 mb-5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 font-bold "
        >
          ยืนยัน
        </button>
      </div>
    </main>
  );
}
