<div style="width: 600px; margin: 0 auto">
    <div style="text-align: center">
        <h2>Chào, {{$user['ten']}}</h2>
        <p>Email này để giúp bạn lấy lại mật khẩu tài khoản đã bị quên</p>
        <p>Vui lòng click vào link dưới đây để đặt lại mật khẩu</p>
        <p>Chú ý: Mã kích hoạt dưới đây chỉ có hiệu lực trong 72 giờ</p>
        <p>
            <a style="display: inline-block; background: green; color: #fff; padding: 7px 25px; font-weight: bold" href="{{route('user.getPassForgot', ['id'=> $user['id'], 'token' => $user['token_verify']])}}">
                Đặt lại mật khẩu
            </a>
        </p>
    </div>
</div>
