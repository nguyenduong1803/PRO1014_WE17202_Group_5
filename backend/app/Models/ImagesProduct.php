<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class ImagesProduct extends Model
{
    use HasFactory;
    public function insert($params) {
        DB::insert('INSERT INTO images_product
    ( id_product_img , path)
    values (? , ?)', $params);
    }
}
