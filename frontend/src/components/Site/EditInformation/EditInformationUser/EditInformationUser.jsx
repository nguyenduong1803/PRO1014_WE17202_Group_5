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
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Clear
      </Button>
      <Button variant="contained" endIcon={<SendIcon />}>
        Update
      </Button>
    </Stack>
  );
}
function EditInformationUser() {
  return (
    <div className={styles.Box}>
      <h2>EDIT INFORMATION FOR ME</h2>
      <div className={`${styles.row} row`}>
        <div className={`${styles.col} col-lg-6`}>
          <div>
            <TextField id="filled-basic" label="Name"  variant="filled" />
          </div>
          <div className={styles.input}>
            <TextField id="filled-basic" label="Phone" variant="filled" />
          </div>
          <div className={styles.inputs}>
            <TextField id="filled-basic" label="Email" variant="filled" />
          </div>
        </div>
        <div className={`${styles.col} col-lg-6`}>
          <div>
            <TextField id="filled-basic" label="Address" variant="filled" />
          </div>
          <div className={styles.input}>
            <TextField id="filled-basic" label="Gender" variant="filled" />
          </div>
          <div>
            <TextField id="filled-basic" label="Date" variant="filled" />
          </div>
        </div>
        <div className={styles.icon}>
          <IconLabelButtons /><div className={styles.link}>
          <Link to='/profile'>Thoát</Link>
        </div>
        </div>
        
      </div>
    </div>
  );
}

export default EditInformationUser;
