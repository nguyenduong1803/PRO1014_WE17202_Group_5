import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import OrderItem from './OrderItem';
import style from "./TableOption.scss"
import { selectCart, selectOrderTable } from '../../../redux/selector';
import { useDispatch, useSelector } from 'react-redux';
import { createOrderTable, updateOrderTable } from '../../../redux/SliceReducer/OrderTableSlice';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';

const steps = [
    {
        label: 'Thông tin đặt bàn',
        description: ``,
    },
    {
        label: 'Chọn món ăn',
        description:
            'Chọn món ăn từ menu nhà hàng',
    },
    {
        label: 'Tiến hành đặt',
        description: ``,
    },
];

export default function StepperMui({ idTable, user, setModalShow }) {
    const [activeStep, setActiveStep] = React.useState(0);
    const dispatch = useDispatch()
    const orders = useSelector(selectOrderTable)
    const selectCarts = useSelector(selectCart)
    const [order, setOrder] = React.useState({
        tableId: orders.tableId,
        name: orders.name,
        phone: orders.phone,
        countGuest: orders.countGuest,
        celendar: orders.celendar,
    });
    const handleOrder = () => {
        dispatch(createOrderTable(order))
        setActiveStep((prevActiveStep) => prevActiveStep + 1);

    };
    const handlNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);

    };
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    const handleReset = () => {
        setActiveStep(0);

    };
    
    const handleOrderTable = () => {
        dispatch(updateOrderTable(order))
        setActiveStep(1);
    }
    const handleAddProduct = () => {
        setModalShow(false)
    }
    React.useEffect(()=>{
      if(idTable)  setOrder(prev=>({...prev,tableId:idTable}))
    },[])
    return (
        <>
            <Box sx={{ maxWidth: "100%" }}>
                <div className="stepper_modal-close" onClick={() => setModalShow(false)}><CloseIcon /></div>
                <Stepper activeStep={activeStep} orientation="vertical">
                    {steps.map((step, index) => (
                        <Step key={step.label}>
                            <StepLabel
                                optional={
                                    index === 2 ? (
                                        <Typography variant="caption">Xác nhận</Typography>
                                    ) : null
                                }
                            >
                                {step.label}
                            </StepLabel>
                            <StepContent >
                                <Typography>{step.description}</Typography>
                                {index === 0 ? (<OrderItem order={order} setOrder={setOrder} idTable={idTable} />) :
                                    index === 1 ? (<Link onClick={handleAddProduct} className="checkout-btn " to="/menu">Thêm món ăn</Link>) :
                                        index === 2 ? <InfoOrder order={order} /> : ""}
                                <Box sx={{ mb: 2 }}>
                                    <div>
                                        {index === 0 ?
                                            (<Button
                                                variant="contained"
                                                onClick={handleOrderTable}
                                                sx={{ mt: 1, mr: 1 }}
                                            >
                                                Tiếp tục
                                            </Button>) :
                                            index === 1 ?
                                                <Button
                                                    variant="contained"
                                                    sx={{ mt: 1, mr: 1 }}
                                                    onClick={handlNext}
                                                >
                                                    Bỏ qua
                                                </Button> :
                                                <Button
                                                    variant="contained"
                                                    onClick={handleOrder}
                                                    sx={{ mt: 1, mr: 1 }}
                                                >
                                                    Đặt bàn
                                                </Button>
                                        }
                                        <Button
                                            disabled={index === 0}
                                            onClick={handleBack}
                                            sx={{ mt: 1, mr: 1 }}
                                        >
                                            Quay lại
                                        </Button>
                                    </div>
                                </Box>
                            </StepContent>
                        </Step>
                    ))}
                </Stepper>
                {activeStep === steps.length && (
                    <Paper square elevation={0} sx={{ p: 3 }}>
                        <Typography>Bạn đã đặt bàn thành công</Typography>
                        <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                            Sửa Thông tin
                        </Button>
                    </Paper>
                )}
            </Box>

        </>
    );
}
const InfoOrder = ({ order }) => {
    return (
        <>
            <h3 className="infoOrder__title-head">Bàn : {order.tableId} </h3>
            <h3 className="infoOrder__title-head">Chủ tiệc :{order.name}  </h3>
            <h3 className="infoOrder__title-head">Số điện thoại :{order.phone}  </h3>
            <h3 className="infoOrder__title-head">Thời gian :{order.celendar}  </h3>
            <h3 className="infoOrder__title-head">Số khách :{order.countGuest}  </h3>
        </>
    )
}
