import React, { useContext } from 'react'
import RectangleTable from '../Table/RectangleTable';
import Table from '../Table/Table'
import OrderItem, { ModalLogin } from './OrderItem'
import styles from "./TableOption.scss"
import { useSelector } from "react-redux"
import { isSuccess } from '../../../redux/selector';
import { AuthContext } from '../../../contexts/AuthenContext';
function TableOption({ id, status, type }) {
    const isLogin = useSelector(isSuccess);
    const [modalShow, setModalShow] = React.useState(false)
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
        setModalShow(!modalShow)
    }
    const handleClick = (e) => {
        e.stopPropagation()
    }
    return (
        <div>
            <div className="modal-container" onClick={handleShowOrder}>
                {/* <input id="modal-toggle" type="checkbox" /> */}
                {type === "circle" ?
                    <Table
                        colors={color}
                        name={id} /> :
                    <RectangleTable
                        colors={color}
                        name={id}

                    />}
                {modalShow ? <div className="wrap_modal-content" >
                    <div className={`modal-content ${!isLogin && 'modal_mini'}`} onClick={e => handleClick(e)}>
                        {
                            isLogin ? <OrderItem idTable={id} user={infoUser} /> : <ModalLogin />
                        }

                    </div>
                </div> : ""}
            </div>
        </div>
    )
}

export default TableOption