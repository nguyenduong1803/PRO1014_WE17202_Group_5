import React from "react";
import { Link } from "react-router-dom";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import cat1 from "../../../../assets/img/seafood-1.jpg";
import cat2 from "../../../../assets/img/seafood-1.jpg";
import cat3 from "../../../../assets/img/seafood-1.jpg";
import cat4 from "../../../../assets/img/seafood-1.jpg";
import cat5 from "../../../../assets/img/seafood-1.jpg";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import styles from "./Slider.module.css";
const categories = [
  {
    name: "Hoa quả sạch",
    img: cat1,
    to: "/"
  },
  {
    name: "Hoa quả sấy",
    img: cat2,
    to: "/"
  },
  {
    name: "Rau củ quả",
    img: cat3,
    to: "/"
  },
  {
    name: "Nước trái cây",
    img: cat4,
    to: "/"
  },
  {
    name: "Thịt sạch",
    img: cat5,
    to: "/"
  },

]
function Categories() {
  const renderNextButton = ({ isDisabled }) => {
    return (
      <ArrowForwardIosIcon
        style={{ position: "absolute", right: "-2rem", top: "40%" }}
      />
    );
  };

  const renderPrevButton = ({ isDisabled }) => {
    return (
      <ArrowBackIosIcon
        style={{ position: "absolute", left: "-2rem", top: "40%" }}
      />
    );
  };
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 4 },
    1600: { items: 4 },
  };

  return (
    <div className="categories">
      <div className="container">
        <AliceCarousel
          items={itemsSlide}
          responsive={responsive}
          controlsStrategy="alternate"
          autoPlay
          autoPlayInterval={2000}
          animationDuration={1000}
          animationType="fadeout"
          infinite
          renderPrevButton={renderPrevButton}
          renderNextButton={renderNextButton}
        />

      </div>
    </div>
  );
}

const itemsSlide = categories.map((cate, index) => (
  <CategoryItem
    key={index}
    name={cate.name}
    img={cate.img}
    to={cate.to}
  />
))

function CategoryItem({ img, name, to }) {
  return (
    <>
      <div className="col">
        <div className={styles.categories__item}>
          <img src={img} alt="danhmuc"/>
          <h5>
            <Link to={to}>{name}</Link>
          </h5>
        </div>
      </div>,
    </>
  )
}
export default Categories;