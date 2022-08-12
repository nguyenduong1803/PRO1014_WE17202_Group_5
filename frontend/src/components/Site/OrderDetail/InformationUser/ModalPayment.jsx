import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ToastMess from '../../ToastMess/ToastMess';
import { formatMoney } from '../../../../extensions/formatMoney';
import { useDispatch } from 'react-redux';
import { updateOrder } from '../../../../redux/SliceReducer/OrderTableSlice';

export default function ModalPayment({ setOpenPay, openPay, orders, id, order }) {
  const [state, setState] = React.useState(false)
  const dispatch = useDispatch()
  const handleClose = () => {
    setOpenPay(false);
  };
  const handlePayment = () => {
    dispatch(updateOrder({ id, order }))
    setOpenPay(false);
    setState(true)

  };
  return (
    <div>
      <Dialog
        open={openPay}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Bạn có muốn thanh toán bàn ?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Bạn có muốn thanh toán hóa đơn {orders && formatMoney(orders?.total_price)} đ
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose}>Quay lại</Button>
          <Button variant="contained" color="success" onClick={handlePayment} autoFocus> Thanh toán</Button>
        </DialogActions>
      </Dialog>
      <ToastMess
        notify="Đã Thanh toán thành công"
        setState={setState}
        state={state}
      />
    </div>
  );
}
