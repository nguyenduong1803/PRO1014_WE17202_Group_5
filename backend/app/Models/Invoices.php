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
    }

    public function lists() {
        return DB::select("SELECT * FROM invoices WHERE status_envoice = 1 AND is_delete = 1");
    }
}
