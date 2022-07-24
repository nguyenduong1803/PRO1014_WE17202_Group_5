<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Invoices extends Model
{
    use HasFactory;

    public function getListsPriceProductInCart($params) {
        return DB::select("SELECT products.price*cart.amount as total_price
        FROM cart INNER JOIN products
        ON cart.id_product = products.id
        WHERE cart.id_user = ?
        AND cart.status_cart_order = 1
        ", $params);
    }

    public function create($params) {
        DB::insert('INSERT INTO invoices
    (id_user , status_cart_order, total_price, status_envoice, id_staff)
    values (? , ? , ?, ?, ?)', $params);

        DB::update("UPDATE invoices SET `id_user` = ?, `status_cart_order` = ?,`total_price` = ?,
                    `status_envoice` = ?, `id_staff` = ?
                    WHERE `id` = ?", $params);
    }

    public function getInvoice($params) {
        return DB::select("SELECT iv.status_cart_order,iv.total_price, iv.status_envoice, iv.id_staff, tb.total_user, tbs.index_table, tbs.floor
                                FROM invoices as iv
                                INNER JOIN table_book as tb
                                ON tb.id_user = ?
                                INNER JOIN Tables as tbs
                                ON tbs.id = tb.id_table
                                WHERE status_envoice = 1
                                AND iv.is_delete = 1
                                AND tb.is_delete = 1
                                AND tbs.is_delete = 1", $params);
    }
}
