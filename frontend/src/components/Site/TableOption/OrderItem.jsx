import React from 'react'
import styles from "./TableOption.css"
import CelendarOption from '../Calendar/CelendarOption';
// import DeleteOutlineIcon from '@mui/icons-material/HighlightOff';
import { FormControl, TextField } from '@mui/material';
import { Link } from "react-router-dom";
import {  useSelector} from 'react-redux';
import { selectTableActive } from '../../../redux/selector';

function OrderItem({order,setOrder,idTable}) {
        const tableActive = useSelector(selectTableActive)
    console.log(tableActive);
    return (
        <section className="section" id="order">
            {/* <div className="section-title">My Order&nbsp;😎</div> */}
            <div className="order-info">
                <div className="address">
                    <div className="address-name">Bàn {idTable||order.tableId}</div>
                    <select className="form-select form__edit-cart" aria-label="Default select example" defaultValue={order.orderId}>
                        <option selected>Đổi Bàn</option>
                        {tableActive.map((table)=> <option value="A-2">{table.name}</option>)}
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
                    <span className="time"><CelendarOption values={order.celendar} setOrder={setOrder} /></span>
                </div>
            </div>
            <FormControl sx={{ margin: "8px 0", width: '100%' }} >
                <InputField name="Chủ tiệc"  size="small" values={order.name} setOrder={setOrder} />
            </FormControl>
            <FormControl sx={{ margin: "8px 0", width: '100%' }} >
                <InputField name="Số điện thoại" size="small" values={order.phone} setOrder={setOrder} />
            </FormControl>
            <FormControl sx={{ margin: "8px 0", width: '100%' }} >
                <InputField name="Số người" setOrder={setOrder} size="small" values={order.countGuest} />
            </FormControl>
            <div className="buy-action">
                <div className="person-number-input">
                
                </div>
             
            </div>
        </section>
    )
}

function InputField({ name, setOrder, values,size }) {
    const handleChangeOrder = (e) => {
        setOrder(prev => {
            if (name === "Chủ tiệc") {
                return { ...prev, name: e.target.value }
            } else if (name === "Số điện thoại") {
                return { ...prev, phone: e.target.value }
            } else {
                return { ...prev, countGuest: e.target.value }
            }
        })
    }
    return (
        <TextField
            id="outlined-basic"
            label={name}
            variant="outlined"
            onChange={(e) => handleChangeOrder(e)}
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