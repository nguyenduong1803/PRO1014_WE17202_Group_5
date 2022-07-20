<?php

namespace App\Http\Controllers\Api\TableBook;

use App\Http\Controllers\Controller;
use App\Http\Requests\TableBook\TableBookCreate;
use App\Models\TableBook;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use function PHPUnit\Framework\isEmpty;

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

    public function getTablesBookByUser() {
        $user = Auth::user();
        $modelTableBook = new TableBook();
        $modelUser = new User();
        $params = [
            $user['id'],
            1
        ];
        $userChecked = $modelUser ->checkExistsUserById($user['id']);
        $data = $modelTableBook -> getTablesBookByUser($params);
        if(!isset($userChecked)) response() ->json(["msg" => "Không tồn tại người dùng!", "status" => false],404);
        if(isset($data)) return response() ->json(["data" => $data, "status" => true],200);
        return response() ->json(["msg" => "Lấy dữ liệu thất bại!", "status" => false],404);
    }

    public function getListsTableBook() {
        $modelTableBook = new TableBook();
        $data = $modelTableBook -> getListsTableBook();
        if(!isset($data)) response() ->json(["msg" => "Lấy dữ liệu thất bại!", "status" => false],404);
        return response() ->json(["data" => $data, "status" => true],200);
    }

    public function deleteTableBook($id) {
        $modelTableBook = new TableBook();
        $timeStamp = date("Y-m-d H:i:s",time());
        $params = [
            (int)$id,
            1
        ];
        $result = $modelTableBook -> checkExistsTableBook($params);
        $params2 = [
            2,
            $timeStamp,
            $id
        ];
        if(!isset($result[0])) return response() ->json(["msg" => "Sản phẩm đã bị xoá hoặc không tôn tại!", "status" => false],404);
        $modelTableBook -> deleteTableBook($params2);
        return response() ->json(["msg" => 'Xoá đặt bàn thành công!', "status" => true],200);
    }
}
