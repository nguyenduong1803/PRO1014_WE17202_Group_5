import React from "react";
import styles from "./Categories.module.css";
import CatetoryList from "../../../../assets/img/Catetory-1.png";
import CatetoryLists from "../../../../assets/img/Catetory-3.png";
import CatetoryListss from "../../../../assets/img/Catory-2.png";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import viproom from "../../../../assets/svg/room-service-svgrepo-com (1).svg"
import room from "../../../../assets/svg/room-service-svgrepo-com (2).svg"
import alacarteroom from "../../../../assets/svg/room-service-svgrepo-com.svg"
import ship from "../../../../assets/svg/delivery-truck-svgrepo-com.svg"
import buffe from "../../../../assets/svg/tray-dish-svgrepo-com.svg"
import both from "../../../../assets/svg/valentines-dinner-svgrepo-com.svg"
import { Link } from "react-router-dom";
function Categories() {
  return (
    <div className={styles.category}>
      <div
        className="justify-content-between d-flex align-items-center "
        style={{ padding: "20px 0" }}
      >
        <div className={styles.title} style={{fontWeight:"600",fontSize:"20px"}}>Danh mục</div>
        <div className={styles.viewAll}>Xem tất cả <span className={styles.icon}><ChevronRightIcon /></span> </div>
      </div>
      <div className='row'>
        {catetoryList.map((cate, index) => {
          return (
            <CategoriesItems
              key={index}
              img={cate.img}
              titleName={cate.titleName}
              path={cate.path}
            />
          );
        })}
      </div>
    </div>
  );
}

const catetoryList = [
  {
    img: room,
    titleName: "Đặt Alacarte",
    path:"/dat-ban"
  },
  {
    img: viproom,
    titleName: "Đặt phòng vip",
    path:"/dat-phong-vip"
  },
  {
    img: alacarteroom,
    titleName: "Đặt tiệc",
    path:"/dat-tiec"
  },

  {
    img: buffe,
    titleName: "Buffe",
    path:"/dat-ban"
  },
  {
    img: both,
    titleName: "Cặp đôi",
    path:"/dat-ban"
  }, 
  {
    img: ship,
    titleName: "Đặt Ship",
    path:"/dat-ban"
  },

];

function CategoriesItems({ img, titleName,path }) {
  return (
    <div className='col-lg-2'>
      <Link to={path} className={`${styles.categoryItems} text-align-center`}>
        <img src={img} alt="" />
        <h4 className={styles.titleName}>{titleName}</h4><br />
        <p className={styles.line}></p><br />
        <p className={styles.icon}>{<ChevronRightIcon />}</p>
      </Link>
    </div>
  );
}


export default Categories;
