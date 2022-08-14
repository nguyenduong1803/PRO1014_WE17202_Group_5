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
import { api } from '../../../../utils/api';
import { getToken } from '../../../../utils/Common';
import axios from 'axios';

export default function ModalPayment({ setOpenPay, openPay, orders, id, order }) {
  const [state, setState] = React.useState(false);
  const [messToast, setMessToast] = React.useState('');
  const handleClose = () => {
    setOpenPay(false);
  };
  const handlePayment = () => {
    checkoutPaymentVnPay();
    localStorage.setItem('id_invoices', id)
    localStorage.setItem('order', JSON.stringify(order));
    setOpenPay(false);
  

  };
  async function checkoutPaymentVnPay() {
    const params = {
      "id_invoices": id
  }
    const res = await axios.post(api + `checkout/vnpay`, params,{
      headers: { 'Authorization': `Bearer ${getToken()}` },
    });
    console.log(res)
    if(res?.data?.code === '00'){
      setState(true)
      setMessToast('Bạn vui lòng chờ chuyển trang để thanh toán!');

      setTimeout(() => {
        window.open(res?.data?.data);
      }, 1500);
    }else{
      setMessToast('Đã xảy ra lỗi vui lòng thử lại!')
    }
    setState(true)
  }
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
        notify={messToast}
        setState={setState}
        state={state}
      />
    </div>
  );
}
