import React, { useEffect, useState } from "react";
import styles from "./DetailProductsTwo.module.css";
import Button from "@mui/material/Button";
import products1 from '../../../../assets/img/seafood-1.jpg';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { api } from "../../../../utils/api";
import axios from "axios";
import { getToken } from "../../../../utils/Common";
import {useParams } from 'react-router-dom';
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
  const [content,setContent] = useState('');
  const [isUpdate,setIsUpdate] = useState(false);
  const [idComment,setIdComment] = useState(''); 
  const {idProduct} = useParams();
  const handleChange = (event) => {
    setContent(event.target.value);
    // console.log(event.target.value)
  };
  const handleUpdate = async (comment) => {
    console.log(comment)
    setIsUpdate(true);
    setContent(comment.description)
    setIdComment(comment.id)
  
  }

  async function updateComment() {
    const params = {
      "description": content
  }
    const res = await axios.put(api + `comments/update/${idComment}`, params,{
      headers: { 'Authorization': `Bearer ${getToken()}` },
    });
    if(res?.data.status){
      fecthListComment()
      setContent('')
    }else{
      alert('Cap nhat that bai');
    }
  }
  const handleDelete = async (idComment) => {
    const res = await axios.delete(api + `comments/delete/${idComment}`, {
      headers: { 'Authorization': `Bearer ${getToken()}` },
    });
    // console.log(res)
    if(res?.data.status){
      fecthListComment()
      
    }else{
      alert('Xoa that bai');
    }
  }
  const handleSubmit = (event)=>{
    event.preventDefault();
    setIsUpdate(false);

    isUpdate ? updateComment() : createComment()
    
  }

  async function createComment() {
    const params = {
      "description":content,
      "id_product": idProduct
  }
    const res = await axios.post(api + 'comments/create',params, {
      headers: { 'Authorization': `Bearer ${getToken()}` },
    });
    // console.log(res);
    if(res?.data.status){
      fecthListComment();
      setContent('')
    }else{
      alert('Something');
    }
  }
  
  useEffect(() => {
    fecthListComment();
    // console.log(comment());
  }, []);
 async function fecthListComment() {
    const res = await axios.get(api +`comments/getListByProduct?q=&sortCreateAt=desc&limit=10&page=1&id_product=${idProduct}`, {
      headers: { 'Authorization': `Bearer ${getToken()}` },
    });
    setComments(res.data.data);
  }
  return (
    <div>
      <div className={`${styles.row} row`}>
        <div className={`${styles.col9} col-lg-7`}>
          <div className={styles.container}>
            <form action="" className={styles.action}>
              <div>
                <textarea name="" value={content}  onChange={(e) => handleChange(e)} id="" cols="50" rows="1" placeholder="Nhập nội dung bình luận" style={{padding:'20px',borderRadius:'20px',backgroundColor:'rgba(255,255,255,0.5)'}}></textarea>
              </div>
              <div>
              <Button variant="contained" type="submit" onClick={handleSubmit}  className={styles.button}>
                  {isUpdate ? 'Sua' : 'Them'} binh luan
                </Button>
                {/* <button type="submit" onClick={handleSubmit} style={{padding:'10px',borderRadius:'20px',background:'#ff5722'}}>Thêm bình luận</button> */}
              </div>
            </form>
            <br />
            <hr />
            <br />
           {
            comments?.map((comment,index)=>(
              <div className={`${styles.comment} row`} key={comment.id} >
              <div className="col-lg-3" style={{textAlign: 'center'}}>
                <div className={styles.img}>
                  <img src={products1} alt="" />
                  <p className={styles.name}>{comment.create_at}</p>
                </div>
              </div>
              <div className="col-lg-9">
                <div className={styles.header}>
                  <div className={styles.farouite}><BasicRating/></div>
                  <div className={styles.days}>{comment.create_at}</div>
                </div>
                <div className={styles.col10Content}>
                  <h5 className={styles.col9Title}>Đánh giá chất lượng sản phẩm</h5>
                  <p className={styles.col9Content}>{comment.description}</p>
                </div>
                <div className={styles.footer}>
                <Button variant="contained" className={styles.button} onClick={() => handleUpdate(comment)}>
                  Chinh sua
                </Button>
                <Button onClick={() => handleDelete(comment.id)} variant="contained" className={styles.button}>
                  Xoa
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
