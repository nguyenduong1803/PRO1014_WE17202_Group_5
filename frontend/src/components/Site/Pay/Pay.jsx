import React, { useEffect, useState } from "react";
import PaySucces from "./PaySuccessFull/PaySuccessFull";
import PayFail from "./PayFailed/PayFailed";
import { useQuery } from "../../../hooks/useQuery";
import axios from "axios";
import { getToken } from "../../../utils/Common";
import { api } from "../../../utils/api";
import { useDispatch } from "react-redux";
import { updateOrder } from "../../../redux/SliceReducer/OrderTableSlice";

function Pay() {
  const query = useQuery();
  const [statusPayment, setStatusPayment] = useState(true);

  const vnpResponseCode = query.get("vnp_ResponseCode");
  const vnp_Amount = query.get("vnp_Amount");
  const vnp_BankTranNo = query.get("vnp_BankTranNo")
    ? query.get("vnp_BankTranNo")
    : "No code";
  const vnp_CardType = query.get("vnp_CardType");
  const vnp_OrderInfo = query.get("vnp_OrderInfo");
  const vnp_PayDate = query.get("vnp_PayDate");
  const vnp_TmnCode = query.get("vnp_TmnCode");
  const vnp_TransactionNo = query.get("vnp_TransactionNo");
  const vnp_TxnRef = query.get("vnp_TxnRef");
  const vnp_TransactionStatus = query.get("vnp_TransactionStatus");
  const dispatch = useDispatch();
  useEffect(() => {
    (async function () {
      const params = {
        vnp_Amount,
        vnp_BankCode: "NCB",
        vnp_BankTranNo,
        vnp_CardType,
        vnp_OrderInfo,
        vnp_PayDate,
        vnp_TmnCode,
        vnp_TransactionNo,
        vnp_TransactionStatus,
        vnp_TxnRef,
        id_invoices: localStorage.getItem("id_invoices"),
      };
      const params2 = {
        id: localStorage.getItem("id_invoices"),
        order: JSON.parse(localStorage.getItem("order")),
      };

      if (vnpResponseCode === "00") {
        try {
          await axios.post(api + `checkout/saveInfoPaymentVNPay`, params, {
            headers: { Authorization: `Bearer ${getToken()}` },
          });
          dispatch(updateOrder(params2));
        } catch (error) {
          setStatusPayment(false);
        }
      }
    })();
  }, []);
  console.log(statusPayment)
  if(!statusPayment) return <PayFail />;
  return <div>{vnpResponseCode === "00"? <PaySucces /> : <PayFail />}</div>;
}

export default Pay;
