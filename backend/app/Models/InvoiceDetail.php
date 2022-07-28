<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class InvoiceDetail extends Model
{
    use HasFactory;
    public function getListDetailInvoice($params) {
        return DB::select("SELECT * FROM detail_invoice as dt WHERE dt.is_delete = 1 AND dt.id_invoice = ? AND id_user = ?", $params);
    }
    public function getDetailInvoice($params) {
        return DB::select("SELECT * FROM detail_invoice as dt WHERE dt.is_delete = 1 AND dt.id_invoice = ? AND id_user = ? AND id = ?", $params);
    }

    public function insertDetailInvoice($params) {
        DB::insert('INSERT INTO detail_invoice
    (id_user , id_invoice , id_table_book, id_product, amount)
    values (? , ? , ?, ?, ?)', $params);
    }

    public function getPriceProductInDetailInvoice($params) {
        return DB::select("SELECT p.price as price
                                FROM products as p
                                WHERE p.is_delete = 1
                                AND p.id = ?
            ", $params);
    }

    public function updateDetailInvoice($params) {
        DB::update("UPDATE detail_invoice SET `id_table_book` = ?, `id_product` = ?, `amount` = ?, `update_at` = ? WHERE `id_invoice` = ? AND `id` = ? AND is_delete = 1", $params);
    }

    public function getDetailInvoice2($params) {
        return DB::select("SELECT * FROM detail_invoice as dt WHERE dt.is_delete = 1 AND dt.id_invoice = ? AND dt.id = ?", $params);
    }
}
