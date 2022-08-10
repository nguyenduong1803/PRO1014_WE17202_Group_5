import React, { useContext } from 'react'
import RectangleTable from '../Table/RectangleTable';
import Table from '../Table/Table'
import { ModalLogin } from './OrderItem'
import styles from "./TableOption.scss"
import { AuthContext } from '../../../contexts/AuthenContext';
import StepperMui from "./StepperMui"
import { getToken } from '../../../utils/Common';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import ChooseProduct from './ChooseProduct';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function TableOption({ id, status, type, name }) {
    const [state, setState] = React.useState({
        open: false,
        vertical: 'bottom', horizontal: 'right'
    });
    const { vertical, horizontal } = state;

    const [activeStep, setActiveStep] = React.useState(0);
    const [notifyOrder, setNotifyOrder] = React.useState({ type: "info", title: "Bàn đã có khách đặt " });
    const [modalShow, setModalShow] = React.useState(false)
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
    const handleClose = () => {
        setModalShow(0)
    }

    return (
        <div className="modal-container" onClick={handleShowOrder}>
            {/* <input id="modal-toggle" type="checkbox" /> */}
            {type === "circle" ?
                <Table
                    colors={color}
                    name={`A-${name}`} /> :
                <RectangleTable
                    colors={color}
                    name={name}
                />}
            {modalShow && status === 3 ? <div className="wrap_modal-content" >
                <div className="modal_content--item" onClick={e => handleClick(e)} >
                    <div className={`modal-content ${!getToken() && 'modal_mini'} ${activeStep === 1 && "active"}`} >
                        {
                            getToken() ? <StepperMui setActiveStep={setActiveStep} activeStep={activeStep} setModalShow={setModalShow} id={id} setNotifyOrder={setNotifyOrder} /> : <ModalLogin />
                        }
                    </div>
                    <ChooseProduct className={`${activeStep === 1 && "active"}`} />
                </div>
            </div> : modalShow ? <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={true}
                onClose={handleClose}
                message="I love snacks"
                key={vertical + horizontal}
            >
                <Alert severity={notifyOrder.type}>{notifyOrder.title}</Alert>
            </Snackbar> : ""}

        </div>
    )
}

export default TableOption