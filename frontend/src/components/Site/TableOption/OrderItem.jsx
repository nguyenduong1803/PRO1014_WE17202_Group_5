import React from 'react'
import styles from "./TableOption.css"
import CelendarOption from '../Calendar/CelendarOption';
// import DeleteOutlineIcon from '@mui/icons-material/HighlightOff';
import { FormControl, TextField } from '@mui/material';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectTableActive } from '../../../redux/selector';
import { isNumber, isPhoneNumber, isRequired } from '../../../utils/Validate';

function OrderItem({ order, setOrder, name, setNotify, notify }) {
    const tableActive = useSelector(selectTableActive)
    const handleTableSelect = (e) => {
        setOrder(prev => ({ ...prev, tableId: e.target.value }))
        console.log(order)
    }
    return (
        <section className="section" id="order">
            {/* <div className="section-title">My Order&nbsp;😎</div> */}
            <div className="order-info">
                <div className="address">
                    <div className="address-name">Bàn {name || order.tableId}</div>
                    <select className="form-select form__edit-cart" aria-label="Default select example" defaultValue={order.orderId} onChange={e => handleTableSelect(e)}>
                        <option selected>Đổi Bàn</option>
                        {tableActive.map((table) => <option key={table.id} value={table.id}>{table.index_table}</option>)}
                    </select>
                </div>
                <div className="delivery">
                    <div className="delivery-time">
                        <div className="btn time-btn">
                            <svg t="1586139290823" className="clock" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="2356" width="18" height="18">
                                <path
                                    d="M512 42.65984q95.66208 0 182.49728 37.1712t149.66784 100.00384 100.00384 149.66784 37.1712 182.49728-37.1712 182.49728-100.00384 149.66784-149.66784 100.00384-182.49728 37.1712-182.49728-37.1712-149.66784-100.00384-100.00384-149.66784-37.1712-182.49728 37.1712-182.49728 100.00384-149.66784 149.66784-100.00384 182.49728-37.1712zM512 128q-78.00832 0-149.17632 30.49472t-122.49088 81.83808-81.83808 122.49088-30.49472 149.17632 30.49472 149.17632 81.83808 122.49088 122.49088 81.83808 149.17632 30.49472 149.17632-30.49472 122.49088-81.83808 81.83808-122.49088 30.49472-149.17632-30.49472-149.17632-81.83808-122.49088-122.49088-81.83808-149.17632-30.49472zM512 213.34016q17.67424 0 30.16704 12.4928t12.4928 30.16704l0 238.32576 115.67104 115.32288q12.32896 12.32896 12.32896 30.33088t-12.32896 30.33088-30.33088 12.32896-30.33088-12.32896l-128-128q-12.32896-12.32896-12.32896-30.33088l0-256q0-17.67424 12.4928-30.16704t30.16704-12.4928z"
                                    p-id="2357"></path>
                            </svg>
                        </div>
                        <span className="delivery-choose-time">30s</span>

                    </div>
                    <span className="time"><CelendarOption values={order.celendar} setOrder={setOrder} setNotify={setNotify} /></span>
                </div>
            </div>
            <p>{notify.celendar}</p>
            <FormControl sx={{ margin: "8px 0", width: '100%' }} >
                <InputField name="Chủ tiệc" size="small" values={order.name} setOrder={setOrder} setNotify={setNotify} />
                <p>{notify.name}</p>
            </FormControl>
            <FormControl sx={{ margin: "8px 0", width: '100%' }} >
                <InputField name="Số điện thoại" size="small" values={order.phone} setOrder={setOrder} setNotify={setNotify} />
                <p>{notify.phone}</p>
            </FormControl>
            <FormControl sx={{ margin: "8px 0", width: '100%' }} >
                <InputField name="Số người" setOrder={setOrder} size="small" values={order.countGuest} setNotify={setNotify} />
                <p>{notify.countGuest}</p>
            </FormControl>
            <div className="buy-action">
                <div className="person-number-input">

                </div>

            </div>
        </section>
    )
}

function InputField({ name, setOrder, values, size, setNotify }) {
    const handleChangeOrder = (e) => {
        setOrder(prev => {
            if (name === "Chủ tiệc") {
                return { ...prev, name: e.target.value }
            } else if (name === "Số điện thoại") {
                return { ...prev, phone: e.target.value }
            } else {
                const value = e.target.value.replace(/[^0-9]/g, '');
                if (value === "") return { ...prev, countGuest: 0 }
                else return { ...prev, countGuest: e.target.value }
            }
        })
    }
    const handlBlur = (e) => {
        switch (name) {
            case "Chủ tiệc":
                if (isRequired(e.target.value)) {
                    setNotify(prev => ({ ...prev, name: "Vui lòng nhập tên khách hàng" }))
                } else {
                    setNotify(prev => ({ ...prev, name: "" }))
                }
                break;
            case "Số điện thoại":
                if (isRequired(e.target.value)) {
                    setNotify(prev => ({ ...prev, phone: "Vui lòng nhập số điện thoại" }))
                }
                else if (isPhoneNumber(e.target.value)) {
                    setNotify(prev => ({ ...prev, phone: "Vui lòng nhập đúng số điện thoại" }))
                }
                else {
                    setNotify(prev => ({ ...prev, phone: "" }))
                }
                break;
            case "Số người":
                if (isRequired(e.target.value)) {
                    setNotify(prev => ({ ...prev, countGuest: "Vui lòng nhập số người" }))
                }
                else if (isNumber(e.target.value)) {
                    setNotify(prev => ({ ...prev, countGuest: "Vui lòng nhập đúng số" }))
                }
                else {
                    setNotify(prev => ({ ...prev, countGuest: "" }))
                }
                break;

            default:
                break;
        }

    }
    return (
        <TextField
            id="outlined-basic"
            label={name}
            variant="outlined"
            onChange={(e) => handleChangeOrder(e)}
            onBlur={e => handlBlur(e)}
            onKeyPress={name === "Số người" || name === "Số điện thoại" ? (event) => { !(/^[0-9]/.test(event.key)) && event.preventDefault() } : ""}
            value={values}
            size={size}
        />
    );
}
export function ModalLogin() {
    return (
        <div className={styles.WrapLogin}>
            <h2 className="modalLogin_title">Bạn phải đăng nhập để thực hiện chức năng này</h2>
            <h2 className="modalLogin_title">Chuyển đến trang Đăng nhập</h2>
            <div className="d-flex justify-content-between align-items-center">
                <Link to="/dang-nhap" type="button" className=" btn--login">Đăng nhập</Link>
            </div>
        </div>
    )
}
export default OrderItem