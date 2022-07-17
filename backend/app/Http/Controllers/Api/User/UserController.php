<?php

namespace App\Http\Controllers\Api\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\UserForgotPassword;
use App\Http\Requests\User\UserResetPassword;
use App\Http\Requests\User\UserUpdateInfo;
use App\Models\User;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;
use Illuminate\Support\Facades\Auth;
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

    public function updateInfo(UserUpdateInfo $request) {
        $validate = $request -> validated();
        $uploadedFileUrl = Cloudinary::upload($request->file('file')->getRealPath(), [
            'folder' => 'avatar'
        ])->getSecurePath();
        $user = Auth::user();
        $modelUser = new User();
        $updateTen = isset($validate['ten']) ? $validate['ten'] : $user['ten'];
        $updateDiaChi = isset($validate['dia_chi']) ? $validate['dia_chi'] : $user['dia_chi'];
        $updateNgaySinh = isset($validate['ngay_sinh']) ? $validate['ngay_sinh'] : $user['ngay_sinh'];
        $updateSdt = isset($validate['sdt']) ? $validate['sdt'] : $user['sdt'];
        $updateGioiTinh = isset($validate['gioi_tinh']) ? $validate['gioi_tinh'] : $user['gioi_tinh'];
        $updateEmail = isset($validate['email']) ? $validate['email'] : $user['email'];
        $params = [
            $updateTen,
            $updateDiaChi,
            $updateNgaySinh,
            $updateSdt,
            $updateGioiTinh,
            $updateEmail,
            $uploadedFileUrl,
            $user['id']
        ];
        $modelUser -> updateInfo($params);
        return response() ->json(["msg" => "Cập nhật thông tin tài khoản thành công!"],200);

    }
}
