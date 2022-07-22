import React, { useState, useEffect } from 'react'
import styles from '../../../components/Site/ContentRegister/Register.module.css'
import FBImg from '../../../assets/images/social-icons/FBImg.png'
import GmailImg from '../../../assets/images/social-icons/GmailImg.png'
import logoMau from "../../../assets/img/logoSea.png"
import { Link, useHistory } from "react-router-dom";
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from "react-redux"
import { isSuccess, selectLoading } from "../../../redux/selector"
import { LoginAuth } from "../../../redux/SliceReducer/AuthSlice"
import Loadings from "../../../components/Site/Loadings/Loadings"
import { InputPassword } from '../../../components/Site/ContentRegister/InputMui'
import { FormControl } from '@mui/material'
import BannerAnimation from '../../../components/Site/ContentRegister/BannerAnimation'
function Login(self) {
    return (
        <div className={`${styles.main} d-flex`}>
            <div className={`${styles.sideBar} `} style={{ padding: "0 24px" }}>

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
                        <Link to="/dang-ky" className={`${styles.changeForm}`}>
                            Đăng ký ngay
                        </Link>
                    </p>
                </div>

            </div>
            <BannerAnimation/>
        </div>
    )
}
const FormLogin = ({ self }) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });
    const [notify, setNotify] = useState("");
    const history = useHistory();
    const success = useSelector(isSuccess)
    const load = useSelector(selectLoading)
    const handleSubmit = (e) => {
        setLoading(true)
        e.preventDefault();
        dispatch(LoginAuth({ email: email, password: password.password }))
        console.log(success)
        setEmail("")
        setPassword(prev => ({ ...prev, password: "" }))

    }
    useEffect(() => {
        if (success === true) {
            history.push("/")
        } else if (success) {
            setNotify("Thông tin tài khoản hoặc mật khẩu không đúng")
            setLoading(false)
        } else {
            setLoading(false)
        }
    }, [success])
    return (
        <>  {load === "loading" ? <Loadings /> : ""}
            <form className={`${styles.form}`}>
                <div>
                  
                    <FormControl sx={{ margin: "24px 0", width: '100%' }} variant="outlined">
                        <InputEmail name="Email" email={email} setEmail={setEmail} />
                    </FormControl>

                </div>
                <div>
                    <FormControl sx={{ width: '100%' }} variant="outlined">
                        <InputPassword name="Mật khẩu" setPassword={setPassword} password={password} />
                    </FormControl>
                </div>
                <div className='d-flex justify-content-between mt-3 mb-3'>
                    <span>
                        <input type="checkbox" /> Nhớ tài khoản
                    </span>
                    <Link to='/checkemail'
                        style={{ fontStyle: `italic`, color: `#74788d` }}>Quên mật khẩu?
                    </Link>
                </div>
                <a
                    href="/"
                    onClick={e => handleSubmit(e)}
                    type='submit'
                    className={`${styles.btn}`}
                // onClick={handleLogin}
                >Đăng nhập
                </a>
            {notify && <p className={styles.error}>{notify}</p>}
            </form>
        </>

    )
}
function InputEmail({ name, email, setEmail }) {
    return (
        <TextField
            id="outlined-basic"
            label={name}
            variant="outlined"
            onChange={(e) =>(setEmail(e.target.value))}
            value={email}
        />
    );
}
export default Login