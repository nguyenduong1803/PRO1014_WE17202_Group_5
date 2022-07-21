import React from 'react'
import styles from "./CategoryTable.scss"
import viproom from "../../../assets/svg/room-service-svgrepo-com (1).svg"
import room from "../../../assets/svg/room-service-svgrepo-com (2).svg"
import alacarteroom from "../../../assets/svg/room-service-svgrepo-com.svg"
import ship from "../../../assets/svg/delivery-truck-svgrepo-com.svg"

function CategoryTable() {
    return (
        <div className="categories">
            <ul className="category-list">
               
            <li className="category-list__item" id="all">
                    <a href="#all">
                        <div className="category-icon">
                            <img src={room} alt="" />
                        </div>
                        <h4 className="category-name">Ala carte</h4>
                    </a>
                </li>
                <li className="category-list__item" id="alacarte">
                    <a href="#alacarte">
                        <div className="category-icon">
                            <img src={alacarteroom} alt="" />
                        </div>
                        <h4 className="category-name">Đặt tiệc</h4>
                    </a>
                </li>
                <li className="category-list__item" id="vip">
                    <a href="#vip">
                        <div className="category-icon">
                            <img src={viproom} alt="" />
                        </div>
                        <h4 className="category-name">Phòng Vip</h4>
                    </a>
                </li>
                <li className="category-list__item" id="ship">
                    <a href="#ship">
                        <div className="category-icon">
                            <img src={ship} alt="" />
                        </div>
                        <h4 className="category-name">Đặt ship </h4>
                    </a>
                </li>
                
            </ul>
        </div>
  )
}

export default CategoryTable