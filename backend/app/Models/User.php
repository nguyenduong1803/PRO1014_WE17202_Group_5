<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\DB;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $table = 'users';

    public function insertUser($params) {
        DB::insert('INSERT INTO users (ten, dia_chi, ngay_sinh, sdt, gioi_tinh, vai_tro, email, mat_khau, img) values (?, ?, ? , ?,
                                                                                                   ?, ?,?,?, ?)', $params);
    }

    public function login($email) {
        $result = User::where('email', $email)->first();
        return $result;
    }

    public function forgotPassword($email) {
        $result = User::where('email', $email)->first();
        return $result;
    }

    public function checkExistsUserById($id) {
        $result = User::where('id', $id)->first();
        return $result;
    }

    public function updateTokenForgotPassword($params) {
        DB::update("UPDATE users SET `token_verify` = ? WHERE `id` = ?", $params);
    }
    public function updateResetPassword($params) {
        DB::update("UPDATE users SET `mat_khau` = ? WHERE `id` = ?", $params);
    }


    public function updateChangePassword($params) {
        DB::update("UPDATE users SET `mat_khau` = ? WHERE `id` = ?", $params);
    }

    public function updateInfo($params) {
        DB::update("UPDATE users SET `ten` = ?, `dia_chi` = ?, `ngay_sinh` = ?, `sdt` = ?, `gioi_tinh` = ?, `email` = ?, `img` = ? WHERE `id` = ?", $params);
    }

    public function getUserByRole($id, $role) {
        return User::query() -> where('id', $id)
            -> where('vai_tro', $role)
            -> where('is_delete', 1)
            -> first();
    }

    public function getAllUsers($request) {
        $search = $request -> get('q');
    
        $limitPage = $request -> get('limit') ? $request -> get('limit'): 10;
        $data = User::query()
            -> where('is_delete', '1')
            -> where('ten', 'like', '%' . $search . '%')
            -> paginate($limitPage);
        $data->appends(['q' => $search]);
        return $data;
    }

    public function deleteUser($params) {
        DB::update("UPDATE users SET `is_delete` = ?, `delete_at` = ? WHERE `id` = ?", $params);
    }
}
