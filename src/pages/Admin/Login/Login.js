import React, { useState } from 'react'
import styles from './Login.module.css'
import FBImg from '../../../assets/images/social-icons/FBImg.png'
import GmailImg from '../../../assets/images/social-icons/GmailImg.png'
import logoMau from "../../../assets/images/logomau.png"
import { Link } from "react-router-dom";
import { setUserSession } from '../../../utils/Common'
import axios from 'axios'


function Login(self) {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const bodyFormData = new FormData();
    bodyFormData.append("db", "diligo_hrms");
    bodyFormData.append("login", login);
    bodyFormData.append("password", password);


    const handleLogin = () => {
        setError(null);

        var inputPassword = document.getElementById("password");
        var inputUsername = document.getElementById("username");
        setLogin(inputUsername.value)
        setPassword(inputPassword.value)

        sessionStorage.setItem("username", inputUsername.value);
        sessionStorage.setItem("password", inputPassword.value);

        axios
            .post("http://hrm.diligo.vn/api/auth/token", bodyFormData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((response) => {
                setUserSession(
                    response.data.access_token,
                    response.data.user,
                    response.data.name,
                    response.data.go_to_backend
                );
                self.history.push("/");
            })
            .catch((error) => {
                if (
                    error.response.status === 401 ||
                    error.response.status === 400 ||
                    error.response.status === 403
                ) {
                    setError(error.response.data.message);
                } else {
                    setError("Something went wrong! Try again later");
                }
            });
    };
    return (
        <div className={`${styles.main} row`}>
            <div className={`${styles.sideBar} col-3`}>

                <div className={`${styles.Login}`}>
                    <Link to="/" className={`${styles.logo}`}>
                        <img src={logoMau} alt="" />
                    </Link>
                    <h5 className={`${styles.title}`}>Chào mừng bạn quay trở lại !</h5>
                    <div className={`${styles.form}`}>
                        <div>

                            <p style={{ fontWeight: `600` }}>
                                Email
                            </p>
                            <input
                                type="email"
                                id='username'
                                onChange={(e) => { setLogin(e.target.value) }}
                            />
                        </div>
                        <div>
                            <p style={{ fontWeight: `600` }}>
                                Mật khẩu
                            </p>
                            <input
                                type="password"
                                id='password'
                                onChange={(e) => { setPassword(e.target.value) }}
                            />
                        </div>
                        <div className='d-flex justify-content-between '>
                            <span>
                                <input type="checkbox" /> Nhớ tài khoản
                            </span>
                            <a
                                href='/login'
                                style={{ fontStyle: `italic`, color: `#74788d` }}
                            >
                                Quên mật khẩu?
                            </a>
                        </div>
                    </div>
                    <button
                        className={`${styles.btn}`}
                        onClick={handleLogin}

                    >Đăng nhập</button>
                    {error && <p className={styles.error}>{error}</p>}

                    <p style={{ textAlign: `center` }}>Đăng nhập với</p>
                    <div className={`${styles.social}`}>
                        <img src={FBImg} alt="" />
                        <img src={GmailImg} alt="" />
                    </div>
                    <p style={{ textAlign: `center` }}>
                        Bạn chưa có tài khoản ?
                        <Link to="/dang-ky" className={`${styles.changeForm}`}>
                            Đăng ký ngay
                        </Link>
                    </p>
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

export default Login