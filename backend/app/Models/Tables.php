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
    public function getLists() {
        $result = DB::select("SELECT * FROM tables");
        return $result;
    }
    public function updateTable($params) {
        DB::update("UPDATE tables SET `address_shop` = ?, `floor` = ?,`description` = ?,
                    `status` = ?, `index_table` = ?, `total_user_sitting` = ?,`limit_time_book` = ?,
                    `img` = ?,`id_user` = ?,`update_at` = ?
                    WHERE `id` = ?", $params);
    }

    public function getDetailProduct($id) {
        $data = Tables::where('id', $id)->first();
        return $data;
    }
}
