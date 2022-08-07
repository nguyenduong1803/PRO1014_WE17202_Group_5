<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Comments extends Model
{
    use HasFactory;
    protected $table = 'comments';
    public function insert($params) {
        DB::insert('INSERT INTO comments
            (description,id_product, id_user)
            values (? , ? , ?)', $params);
    }

    public function getListByProduct($request) {
        $search = $request -> get('q');
        $sortDateCreateAt = $request -> get('sortCreateAt');
        $limitPage = $request -> get('limit') ? $request -> get('limit'): 10;
        $idProduct = $request -> get('id_product');
        $data = Comments::query()
            -> where('is_delete', '1')
            -> where('id_product', $idProduct)
            -> where('description', 'like', '%' . $search . '%')
            -> orderBy('create_at', $sortDateCreateAt)
            -> paginate($limitPage);
        $data->appends(['q' => $search]);
        return $data;
    }
}
