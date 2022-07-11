<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserLogin;
use App\Http\Requests\UserRegister;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Laravel\Passport\HasApiTokens;


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
        return response() ->json(["user" => $dataInsert, "msg" => "Register success!"],200);
    }

    public function login(UserLogin $request) {
        $validate = $request -> validated();
        $user = User::where('email', $validate['email'])->first();
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
}
