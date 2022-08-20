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
            -> leftJoin('users', 'users.id', '=', 'comments.id_user')
            -> select('comments.*','users.ten', 'users.img')
            -> where('comments.is_delete', '1')
            -> where('comments.id_product', $idProduct)
            -> where('comments.description', 'like', '%' . $search . '%')
            -> where('users.is_delete', '1')
            -> orderBy('comments.create_at', $sortDateCreateAt)
            -> paginate($limitPage);
        $data->appends(['q' => $search]);
        return $data;
    }

    public function updateComment($params) {
        DB::update("UPDATE comments SET `description` = ?, `update_at` = ? WHERE `id_user` = ? AND `id` = ? AND is_delete = 1", $params);
    }

    public function checkExistsComment($id, $id_user) {
        return Comments::query() -> where('id', $id)
            -> where('is_delete', 1)
            -> where('id_user', $id_user)
            -> first();
    }
    public function deleteComment($params) {
        DB::update("UPDATE comments SET `is_delete` = ?, `delete_at` = ? WHERE `id` = ? AND `id_user` = ?", $params);
    }
}
