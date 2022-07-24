import React from "react";

import "react-alice-carousel/lib/alice-carousel.css";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import styles from "./ProductMenu.module.css";
const categories = [
  {
    name: "Hoa quả sạch",
    img: "https://media.gettyimages.com/photos/close-up-of-fresh-steamed-lobster-with-herbs-in-grey-plate-picture-id117149629?s=612x612",
    to: "/",
    ingredient: "Onion, Lettuce, Tomatoe, Patty, Cheese",
    price: "$14",
    content:
      "A burguer typically considered a sandwich, consisting.",
  },
  {
    name: "Hoa quả sạch",
    img: "https://media.gettyimages.com/photos/close-up-of-fresh-steamed-lobster-with-herbs-in-grey-plate-picture-id117149629?s=612x612",
    to: "/",
    ingredient: "Onion, Lettuce, Tomatoe, Patty, Cheese",
    price: "$14",
    content:
      "A burguer typically considered a sandwich, consisting.",
  },
  {
    name: "Hoa quả sạch",
    img: "https://media.gettyimages.com/photos/close-up-of-fresh-steamed-lobster-with-herbs-in-grey-plate-picture-id117149629?s=612x612",
    to: "/",
    ingredient: "Onion, Lettuce, Tomatoe, Patty, Cheese",
    price: "$14",
    content:
      "A burguer typically considered a sandwich, consisting.",
  },
  {
    name: "Hoa quả sạch",
    img: "https://media.gettyimages.com/photos/close-up-of-fresh-steamed-lobster-with-herbs-in-grey-plate-picture-id117149629?s=612x612",
    to: "/",
    ingredient: "Onion, Lettuce, Tomatoe, Patty, Cheese",
    price: "$14",
    content:
      "A burguer typically considered a sandwich.",
  },
  {
    name: "Hoa quả sạch",
    img: "https://media.gettyimages.com/photos/close-up-of-fresh-steamed-lobster-with-herbs-in-grey-plate-picture-id117149629?s=612x612",
    to: "/",
    ingredient: "Onion, Lettuce, Tomatoe, Patty, Cheese",
    price: "$14",
    content:
      "A burguer typically considered a sandwich, consisting.",
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
       
      </div>
    </div>
  );
}

function CategoryItem({ img, title, to ,content,price,ingredient}) {
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
   <div className="col-lg-3">
      <div className={styles.containers}>
      {/* <img src={img}/> */}
      <img src={`https://img.freepik.com/free-photo/thai-food-shrimp-spicy-fish-sauce_1150-38077.jpg?t=st=1658235944~exp=1658236544~hmac=53051792149dc74df6cc7d9b3360e2a04cb3300569bba2e865b63c88fc01972c&w=996`}/>
      <div className={styles.contentBox}>
        <h4 className={styles.name}>{title}</h4>
        {/* <p>{content}</p> */}
        {/* <p>{ingredient}</p> */}
        <div className={styles.btn}>
          <h2 className={styles.price}>{price}</h2>
          <a href="#">Order Now</a>
        </div>
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
export default CategoryItem;
