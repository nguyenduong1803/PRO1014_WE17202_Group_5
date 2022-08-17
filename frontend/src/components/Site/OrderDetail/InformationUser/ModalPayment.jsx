import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ToastMess from "../../ToastMess/ToastMess";
import { formatMoney } from "../../../../extensions/formatMoney";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { api } from "../../../../utils/api";
import { getToken } from "../../../../utils/Common";
import axios from "axios";
import styles from "./InformationUser.module.css";
import { useHistory } from "react-router";

export default function ModalPayment({
  setOpenPay,
  openPay,
  orders,
  id,
  order,
}) {
  const [state, setState] = React.useState(false);
  const [messToast, setMessToast] = React.useState("");
  const handleClose = () => {
    setOpenPay(false);
  };
  const history = useHistory();
  const [paymentMethod, setPaymentMethod] = React.useState("1");

  const handleChangeRadio = (event) => {
    setPaymentMethod(event.target.value);
  };
  const handlePayment = () => {
    localStorage.setItem("id_invoices", id);
    localStorage.setItem("order", JSON.stringify(order));
    if (paymentMethod === "1") {
      checkoutPaymentCash()
    } else {
      checkoutPaymentVnPay();
    }
    setOpenPay(false);
  };
  async function checkoutPaymentVnPay() {
    const params = {
      id_invoices: id,
      typeCheckout: 1
    };
    localStorage.setItem("typeCheckout",params.typeCheckout);
    const res = await axios.post(api + `checkout/vnpay`, params, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
    if (res?.data?.code === "00") {
      setMessToast("Bạn vui lòng chờ chuyển trang để thanh toán!");

      setTimeout(() => {
        window.open(res?.data?.data);
      }, 1500);
    } else {
      setMessToast("Đã xảy ra lỗi vui lòng thử lại!");
    }
    setState(true);
  }

  async function checkoutPaymentCash() {
    const params = {
      name: orders.user_name_book,
      description: orders.note,
      phone: orders.phone,
      address: "Thanh toán tại quầy",
      purchase_status: 2,
      status_order: 2,
      price: String(`${orders.total_price}`),
      typeCheckout: 1
    };

    const res = await axios.post(api + `checkout/paymentCash`, params, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
    if (res?.status === 200) {
      setMessToast(res?.data?.msg);

      history.push("/thong-bao-thanh-toan?paymentMethod=1");
    } else {
      setMessToast("Đã xảy ra lỗi vui lòng thử lại!");
    }
    setState(true);
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
          <FormControl>
            <FormLabel className={styles.titlePay}>
              Phương thức thanh toán
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={paymentMethod}
              onChange={handleChangeRadio}
            >
              <FormControlLabel
                value="1"
                control={<Radio />}
                label="Thanh toán tiền mặt"
              />
              <FormControlLabel
                value="2"
                control={<Radio />}
                label="Thanh toán chuyển khoản"
              />
            </RadioGroup>
          </FormControl>
          <DialogContentText id="alert-dialog-description">
            Bạn có muốn thanh toán hóa đơn{" "}
            {orders && formatMoney(orders?.total_price)} đ
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose}>
            Quay lại
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={handlePayment}
            autoFocus
          >
            {" "}
            Thanh toán
          </Button>
        </DialogActions>
      </Dialog>
      <ToastMess notify={messToast} setState={setState} state={state} />
    </div>
  );
}
