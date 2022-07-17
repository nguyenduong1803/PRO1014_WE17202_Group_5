<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Product extends Model
{
    use HasFactory;

    public function create($params) {
        DB::insert('INSERT INTO product
    (name, short_desscription, id_directory, price, id_code_sale, is_status_product, id_user, id_cart, full_description, time_complete, is_delete, update_at,delete_at, id_img )
    values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?, ?)', $params);
    }

    public function createTest($params) {
        DB::insert('INSERT INTO product (name, short_desscription, price,id_img ) values (?, ?, ?, ?)', $params);
    }
}
