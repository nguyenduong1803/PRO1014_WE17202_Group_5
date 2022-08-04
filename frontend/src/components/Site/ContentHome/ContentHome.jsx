import React from "react";
import Banner from "./Banner/Banner";
import Categories from "./Categories/Categories";
import Product from "../Product/Product";
import Trending from "./TrendingOrder/TrendingOrder";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ContentRight from "./ContentHomeRight/SaleFood/SaleFood";
import product1 from "../../../../src/assets/img/seafood-1.jpg";
import product3 from "../../../../src/assets/img/seafood-3.jpg";
import product4 from "../../../../src/assets/img/seafood-10.jpg";
import product5 from "../../../../src/assets/img/seafood-14.webp";
import styles from "../ContentHome/TrendingOrder/TrendingOrder.module.css";
import MyCart from "../../Site/ContentHome/ContentHomeRight/MyCart/MyCart";
import InformationChef from'./InformationChef/BlogSection';
import BlogItem from './InformationChef/BlogItem';

import ProfileUser from '../ProfileUser/ProfileUser';
import Slider from './Slider/Slider';

const mycart = [
  {
    img: product1,
    title: "Top One",
    price: 10,
  },{
    img: product1,
    title: "Top Two",
    price: 10,
  },{
    img: product1,
    title: "Top Three",
    price: 10,
  },{
    img: product1,
    title: "Top For",
    price: 10,
  },
];
const SaleFood = [
  {
    img: product1,
    title: "50 % OFF",
    content: "The full price of burgers !!!",
  },
];
const Products = [
  {
    img: product1,
    title: "Lẩu Cua",
    price: 1200000,
  },
  {
    img: "https://img.freepik.com/free-photo/thai-food-shrimp-spicy-fish-sauce_1150-38077.jpg?t=st=1658235944~exp=1658236544~hmac=53051792149dc74df6cc7d9b3360e2a04cb3300569bba2e865b63c88fc01972c&w=996",
    title: "Lẩu Cua",
    price: 490000,
  },
  {
    img: product3,
    title: "Lẩu Cua",
    price: 159000,
  },
  {
    img: product4,
    title: "Lẩu Cua",
    price: 19999,
  },
];
const trendingOrder = [
  {
    top: "Top of the day",
    img: product5,
    title: "Tôm Hùm",
    persons: "4 persons",
    price: 120000,
  },
  {
    top: "Top of the week",
    img: product5,
    title: "Tôm Hùm",
    persons: "4 persons",
    price: 120000,
  },
  {
    top: "Top of the month",
    img: product5,
    title: "Tôm Hùm",
    persons: "4 persons",
    price: 120000,
  },
  {
    top: "Top of the week",
    img: product5,
    title: "Tôm Hùm",
    persons: "4 persons",
    price: 120000,
  },
];
function ContentHome() {
  return (
    <div style={{position:"relative",zIndex:"5"}}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-8">
            <Banner />
            <Categories />
            <div className="row" style={{marginTop:"30px"}}>
              {Products.map((product, index) => {
                return (
                  <Product
                    key={index}
                    img={product.img}
                    title={product.title}
                    price={product.price}
                  />
                );
              })}
            </div>
            <div
              className="justify-content-between d-flex align-items-center "
              style={{ padding: "10px 0" }}
            >
              <div className={styles.title}>Trending Orders</div>
              <div className={styles.viewAll}>
                ViewAll <span className={styles.iconView}><ChevronRightIcon /></span>
              </div>
            </div>
            <div className="row">
              {trendingOrder.map((trending, index) => {
                return (
                  <Trending
                    key={index}
                    top={trending.top}
                    img={trending.img}
                    title={trending.title}
                    price={trending.price}
                    persons={trending.persons}
                  />
                );
              })}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="">
              {SaleFood.map((salefood, index) => {
                return (
                  <ContentRight
                    key={index}
                    img={salefood.img}
                    title={salefood.title}
                    content={salefood.content}
                  />
                );
              })}
            </div>
            <div style={{marginTop:"66px"}}>
              <div style={{backgroundColor:'rgba(255, 255, 255,0.5)',border:'1px solid #fff',padding:'23px',borderRadius:'20px',paddingBottom:'40px'}}>
              <div style={{padding: '20px 0',fontSize: '20px',borderBottom: '1px solid #8A8480',width:'100%'}}>
                <h3>Top Farouites</h3>
              </div>
              <div >
                {
                  mycart.map((mycart,index)=>{
                    return(
                      <MyCart
                        key = {index}
                        img = {mycart.img}
                        title = {mycart.title}
                        price ={mycart.price}
                      />
                    )
                  })
                }
              </div>
              </div>
              <div style={{backgroundColor:'rgba(255, 255, 255,0.5)',border:'1px solid #fff',padding:'23px',borderRadius:'20px',marginTop:'40px',paddingBottom:'40px'}}>
              <div style={{width:'300px',marginTop:'20px',borderRadius:'20px'}} >
                <h3>Quảng Cáo</h3> <br />
                <img src={product3} alt="" style={{borderRadius:'20px'}} />
              </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      <div className="container">
        <Slider/>
       {/* <ProfileUser/> */}
               
      </div>
      <div>
      <InformationChef/>
      </div>
    </div>
  );
}

export default ContentHome;
