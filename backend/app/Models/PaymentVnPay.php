<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class PaymentVnPay extends Model
{
    use HasFactory;
    public function create($params) {
        DB::insert('INSERT INTO payment_vnpay
    (amount, bank_code, card_type, bank_tran_no, order_info, paydate, tmn_code, id_user, transaction_no, txn_ref, transaction_status, id_invoices)
    values (?, ? , ? , ?, ?, ?, ?, ?, ?, ?, ?, ?)', $params);
    }

    public function checkStatusPayment($params) {
        return DB::select('SELECT * FROM payment_vnpay WHERE id_invoices = ? AND txn_ref = ?', $params);
    }
}
