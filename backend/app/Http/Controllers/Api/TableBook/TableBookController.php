<?php

namespace App\Http\Controllers\Api\TableBook;

use App\Http\Controllers\Controller;
use App\Http\Requests\TableBook\TableBookCreate;
use App\Http\Requests\TableBook\TableBookUpdate;
use App\Models\TableBook;
use App\Models\Tables;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class TableBookController extends Controller
{
    public function createBook(TableBookCreate $request) {
        $validate = $request -> validated();
        $modelTableBook = new TableBook();
        $modelTables = new Tables();
        $detailTable = $modelTables ->getDetailTable($validate['id_table']);
        if(!isset($detailTable)) return response() ->json(["msg" => "Không có dữ liệu!", "status" => false],404);
        if($detailTable -> status != 3) return response() ->json(["msg" => "Bàn đã bị đặt hoặc khách đang sử dụng", "status" => false],405);
        $user = Auth::user();
        $params = [
            $validate['name_user'],
            $validate['id_table'],
            $validate['phone'],
            $validate['total_user'],
            $validate['status_book'],
            $validate['time_book'],
            $user['id'],
            $validate['description'],
        ];
        $paramsUpdateTables = [
            1,
            $validate['id_table']
        ];
        $modelTables ->updateDetailStatus($paramsUpdateTables);
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
        if(!isset($userChecked)) return response() ->json(["msg" => "Không tồn tại người dùng!", "status" => false],404);
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

    public function updateTableBook(TableBookUpdate $request) {
        $validate = $request -> validated();
        $modelTableBook = new TableBook();
        $paramsDetail = [
            $validate['id']
        ];
        $resultDetail = $modelTableBook -> getDetail($paramsDetail);
        $data =  $resultDetail[0];
        if(!isset($data)) return response() ->json(["msg" => "Dữ liệu không tồn tại!", "status" => false],404);
        $user = Auth::user();
        $updateTimeUpdateAt = date("Y-m-d H:i:s",time());
        $updateNameUser = isset($validate['name_user']) ? $validate['name_user'] : $data -> name_user;
        $updateIdTable = isset($validate['id_table']) ? $validate['id_table'] : $data -> id_table;
        $updatePhone = isset($validate['phone']) ? $validate['phone'] : $data -> phone;
        $updateTotalUser = isset($validate['total_user']) ? $validate['total_user'] :$data -> total_user;
        $updateStatusBook = isset($validate['status_book']) ? $validate['status_book'] : $data -> status_book;
        $updateTimeBook = isset($validate['time_book']) ? $validate['time_book'] : $data -> time_book;
        $updateDes = isset($validate['description']) ? $validate['description'] : $data -> description;
        $params = [
            $updateNameUser,
            $updateIdTable,
            $updatePhone,
            $updateTotalUser,
            $updateStatusBook ,
            $updateTimeBook,
            $user['id'],
            $updateDes,
            $updateTimeUpdateAt,
            $validate['id']
        ];
        $modelTableBook -> updateTableBook($params);
        return response() ->json(["msg" => "Cập nhật đặt bàn thành công!", "status" => true],200);
    }
}
