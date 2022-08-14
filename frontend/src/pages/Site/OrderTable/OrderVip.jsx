import { Box, Rating } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import LayoutSite from '../../../components/Site/LayoutSite/LayoutSite'
import CategoryTable from '../../../components/Site/Table/CategoryTable'
import ChooseProduct from '../../../components/Site/TableOption/ChooseProduct'
import { ModalLogin } from '../../../components/Site/TableOption/OrderItem'
import StepperMui from '../../../components/Site/TableOption/StepperMui'
import { selectVipRoom } from '../../../redux/selector'
import { getToken } from '../../../utils/Common'
import styles from "./OrderTable.module.css"

const listRoomVip = [
    {
        img: "",
        name: "Phòng VIP 1",
        limit: 20
    },
    {
        img: "",
        name: "Phòng VIP 3",
        limit: 30
    },
    {
        img: "",
        name: "Phòng VIP 1",
        limit: 20
    },
    {
        img: "",
        name: "Phòng VIP 4",
        limit: 15
    },


]
function OrderVip() {
    const [modalShow, setModalShow] = React.useState(false)
    const [activeStep, setActiveStep] = React.useState(0);
    const [notifyOrder, setNotifyOrder] = React.useState({ type: "info", title: "Bàn đã có khách đặt " });
    const listVipRoom= useSelector(selectVipRoom)
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
            <div className={styles.wrapRoomVip}>
                <CategoryTable active="Phòng VIP" />
                <div>
                    <div className={"container-fluid"}>
                        <div className="row">
                            <h2 className={styles.titleRoom}>Danh sách phòng</h2>
                            {listVipRoom&&
                                listVipRoom.map(room => (
                                    <div className="col-lg-3" key={room.id}>
                                        <div className={styles.roomVipItem}>
                                            <img className={styles.roomVip_img} src={room.img} alt="" />
                                            <BasicRating />
                                            <h4 className={styles.roomVip_title}>Phòng VIP {room.index_table}</h4>
                                            <p>Sức chứa khoảng {room.total_user_sitting} khách</p>
                                            <div className={styles.btnOrderVip}>Đặt Phòng</div>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
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

function BasicRating() {
    const [value, setValue] = React.useState(5);
    return (
        <>
            <Box
                component="span"
                sx={{
                    '& > legend': { mt: 2 },
                }}
            >
                <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                />

            </Box>
        </>
    );
}
export default OrderVip