import React from 'react'
import styles from "./CategoryTable.scss"
import viproom from "../../../assets/svg/room-service-svgrepo-com (1).svg"
import room from "../../../assets/svg/room-service-svgrepo-com (2).svg"
import alacarteroom from "../../../assets/svg/room-service-svgrepo-com.svg"
import ship from "../../../assets/svg/delivery-truck-svgrepo-com.svg"
import { Link } from 'react-router-dom'
const listCategory = [
    {
        path: "/dat-ban",
        name: "AlaCarte",
        img: room
    },
    {
        path: "/dat-tiec",
        name: "Đặt tiệc",
        img: alacarteroom
    },
    {
        path: "/dat-phong-vip",
        name: "Phòng VIP",
        img: viproom
    },
    {
        path: "/menu",
        name: "Đặt ship",
        img: ship
    },
]
function CategoryTable({ active }) {

    return (
        <div className="categories">
            <ul className="category-list">
                {
                    listCategory.map(cate => (
                        <li key={cate.name} className={`${active===cate.name && "active"} category-list__item`} id="all">
                            <Link to={cate.path}>
                                <div className="category-icon">
                                    <img src={cate.img} alt="" />
                                </div>
                                <h4 className="category-name">{cate.name}</h4>
                            </Link>
                        </li>
                    ))
                }

            </ul>
        </div>
    )
}

export default CategoryTable