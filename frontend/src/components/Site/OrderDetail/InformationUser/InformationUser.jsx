import React from "react";
import styles from "./InformationUser.module.css";
import Button from "@mui/material/Button";
import PhoneIcon from "@mui/icons-material/Phone";
import AddLocationIcon from "@mui/icons-material/AddLocation";
function InformationUser({ img, name, content, address, contacts }) {
  return (
    <div className="row">
      <div className={styles.member}>
        <div className={styles.info}>
          <img
            src={img}
            alt=""
            style={{ width: "100px", height: "100px", borderRadius: "50%" }}
          />
          <h4>{name}</h4>
          <Button variant="outlined" className={styles.button}>
            Customers
          </Button>
          <p className={styles.contacts}>
            <PhoneIcon /> {contacts}
          </p>
          <p className={styles.contacts}>
            <AddLocationIcon /> {address}
          </p>
        </div>
        <div>
          <h4>Note Order</h4>
          <p className={styles.content}>{content}</p>
        </div>
      </div>
    </div>
  );
}

export default InformationUser;
