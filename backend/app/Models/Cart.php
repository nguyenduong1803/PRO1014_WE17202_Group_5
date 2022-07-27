<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Cart extends Model
{
    use HasFactory;

    protected $table = 'cart';

    public function saveCart($params) {
        DB::insert('INSERT INTO cart
    (id_user , id_product , amount, id_table_book, purchase_status)
    values (? , ? , ?, ? , ?)', $params);
    }

    public function getCart($params) {
        return DB::select("SELECT c.id, c.amount, c.purchase_status, c.status_cart_order, p.price, p.id_code_sale,p.name, img.path, tb.index_table, tb.floor as floor_table, c.id_user
            FROM cart as c
            INNER JOIN products as p
            ON c.id_product = p.id
            INNER JOIN images_product as img
            ON img.id_product_img = p.id_img
            LEFT JOIN tables as tb
            ON c.id_table_book = tb.id
            WHERE c.id_user = ?
            AND c.is_delete = 1
            AND p.is_delete = 1
            ",
            $params);
    }

    public function checkDetailOrderDeleted($id) {
        $data = Cart::query() -> where('id', $id)
            -> where('is_delete', 1)
            -> first();
        return $data;
    }

    public function deleteOrder($params) {
        DB::update("UPDATE cart SET `is_delete` = ?, `delete_at` = ? WHERE `id` = ?", $params);
    }

    public function updateOrder($params) {
            DB::update("UPDATE cart SET `id_user` = ? , `amount` = ?, `id_table_book` = ?, `purchase_status` = ?,`status_cart_order` = ?,`update_at` = ?
                    WHERE `id` = ?", $params);

    }
}
