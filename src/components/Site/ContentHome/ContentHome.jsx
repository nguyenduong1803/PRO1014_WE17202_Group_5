import React from "react";
import Banner from "./Banner/Banner";
import Categories from "./Categories/Categories";
import Product from "./Product/Product";
import Trending from './TrendingOrder/TrendingOrder';
import product1 from "../../../../src/assets/img/seafood-1.jpg";
import product2 from "../../../../src/assets/img/seafood-2.png";
import product3 from "../../../../src/assets/img/seafood-3.jpg";
import product4 from "../../../../src/assets/img/seafood-10.jpg";
import product5 from "../../../../src/assets/img/seafood-14.webp";
import styles from '../ContentHome/TrendingOrder/TrendingOrder.module.css';
// import product6 from "../../../../src/assets/img/seafood-10.jpg";
// import product7 from "../../../../src/assets/img/seafood-10.jpg";
// import product8 from "../../../../src/assets/img/seafood-10.jpg";


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
    price:19999,
  },
];
const trendingOrder =[
  {
    top:'Top of the day',
    img:product5,
    title:'Tôm Hùm',
    persons:'4 persons',
    price:120000
  },
  {
    top:'Top of the week',
    img:product5,
    title:'Tôm Hùm',
    persons:'4 persons',
    price:120000
  },
  {
    top:'Top of the month',
    img:product5,
    title:'Tôm Hùm',
    persons:'4 persons',
    price:120000
  },
  {
    top:'Top of the week',
    img:product5,
    title:'Tôm Hùm',
    persons:'4 persons',
    price:120000
  }
];
function ContentHome() {
  return (
    <div>
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
        <div className={styles.title}>Categories</div>
        <div className={styles.viewAll}>ViewAll</div>
      </div>
          <div className="row">
              {
                trendingOrder.map((trending,index)=>{
                  return (
                    <Trending
                      key ={index}
                      top = {trending.top}
                      img = {trending.img}
                      title = {trending.title}
                      price = {trending.price}
                      persons = {trending.persons}
                    />
                  )
                })
              }
          </div>
          
        </div>
        <div className="col-lg-4"></div>
      </div>
    </div>
  );
}

export default ContentHome;
