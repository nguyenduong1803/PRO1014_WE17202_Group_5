import React from 'react'
import LayoutSite from '../../../components/Site/LayoutSite/LayoutSite'
import CategoryTable from '../../../components/Site/Table/CategoryTable'
import ChooseProduct from '../../../components/Site/TableOption/ChooseProduct'
import { ModalLogin } from '../../../components/Site/TableOption/OrderItem'
import StepperMui from '../../../components/Site/TableOption/StepperMui'
import { getToken } from '../../../utils/Common'
import styles from "./OrderTable.module.css"
function OrderParty() {
    const [modalShow, setModalShow] = React.useState(false)
    const [activeStep, setActiveStep] = React.useState(0);
    const [notifyOrder, setNotifyOrder] = React.useState({ type: "info", title: "Bàn đã có khách đặt " });
    const handleShowOrder = () => {
        setModalShow(1)
    }
    const handleClick = (e) => {
        e.stopPropagation()
    }
    const handleClose = () => {
        setModalShow(0)
    }
    return (
        <LayoutSite>
            <div className={styles.wrapParty}>
                <CategoryTable />
                <div>
                    <div className={styles.wrapParty_content}>
                        <p onClick={handleShowOrder} className={styles.btn}>Đặt Tiệc</p>
                    </div>
                    {/* <OrderPartyContent/> */}
                    {modalShow ? <div className="wrap_modal-content" >
                        <div className="modal_content--item" onClick={e => handleClick(e)} >
                            <div className={`modal-content ${!getToken() && 'modal_mini'} ${activeStep === 1 && "active"}`} >
                                {
                                    getToken() ? <StepperMui setActiveStep={setActiveStep} activeStep={activeStep} setModalShow={setModalShow} id={12} setNotifyOrder={setNotifyOrder} type={"party"} /> : <ModalLogin />
                                }
                            </div>
                            <ChooseProduct className={`${activeStep === 1 && "active"}`} />
                        </div>
                    </div> : modalShow ? <h2>notify</h2> : ""}
                </div>
            </div>
        </LayoutSite>
    )
}

export default OrderParty