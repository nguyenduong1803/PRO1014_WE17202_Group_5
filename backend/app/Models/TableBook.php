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
    (name_user, id_table, phone,total_user,status_book,time_book, id_user, description)
    values (?, ?, ?, ?, ?, ?, ?, ?)', $params);
    }
    public function getTablesBookByUser($params) {
        return DB::select('SELECT * FROM table_book WHERE `id_user` = ? AND `is_delete` = ?', $params);
    }

    public function getDetail($params): array
    {
        return DB::select('SELECT * FROM table_book WHERE `id` = ? AND `is_delete` = 1', $params);
    }

    public function getListsTableBook() {
        return DB::select('SELECT * FROM table_book WHERE `is_delete` = 1');
    }

    public function checkExistsTableBook($params) {
        return DB::select('SELECT * FROM table_book WHERE `id` = ? AND `is_delete` = ? LIMIT 1', $params);
    }

    public function deleteTableBook($params) {
        DB::update("UPDATE table_book SET `is_delete` = ?, `delete_at` = ? WHERE `id` = ?", $params);
    }
    public function updateTableBook($params) {
        DB::update("UPDATE table_book SET `name_user` = ?, `id_table` = ?,`phone` = ?,
                    `total_user` = ?, `status_book` = ?, `time_book` = ?,`id_user` = ?, description = ?,
                     `update_at` = ?
                    WHERE `id` = ? AND `is_delete` = 1", $params);
    }
}
