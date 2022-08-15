import axios from "axios";
import React from "react";
import { api } from "../../../utils/api";
import { getToken } from "../../../utils/Common";
import ToastMess from "../ToastMess/ToastMess";
import "./CheckEmail.scss";
function CheckEmail() {
  const [email, setEmail] = React.useState("");
  const [isShowToast, setIsShowToast] = React.useState(false);
  const [mess, setMess] = React.useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    const body = {
      email,
    };
    if (email === "") {
      setIsShowToast(true);
      setMess("Vui lòng điền email");
      return;
    }
    try {
      await axios.post(api + "user/sendMailForgotPassword", body, {
        headers: { Authorization: `Bearer ${getToken()}` },
      });
      setMess(
        "Gửi email thành công, bạn vui lòng kiểm tra tin nhắn trong email của mình!"
      );
      setEmail("");
    } catch (err) {
      setMess("Gửi email thất bại, vui lòng kiểm tra lại!");
    }
    setIsShowToast(true);
  }
  return (
    <div className="containersssss">
      <h4>Nhập Email Để Xác Nhận Mật Khẩu</h4>
      <div className="container__item">
        <form onSubmit={(e) => handleSubmit(e)} className="form">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form__field"
            placeholder="Nhập địa chỉ email "
          />
          <button
            type="submit"
            className="btn btn--primary btn--inside uppercase"
          >
            Send
          </button>
        </form>
      </div>
      <div className="container__item container__item--bottom">
        <p>
          Vui lòng check{" "}
          <a href="" target="_blank">
            Email
          </a>
          .
        </p>
      </div>
      <ToastMess notify={mess} setState={setIsShowToast} state={isShowToast} />
    </div>
  );
}

export default CheckEmail;
