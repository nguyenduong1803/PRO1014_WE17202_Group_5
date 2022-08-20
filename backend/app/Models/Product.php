<?php

namespace App\Models;

use http\Env\Request;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Product extends Model
{
    use HasFactory;

    public function create($params) {
        DB::insert('INSERT INTO products
    (name, short_description, id_directory, price, id_code_sale, is_status_product, id_user, id_cart, full_description, time_complete, id_img )
    values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', $params);
    }

    public function listsProduct($request) {
        $search = $request -> get('q');
        $sortDateCreateAt = $request -> get('sortCreateAt');
        $limitPage = $request -> get('limit') ? $request -> get('limit'): 10;
        $idDirectory = $request -> get('id_directory');
        $priceFrom = $request -> get('priceFrom');
        $priceTo = $request -> get('priceTo');
        $product =  Product::query();
        $data = $product
            -> where('is_delete', '1')
            -> where('name', 'like', '%' . $search . '%')
            -> orderBy('create_at', $sortDateCreateAt);
        if($idDirectory) $data = $product -> where('id_directory', $idDirectory);
        if($priceFrom && $priceTo) $data = $product -> whereBetween('price', [$priceFrom, $priceTo]);
        $data = $product -> paginate($limitPage);
        return $data;
    }
    public function detailProduct($id) {
        $data = Product::where('id', $id)->first();
        return $data;
    }
    public function checkProductDeleted($id) {
        $data = Product::query() -> where('id', $id)
            -> where('is_delete', 2)
         -> first();
        return $data;
    }
    public function deleteProduct($params) {
        DB::update("UPDATE products SET `is_delete` = ?, `delete_at` = ? WHERE `id` = ?", $params);
    }

    public function updateProduct($params) {
        DB::update("UPDATE products SET `name` = ?, `short_description` = ?,`id_directory` = ?,
                    `price` = ?, `id_code_sale` = ?, `is_status_product` = ?,`id_cart` = ?,
                    `full_description` = ?,`time_complete` = ?,`id_user` = ?, `update_at` = ?
                    WHERE `id` = ?", $params);
    }
}
