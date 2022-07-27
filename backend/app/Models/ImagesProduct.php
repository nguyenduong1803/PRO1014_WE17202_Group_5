<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class ImagesProduct extends Model
{
    use HasFactory;
    protected $table = 'images_product';
    public function insert($params) {
        DB::insert('INSERT INTO images_product
    (id_user , id_product_img , path)
    values (? , ? , ?)', $params);
    }
    public function listsImg() {
        return DB::select("SELECT * FROM images_product WHERE is_delete = 1");
    }
}
