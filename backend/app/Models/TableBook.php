<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class TableBook extends Model
{
    protected $table = 'table_book';
    use HasFactory;
    public function create($params) {
        DB::insert('INSERT INTO table_book
    (name_user, id_table, phone,total_user,status_book,time_book, id_user)
    values (?, ?, ?, ?, ?, ?, ?)', $params);



    }
}
