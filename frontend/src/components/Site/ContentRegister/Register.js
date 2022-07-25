import React, { useState } from 'react'
import styles from './Register.module.css'
import FBImg from '../../../assets/images/social-icons/FBImg.png'
import GmailImg from '../../../assets/images/social-icons/GmailImg.png'
import logoMau from "../../../assets/img/logoSea.png"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import Calendar from '../Calendar/Calendar'
import { InputPassword, InputTextField } from './InputMui'
import UploadImage from './UploadImage'
import BannerAnimation from './BannerAnimation'
import { registerAccounts } from '../../../redux/SliceReducer/AccountSlice'
import Loadings from '../Loadings/Loadings'
import { selectIsuccess, selectLoadingRegister } from '../../../redux/selector'


function ContentRegister() {
    const load = useSelector(selectLoadingRegister)

    return (
        <>
            {load === "loading" ? <Loadings /> : ""}
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
        </>
    )
}
const FormRegister = () => {
    const dispatch = useDispatch()
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
    const ngaySinh = `${dob.getFullYear()}-${dob.getMonth() + 1}-${dob.getDate()}`
    const formRegister = new FormData();
    formRegister.append("ten", name)
    formRegister.append("email", email)
    formRegister.append("ngay_sinh", ngaySinh)
    formRegister.append("dia_chi", address)
    formRegister.append("sdt", phone)
    formRegister.append("vai_tro", 1)
    formRegister.append("gioi_tinh", 1)
    formRegister.append("mat_khau", password.password)
    formRegister.append("file", image)
    const handleChangeInputRadio = (e, inputType) => {
        setInput(prev => {
            prev.gender = e.target.value
            return { ...prev }
        })
    }
    const handleRegister = (e) => {
        e.preventDefault()
        dispatch(registerAccounts(formRegister))
        // setInput({
        //     email: '',
        //     name: '',
        //     dob: new Date('2000-08-18'),
        //     address: '',
        //     phone: '',
        //     gender: '',
        //     image: ''
        // })
        // setPassword({
        //     amount: '',
        //     password: '',
        //     weight: '',
        //     weightRange: '',
        //     showPassword: false,
        // })
    }
    const isSuccess = useSelector(selectIsuccess)
    console.log(isSuccess)
    return (

        <form className={`${styles.form}`} >
            <div className="d-flex m-3" style={{ gap: "1rem" }}>
                <div className="col-6">
                    <InputTextField setInput={setInput} name="Username" value={name} inputType={"name"} />
                </div>
                <div className="col-6">
                    <InputTextField setInput={setInput} name="Email" value={email} inputType={"email"} />
                </div>
            </div>
            <div className="d-flex  m-3" style={{ gap: "1rem" }}>
                <div className="col-6">
                    <InputPassword setPassword={setPassword} password={password} />
                </div>
                <div className="col-6">
                    <Calendar label="Ngày sinh" value={dob} setInput={setInput} inputType={"dob"} />
                </div>
            </div>
            <div className="d-flex m-3" style={{ gap: "1rem" }}>
                <div className="col-6">
                    <InputTextField setInput={setInput} name="Địa chỉ" value={address} inputType={"address"} />
                </div>
                <div className="col-6">
                    <InputTextField setInput={setInput} name="Số điện thoại" value={phone} inputType={"phone"} />
                </div>
            </div>
            <div className="d-flex m-3 align-items-center justify-content-between" style={{ gap: "1rem" }}>
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
                <div className="col-6">
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
            {/* <p>{isSuccess ? "đang ký thành công" : "đang ký thất bại"}</p> */}
        </form>
    )
}
export default ContentRegister