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
    to: "/",
    ingredient: "Onion, Lettuce, Tomatoe, Patty, Cheese",
    price: "$14",
    content:
      "A burguer typically considered a sandwich, consisting of one or more cooked patties-usually .",
  },
  {
    name: "Hoa quả sạch",
    img: cat1,
    to: "/",
    ingredient: "Onion, Lettuce, Tomatoe, Patty, Cheese",
    price: "$14",
    content:
      "A burguer typically considered a sandwich, consisting of one or more cooked patties-usually.",
  },
  {
    name: "Hoa quả sạch",
    img: cat1,
    to: "/",
    ingredient: "Onion, Lettuce, Tomatoe, Patty, Cheese",
    price: "$14",
    content:
      "A burguer typically considered a sandwich, consisting of one or more cooked patties-usually.",
  },
  {
    name: "Hoa quả sạch",
    img: cat1,
    to: "/",
    ingredient: "Onion, Lettuce, Tomatoe, Patty, Cheese",
    price: "$14",
    content:
      "A burguer typically considered a sandwich, consisting of one or more cooked patties-usually.",
  },
  {
    name: "Hoa quả sạch",
    img: cat1,
    to: "/",
    ingredient: "Onion, Lettuce, Tomatoe, Patty, Cheese",
    price: "$14",
    content:
      "A burguer typically considered a sandwich, consisting of one or more cooked patties-usually.",
  },
];
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
    content={cate.content}
    ingredient={cate.ingredient}
    price={cate.price}
  />
));

function CategoryItem({ img, name, to ,content,price,ingredient}) {
  return (
    // <div class={styles.containers}>
    //   <div className={styles.categories__item}>
    //     <img src={img} alt="danhmuc" />
    //     <div className={styles.contentBox}>
    //       <h4>
    //         <Link to={to} className={styles.name}>
    //           {name}
    //         </Link>
    //       </h4>
    //       <p>{content}</p>
    //       <p>{ingredient}</p>
    //       <div className={styles.btn}>
    //         <h2 className={styles.price}>{price}</h2>
    //         <a href="#">Order Now</a>
    //       </div>
    //     </div>
    //   </div>
      
    // </div>
    <div className={styles.containers}>
    {/* <img src={img}/> */}
    <img src="https://firebasestorage.googleapis.com/v0/b/cajaregistradora-776cc.appspot.com/o/pngwing.com(2).png?alt=media&token=bde13cf8-4b17-4da9-90cf-c16db83b2e1f" alt="" />
    <div className={styles.contentBox}>
      <h4 className={styles.name}>{name}</h4>
      <p>{content}</p>
      <p>{ingredient}</p>
      <div className={styles.btn}>
        <h2 className={styles.price}>{price}</h2>
        <a href="#">Order Now</a>
      </div>
    </div>
  </div>
  );
}
{
  /* <div class="container">
  <img src="https://firebasestorage.googleapis.com/v0/b/cajaregistradora-776cc.appspot.com/o/pngwing.com(2).png?alt=media&token=bde13cf8-4b17-4da9-90cf-c16db83b2e1f" />
  <div class="content-box">
    <h4 class="name">Veggie Burguer</h4>
    <p>
      A burguer typically considered a sandwich, consisting of one or more
      cooked patties-usually placed inside a sliced bread roll or bun
    </p>
    <p>Onion, Lettuce, Tomatoe, Patty, Cheese</p>
    <div class="btn">
      <h2 class="price">$ 5</h2>
      <a href="#">Order Now</a>
    </div>
  </div>
</div>; */
}
export default Categories;
