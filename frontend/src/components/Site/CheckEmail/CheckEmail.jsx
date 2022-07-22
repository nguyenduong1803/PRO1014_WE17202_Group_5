import React from 'react'
import { useDispatch } from 'react-redux'
import { forgotPasswords } from '../../../redux/SliceReducer/AccountSlice'
import './CheckEmail.scss'
function CheckEmail() {
  const [email,setEmail] =React.useState("");
  const dispatch = useDispatch()
  // const handleSendMail = (e)=>{
  //  dispatch(forgotPasswords(email))
  // }
  return (
    <div className="containersssss">
      <h4>Nhập Email Để Xác Nhận Mật Khẩu</h4>
  <div className="container__item">
    <form className="form">
      <input type="email" value={email} onChange={e=>setEmail(e.target.value)}  className="form__field" placeholder="Nhập địa chỉ email " />
      <button type="button"  className="btn btn--primary btn--inside uppercase">Send</button>
    </form>
  </div>
  <div className="container__item container__item--bottom">
    <p>Vui lòng check <a href="" target="_blank">Email</a>.</p>
  </div>
</div>
  )
}

export default CheckEmail