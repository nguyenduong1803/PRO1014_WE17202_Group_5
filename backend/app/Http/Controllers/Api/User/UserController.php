<?php

namespace App\Http\Controllers\Api\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserForgotPassword;
use App\Http\Requests\UserResetPassword;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Mail;

class UserController extends Controller
{
    public function sendMailForgotPassword(UserForgotPassword $request) {
        $validate = $request -> validated();
        $modelUser = new User();
        $user = $modelUser ->forgotPassword($validate['email']);
        $token = strtoupper(Str::random(10));
        if(!isset($user['token_verify'])) {
            $params = [
                $token,
                $user['id']
            ];
            $modelUser ->updateTokenForgotPassword($params);
            $user['token_verify'] = $token;
        }
        Mail::send('emails.forgotPassword', compact('user'), function ($email) use($user) {
            $email -> subject('Lấy lại mật khẩu!');
            $email -> to($user['email'], $user['ten']);
        });
        return response() ->json(["msg" => "Gửi email thành công, bạn vui lòng kiểm tra tin nhắn trong email của mình!"],200);
    }

    public function getPassForgot($id, $token) {
        $modelUser = new User();
        $user = $modelUser -> getForgotPass($id);
        if($user['token_verify'] === $token) {
            return response() ->json(["msg" => "Get link success!"],200);
        } else {
            return response() ->json(["msg" => "Get link failed!"],404);
        }

    }

    public function resetPassword(UserResetPassword $request) {
        $validate = $request ->validated();
        $modelUser = new User();
        $user = $modelUser -> getForgotPass($validate['id']);
        if($user['token_verify'] === $validate['token']) {
            $params = [
                NULL,
                $validate['id']
            ];
            $modelUser -> updateTokenForgotPassword($params);
            $params2 = [
                bcrypt($validate['mat_khau']),
                $validate['id']
            ];
            $modelUser -> updateResetPassword($params2);
            return response() ->json(["msg" => "Đặt lại mật khẩu thành công!"],200);
        } else {
            return response() ->json(["msg" => "Đặt lại mật khẩu thất bại!"],404);
        }
    }
}
