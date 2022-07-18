<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Product extends Model
{
    use HasFactory;

    public function create($params) {
        DB::insert('INSERT INTO products
    (name, short_desscription, id_directory, price, id_code_sale, is_status_product, id_user, id_cart, full_description, time_complete, is_delete, update_at,delete_at, id_img )
    values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?, ?)', $params);
    }

    public function listsProduct($request) {
        $search = $request -> get('q');
        $sortDateCreateAt = $request -> get('sortCreateAt');
        $limitPage = $request -> get('limit') ? $request -> get('limit'): 10;
        $data = Product::query() -> where('name', 'like', '%' . $search . '%')
            -> orderBy('create_at', $sortDateCreateAt)
            -> simplePaginate($limitPage);
        $data->appends(['q' => $search]);
        return $data;

    }
}
