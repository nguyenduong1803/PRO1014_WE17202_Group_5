import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import styles from "./EditInformationUser.module.css";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { api } from "../../../../redux/SliceReducer/AuthSlice";
import { getToken } from "../../../../utils/Common";
import TastMess from "../../ToastMess/ToastMess";
// import Calendar from '../../Calendar/Calendar'
// import TextField from '@mui/material/TextField';
// import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// // function BasicDatePicker({newDate,setDate}) {

//   return (
//     <LocalizationProvider dateAdapter={AdapterDateFns}>
//             <Stack spacing={3}>
//                 <DesktopDatePicker
//                     label=''
//                     inputFormat="yyyy/MM/dd"
//                     value={newDate}
//                     onChange={newDate=>setDate(newDate)}
//                     renderInput={(params) => <TextField {...params} />}
//                 />
//             </Stack>
//         </LocalizationProvider>
//   );
// }
function EditInformationUser() {
  const [newUserName, setUserName] = useState("");
  const [newPhone, setPhone] = useState("");
  const [newAddress, setAddress] = useState("");
  const [newEmail, setEmail] = useState("");
  const [newGender, setGender] = useState("");
  const [newDate, setDate] = useState("");
  const [file, setFile] = useState("");
  const handleSubmit = async (e) => {
    const params = {
      ten: newUserName,
      sdt: newPhone,
      dia_chi: newAddress,
      email: newEmail,
      gioi_tinh: newGender,
      ngay_sinh: newDate,
      file: file,
    };
    e.preventDefault();
    console.log(newUserName);
    // const ngaySinh = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()}`
    const formData = new FormData();
    formData.append("ten", newUserName);
    formData.append("sdt", newPhone);
    formData.append("dia_chi", newAddress);
    formData.append("email", newEmail);
    formData.append("gioi_tinh", newGender);
    formData.append("ngay_sinh", newDate);
    formData.append("file", file);
    console.log(params);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    try {
      await axios
        .post(api + "user/updateInfo", params, {
          headers: {
            Authorization: `Bearer ${getToken()}`,
            "content-type": "multipart/form-data",
          },
        })
        .then(function (response) {
          SetState(true);
          console.log(response);
        })
        .catch(function (err) {
          console.log(err);
        });

      // alert("Đổi Thông tin  thành công !!!");
    } catch (err) {
      // alert(err?.response?.data.msg);
    }
  };
  const [state, SetState] = useState(false);
  function handlDate(e) {
    setDate(e.target.value);
    console.log(e);
    console.log(e.target.value);
  }
  return (
    <div className={styles.Box}>
      <div>
        <h2>CHỈNH SỬA THÔNG TIN</h2>

        <form onSubmit={(e) => handleSubmit(e)} className={styles.form}>
          <div className={`${styles.row} row`}>
            <div className={`${styles.col} col-lg-6`}>
              <div>
                <TextField
                  id="filled-basic"
                  label="Họ và tên (username)"
                  variant="filled"
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div className={styles.input}>
                <TextField
                  id="filled-basic"
                  label="Số Điện Thoại (numberPhone)"
                  variant="filled"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className={styles.inputs}>
                <TextField
                  id="filled-basic"
                  label="Địa chỉ (Address)"
                  variant="filled"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </div>
            <div className={`${styles.col} col-lg-6`}>
              <div>
                <TextField
                  id="filled-basic"
                  label="Liên hệ (Email)"
                  variant="filled"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className={styles.input}>
                <TextField
                  id="filled-basic"
                  label="Giới tính (Gender)"
                  variant="filled"
                  onChange={(e) => setGender(e.target.value)}
                />
              </div>

              <input type="file" onChange={(e) => setFile(e.target.files[0])} />
              <div>
                <TextField
                  id="filled-basic"
                  label="Ngày sinh (Date)"
                  variant="filled"
                  onChange={(e) => handlDate(e)}
                />
                {/* <Calendar label="Ngày sinh" value={newDate} setInput={setDate} inputType={"newDate"} /> */}
                {/* <BasicDatePicker 
              setDate={setDate}
              newDate={newDate}
              /> */}
              </div>
            </div>
          </div>
          <div className="row">
            <div className={styles.icon}>
              <Stack direction="row" spacing={2}>
                <Button
                  variant="contained"
                  startIcon={<DeleteIcon />}
                  className={styles.iconDelete}
                >
                  Clear
                </Button>
                <Button
                  variant="contained"
                  endIcon={<SendIcon />}
                  className={styles.iconUpdate}
                  type="submit"
                >
                  Update
                </Button>
              </Stack>
            </div>
          </div>
        </form>
      </div>
      <TastMess
        setState={SetState}
        state={state}
        notify={"Đổi thông tin thành công !!!"}
      />
    </div>
  );
}

export default EditInformationUser;
