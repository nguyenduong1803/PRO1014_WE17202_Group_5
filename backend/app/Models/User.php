<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Support\Facades\DB;
class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    public function insertUser($params) {
        $result = DB::insert('INSERT INTO nguoi_dung (ten, dia_chi, ngay_sinh, sdt, gioi_tinh, vai_tro, email, mat_khau) values (?, ?, ? , ?,
                                                                                                   ?, ?,?,?)', $params);
    }

public function getAllUser() {
    $result = DB::select('Select * from nguoi_dung');
    return $result;
}
}
