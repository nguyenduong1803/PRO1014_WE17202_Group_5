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
import { selectProductOrder, selectOrderTable, selectProducts, selectStatusOrder } from '../../../redux/selector';
import { useDispatch, useSelector } from 'react-redux';
import { createOrder, updateOrderTable } from '../../../redux/SliceReducer/OrderTableSlice';
import CloseIcon from '@mui/icons-material/Close';
import ProductCartTable from './ProductCartTable';
import { isFutureDate, isPhoneNumber, isRequired } from '../../../utils/Validate';

const steps = [
    {
        label: 'Thông tin đặt bàn',
        description: ``,
    },
    {
        label: 'Chọn món ăn',
        description:
            'Các món ăn đã chọn',
    },
    {
        label: 'Tiến hành đặt',
        description: ``,
    },
];

export default function StepperMui({ id, setModalShow, activeStep, setActiveStep, setNotifyOrder, type }) {
    const dispatch = useDispatch()
    const orders = useSelector(selectOrderTable)
    const orderItems = useSelector(selectProductOrder)

    const [notify, setNotify] = React.useState({
        name: "",
        phone: "",
        celendar: "",
        countGuest: "",
        validateTime: "",
        note: "",
        countTable: ""
    })
    const [order, setOrder] = React.useState({
        tableId: [orders.tableId || id],
        name: orders.name,
        phone: orders.phone,
        countGuest: orders.countGuest,
        celendar: orders.celendar,
        note: orders.note,
        countTable: orders.countTable
    });

    const handlNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    // step 2
    const handleOrderTable = () => {
        if (isRequired(order.name)) {
            setNotify(prev => ({ ...prev, name: "Vui lòng nhập tên khách hàng" }))
        } else {
            setNotify(prev => ({ ...prev, name: "" }))
        }

        if (isRequired(order.phone)) {
            setNotify(prev => ({ ...prev, phone: "Vui lòng nhập số điện thoại" }))
        }
        else if (isPhoneNumber(order.phone)) {
            setNotify(prev => ({ ...prev, phone: "Vui lòng nhập đúng số điện thoại" }))
        }
        else {
            setNotify(prev => ({ ...prev, phone: "" }))
        }
        if (isRequired(order.validateTime)) {
            setNotify(prev => ({ ...prev, celendar: "Vui lòng chọn thời gian" }))
        } else if (isFutureDate(order.validateTime)) {
            setNotify(prev => ({ ...prev, celendar: "Vui lòng chọn thời gian lớn hơn" }))
        } else {
            setNotify(prev => ({ ...prev, celendar: "" }))
        }
        const isFormSuccess = Object.entries(notify).every(([key, value]) => value === "")
        const isFormSuccessOrder = Object.entries(order).every(([key, value]) => value !== "")
        if (isFormSuccess && isFormSuccessOrder) {
            dispatch(updateOrderTable(order))
            setActiveStep(1);
        }
        // setActiveStep(1);
    }

    // step3
    const handleOrder = () => {
        const productId = [];
        const quantitys = []
        orderItems.forEach(value => {
            productId.push(value.id)
            quantitys.push(value.quantity)
        })
        dispatch(createOrder({ order, productId, quantitys }))
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setNotifyOrder({ type: "success", title: "đặt bàn thành công,nhà hàng sẽ sớm liên hệ lại với bạn" })
    };
    const handleReset = () => {
        setActiveStep(0);
    };

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
                                {index === 0 ? (<OrderItem order={order} setOrder={setOrder} id={id} setNotify={setNotify} notify={notify} type={type} />) :
                                    index === 1 ? (<InfoFood />) :
                                        index === 2 ? <InfoOrder order={order} type={type} /> : ""}
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
                                                    Tiếp tục
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
                                        {/* <h2 className="stepper__notify">Vui lòng chọn lại thời gian</h2> */}
                                    </div>
                                </Box>
                            </StepContent>
                        </Step>
                    ))}
                </Stepper>
                {activeStep === steps.length && (
                    <Paper square elevation={0} sx={{ p: 3 }}>
                        <Typography>{"Đang xác thực"}</Typography>
                        <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                            Sửa Thông tin
                        </Button>
                    </Paper>
                )}
            </Box>
        </>
    );
}
const InfoOrder = ({ order, type }) => {
    return (
        <>
            {
                type === "party" ?
                    <div>
                        <h3 className="infoOrder__title-head">Số bàn : {order.countTable} </h3>
                        <h3 className="infoOrder__title-head">Số khách trong 1 bàn : {order.userOfTable} </h3>
                    </div>
                    :
                    <div>
                        <h3 className="infoOrder__title-head">Bàn : {order.tableId} </h3>
                        <h3 className="infoOrder__title-head">Số khách :{order.countGuest}  </h3>
                    </div>
            }
            <h3 className="infoOrder__title-head">Chủ tiệc :{order.name}  </h3>
            <h3 className="infoOrder__title-head">Số điện thoại :{order.phone}  </h3>
            <h3 className="infoOrder__title-head">Thời gian :{order.celendar}  </h3>
        </>
    )
}
const InfoFood = () => {
    const orders = useSelector(selectProductOrder)
    const products = useSelector(selectProducts)
    let listOrder = [];
    products.forEach(product => {
        orders.forEach(order => {
            if (order.id === product.id) {
                const newObj = { ...product, quantity: order.quantity }
                listOrder.push(newObj)
            }
        })
    })
    return (
        <div className="wraplistCart_order ">
            {listOrder && listOrder.map((product, index) => {
                return (
                    <ProductCartTable key={index} name={product.name} img={product.listsImg[0]} price={product.price} quantity={product.quantity} id={product.id} />
                )
            })}
        </div>
    )
}
