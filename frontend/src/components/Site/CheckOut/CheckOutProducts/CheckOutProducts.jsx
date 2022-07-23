import React from "react";
import styles from "./CheckOutProducts.module.css";
import WestIcon from "@mui/icons-material/West";
import Quantity from "../../../../pages/Site/ShopDetails/Quantity";
import imgProducts from "../../../../assets/img/seafood-1.jpg";
import DeleteIcon from "@mui/icons-material/Delete";

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

import Select, { SelectChangeEvent } from '@mui/material/Select';
const productsCart = [
  {
    img: imgProducts,
    name: "One Plus 7T Pro",
    content: "256 Go,Nebula Blue",
    price: "$800.00",
  },
  {
    img: imgProducts,
    name: "One Plus 7T Pro",
    content: "256 Go,Nebula Blue",
    price: "$800.00",
  },
  {
    img: imgProducts,
    name: "One Plus 7T Pro",
    content: "256 Go,Nebula Blue",
    price: "$800.00",
  },
];



function CheckOutProducts() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h4>
          <WestIcon /> Tiếp tục mua hàng
        </h4>
      </div>
      <div className={styles.content}>
        <div className={styles.contentHeader}>
          <div className={styles.title}>
            <h3 className={styles.titleH3}>Shopping Cart</h3>
            <p className={styles.titleP}>You have 4 items in your my cart</p>
          </div>
          <div className={styles.sort}>
            <p>
          <FormControl variant="standard" sx={{ m: 1, minWidth:100}}>
        <InputLabel id="demo-simple-select-standard-label">Sort by</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={0}
          onChange={0}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
</p>
          </div>
        </div>
        {productsCart.map((list, index) => {
          return (
            <div className={styles.contentMain}>
              <div className={styles.info}>
                <div className={styles.img}>
                  <img src={list.img} alt="" />
                </div>
                <div className={styles.name}>
                  <h4 className={styles.nameProducts}>{list.name}</h4>
                  <p className={styles.contentProducts}>{list.content}</p>
                </div>
              </div>
              <div className={styles.detail}>
                <div className={styles.quantity}>
                  <Quantity />
                </div>
                <div className={styles.price}>{list.price}</div>
                <div className={styles.icon}>
                  <DeleteIcon />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CheckOutProducts;
