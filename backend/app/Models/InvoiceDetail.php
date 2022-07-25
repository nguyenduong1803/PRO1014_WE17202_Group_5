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
}
