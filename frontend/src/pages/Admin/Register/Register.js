import React, { useState } from 'react'
import styles from './Register.module.css'
import FBImg from '../../../assets/images/social-icons/FBImg.png'
import GmailImg from '../../../assets/images/social-icons/GmailImg.png'
import logoMau from "../../../assets/img/logoSea.png"

import { Link } from "react-router-dom";

function Register() {
    function detectBlank(e) {
        const ele = e.target;
        const eleParent = ele.parentNode
        if (!ele.value) {
            eleParent.style.color = `red`
            ele.style.border = `1px solid red`
            ele.placeholder = "Không được để trống..."
        }
    }

    function backToNormal(e) {
        const ele = e.target;
        const eleParent = ele.parentNode

        eleParent.style.color = `#000`
        ele.style.border = `1px solid #ddd `
        ele.placeholder = ""

    }
    function checkEmail(e) {

    }



    return (
        <div className={`${styles.main} d-flex`}>
            <div className={`${styles.sideBar}`}>

                <div className={`${styles.signUp}`}>
                    <Link to="/" className={`${styles.logo}`}>
                        <img src={logoMau} alt="" />
                    </Link>

                    <h4 className={`${styles.title}`}>Đăng ký tài khoản</h4>
                    <div className={`${styles.form}`}>
                        <div>

                            <p style={{ fontWeight: `600` }}>
                                Email
                            </p>
                            <input
                                onBlur={(e) => { detectBlank(e); checkEmail(e) }}
                                onFocus={(e) => backToNormal(e)}
                                type="email"
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$"
                            />
                        </div>
                        <div>

                            <p style={{ fontWeight: `600` }}>
                                Tên tài khoản
                            </p>
                            <input
                                onBlur={(e) => detectBlank(e)}
                                onFocus={(e) => backToNormal(e)}
                                type="text"
                            />
                        </div>
                        <div>

                            <p style={{ fontWeight: `600` }}>
                                Mật khẩu
                            </p>
                            <input
                                onBlur={(e) => detectBlank(e)}
                                onFocus={(e) => backToNormal(e)}
                                type="password"
                            />
                        </div>
                        <button className={`${styles.btn}`}>Đăng ký</button>

                        <p style={{ textAlign: `center` }}>
                            Bạn đã có tài khoản ?
                            <Link to="/admin/dang-nhap">

                                <span
                                    className={`${styles.changeForm}`}
                                >
                                    Đăng nhập ngay
                                </span>
                            </Link>
                        </p>

                    </div>


                </div>



            </div>
            <div className={`${styles.banner} col-9`}>
                <div className={`${styles.context}`}>
                    <h1>Pure Css Animated Background</h1>
                </div>


                <div className={`${styles.area}`}>
                    <ul className={`${styles.circles}`}>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div >
            </div>
        </div>
    )
}

export default Register