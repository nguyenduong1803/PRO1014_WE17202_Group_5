import React from 'react'
import styles from "./Header.module.css"
import Search from "../../../assets/svg/Search"
import Notify from "../../../assets/svg/Notify"
import Mess from "../../../assets/svg/Mess"
import { getToken } from '../../../utils/Common'
import axios from 'axios'
import { useContext } from 'react'
import { AuthContext } from '../../../contexts/AuthenContext'
import ProfileAvatar from '../ProfileAvatar/ProfileAvatar'
import { Link } from 'react-router-dom'
import logo from "../../../assets/img/logoSea.png"
import Cart from './Cart/Cart';
function Header() {
    const infoUser = useContext(AuthContext)
    return (
        <header className={styles.header}>
            <div className="row">
                <div className="col-lg-1">
                    <img src={logo} className={styles.logo} alt="" />
                </div>
                <div className="col-lg-5 col-md-6">
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
                    <div className="d-flex justify-content-end align-items-center" style={{ height: "100%" }}>
                        <div className="d-flex col-lg-6 col-md-12 justify-content-evenly  align-items-center" style={{ marginRight: "24px" }}>
                            <Notify />
                            <Cart />
                            {getToken() ?
                                <div className={`${styles.wrapInfo} d-flex align-items-center`}>
                                    <ProfileAvatar />
                                    <div>
                                        <h4 className={styles.name}>{infoUser?.ten}</h4>
                                        <p className={styles.possition}>Nhân viên order</p>
                                    </div>
                                </div>
                                :
                                <div className={`${styles.wrapInfo} d-flex align-items-center`}>
                                    <ProfileAvatar />
                                    <div>
                                        <Link to="/dang-nhap" className={styles.name}>Đăng nhập</Link>
                                    </div>
                                </div>
                            }

                        </div>
                    </div>
                </div>
            </div>
        </header >
    )
}

export default Header