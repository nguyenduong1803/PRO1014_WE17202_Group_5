<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserChangePassword;
use App\Http\Requests\UserForgotPassword;
use App\Http\Requests\UserGetPassForgot;
use App\Http\Requests\UserLogin;
use App\Http\Requests\UserRegister;
use App\Http\Requests\UserResetPassword;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Laravel\Passport\HasApiTokens;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;

use Mail;

class AuthController extends Controller
{
    use HasApiTokens, HasFactory, Notifiable;
    public function register(UserRegister $request) {
        $validate = $request -> validated();
        $validate['mat_khau'] = bcrypt($validate['mat_khau']);
        $dataInsert = [
            $validate['ten'],
            $validate['dia_chi'],
            $validate['ngay_sinh'],
            $validate['sdt'],
            $validate['gioi_tinh'],
            $validate['vai_tro'],
            $validate['email'],
            $validate['mat_khau']
        ];
        $modelUser = new User();
        $modelUser ->insertUser($dataInsert);
        return response() ->json(["msg" => "Register success!"],200);
    }

    public function login(UserLogin $request) {
        $validate = $request -> validated();
        $modelUser = new User();
        $user = $modelUser -> login($validate['email']);
        if(!$user || !Hash::check($validate['mat_khau'], $user -> mat_khau)) {
            return response() ->json(["msg" => "Email hoặc mật khẩu không chính xác!"],402);
        }
        if ($validate) {
           $token =$user -> createToken("duonglt") -> accessToken;
            return response() ->json(["token" => $token, "msg" => "Login success!"],200);
        } else {
            return response() ->json([ "msg" => "Login failed!"],400);
        }
    }

    public function getInfoUser() {
        $user = Auth:: user();
        return response() ->json(["user" => $user, "msg" => "Get data success!"],200);
    }

    public function updateChangePassword(UserChangePassword $request) {
        $validate = $request -> validated();
        $modelUser = new User();
        $user = Auth::user();
        $params = [
            bcrypt($validate['mat_khau']),
            $user['id']
        ];
        if($validate) {
            if(Hash::check($validate['mat_khau'], $user -> mat_khau)) {
                return response() ->json(["msg" => "Mật khẩu cũ và mật khẩu mới không được giống nhau!"],402);
            }
            $modelUser->updateChangePassword($params);
            return response() ->json(["msg" => "Đổi mật khẩu thành công!"],200);
        } else {
            return response() ->json(["msg" => "Đổi mật khẩu thất bại!"],402);
        }
    }

    public function logout(Request $request) {
            $request->user()->token()->revoke();
            return response() ->json(["msg" => "Đăng xuất thành công!"],200);
    }

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
        if(isset($user) && $user['token_verify'] == $token) {
            return response() ->json(["msg" => "Get link success!"],200);
        } else {
            return response() ->json(["msg" => "Get link failed!"],404);
        }

    }

    public function resetPassword(UserResetPassword $request) {
        $validate = $request ->validated();
        $modelUser = new User();
        $user = $modelUser -> getForgotPass($validate['id']);
        if($user['token_verify'] == $validate['token']) {
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
