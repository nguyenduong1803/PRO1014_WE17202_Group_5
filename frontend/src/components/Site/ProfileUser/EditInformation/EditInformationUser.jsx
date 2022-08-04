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
function EditInformationUser() {
  const [newUserName, setUserName] = useState("");
  const [newPhone, setPhone] = useState("");
  const [newAddress, setAddress] = useState("");
  const [newEmail, setEmail] = useState("");
  const [newGender, setGender] = useState("");
  const [newDate, setDate] = useState("");

  const handleSubmit = async (e) => {
    const params = {
      ten: newUserName,
      sdt: newPhone,
      dia_chi: newAddress,
      email: newEmail,
      gioi_tinh: newGender,
      ngay_sinh: newDate,
    };
    e.preventDefault();
    console.log(newUserName);
    // try {
    //   const res = await axios.post(api + "user/updateInfo", params, {
    //     headers: { Authorization: `Bearer ${getToken()}` },
    //   });
    //   console.log(res)

    //   alert("Đổi Thông tin  thành công !!!");
    // } catch (err) {
    //   alert(err?.response?.data.msg);
    // }
  };
  return (
    <div className={styles.Box}>
      <div>
        <h2>CHỈNH SỬA THÔNG TIN</h2>

        <form onSubmit={(e) => handleSubmit()} className={styles.form}>
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
            <div>
              <TextField
                id="filled-basic"
                label="Ngày sinh (Date)"
                variant="filled"
                onChange={(e) => setDate(e.target.value)}
              />
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
    </div>
  );
}

export default EditInformationUser;
