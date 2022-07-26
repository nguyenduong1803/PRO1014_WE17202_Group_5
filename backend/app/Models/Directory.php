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
}
