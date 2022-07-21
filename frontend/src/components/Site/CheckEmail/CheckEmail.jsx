import React from 'react'
import './CheckEmail.scss'
function CheckEmail() {
  return (
    <div class="containersssss">
      <h4>Nhập Email Để Xác Nhận Mật Khẩu</h4>
  <div class="container__item">
    <form class="form">
      <input type="email" class="form__field" placeholder="Your E-Mail Address" />
      <button type="button" class="btn btn--primary btn--inside uppercase">Send</button>
    </form>
  </div>
  
  <div class="container__item container__item--bottom">
    <p>Vui lòng check <a href="" target="_blank">Email</a>.</p>
  </div>
</div>
  )
}

export default CheckEmail