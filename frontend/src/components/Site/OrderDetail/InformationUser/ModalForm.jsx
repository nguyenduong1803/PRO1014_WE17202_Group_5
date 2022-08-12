import React from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import styles from "./InformationUser.module.css";
import SelectMultiTable from './SelectMultiTable';
import CelendarOption from '../../Calendar/CelendarOption';
import { updateOrder } from '../../../../redux/SliceReducer/OrderTableSlice';
import { useDispatch } from 'react-redux';
import ToastMess from '../../ToastMess/ToastMess';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function ModalForm({ open, handleClose, order, setOrder, setNotify, notify, id }) {
    const dispatch = useDispatch()
    const [state, setState] = React.useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateOrder({ id, order }))
        handleClose()
        setState(true)
    }
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                inputProps={{ MenuProps: { disableScrollLock: true } }}
            >
                <Box sx={style}>
                    <h4 className={styles.formTitle}>Sửa thông tin </h4>
                    <form onSubmit={e => handleSubmit(e)}>
                        <SelectMultiTable setOrder={setOrder} />
                        <div className={`${styles.wrapCelandar} form-group`}>
                            <CelendarOption
                                setNotify={setNotify}
                                setOrder={setOrder}
                                values={order.celendar}
                            />
                        </div>
                        <p>{notify.celendar}</p>
                        <div className={`${styles.wrapForm} form-group`}>
                            <input onChange={(e) => setOrder(prev => ({ ...prev, name: e.target.value }))} value={order.name} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Tên khách hàng" />
                        </div>
                        <div className={`${styles.wrapForm} form-group`}>
                            <input onChange={(e) => setOrder(prev => ({ ...prev, phone: e.target.value }))} value={order.phone} className="form-control" id="exampleInputPassword1" placeholder="Số điện thoại" />
                        </div>
                        <div className={`${styles.wrapForm} form-group`}>
                            <input onChange={(e) => setOrder(prev => ({ ...prev, note: e.target.value }))} value={order.note} className="form-control" id="exampleInputPassword1" placeholder="Ghi Chú" />
                        </div>
                        <button type="submit" className={`${styles.btnSubmit}`}>Cập nhật</button>
                    </form>
                </Box>

            </Modal>
            <ToastMess
                notify="Đã sửa thành công"
                setState={setState}
                state={state}
            />
        </div>
    );
}