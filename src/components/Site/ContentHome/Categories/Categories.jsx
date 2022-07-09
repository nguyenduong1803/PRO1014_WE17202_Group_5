import React from "react";
import styles from "./Categories.module.css";
import CatetoryList from "../../../../assets/img/Catetory-1.png";
import CatetoryLists from "../../../../assets/img/Catetory-3.png";
import CatetoryListss from "../../../../assets/img/Catory-2.png";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
function Categories() {
  return (
    <div className={styles.category}>
      <div
        className="justify-content-between d-flex align-items-center "
        style={{ padding: "20px 0" }}
      >
        <div className={styles.title}>Categories</div>
        <div className={styles.viewAll}>ViewAll <ChevronRightIcon/> </div>
      </div>
      <div className='row'>
        {catetoryList.map((cate, index) => {
          return (
            <CategoriesItems
              key={index}
              img={cate.img}
              titleName={cate.titleName}
            />
          );
        })}
      </div>
    </div>
  );
}

const catetoryList = [
  {
    img: CatetoryList,
    titleName: "Tôm Hùm",
  },
  {
    img: CatetoryLists,
    titleName: "Tôm Tép",
  },
  {
    img: CatetoryListss,
    titleName: "Cua Con",
  },
  {
    img: CatetoryListss,
    titleName: "Cua Con",
  },
];

function CategoriesItems({ img, titleName }) {
  return (
    <div className='col-lg-3'  >
      <div className={`${styles.categoryItems} text-align-center`}>
        <img src={img} alt="" />
        <h4 className={styles.titleName}>{titleName}</h4><br />
        <p className={styles.line}></p><br />
        <p className={styles.icon}>{<ChevronRightIcon/>}</p>
      </div>
    </div>
  );
}


export default Categories;
