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
    (id_user , id_product , amount)
    values (? , ? , ?)', $params);
    }

    public function getCart($params) {
        return DB::select("SELECT
        c.id,
        SUM(c.amount) AS total_amount,
        p.price,
        p.id_code_sale,
        p.name,
        c.id_user
        FROM
            cart AS c
        INNER JOIN products AS p
        ON
            c.id_product = p.id
        WHERE
            c.id_user = 5 AND c.is_delete = 1 AND p.is_delete = 1
        GROUP BY
            c.id_product
        ORDER BY
        COUNT(*)
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
            DB::update("UPDATE cart SET `amount` = ?,`update_at` = ?
                    WHERE `id` = ?", $params);

    }

    public function deleteAllOrderCheckByUser($params) {
        DB::update("UPDATE cart SET `is_delete` = ?, `delete_at` = ? WHERE `id_user` = ?", $params);
    }

    public function getAllOrderCheckoutByUser($params) {
        return DB::select("SELECT * FROM cart WHERE is_delete = 1 AND id_user = ?", $params);
    }
}
