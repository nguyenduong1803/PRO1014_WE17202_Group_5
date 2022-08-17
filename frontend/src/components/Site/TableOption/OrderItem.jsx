import React from 'react'
import styles from "./TableOption.module.css";
import CelendarOption from '../Calendar/CelendarOption';
import { FormControl, TextField } from '@mui/material';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectTableActive } from '../../../redux/selector';
import { isPhoneNumber, isRequired } from '../../../utils/Validate';
import SelectMuiltiMui from '../../Admin/SelectMui/SelectMuiltiMui';

function OrderItem({ order, setOrder, setNotify, notify, id, type, nameRoom }) {
    const tableActive = useSelector(selectTableActive)
    let totalSitting
    const handleNote = (e) => {
        setOrder(prev => ({ ...prev, note: e.target.value }))
    }
    const handleUserOfTable = (e) => {
        setOrder(prev => ({ ...prev, userOfTable: e.target.value }))
    }

    if (type === "party") {

    } else {
        const listTable = [];
        tableActive.forEach(table => {
            order.tableId?.forEach(tb => {
                if (table.id === Number(tb)) {
                    listTable.push(table)
                }
            })
        })
        totalSitting = listTable.reduce((init, value) => {
            return init + value.total_user_sitting
        }, 0)
    }
    React.useEffect(() => {
        if (type === "vip") {
            setOrder(prev => ({ ...prev, tableId: [id] }))
        }
    }, [])
    return (
        <section className="section" id="order">
            <div className="order-info">
                <div className="address">
                    {
                        type === "party" ?
                            <select
                                value={order.userOfTable}
                                onChange={(e) => handleUserOfTable(e)}>
                                <option disabled>Chọn số khách trong 1 bàn</option>
                                <option value="6">Bàn 6 khách</option>
                                <option value="8">Bàn 8 khách</option>
                                <option value="10">Bàn 10 khách</option>
                                <option value="12">Bàn 12 khách</option>
                            </select>
                            : type === "vip" ? <h2 >Phòng {nameRoom}</h2> :
                                <SelectMuiltiMui label=" Chọn nhiều bàn" listName={tableActive} id={id} setOrder={setOrder} order={order} />
                    }
                </div>
                <div className="delivery">
                    <span className="time"><CelendarOption values={order.celendar} setOrder={setOrder} setNotify={setNotify} /></span>
                </div>
            </div>
            <p className="orderitem_notify">{notify.celendar}</p>
            {
                type === "party" ?
                    <FormControl sx={{ margin: "8px 0", width: '100%' }} >
                        <InputField name="Số bàn đặt" size="medium" values={order.countTable} setOrder={setOrder} setNotify={setNotify} />
                        <p className="orderitem_notify">{notify.countTable}</p>
                    </FormControl>
                    : <p className="orderitem_totalUser">Sức chứa :khoảng {totalSitting} khách</p>
            }

            <FormControl sx={{ margin: "8px 0", width: '100%' }} >
                <InputField name="Chủ tiệc" size="medium" values={order.name} setOrder={setOrder} setNotify={setNotify} />
                <p className="orderitem_notify">{notify.name}</p>
            </FormControl>
            <FormControl sx={{ margin: "8px 0", width: '100%' }} >
                <InputField name="Số điện thoại" size="medium" values={order.phone} setOrder={setOrder} setNotify={setNotify} />
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
            } else if (name === "Số bàn đặt") {
                return { ...prev, countTable: e.target.value }

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