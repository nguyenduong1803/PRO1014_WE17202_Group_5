import { Box, Rating } from '@mui/material'
import React from 'react'
import LayoutSite from '../../../components/Site/LayoutSite/LayoutSite'
import CategoryTable from '../../../components/Site/Table/CategoryTable'
import ChooseProduct from '../../../components/Site/TableOption/ChooseProduct'
import { ModalLogin } from '../../../components/Site/TableOption/OrderItem'
import StepperMui from '../../../components/Site/TableOption/StepperMui'
import { getToken } from '../../../utils/Common'
import styles from "./OrderTable.module.css"
function OrderVip() {
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
            <div className={styles.wrapRoomVip}>
                <CategoryTable />
                <div>
                    <div className={"container-fluid"}>
                        <div className="row">
                            <div className="col-lg-3">
                                <div className={styles.roomVipItem}>
                                    <img className={styles.roomVip_img} src="https://peridotgrandhotel.com/files/images/Res-Spa-Shop/asia-taste-restaurant/Private-Vip-Dinning-room-4.jpg" alt="" />
                                    <BasicRating/>
                                    <h4 className={styles.roomVip_title}>Phòng Vip 1</h4>
                                    <div className={styles.btnOrderVip}>Đặt Phòng</div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className={styles.roomVipItem}>
                                    <img className={styles.roomVip_img} src="https://b.zmtcdn.com/data/pictures/2/18820582/bc88436ce22bc938db352639c4114b6b.jpg" alt="" />
                                    <BasicRating/>
                                    <h4 className={styles.roomVip_title}>Phòng Vip 2</h4>
                                    <div className={styles.btnOrderVip}>Đặt Phòng</div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className={styles.roomVipItem}>
                                    <img className={styles.roomVip_img} src="https://res.cloudinary.com/indonesiadesign/image/upload/ar_1:1,f_auto,fl_progressive,q_auto:best,w_1080/2016/09/IMG_7643.jpg" alt="" />
                                    <BasicRating/>
                                    <h4 className={styles.roomVip_title}>Phòng Vip 3</h4>
                                    <div className={styles.btnOrderVip}>Đặt Phòng</div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className={styles.roomVipItem}>
                                    <img className={styles.roomVip_img} src="https://b.zmtcdn.com/data/pictures/3/18389033/7b632087cbf96f2acffba06d46053938_featured_v2.jpg" alt="" />
                                    <BasicRating/>
                                    <h4 className={styles.roomVip_title}>Phòng Vip 4</h4>
                                    <div className={styles.btnOrderVip}>Đặt Phòng</div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                            </div>


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