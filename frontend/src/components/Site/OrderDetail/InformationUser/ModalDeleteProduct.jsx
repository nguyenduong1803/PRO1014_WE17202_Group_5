import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ToastMess from '../../ToastMess/ToastMess';
import { useDispatch } from 'react-redux';
import { deleteDetailOrder } from '../../../../redux/SliceReducer/OrderTableSlice';

export default function ModalDeleteProduct({ setOpenDelete, openDelete, orders, id, order }) {
  const [state, setState] = React.useState(false)
  const dispatch = useDispatch()
  const handleClose = () => {
    setOpenDelete(false);
  };
  const handleDelete = () => {
    dispatch(deleteDetailOrder(id))
    setOpenDelete(false);
    setState(true)

  };
  return (
    <div>
      <Dialog
        open={openDelete}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Bạn có muốn xóa sản phẩm trong hóa đơn ?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Bạn có muốn xóa sản phẩm trong hóa đơn 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose}>Quay lại</Button>
          <Button variant="contained" color="success" onClick={handleDelete} autoFocus> Xóa</Button>
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
