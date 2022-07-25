import React, { useContext } from 'react'
import RectangleTable from '../Table/RectangleTable';
import Table from '../Table/Table'
import { ModalLogin } from './OrderItem'
import styles from "./TableOption.scss"
import { AuthContext } from '../../../contexts/AuthenContext';
import StepperMui from "./StepperMui"
import { getToken } from '../../../utils/Common';
import InfomationCart from './InfomationCart';
function TableOption({ id, status, type }) {

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
        setModalShow(1)
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
                {modalShow && <div className="wrap_modal-content" >
                    <div className="modal_content--item" onClick={e => handleClick(e)} >
                        <div className={`modal-content ${!getToken() && 'modal_mini'}`} >
                            {
                                getToken() ? <StepperMui setModalShow={setModalShow}  idTable={id} user={infoUser} /> : <ModalLogin />
                            }
                        </div>
                       <InfomationCart/>
                    </div>
                </div> }
            </div>
        </div>
    )
}

export default TableOption