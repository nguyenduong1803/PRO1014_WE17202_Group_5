<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Tables extends Model
{
    protected $table = 'tables';
    use HasFactory;
    public function create($params) {
        DB::insert('INSERT INTO tables
    (address_shop, floor, description, status, index_table, total_user_sitting, limit_time_book,img, id_user)
    values (?, ?, ?, ?, ?, ?, ?, ?, ?)', $params);
    }
    public function getLists() {
        $result = DB::select("SELECT * FROM tables WHERE `is_delete` = 1");
        return $result;
    }
    public function updateTable($params) {
        DB::update("UPDATE tables SET `address_shop` = ?, `floor` = ?,`description` = ?,
                    `status` = ?, `index_table` = ?, `total_user_sitting` = ?,`limit_time_book` = ?,
                    `img` = ?,`id_user` = ?,`update_at` = ?
                    WHERE `id` = ?", $params);
    }

    public function getDetailTable($id) {
        $data = Tables::where('id', $id)->first();
        return $data;
    }

    public function checkTableDeleted($id) {
        $data = Tables::query() -> where('id', $id)
            -> where('is_delete', 1)
            -> first();
        return $data;
    }

    public function deleteTable($params) {
        DB::update("UPDATE tables SET `is_delete` = ?, `delete_at` = ? WHERE `id` = ?", $params);
    }
}
