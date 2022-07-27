<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class InvoiceDetail extends Model
{
    use HasFactory;
    public function getDetailInvoice() {
                    return DB::select("SELECT
                p.id as id_product,
                cart.amount,
                p.name
            FROM
                cart
            INNER JOIN products AS p
            ON
                p.id = cart.id_product
            WHERE
                cart.id_user = 5 AND cart.is_delete = 1 AND p.is_delete = 1");
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
}
