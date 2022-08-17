import React from "react";
import { useEffect, useState } from "react";
import styles from "./CheckOutCard.module.css";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { api } from "../../../../utils/api";
import axios from "axios";
import { getToken } from "../../../../utils/Common";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useSelector } from "react-redux";
import { selectCart } from "../../../../redux/selector";
import { formatMoney } from "../../../../extensions/formatMoney";
import ToastMess from "../../ToastMess/ToastMess";
import { useHistory } from "react-router";

function CheckOutCard() {
  const carts = useSelector(selectCart);
  const [dataCarts, setDataCarts] = useState([]);
  const [userName, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [paymentMethod, setPaymentMethod] = React.useState("1");
  const [state, setState] = React.useState(false);
  const [messToast, setMessToast] = React.useState("");
  const history = useHistory();
  useEffect(() => {
    setDataCarts(carts);
  }, [carts]);

  useEffect(() => {
    let sum = 0;
    for (let i = 0; i < dataCarts.length; i++) {
      sum += Number(dataCarts[i].price) * Number(dataCarts[i].total_amount);
    }
    setTotalPrice(sum);
  }, [dataCarts]);
  function handlePayment() {
    if (
      (userName === "" || phone === "" || address === "") &&
      paymentMethod === "1"
    ) {
      alert("Vui lòng nhập đầy đủ thông tin");
      return;
    }

    if (paymentMethod === "1") checkoutPaymentCash();
    else checkoutPaymentVnPay();
  }
  const handleChangeRadio = (event) => {
    setPaymentMethod(event.target.value);
  };
  async function checkoutPaymentVnPay() {
    const params = {
      id_invoices: 9999,
      typeCheckout: 2
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
      name: userName,
      description: description,
      phone: phone,
      address,
      purchase_status: 1,
      status_order: 2,
      price: String(`${totalPrice}`),
      typeCheckout: 2
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
    <div className={`${styles.row} row`}>
      <div className={styles.title}>
        <div className={styles.titleName}>Thanh toán</div>
      </div>
      <div className={`${styles.card} row`}>
        <div className={`${styles.deatilCard} col-lg-3`}>
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.OZ3mSjfCbC1rbJOD1FjsoQHaEo&pid=Api&P=0"
            alt=""
          />
        </div>
        <div className={`${styles.deatilCard} col-lg-3`}>
          <img
            src="http://lamthevisa.vn/wp-content/uploads/2018/06/so-the-visa-vietcombank-nam-o-dau-anh3.jpg"
            alt=""
          />
        </div>
        <div className={`${styles.deatilCard} col-lg-3`}>
          <img
            src="https://img.topbank.vn/crop/620x324/2018/10/17/pXubIXvx/techcombank-the-tin--c5c0.jpeg"
            alt=""
          />
        </div>
        <div className={`${styles.deatilCard} col-lg-3`}>
          <img
            src="https://tailanhchanh.com/wp-content/uploads/2018/04/dau-so-tai-khoan-cua-cac-ngan-hang.jpg"
            alt=""
          />
        </div>
      </div>
      {paymentMethod === "1" && (
        <div className={styles.infomation}>
          <div className={styles.name}>
            <p className={styles.titleName}>Tên người nhận</p>
            <Stack
              component="form"
              sx={{
                width: "100%",
              }}
              spacing={2}
              noValidate
              autoComplete="off"
            >
              <TextField
                hiddenLabel
                id="filled-hidden-label-small"
                variant="filled"
                size="small"
                onChange={(e) => setUserName(e.target.value)}
              />
            </Stack>
          </div>
          <div className={styles.name}>
            <p className={styles.titleName}>Số điện thoại</p>
            <Stack
              component="form"
              sx={{
                width: "100%",
              }}
              spacing={2}
              noValidate
              autoComplete="off"
            >
              <TextField
                hiddenLabel
                id="filled-hidden-label-small"
                variant="filled"
                size="small"
                onChange={(e) => setPhone(e.target.value)}
              />
            </Stack>
          </div>
          <div className={styles.name}>
            <p className={styles.titleName}>Địa chỉ</p>
            <Stack
              component="form"
              sx={{
                width: "100%",
              }}
              spacing={2}
              noValidate
              autoComplete="off"
            >
              <TextField
                hiddenLabel
                id="filled-hidden-label-small"
                variant="filled"
                size="small"
                onChange={(e) => setAddress(e.target.value)}
              />
            </Stack>
          </div>
          <div className={styles.name}>
            <p className={styles.titleName}>Mô tả</p>
            <Stack
              component="form"
              sx={{
                width: "100%",
              }}
              spacing={2}
              noValidate
              autoComplete="off"
            >
              <TextField
                hiddenLabel
                id="filled-hidden-label-small"
                variant="filled"
                size="small"
                onChange={(e) => setDescription(e.target.value)}
              />
            </Stack>
          </div>
        </div>
      )}
      <div>
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
      </div>
      <div className={styles.line}></div>
      <div className={styles.footer}>
        {/* <div className={styles.footerContent}>
          <div className={styles.footerName}>
            <span>Tổng Phụ</span>
            <span className={styles.span}>Phí Vận Chuyển</span>
            <span>Tổng</span>
          </div>
          <div className={styles.footerName}>
            <span>$300.00</span>
            <span className={styles.span}>$300.00</span>
            <span>$300.00</span>
          </div>
        </div> */}
        <div className={styles.button}>
          <button>
            <div className={styles.buttonTotal}>
              {formatMoney(totalPrice)} đ
            </div>
            <div onClick={handlePayment} className={styles.buttonNext}>
              Thanh Toán <ArrowRightAltIcon />
            </div>
          </button>
        </div>
      </div>
      <ToastMess notify={messToast} setState={setState} state={state} />
    </div>
  );
}

export default CheckOutCard;
