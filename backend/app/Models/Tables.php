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
        return $result = DB::select("SELECT * FROM tables WHERE `is_delete` = 1");
    }
    public function updateTable($params) {
        DB::update("UPDATE tables SET `address_shop` = ?, `floor` = ?,`description` = ?,
                    `status` = ?, `index_table` = ?, `total_user_sitting` = ?,`limit_time_book` = ?,
                    `img` = ?,`id_user` = ?,`update_at` = ?
                    WHERE `id` = ?", $params);
    }

    public function getDetailTable($id) {
        return Tables::query() -> where('id', $id)
            -> where('is_delete', 1)
            -> first();
    }

    public function checkTableDeleted($id) {
        return $data = Tables::query() -> where('id', $id)
            -> where('is_delete', 1)
            -> first();
    }

    public function deleteTable($params) {
        DB::update("UPDATE tables SET `is_delete` = ?, `delete_at` = ? WHERE `id` = ? AND is_delete = 1", $params);
    }

    public function updateDetailStatus($params) {
        DB::update("UPDATE tables SET `status` = ? WHERE `id` = ? AND is_delete = 1", $params);
    }

    public function checkStatusTable($id, $status) {
        return $data = Tables::query() -> where('id', $id)
            -> where('is_delete', 1)
            -> where('status', $status)
            -> first();
    }
}
