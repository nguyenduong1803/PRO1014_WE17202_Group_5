<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Statistical extends Model
{
    use HasFactory;

    public function statisticalByInvoices($params) {
        return DB::select('SELECT * FROM invoices WHERE `order_date` BETWEEN ? AND ? ORDER BY `order_date` ASC', $params);
    }
}
