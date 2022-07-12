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

    public function insertUser($params) {
        DB::insert('INSERT INTO users (ten, dia_chi, ngay_sinh, sdt, gioi_tinh, vai_tro, email, mat_khau) values (?, ?, ? , ?,
                                                                                                   ?, ?,?,?)', $params);
    }

    public function updateChangePassword($params) {
        DB::update("UPDATE users SET `mat_khau` = ? WHERE `id` = ?", $params);
    }
}
