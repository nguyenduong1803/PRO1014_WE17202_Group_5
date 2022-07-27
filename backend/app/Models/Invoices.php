<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Invoices extends Model
{
    use HasFactory;

    protected $table = 'invoices';

    public function create($params) {
        DB::insert('INSERT INTO invoices
    (id_user ,id_invoice, status_cart_order, total_price, status_envoice, id_staff)
    values (?, ? , ? , ?, ?, ?)', $params);
    }

    public function getInvoice($params) {
        return DB::select("SELECT * FROM invoices as iv WHERE iv.id_user = ? and iv.is_delete = 1", $params);
    }

    public function getDetailInvoice($id) {
        return Invoices::query() -> where('id', $id)
            -> where('is_delete', 1)
            -> first();
    }

    public function updateInvoice($params) {
        DB::update("UPDATE invoices SET `status_cart_order` = ?, `total_price` = ?, `status_envoice` = ?,`id_staff` = ?, `update_at` = ? WHERE `id` = ?", $params);
    }

    public function updatePriceInvoice($params) {
        DB::update("UPDATE invoices SET `total_price` = ?, `update_at` = ? WHERE `id` = ?", $params);
    }
}
