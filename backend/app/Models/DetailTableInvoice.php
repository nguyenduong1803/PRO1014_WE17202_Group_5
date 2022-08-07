<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class DetailTableInvoice extends Model
{
    use HasFactory;
    protected $table = 'detail_table_invoice';
    public function insert($params) {
        DB::insert('INSERT INTO detail_table_invoice
    (id_table , id_invoice)
    values (? , ? )', $params);
    }
}
