import React from 'react'
import styles from "./Header.module.css"
import Search from "../../../assets/svg/Search"
import Notify from "../../../assets/svg/Notify"
import Mess from "../../../assets/svg/Mess"
import Avatar from '@mui/material/Avatar';
import avatar from "../../../assets/images/avatar_default.png"
Array.prototype.renderProduct = function ({ type, payload }) {

    switch (type) {
        case "sortPrice":
            return this.sort((a, b) => a.price - b.price);
            break;
        case "sortDescend":
            return this.sort((a, b) => b.price - a.price);
            break;
        case "search":
            return this.filter((ele) => (
                ele.name.toString()
                    .toLowerCase()
                    .indexOf(payload.trim().toString().toLowerCase()) > -1
            ))
            break;
        case "category":
            return this.filter((ele) => ele.category === payload)
            break;
        case "price":
            return this.filter((ele) => ele.price > payload[0] && ele.price <= payload[1])
            break;
        case "findId":
            return this.find((ele) => ele._id === payload)
            break;
        case "":
            return this
            break;

        default: return this
            break;
    }
}


function Header() {

    return (
        <header className={styles.header}>
            <div className="row">
                <div className="col-lg-6 col-md-6">
                    <div className={styles.search}>
                        <div className={styles.warpInput}>
                            <input
                                className={styles.searchInput}
                                placeholder="Tìm kiếm..."
                            />
                            <Search className={styles.searchIcon} />
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="d-flex justify-content-end align-items-center">
                        <div className="d-flex col-lg-6 col-md-12 justify-content-evenly  align-items-center" style={{marginRight:"24px"}}>
                            <Notify />
                            <Mess />
                            <Avatar sx={{ width: 50, height: 50 }} src={avatar} alt="" />
                            <div className={styles.wrapInfo}>
                                <h4 className={styles.name}>Nguyễn Hữu Dương</h4>
                                <p className={styles.possition}>Nhân viên order</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header >
    )
}

export default Header