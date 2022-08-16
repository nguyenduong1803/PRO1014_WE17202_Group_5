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
}
