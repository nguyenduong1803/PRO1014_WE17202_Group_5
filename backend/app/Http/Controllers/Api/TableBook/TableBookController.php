<?php

namespace App\Http\Controllers\Api\TableBook;

use App\Http\Controllers\Controller;
use App\Http\Requests\TableBook\TableBookCreate;
use App\Models\TableBook;
use Illuminate\Support\Facades\Auth;

class TableBookController extends Controller
{
    public function createBook(TableBookCreate $request) {
        $validate = $request -> validated();
        $modelTableBook = new TableBook();
        $user = Auth::user();
        $params = [
            $validate['name_user'],
            $validate['id_table'],
            $validate['phone'],
            $validate['total_user'],
            $validate['status_book'],
            $validate['time_book'],
            $user['id'],
        ];
        $modelTableBook -> create($params);
        return response() ->json(["msg" => "Đặt bàn thành công!", "status" => true],200);

    }
}
