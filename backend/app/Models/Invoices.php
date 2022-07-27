<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Invoices extends Model
{
    use HasFactory;

    public function create($params) {
        DB::insert('INSERT INTO invoices
    (id_user ,id_invoice, status_cart_order, total_price, status_envoice, id_staff)
    values (?, ? , ? , ?, ?, ?)', $params);
    }

    public function getInvoice($params) {
        return DB::select("SELECT iv.status_cart_order,iv.id_invoice,iv.total_price, iv.status_envoice, iv.id_staff, tb.total_user, tbs.index_table, tbs.floor
                                FROM invoices as iv
                                INNER JOIN table_book as tb
                                ON tb.id_user = ?
                                INNER JOIN Tables as tbs
                                ON tbs.id = tb.id_table
                                WHERE status_envoice = 1
                                AND iv.is_delete = 1
                                AND tb.is_delete = 1
                                AND tbs.is_delete = 1", $params);
    }
}
