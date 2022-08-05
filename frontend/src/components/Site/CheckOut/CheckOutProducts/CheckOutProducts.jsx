import React from "react";
import styles from "./CheckOutProducts.module.css";
import WestIcon from "@mui/icons-material/West";
import imgProducts from "../../../../assets/img/seafood-1.jpg";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ProductCart from "./ProductCart"
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
            <div>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 100 }}>
                <InputLabel id="demo-simple-select-standard-label">Sort by</InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={0}
                  onChange={() => { }}
                  label="Age"
                  defaultValue=""
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
        </div>
        {productsCart.map((list, index) => {
          return (<ProductCart
            key={index}
            img={list.img}
            name={list.name}
            content={list.content}
            price={list.price}
          />

          );
        })}
      </div>
    </div>
  );
}

export default CheckOutProducts;
