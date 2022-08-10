import React, { useEffect, useState } from "react";
import styles from "./DetailProductsOne.module.css";
import products1 from "../../../../assets/img/seafood-1.jpg";
import Button from '@mui/material/Button';
import { api } from "../../../../utils/api";
import axios from "axios";
import { getToken } from "../../../../utils/Common";
const listproductsDetail = [
  {
    img: products1,
    name: "Tôm Càng Xanh",
    content: "Lorem ipsum",
  },
  {
    img: products1,
    name: "Tôm Càng Xanh",
    content: "Lorem ipsum",
  },
  {
    img: products1,
    name: "Tôm Càng Xanh",
    content: "Lorem ipsum",
  },
  
];
function DetailProductsOne(id) {
   const [DetailProducts, setDetails] = useState({});
  useEffect(() => {
    async function Details() {
      const res = await axios.get(api + `product/detail/${id}`, {
        headers: { "Authorization": `Bearer ${getToken()}` },
      });
      setDetails(res.data.user);
    }
    Details();
  }, []);
  return (
    <div className={styles.container} >
      <h4 className={styles.title}>Product Details</h4>
      <div className={`${styles.row} row`}>
        <div className={`${styles.col5} col-lg-5`}>
          <img
            src="https://templates.iqonic.design/aprycot/html/dashboard/dist/assets/images/layouts/dish-detail/01.png"
            alt=""
          />
        </div>
        <div className={`${styles.col5} col-lg-7`}>
          <div className="colums">
            <h5 className={styles.titleContent}>Veg Burger(name)</h5>
            <p className={styles.content}>
              (full_description)
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu erat
              adipiscing convallis libero elit et eros pellentesque. Sapien,
              fringilla eget egestas eget. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Eu erat adipiscing convallis libero
              elit et eros pellentesque. Sapien, fringilla eget egestas eget.
            </p>
          </div>
          <div className="colums">
            <h5 className={styles.titleContent}>Ingredients</h5>
            <div className="contentIng">
              {/* <div className={styles.img}>
            <img src="" alt="" />
            </div>
            <div className={styles.detail}>
              <p>Name</p>
              <p>Content</p>
            </div> */}
              <div
                style={{
                  width: "100%",
                  padding: "10px 0px",
                  display: "flex",
                  textAlign: "center",
                }}
                className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-2 g-lg-3"
              >
                {listproductsDetail.map((ele, index) => (
                  <div key={index} style={{ width: "200px",display:'flex' }} className="col-lg-4">
                    <div className={styles.colImg}>
                      <img src={ele.img} alt="" />
                    </div>
                    <div>
                      <div className={styles.contents}>
                        <p>{ele.name}</p>
                      </div>
                      <div className={styles.contents}>
                        <p>{ele.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Button variant="contained"  className={styles.button}>
        View Of Ingredients
    </Button>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default DetailProductsOne;
