import React from "react";
import styles from "./CheckOutProducts.module.css";
import WestIcon from "@mui/icons-material/West";
import imgProducts from "../../../../assets/img/seafood-1.jpg";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ProductCart from "./ProductCart"
import Select from '@mui/material/Select';
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
            <h3 className={styles.titleH3}>Giỏ Hàng</h3>
            <p className={styles.titleP}>Bạn có ... mặt hàng trong giỏ hàng của tôi</p>
          </div>
          <div className={styles.sort}>
            
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
