<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class DetailTableInvoice extends Model
{
    use HasFactory;
    protected $table = 'detail_table_invoice';
    public function insert($params) {
        DB::insert('INSERT INTO detail_table_invoice
    (id_table , id_invoice)
    values (? , ? )', $params);
    }
    public function getLists($params) {
        return DB::select('SELECT * FROM detail_table_invoice WHERE is_delete = 1 AND id_invoice = ?', $params);
    }

    public function checkExistsTableInvoice($id_table) {
        return DetailTableInvoice::query() -> where('id_table', $id_table)
            -> where('is_delete', 1)
            -> first();
    }

    public function updateTableInvoice($params) {
        DB::update("UPDATE detail_table_invoice SET `id_table` = ?, `update_at` = ? WHERE `id` = ?", $params);
    }

    public function getDetailTableInvoice($id) {
        return DetailTableInvoice::query() -> where('id', $id)
            -> where('is_delete', 1)
            -> first();
    }
    public function deleteDetailTableIv($params) {
        DB::update("UPDATE detail_table_invoice SET `is_delete` = ?, `delete_at` = ? WHERE `id` = ?", $params);
    }
}
