import React from "react";
import styles from "./EditPassWord.module.css";
import CheckIcon from '@mui/icons-material/Check';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
function ColorButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" color="success">
       Thay Đổi
      </Button>
    </Stack>
  );
}
function EditPassWord() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>Change PassWord</h2>
        <p>PassWord must contain :</p>
        <ul className={styles.list}>
          <li><CheckIcon/> Mật khẩu phải trên 6 kí tự</li>
          <li><CheckIcon/> Mật khẩu phải kết hợp cả chữ và số</li>
          <li><CheckIcon/> Phải có cả kí tự in hoa</li>
          <li><CheckIcon/> Phải có cả số tự nhiên</li>
        </ul>
      </div>
      <div className={styles.input}>
        <form class="row g-3" style={{ display: "initial" }}>
          <div class="col-auto col-lg-4" style={{ width: "400px" }}>
          
            <input
              type="text"
              class="form-control"
              id="inputPassword2"
              placeholder="Mật khẩu cũ"
            />
          </div>
          <div class="col-auto col-lg-4" style={{ width: "400px" }}>
          
            <input
              type="text"
              class="form-control"
              id="inputPassword2"
              placeholder="Mật khẩu mới"
            />
          </div>
          <div class="col-auto col-lg-4" style={{ width: "400px" }}>
            
            <input
              type="text"
              class="form-control"
              id="inputPassword2"
              placeholder="Nhập lại mật khẩu mới"
            />
          </div>
          <div>
            <ColorButtons/>
          </div>
          <div classname={styles.button}>
            <Link to='/profile'>Thoát</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditPassWord;
