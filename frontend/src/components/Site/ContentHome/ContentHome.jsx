import React from "react";
import Banner from "./Banner/Banner";
import Categories from "./Categories/Categories";
import Product from "./Product/Product";
import Trending from "./TrendingOrder/TrendingOrder";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ContentRight from "./ContentHomeRight/SaleFood/SaleFood";
import product1 from "../../../../src/assets/img/seafood-1.jpg";
import product2 from "../../../../src/assets/img/seafood-2.png";
import product3 from "../../../../src/assets/img/seafood-3.jpg";
import product4 from "../../../../src/assets/img/seafood-10.jpg";
import product5 from "../../../../src/assets/img/seafood-14.webp";
import styles from "../ContentHome/TrendingOrder/TrendingOrder.module.css";
import MyCart from "../../Site/ContentHome/ContentHomeRight/MyCart/MyCart";
// import product6 from "../../../../src/assets/img/seafood-10.jpg";
// import product7 from "../../../../src/assets/img/seafood-10.jpg";
// import product8 from "../../../../src/assets/img/seafood-10.jpg";
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
    img: product2,
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
      <div className="row">
        <div className="col-lg-8">
          <Banner />
          <Categories />
          <div className="row">
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
              ViewAll <ChevronRightIcon />
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
          <div className="MyCart">
            <div style={{padding: '20px 0',fontSize: '20px',borderBottom: '3px solid black',width:'100%'}}>
              <h3>Top Farouites</h3>
            </div>
            <div className="col-lg-4">
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
            <div style={{width:'300px',marginTop:'20px',borderRadius:'20px'}} >
              <h3>Quảng Cáo</h3> <br />
              <img src={product3} alt="" style={{borderRadius:'20px'}} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentHome;