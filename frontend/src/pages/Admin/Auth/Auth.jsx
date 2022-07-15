import "./Auth.scss";
import { useState } from "react";

export default function App() {
  const [activeclassName, setActiveclassName] = useState(true);
const handleSubmit = (e) => {
  e.preventDefault();
  console.log("submit")
}
  return (
    <div className="Auth">
      <div
        className={
          activeclassName ? "container" : "container right-panel-active"
        }
        id="container"
      >
        <div className="form-container sign-up-container">
          <form action="#" onSubmit={handleSubmit}>
            <h1>Tạo tài khoản</h1>
            <div className="social-container"></div>
            <span>Hoặc sử dụng email để đăng ký</span>
            <input type="text" placeholder="Họ và tên" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Mật khẩu" />
            <button>Tạo tài khoản</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#">
            <h1>Đăng nhập</h1>
            <div className="social-container"></div>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Mật khẩu" />
            <button>Đăng nhập</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Chào mừng quay trở lại!</h1>
              <p>
                Vui lòng nhập thông tin để mua sắm
              </p>
              <button
                className="ghost"
                id="signIn"
                onClick={() => setActiveclassName(true)}
              >
                Đăng nhập
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Chào bạn mới</h1>
              <p>Đăng ký tài khoản với chúng tôi và bắt đầu mua sắm</p>
              <button
                className="ghost"
                id="signUp"
                onClick={() => setActiveclassName(false)}
              >
                Đăng ký
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
