import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import styles from "./EditInformationUser.module.css";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import {Link} from 'react-router-dom'
function IconLabelButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" startIcon={<DeleteIcon /> } className={styles.iconDelete}>
        Clear
      </Button>
      <Button variant="contained" endIcon={<SendIcon />} className={styles.iconUpdate}>
        Update
      </Button>
    </Stack>
  );
}
function EditInformationUser() {
  return (
    <div className={styles.Box}>
      
      <div className={`${styles.row} row`}>
        <h2>CHỈNH SỬA THÔNG TIN</h2>
        <div className={`${styles.col} col-lg-6`}>
          <div>
            <TextField id="filled-basic" label="Họ và tên (username)"  variant="filled" />
          </div>
          <div className={styles.input}>
            <TextField id="filled-basic" label="Số Điện Thoại (numberPhone)" variant="filled" />
          </div>
          <div className={styles.inputs}>
            <TextField id="filled-basic" label="Địa chỉ (Address)" variant="filled" />
          </div>
        </div>
        <div className={`${styles.col} col-lg-6`}>
          <div>
            <TextField id="filled-basic" label="Liên hệ (Email)" variant="filled" />
          </div>
          <div className={styles.input}>
            <TextField id="filled-basic" label="Giới tính (Gender)" variant="filled" />
          </div>
          <div>
            <TextField id="filled-basic" label="Ngày sinh (Date)" variant="filled" />
          </div>
        </div>
        <div className={styles.icon}>
          <IconLabelButtons />
        </div>
        
      </div>
    </div>
  );
}

export default EditInformationUser;
