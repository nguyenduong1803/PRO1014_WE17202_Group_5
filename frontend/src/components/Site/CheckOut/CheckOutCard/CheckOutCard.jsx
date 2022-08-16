import React from "react";
import { useEffect, useState } from "react";
import styles from "./CheckOutCard.module.css";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { api } from "../../../../utils/api";
import axios from "axios";
import { getToken } from "../../../../utils/Common";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
function ControlledRadioButtonsGroup() {
  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl>
      <FormLabel className={styles.titlePay}>Phương thức thanh toán</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="female" control={<Radio />} label="Thanh toán tiền mặt" />
        <FormControlLabel value="male" control={<Radio />} label="Thanh toán chuyển khoản" />
      </RadioGroup>
    </FormControl>
  );
}
function CheckOutCard() {
  // const [cartName,SetCartName] = useState();
  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  // const handleChangeIndex = (index) => {
  //   setValue(index);
  // };
  // const [value, setValue] = React.useState(0);

  // useEffect(() => {
  //   async function cart() {
  //     const res = await axios.get(api + "auth/getInfoUser", {
  //       headers: { Authorization: `Bearer ${getToken()}` },
  //     });
  //     SetCartName(res.data.user);
  //   }
  //   cart();
  // }, []);
  return (
    <div className={`${styles.row} row`}>
      <div className={styles.title}>
        <div className={styles.titleName}>Chi Tiết Thẻ</div>
        <div className={styles.titleImg}>
            <img src="http://localhost:3000/static/media/seafood-1.d2871097285bb86fdabf.jpg" alt="" />
        </div>
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
             
            //  value={cartName}
            />
          </Stack>
        </div>
        <div className={styles.name}>
          <p className={styles.titleName}>Địa Chỉ</p>
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
            />
          </Stack>
        </div>
        <div className={`${styles.dateCvv} row`}>
          <div className={`${styles.date} col-lg-6`}>
            <p  className={styles.titleName}>Số điện thoại</p>
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
              />
            </Stack>
          </div>
          <div className={`${styles.date} col-lg-6`}>
            <p  className={styles.titleName}>Ghi chú</p>
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
              />
            </Stack>
          </div>
          
        </div>
        <div>
<ControlledRadioButtonsGroup/>
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.footer}>
        <div className={styles.footerContent}>
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
           
        </div>
        <div className={styles.button}>
                <button>
                    <div className={styles.buttonTotal}>$300.000</div>
                    <div className={styles.buttonNext}>Thanh Toán <ArrowRightAltIcon/></div>
                </button>
            </div>
      </div>
    </div>
  );
}

export default CheckOutCard;
