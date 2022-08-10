import React, { useEffect, useState } from "react";
import styles from "./DetailProductsTwo.module.css";
import Button from "@mui/material/Button";
import products1 from '../../../../assets/img/seafood-1.jpg';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { api } from "../../../../utils/api";
import axios from "axios";
import { getToken } from "../../../../utils/Common";
function BasicRating() {
  const [value, setValue] = React.useState(5);
  


  return (
    <>
    <Box
      component="span"
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />

    </Box>
    </>
  );
}
const detail = [
  {
    price: "$15",
    ProductCategory: "Veg",
    Availiblity: 1,
    DeliveryCharges: "Free",
    Identification: "2543",
  },
  
];
// const review =[
//   {
//     avt:products1,
//     name:'Jone Cooper',
//     days:'1 Day Ago',
//     title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//     content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui egestas pellentesque tortor suspendisse eget suscipit cras viverra. Leo eget vitae amet, facilisis bibendum. Egestas ac hac amet, nam ultricies nec.',
//   },
//   {
//     avt:products1,
//     name:'Jone Cooper',
//     days:'1 Day Ago',
//     title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//     content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui egestas pellentesque tortor suspendisse eget suscipit cras viverra. Leo eget vitae amet, facilisis bibendum. Egestas ac hac amet, nam ultricies nec.',
//   },
//   {
//     avt:products1,
//     name:'Jone Cooper',
//     days:'1 Day Ago',
//     title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//     content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui egestas pellentesque tortor suspendisse eget suscipit cras viverra. Leo eget vitae amet, facilisis bibendum. Egestas ac hac amet, nam ultricies nec.',
//   }
// ]
function DetailProductsTwo() {
  const [comments, setComments] = useState([]);
  const handleChange = (event, newValue) => {
    setComments(newValue);
  };

  useEffect(() => {
    async function comment() {
      const res = await axios.get(api +'comments/getListByProduct?q=&sortCreateAt=desc&limit=10&page=1&id_product=4', {
        headers: { 'Authorization': `Bearer ${getToken()}` },
      });
      setComments(res.data.data);
      // console.log(res.data.data)
    }
    comment();
    console.log(comment());
  }, []);
  return (
    <div>
      <div className={`${styles.row} row`}>
        <div className={`${styles.col9} col-lg-7`}>
          <div className={styles.container}>
            <form action="" className={styles.action}>
              <div>
                <textarea name="" id="" cols="50" rows="2" placeholder="Nhập nội dung bình luận" style={{padding:'20px',borderRadius:'20px',backgroundColor:'rgba(255,255,255,0.5)'}}></textarea>
              </div>
              <div>
                <button type="submit" style={{padding:'10px',borderRadius:'20px',background:'#ff5722'}}>Thêm bình luận</button>
              </div>
            </form>
            <br />
            <hr />
            <br />
           {
            comments.map((comments,index)=>(
              <div className={`${styles.comment} row`}>
              <div className="col-lg-3" style={{textAlign: 'center'}}>
                <div className={styles.img}>
                  <img src={products1} alt="" />
                  <p className={styles.name}>{comments.create_at}</p>
                </div>
              </div>
              <div className="col-lg-9">
                <div className={styles.header}>
                  <div className={styles.farouite}><BasicRating/></div>
                  <div className={styles.days}>{comments.create_at}</div>
                </div>
                <div className={styles.col10Content}>
                  <h5 className={styles.col9Title}>Đánh giá chất lượng sản phẩm</h5>
                  <p className={styles.col9Content}>{comments.description}</p>
                </div>
                <div className={styles.footer}>
                <Button variant="contained" className={styles.button}>
                  Reply
                </Button><Button variant="contained" className={styles.button}>
                  Report
                </Button>
                </div>
              </div>

            </div>
             ))
           } 
          </div>
        </div>
        <div className={`${styles.col3} col-lg-5`}>
          <div className={styles.container}>
            <div className={styles.title}>
              <h4>Product Info</h4>
            </div>
            <div className={styles.content}>
              <ul style={{ width: "100%" }}>
                {detail.map((ele, index) => (
                  <li key={index}>
                    <div className={styles.detailContent}>
                      <div>Prices</div>
                      <div> {ele.price}</div>
                    </div>
                    <div className={styles.line}></div>

                    <div className={styles.detailContent}>
                      <div>Product Category</div>
                      <div> {ele.ProductCategory}</div>
                    </div>
                    <div className={styles.line}></div>

                    <div className={styles.detailContent}>
                      <div>Availiblity</div>
                      <div> {ele.Availiblity}</div>
                    </div>
                    <div className={styles.line}></div>

                    <div className={styles.detailContent}>
                      <div>Delivery Charges</div>
                      <div> {ele.DeliveryCharges}</div>
                    </div>
                    <div className={styles.line}></div>

                    <div className={styles.detailContent}>
                      <div>SKU Identification</div>
                      <div> {ele.Identification}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.buttonedit}>
              <div className={styles.button}>
                <Button variant="contained" className={styles.button}>
                 Edit
                </Button>
              </div>
              <div className={styles.button}>
                <Button variant="contained" className={styles.button}>
                  Delete
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailProductsTwo;
