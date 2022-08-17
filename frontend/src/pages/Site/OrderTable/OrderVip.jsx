import { Alert, Box, Rating, Snackbar } from '@mui/material'
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

function OrderVip() {
    const [modalShow, setModalShow] = React.useState(false)
    const [activeStep, setActiveStep] = React.useState(0);
    const [ids, setIds] = React.useState();
    const [notifyOrder, setNotifyOrder] = React.useState({ type: "info", title: "Bàn đã có khách đặt " });
    const listVipRoom = useSelector(selectVipRoom)
    const handleShowOrder = (id) => {
        setIds(id)
        setModalShow(true)
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
                            {listVipRoom &&
                                listVipRoom.map(room => (
                                    <div style={(room.status === 2 || room.status === 1) ? { filter: "grayscale(80%)" } : {}} className="col-lg-3" key={room.id}>
                                        <div className={styles.roomVipItem}>
                                            <img className={styles.roomVip_img} src={room.img} alt="" />
                                            <BasicRating />
                                            <h4 className={styles.roomVip_title}>Phòng VIP {room.index_table}</h4>
                                            <p>Sức chứa khoảng {room.total_user_sitting} khách</p>
                                            {(room.status === 3) ? <div onClick={() => handleShowOrder({ id: room.id, name: room.index_table })} className={styles.btnOrderVip}>Đặt Phòng</div> :
                                                <div className={`${styles.btnOrderVip} ${styles.disible}`}>Đã có khách đặt</div>
                                            }
                                        </div>
                                    </div>
                                ))
                            }
                            {modalShow ? <div className="wrap_modal-content" >
                                <div className="modal_content--item" onClick={e => handleClick(e)} >
                                    <div className={`modal-content ${!getToken() && 'modal_mini'} ${activeStep === 1 && "active"}`} >
                                        {
                                            getToken() ? <StepperMui setActiveStep={setActiveStep} activeStep={activeStep}
                                                setModalShow={setModalShow} id={ids.id} setNotifyOrder={setNotifyOrder}
                                                type="vip" nameRoom={ids.name} /> : <ModalLogin />
                                        }
                                    </div>
                                    <ChooseProduct className={`${activeStep === 1 && "active"}`} />
                                </div>
                            </div> : modalShow ? <Snackbar
                                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                                open={true}
                                onClose={handleClose}
                                message="I love snacks"
                                key={"bottom" + "right"}
                            >
                                <Alert severity={notifyOrder.type}>{notifyOrder.title}</Alert>
                            </Snackbar> : ""}
                        </div>
                    </div>
                    {/* <OrderPartyContent/> */}

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