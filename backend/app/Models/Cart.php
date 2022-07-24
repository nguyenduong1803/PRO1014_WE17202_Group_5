<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Cart extends Model
{
    use HasFactory;

    public function saveCart($params) {
        DB::insert('INSERT INTO cart
    (id_user , id_product , amount, id_table_book, purchase_status)
    values (? , ? , ?, ? , ?)', $params);
    }
}
