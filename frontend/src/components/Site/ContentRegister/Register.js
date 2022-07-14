import React, { useState } from 'react'
import styles from './Register.module.css'
import FBImg from '../../../assets/images/social-icons/FBImg.png'
import GmailImg from '../../../assets/images/social-icons/GmailImg.png'
import logoMau from "../../../assets/img/logoSea.png"
import {useDispatch} from "react-redux"
import { Link } from "react-router-dom";
import Calendar from '../Calendar/Calendar'
import { InputPassword, InputTextField } from './InputMui'
import UploadImage from './UploadImage'
import BannerAnimation from './BannerAnimation'
import { registerAccount } from '../../../redux/SliceReducer/AccountSlice'


function ContentRegister() {
    return (
        <div className={`${styles.main} d-flex`}>
            <div className={`${styles.sideBar}`}>
                <div className={`${styles.signUp}`}>
                    <Link to="/" className={`${styles.logo}`}>
                        <img src={logoMau} alt="" />
                    </Link>
                    <h4 className={`${styles.title}`}>Đăng ký tài khoản</h4>
                    <FormRegister />
                </div>
            </div>
            <BannerAnimation />
        </div>
    )
}
const FormRegister = () => {
    const dispatch= useDispatch()
    const [password, setPassword] = useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });
    const [input, setInput] = useState({
        email: '',
        name: '',
        dob: new Date('2000-08-18'),
        address: '',
        phone: '',
        gender: '',
        image: ''
    })

    const { email, name, dob, address, phone, gender, image } = input
    console.log(dob.getFullYear(), dob.getMonth() + 1, dob.getDate())
    const ngaySinh = `${dob.getFullYear()}-${dob.getMonth() + 1}-${dob.getDate()}`

    const formRegister = new FormData();
    formRegister.append("ten", name)
    formRegister.append("email", email)
    formRegister.append("ngay_sinh", ngaySinh)
    formRegister.append("dia_chi", address)
    formRegister.append("sdt", phone)
    formRegister.append("vai_tro", 0)
    formRegister.append("gioi_tinh", 1)
    formRegister.append("mat_khau", password.password)
    const handleChangeInputRadio = (e, inputType) => {
        setInput(prev => {
            prev.gender = e.target.value
            return { ...prev }
        })
    }
    const handleRegister = (e) => {
        e.preventDefault()
        dispatch(registerAccount(formRegister))
    }

    // {
    //     "ten": "duong test 2",
    //     "dia_chi": "hcm",
    //     "ngay_sinh": "1998-12-22",
    //     "sdt": "0934565787",
    //     "gioi_tinh": 0,
    //     "vai_tro": 0,
    //     "email": "duongtest2@gmail.com",
    //     "mat_khau": "12345678"
    // }
    return (
        <form className={`${styles.form}`} >
            <div className="d-flex m-3" style={{ gap: "1rem" }}>
                <div>
                    <InputTextField setInput={setInput} name="Username" value={name} inputType={"name"} />
                </div>
                <div>
                    <InputTextField setInput={setInput} name="Email" value={email} inputType={"email"} />
                </div>
            </div>
            <div className="d-flex  m-3" style={{ gap: "1rem" }}>
                <div>
                    <InputPassword setPassword={setPassword} password={password} />
                </div>
                <div>
                    <Calendar label="Ngày sinh" value={dob} setInput={setInput} inputType={"dob"} />
                </div>
            </div>
            <div className="d-flex m-3" style={{ gap: "1rem" }}>
                <div>
                    <InputTextField setInput={setInput} name="Địa chỉ" value={address} inputType={"address"} />
                </div>
                <div>
                    <InputTextField setInput={setInput} name="Số điện thoại" value={phone} inputType={"phone"} />
                </div>
            </div>
            <div className="d-flex m-3 align-items-center justify-content-between">
                <div className="col-6">
                    <div className="d-inline-block  align-items-center" >
                        <input
                            onChange={e => handleChangeInputRadio(e)}
                            className="form-check-input"
                            value="nam"
                            type="radio" name="gender" id="male"
                        />
                        <label className="form-check-label position-relative" htmlFor="male" style={{ marginLeft: "12px", top: "3px" }} >
                            Nam
                        </label>
                    </div>
                    <div className="d-inline-block align-items-center" style={{ paddingLeft: "12px" }}>
                        <input
                            onChange={e => handleChangeInputRadio(e)}
                            className="form-check-input"
                            value="nữ"
                            type="radio" name="gender"
                            id="female" />
                        <label className="form-check-label position-relative" htmlFor="female" style={{ marginLeft: "12px", top: "3px" }} >
                            Nữ
                        </label>
                    </div>
                </div>
                <div >
                    <UploadImage value={image} inputType={"image"} setInput={setInput} />
                </div>

            </div>
            <div style={{ padding: "0 18px" }}>
                <button
                    onClick={e => handleRegister(e)}
                    className={`${styles.btn}`}>Đăng ký</button>
                <p style={{ textAlign: `center` }}>
                    Bạn đã có tài khoản ?
                    <Link to="/dang-nhap">
                        <span className={`${styles.changeForm}`}> Đăng nhập ngay </span>
                    </Link>
                </p>
            </div>
        </form>
    )
}
export default ContentRegister