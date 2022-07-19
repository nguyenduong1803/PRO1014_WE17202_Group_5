<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Tables extends Model
{
    use HasFactory;
    public function create($params) {
        DB::insert('INSERT INTO tables
    (address_shop, floor, description, status, index_table, total_user_sitting, limit_time_book,img, id_user)
    values (?, ?, ?, ?, ?, ?, ?, ?, ?)', $params);
    }
}
