<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Comments extends Model
{
    use HasFactory;
    public function insert($params) {
        DB::insert('INSERT INTO comments
            (description,id_product, id_user)
            values (? , ? , ?)', $params);
    }
}
