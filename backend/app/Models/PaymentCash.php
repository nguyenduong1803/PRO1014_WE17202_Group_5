<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PaymentCash extends Model
{
    use HasFactory;
    public function create($params) {
        DB::insert('INSERT INTO payment_cash
        (name ,description, phone, address, purchase_status, status_order)
        values (?, ? , ? , ?, ?, ?)', $params);
    }
}
