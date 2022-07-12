<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserChangePassword;
use App\Http\Requests\UserLogin;
use App\Http\Requests\UserRegister;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Auth;
use Laravel\Passport\HasApiTokens;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;



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
            return response([
                'message' => 'Email or password not valid!'
            ], 401);
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
}
