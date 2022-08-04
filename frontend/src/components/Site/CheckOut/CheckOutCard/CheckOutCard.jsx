import React from "react";
import styles from "./CheckOutCard.module.css";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
function CheckOutCard() {
  
  return (
    <div className={`${styles.row} row`}>
      <div className={styles.title}>
        <div className={styles.titleName}>Card Detail</div>
        <div className={styles.titleImg}>
            <img src="http://localhost:3000/static/media/seafood-1.d2871097285bb86fdabf.jpg" alt="" />
        </div>
      </div>
      <div className={`${styles.card} row`}>
        <div className={`${styles.deatilCard} col-lg-3`}>
          <img
            src="http://localhost:3000/static/media/seafood-1.d2871097285bb86fdabf.jpg"
            alt=""
          />
        </div>
        <div className={`${styles.deatilCard} col-lg-3`}>
          <img
            src="http://localhost:3000/static/media/seafood-1.d2871097285bb86fdabf.jpg"
            alt=""
          />
        </div>
        <div className={`${styles.deatilCard} col-lg-3`}>
          <img
            src="http://localhost:3000/static/media/seafood-1.d2871097285bb86fdabf.jpg"
            alt=""
          />
        </div>
        <div className={`${styles.deatilCard} col-lg-3`}>
          <img
            src="http://localhost:3000/static/media/seafood-1.d2871097285bb86fdabf.jpg"
            alt=""
          />
        </div>
      </div>
      <div className={styles.infomation}>
        <div className={styles.name}>
          <p className={styles.titleName}>Name on Card</p>
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
        <div className={styles.name}>
          <p className={styles.titleName}>Name on Card</p>
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
            <p  className={styles.titleName}>Expiration Date</p>
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
            <p  className={styles.titleName}>CVV</p>
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
      </div>
      <div className={styles.line}></div>
      <div className={styles.footer}>
        <div className={styles.footerContent}>
            <div className={styles.footerName}>
                <span>Subtotal</span>
                <span className={styles.span}>Shipping</span>
                <span>Total</span>
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
                    <div className={styles.buttonNext}>Checkout <ArrowRightAltIcon/></div>
                </button>
            </div>
      </div>
    </div>
  );
}

export default CheckOutCard;
