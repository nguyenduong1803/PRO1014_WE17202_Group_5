import React from "react";
import Banner from "./Banner/Banner";
import Categories from "./Categories/Categories";
import Product from "../Product/Product";
import Trending from "./TrendingOrder/TrendingOrder";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ContentRight from "./ContentHomeRight/SaleFood/SaleFood";
import product1 from "../../../../src/assets/img/seafood-1.jpg";
import product3 from "../../../../src/assets/img/seafood-3.jpg";
import product5 from "../../../../src/assets/img/seafood-14.webp";
import styles from "../ContentHome/TrendingOrder/TrendingOrder.module.css";
import MyCart from "../../Site/ContentHome/ContentHomeRight/MyCart/MyCart";
import InformationChef from './InformationChef/BlogSection';
import { useSelector } from "react-redux";
import { selectProducts } from "../../../redux/selector";
// import Slider from './Slider/Slider';

const mycart = [
  {
    img: product1,
    title: "Top 1",
    price: 10,
  }, {
    img: product1,
    title: "Top 2",
    price: 10,
  }, {
    img: product1,
    title: "Top 3",
    price: 10,
  }, {
    img: product1,
    title: "Top 4",
    price: 10,
  },
];
const SaleFood = [
  {
    img: "https://img.freepik.com/premium-photo/lobster-with-spices-dark-background-top-view-free-copy-space_187166-13108.jpg?size=626&ext=jpg&ga=GA1.2.123007111.1654571791",
    title: "50 % OFF",
    content: "Giá đủ của tất cả món ăn !!!",
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
  const products = useSelector(selectProducts);
  return (
    <div style={{ position: "relative", zIndex: "5" }}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-8">
            <Banner />
            <Categories />
            <div className="row" style={{ marginTop: "30px" }}>
              {products && products.map((product, index) => {
                let indexImg=0
                if (index < 4) {
                  if(product.listsImg.length>1){
                    indexImg =product.listsImg.length-1
                  }
            
                  return (
                    <Product
                      key={index}
                      id={product.id}
                      img={product.listsImg[indexImg]}
                      title={product.name}
                      price={product.price}
                    />
                  );
                }

              })}
            </div>
            <div
              className="justify-content-between d-flex align-items-center "
              style={{ padding: "10px 0" }}
            >
              <div className={styles.title} style={{ fontWeight: "600", fontSize: "20px" }}>Đơn hàng thịnh hành</div>
              <div className={styles.viewAll}>
                Tất cả <span className={styles.iconView}><ChevronRightIcon /></span>
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
            <div style={{ marginTop: "66px" }}>
              <div style={{ backgroundColor: 'rgba(255, 255, 255,0.5)', border: '1px solid #fff', padding: '23px', borderRadius: '20px', paddingBottom: '40px' }}>
                <div style={{ padding: '20px 0', fontSize: '20px', borderBottom: '1px solid #8A8480', width: '100%' }}>
                  <h3 style={{ fontWeight: "600", fontSize: "20px" }}>Món ăn yêu thích !!!</h3>
                </div>
                <div >
                  {
                    mycart.map((mycart, index) => {
                      return (
                        <MyCart
                          key={index}
                          img={mycart.img}
                          title={mycart.title}
                          price={mycart.price}
                        />
                      )
                    })
                  }
                </div>
              </div>
              <div style={{ backgroundColor: 'rgba(255, 255, 255,0.5)', border: '1px solid #fff', padding: '23px', borderRadius: '20px', marginTop: '40px', paddingBottom: '40px' }}>
                <div style={{ width: '300px', marginTop: '20px', borderRadius: '20px' }} >
                  <h3>QC</h3> <br />
                  <img src={product3} alt="" style={{ borderRadius: '20px' }} />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="container">
        {/* <Slider/> */}
        {/* <ProfileUser/> */}

      </div>
      <div>
        <InformationChef />
        <div style={{ margin: "24px" }}>
          <h2 style={{ fontWeight: "600", fontSize: "20px" }}>Địa chỉ nhà hàng</h2>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3726.6344298288877!2d106.33150965060732!3d20.927022485985173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31359b098a624bc3%3A0xfa85cfea3353c150!2sNh%C3%A0%20h%C3%A0ng%20Song%20Anh%20Royal!5e0!3m2!1sen!2s!4v1660654929173!5m2!1sen!2s"
            width="100%"
            height="550"
            frameBorder="0"
            style={{ border: "0" }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"></iframe>
        </div>
      </div>

    </div>
  );
}

export default ContentHome;
