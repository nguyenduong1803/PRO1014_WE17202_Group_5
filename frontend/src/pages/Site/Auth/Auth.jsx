import "./Auth.scss";
import { useState, useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import Spinner from "react-bootstrap/Spinner";
import { Link, useHistory } from "react-router-dom";
import AlertMessage from "../../../components/Site/AlertMessage/AlertMessage";
import GoogleLogin from "../../../components/Site/GoogleLogin/GoogleLogin";
import GoogleLogout from "../../../components/Site/GoogleLogin/GoogleLogout";

export default function App() {
  const [activeclassName, setActiveclassName] = useState(true);
  const [alert, setAlert] = useState(null);
  const { loginUser, registerUser } = useContext(AuthContext);
  const history = useHistory()
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const [registerForm, setRegisterForm] = useState({
    email: "",
    fullname: "",
    password: "",
    phone: "",
  });

  const { regemail, regpassword, fullname, phone } = registerForm;
  const { email, password } = loginForm;

  const onChangeLoginForm = (event) =>
    setLoginForm({ ...loginForm, [event.target.name]: event.target.value });

  const onChangeRegisterForm = (event) =>
    setRegisterForm({
      ...registerForm,
      [event.target.name]: event.target.value,
    });

  const login = async (event) => {
    event.preventDefault();
    try {
      const loginData = await loginUser(loginForm);
      if (loginData) {
        history.push('/')
      } 
    } catch (error) {
      console.log(error);
    }
  };
  const register = async (event) => {
    try {
      event.preventDefault();
      const registerData = await registerUser(registerForm);
    } catch (error) {
      console.log(error.message);
    }
  };
  const {
    authState: { authLoading, isAuthenticated },
  } = useContext(AuthContext);

  let body;

  if (authLoading)
    body = (
      <div className="d-flex justify-content-center mt-2">
        <Spinner animation="border" variant="info" />
      </div>
    );
  else if (isAuthenticated) return <Link to="/" />;

  return (
    <div className="Auth">
      <div
        className={
          activeclassName ? "container" : "container right-panel-active"
        }
        id="container"
      >
        <div className="form-container sign-up-container">
          <form onSubmit={register}>
            <h1>T???o t??i kho???n</h1>
            <AlertMessage info={alert} />
            <div className="social-container"></div>
            <span>Ho???c s??? d???ng email ????? ????ng k??</span>
            <input
              type="text"
              placeholder="H??? v?? t??n"
              name="fullname"
              value={fullname}
              onChange={onChangeRegisterForm}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={regemail}
              onChange={onChangeRegisterForm}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={regemail}
              onChange={onChangeRegisterForm}
            />
            <input
              type="password"
              placeholder="M???t kh???u"
              name="password"
              value={regpassword}
              onChange={onChangeRegisterForm}
            />

            <button>T???o t??i kho???n</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form onSubmit={login}>
            <h1>????ng nh???p</h1>
            <div className="social-container"></div>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={onChangeLoginForm}
              required
            />
            <input
              type="password"
              placeholder="M???t kh???u"
              name="password"
              value={password}
              onChange={onChangeLoginForm}
              required
            />
            <div classname="alert">
              <AlertMessage info={alert} />
              {console.log(isAuthenticated)}
            </div>
            {/* <GoogleLogin />
            <GoogleLogout /> */}
            <button>????ng nh???p</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Ch??o m???ng quay tr??? l???i!</h1>
              <p>Vui l??ng nh???p th??ng tin ????? mua s???m</p>
              <button
                className="ghost"
                id="signIn"
                onClick={() => setActiveclassName(true)}
              >
                ????ng nh???p
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Ch??o b???n m???i</h1>
              <p>????ng k?? t??i kho???n v???i ch??ng t??i v?? b???t ?????u mua s???m</p>
              <button
                className="ghost"
                id="signUp"
                onClick={() => setActiveclassName(false)}
              >
                ????ng k??
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
