import React from 'react'
import styles from "./Header.module.css"
import Search from "../../../assets/svg/Search"
import Notify from "../../../assets/svg/Notify"
import Mess from "../../../assets/svg/Mess"
import Avatar from '@mui/material/Avatar';
import avatar from "../../../assets/images/avatar_default.png"
import { useDispatch, useSelector } from "react-redux"
import {  selectUser,remainingSelector } from "../../../redux/selector"
import AuthSlice, { LoginAuth, getUserAuth } from "../../../redux/SliceReducer/AuthSlice"
import { getToken } from '../../../utils/Common'
import axios from 'axios'
import { useContext } from 'react'
import { AuthContext } from '../../../contexts/AuthenContext'
import ProfileAvatar from '../ProfileAvatar/ProfileAvatar'


function Header() {
    // const authValue = useContext(AuthContext)
    const users1 = useContext(remainingSelector)
    const users2 = useContext(AuthContext)
    console.log(users2)
    // console.log(authValue && authValue)
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
                        <div className="d-flex col-lg-6 col-md-12 justify-content-evenly  align-items-center" style={{ marginRight: "24px" }}>
                            <Notify />
                            <Mess />
                            <ProfileAvatar />
                            <div className={styles.wrapInfo}>
                                <h4 className={styles.name}>{users2?.ten|| "Đăng nhập"}</h4>
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