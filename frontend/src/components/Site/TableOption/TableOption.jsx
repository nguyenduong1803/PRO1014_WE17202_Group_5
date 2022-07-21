import React, { useContext } from 'react'
import RectangleTable from '../Table/RectangleTable';
import Table from '../Table/Table'
import OrderItem, { ModalLogin } from './OrderItem'
import styles from "./TableOption.scss"
import { useSelector } from "react-redux"
import { isSuccess } from '../../../redux/selector';
import { AuthContext } from '../../../contexts/AuthenContext';
function DrawerMui({ id, status, type }) {
    const isLogin = useSelector(isSuccess);
    const infoUser = useContext(AuthContext)
    let color;
    if (Number(status) === 1) {
        color = { color: "#A0522D", colorblur: "#FF4500" }
    } else if (Number(status) === 2) {
        color = { color: "#A0522D", colorblur: "#FFBF00" }
    } else {
        color = { color: "#A0522D", colorblur: "#228B22" }
    }
    const handleShowOrder = () => {
        console.log(id)
    }
    return (
        <div>
            <div className="modal-container" onClick={handleShowOrder}>
                <input id="modal-toggle" type="checkbox" />
                <label htmlFor="modal-toggle" className="label-toggle">
                    {type === "circle" ?
                        <Table
                            colors={color}
                            name={id} /> :
                        <RectangleTable
                            colors={color}
                            name={id}

                        />}
                </label>

                <label className="modal-backdrop" for="modal-toggle"></label>
                <div className={`modal-content ${!isLogin && 'modal_mini'}`}>
                    <label className="modal-close" for="modal-toggle">&#x2715;</label>
                    {
                        isLogin ? <OrderItem idTable={id} user={infoUser} /> : <ModalLogin />
                    }
                    <label className="modal-content-btn" for="modal-toggle"></label>
                </div>
            </div>
        </div>
    )
}

export default DrawerMui