<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Statistical extends Model
{
    use HasFactory;

    public function statisticalByInvoices($params) {
        return DB::select('SELECT
        SUM(i.total_price) as total_price
        FROM
            invoices AS i
        WHERE
            `order_date` BETWEEN ? AND ?
        ORDER BY
        `order_date` ASC', $params);
    }

    public function statisticalByProduct() {
        return DB::select('SELECT
        p.name AS name_product,
        COUNT(dti.amount) AS total_product_order,
        p.price * COUNT(dti.amount) AS total_price
    FROM
        products AS p
    INNER JOIN detail_invoice AS dti
    ON
        p.id = dti.id_product
    GROUP BY
        p.id,
        p.name,p.price');
    }

    public function statisticalWithMostFrequent() {
        return DB::select('SELECT
        i.id_user, users.ten, users.img, users.dia_chi
        FROM
            invoices AS i
        INNER JOIN users
        ON users.id = i.id_user
        GROUP BY
            i.id_user
        ORDER BY
            COUNT(*)
        DESC
        LIMIT 10');
    }
}
