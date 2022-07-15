import React, { useState, useEffect } from 'react'
import styles from './Login.module.css'
import FBImg from '../../../assets/images/social-icons/FBImg.png'
import GmailImg from '../../../assets/images/social-icons/GmailImg.png'
import logoMau from "../../../assets/img/logoSea.png"
import { Link, useHistory } from "react-router-dom";
import { setUserSession } from '../../../utils/Common'
import { useDispatch, useSelector } from "react-redux"
import { isSuccess, selectLoading } from "../../../redux/selector"
import { LoginAuth } from "../../../redux/SliceReducer/AuthSlice"
import Loadings from "../../../components/Site/Loadings/Loadings"
function Login(self) {
    return (
        <div className={`${styles.main} d-flex`}>
            <div className={`${styles.sideBar} `}>

                <div className={`${styles.Login}`}>
                    <Link to="/" className={`${styles.logo}`}>
                        <img src={logoMau} alt="" />
                    </Link>
                    <h5 className={`${styles.title}`}>Chào mừng bạn quay trở lại !</h5>
                    <FormLogin self={self} />
                    <p style={{ textAlign: `center` }}>Đăng nhập với</p>
                    <div className={`${styles.social}`}>
                        <img src={FBImg} alt="" />
                        <img src={GmailImg} alt="" />
                    </div>
                    <p style={{ textAlign: `center` }}>
                        Bạn chưa có tài khoản ?
                        <Link to="/admin/dang-ky" className={`${styles.changeForm}`}>
                            Đăng ký ngay
                        </Link>
                    </p>
                </div>

            </div>
            <div className={`${styles.banner} col-9`}>
                <div className={`${styles.context}`}>
                    <h1>Pure Css Animated Background</h1>
                    {/* <img src={logoMau} alt=""/> */}
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
const FormLogin = ({ self }) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [notify, setNotify] = useState("");
    const history = useHistory();
    const success = useSelector(isSuccess)
    const load = useSelector(selectLoading)
    const handleSubmit = (e) => {
        setLoading(true)
        e.preventDefault();
        dispatch(LoginAuth({ email: email, password: password }))
        console.log(success)
        setEmail("")
        setPassword("")

    }
    useEffect(() => {
        if (success === true) {
            history.push("/")
        } else if (success) {
            setNotify("thông tin tài khoản hoặc mật khẩu không đúng")
            setLoading(false)
        } else {
            setLoading(false)
        }
    }, [success])
    return (
        <>  {load === "loading" ? <Loadings /> : ""}
            <form className={`${styles.form}`}>
                <div>
                    <p style={{ fontWeight: `600` }}> Email </p>
                    <input
                        type="email"
                        id='username'
                        onChange={(e) => { setEmail(e.target.value) }}
                        value={email}
                    />
                </div>
                <div>
                    <p style={{ fontWeight: `600` }}> Mật khẩu </p>
                    <input
                        type="password"
                        id='password'
                        onChange={(e) => { setPassword(e.target.value) }}
                        value={password}
                    />
                </div>
                <div className='d-flex justify-content-between mt-3 mb-3'>
                    <span>
                        <input type="checkbox" /> Nhớ tài khoản
                    </span>
                    <a href='/login'
                        style={{ fontStyle: `italic`, color: `#74788d` }}>Quên mật khẩu?
                    </a>
                </div>
                <a
                    href="/"
                    onClick={e => handleSubmit(e)}
                    type='submit'
                    className={`${styles.btn}`}
                // onClick={handleLogin}
                >Đăng nhập
                </a>
            </form>
            {notify && <p className={styles.error}>{notify}</p>}
        </>

    )
}
export default Login