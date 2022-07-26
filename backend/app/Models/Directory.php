<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Directory extends Model
{
    protected $table = 'directory';
    use HasFactory;
    public function getLists() {
        return DB::select('SELECT * FROM directory WHERE `is_delete` = 1');
    }
    public function createDirectory($params) {
        DB::insert('INSERT INTO directory
        (name)
        values (?)', $params);
    }
    public function getDetail($id) {
        return Directory::query() -> where('id', $id)
            -> where('is_delete', 1)
            -> first();
    }
    public function deleteDirectory($params) {
        DB::update("UPDATE directory SET `is_delete` = ?, `delete_at` = ? WHERE `id` = ?", $params);
    }

    public function updateDirectory($params) {
        DB::update("UPDATE directory SET `name` = ?,`update_at` = ?
                    WHERE `id` = ?", $params);
    }
}
