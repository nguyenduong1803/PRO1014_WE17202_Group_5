import React from 'react'
import styles from "./TableOption.module.css";
import CelendarOption from '../Calendar/CelendarOption';
import { FormControl, TextField } from '@mui/material';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectTableActive } from '../../../redux/selector';
import {  isPhoneNumber, isRequired } from '../../../utils/Validate';
import SelectMuiltiMui from '../../Admin/SelectMui/SelectMuiltiMui';

function OrderItem({ order, setOrder, setNotify, notify, id }) {
    const tableActive = useSelector(selectTableActive)

    const handleNote = (e) => {
        setOrder(prev => ({ ...prev, note: e.target.value }))
    }
    const listTable = [];
    tableActive.forEach(table => {
        order.tableId.forEach(tb => {
            if (table.id === Number(tb)) {
                listTable.push(table)
            }
        })
    })
    const totalSitting = listTable.reduce((init, value) => {
        return init + value.total_user_sitting
    }, 0)
    return (
        <section className="section" id="order">
            <div className="order-info">
                <div className="address">
                    <SelectMuiltiMui label=" Chọn nhiều bàn" listName={tableActive} position={"A"} id={id} setOrder={setOrder} order={order} />
                </div>
                <div className="delivery">
                    {/* <div className="delivery-time">
                        <div className="btn time-btn">
                            <svg t="1586139290823" className="clock" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="2356" width="18" height="18">
                                <path
                                    d="M512 42.65984q95.66208 0 182.49728 37.1712t149.66784 100.00384 100.00384 149.66784 37.1712 182.49728-37.1712 182.49728-100.00384 149.66784-149.66784 100.00384-182.49728 37.1712-182.49728-37.1712-149.66784-100.00384-100.00384-149.66784-37.1712-182.49728 37.1712-182.49728 100.00384-149.66784 149.66784-100.00384 182.49728-37.1712zM512 128q-78.00832 0-149.17632 30.49472t-122.49088 81.83808-81.83808 122.49088-30.49472 149.17632 30.49472 149.17632 81.83808 122.49088 122.49088 81.83808 149.17632 30.49472 149.17632-30.49472 122.49088-81.83808 81.83808-122.49088 30.49472-149.17632-30.49472-149.17632-81.83808-122.49088-122.49088-81.83808-149.17632-30.49472zM512 213.34016q17.67424 0 30.16704 12.4928t12.4928 30.16704l0 238.32576 115.67104 115.32288q12.32896 12.32896 12.32896 30.33088t-12.32896 30.33088-30.33088 12.32896-30.33088-12.32896l-128-128q-12.32896-12.32896-12.32896-30.33088l0-256q0-17.67424 12.4928-30.16704t30.16704-12.4928z"
                                    p-id="2357"></path>
                            </svg>
                        </div>
                        <span className="delivery-choose-time">30s</span>
                    </div> */}
                    <span className="time"><CelendarOption values={order.celendar} setOrder={setOrder} setNotify={setNotify} /></span>
                </div>
            </div>
            <p className="orderitem_notify">{notify.celendar}</p>
            <p className="orderitem_totalUser">Sức chứa :khoảng {totalSitting} khách</p>

            <FormControl sx={{ margin: "8px 0", width: '100%' }} >
                <InputField name="Chủ tiệc" size="small" values={order.name} setOrder={setOrder} setNotify={setNotify} />
                <p className="orderitem_notify">{notify.name}</p>
            </FormControl>
            <FormControl sx={{ margin: "8px 0", width: '100%' }} >
                <InputField name="Số điện thoại" size="small" values={order.phone} setOrder={setOrder} setNotify={setNotify} />
                <p className="orderitem_notify">{notify.phone}</p>
            </FormControl>
            <FormControl sx={{ margin: "8px 0", width: '100%' }} >
                <textarea className="textarea__item" onChange={handleNote} id="w3review" value={order.note} name="w3review" rows="4" cols="40" placeholder="Ghi chú"></textarea>
            </FormControl>
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
            } else
                return {
                    ...prev, note: e.target.value
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