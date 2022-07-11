<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserRegister;
use App\Models\User;
use Illuminate\Http\Request;

class AuthController extends Controller
{

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

    public function getListUser() {
        $user = new User();
        $list = $user->getAllUser();
        return $list;
    }
}
