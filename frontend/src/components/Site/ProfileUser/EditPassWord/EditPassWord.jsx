import React from "react";
import styles from "./EditPassWord.module.css";
import CheckIcon from "@mui/icons-material/Check";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useState } from "react";
import axios from "axios";
import { api } from "../../../../redux/SliceReducer/AuthSlice";
import { getToken } from "../../../../utils/Common";

function EditPassWord() {
  const [newPassPass, setNewPass] = useState("");
  const [oldPass, setOldPass] = useState("");
  const [confirmNewPass, setConfirmNewPass] = useState("");

  const handleSubmit = async (e) => {
    const params = {
      mat_khau_cu: oldPass,
      mat_khau: newPassPass,
      mat_khau_confirmation: confirmNewPass,
    };
    e.preventDefault();

    try {
      const res = await axios.post(api + "auth/updateChangePassword", params, {
        headers: { Authorization: `Bearer ${getToken()}` },
      });

      alert("Đổi mật khẩu thành công !!!");
    } catch (err) {
      alert(err?.response?.data.msg);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>THAY ĐỔI MẬT KHẨU</h2>
        <p>PassWord must contain :</p>
        <ul className={styles.lists}>
          <li className={styles.li}>
            <CheckIcon /> Mật khẩu phải trên 6 kí tự
          </li>
          <li className={styles.li}>
            <CheckIcon /> Mật khẩu phải kết hợp cả chữ và số
          </li>
          <li className={styles.li}>
            <CheckIcon /> Phải có cả kí tự in hoa
          </li>
          <li className={styles.li}>
            <CheckIcon /> Phải có cả số tự nhiên
          </li>
        </ul>
      </div>
      <div className={styles.input}>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="row g-3"
          style={{ display: "initial" }}
        >
          <div className="col-auto col-lg-4" style={{ width: "400px" }}>
            <input
              type="text"
              className="form-control"
              id="inputPassword2"
              placeholder="Mật khẩu cũ"
              onChange={(e) => setOldPass(e.target.value)}
            />
          </div>
          <div className="col-auto col-lg-4" style={{ width: "400px" }}>
            <input
              type="text"
              className="form-control"
              id="inputPassword2"
              placeholder="Mật khẩu mới"
              onChange={(e) => setNewPass(e.target.value)}
            />
          </div>
          <div className="col-auto col-lg-4" style={{ width: "400px" }}>
            <input
              type="text"
              className="form-control"
              id="inputPassword2"
              placeholder="Xác nhận mật khẩu mới"
              onChange={(e) => setConfirmNewPass(e.target.value)}
            />
          </div>
          <Stack direction="row" spacing={2}>
            <Button
              type="submit"
              variant="contained"
              className={styles.buttonIcon}
            >
              Thay Đổi
            </Button>
          </Stack>
        </form>
      </div>
    </div>
  );
}

export default EditPassWord;
