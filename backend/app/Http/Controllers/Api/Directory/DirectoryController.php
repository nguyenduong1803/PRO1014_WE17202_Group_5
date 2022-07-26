<?php

namespace App\Http\Controllers\Api\Directory;

use App\Http\Controllers\Controller;
use App\Http\Requests\Directory\DirectoryCreate;
use App\Http\Requests\Directory\DirectoryUpdate;
use App\Models\Directory;
use Illuminate\Http\Request;

class DirectoryController extends Controller
{
    //
    public function getLists() {
        $modelDirectory = new Directory();
        $data = $modelDirectory -> getLists();
        return response() ->json(["data" => $data, "status" => true],200);
    }
    public function createDirectory(DirectoryCreate $request) {
        $modelDirectory = new Directory();
        $validate = $request ->validated();
        $params = [
            $validate['name']
        ];
        $modelDirectory ->createDirectory($params);
        return response() ->json(["msg" => "Thêm mới danh mục thành công!", "status" => true],200);
    }
    public function deleteDirectory($id) {
        $modelDirectory = new Directory();
        $detail = $modelDirectory -> getDetail($id);
        if(!isset($detail)) return response() ->json(["msg" => "Không có dữ liệu", "status" => false],404);
        $timeStamp = date("Y-m-d H:i:s",time());
        $paramsDelete = [
            2,
            $timeStamp,
            $id
        ];
        $modelDirectory -> deleteDirectory($paramsDelete);
        return response() ->json(["msg" => "Xoá thành công!", "status" => true],200);
    }
    public function updateDirectory(DirectoryUpdate $request) {
        $validate = $request ->validated();
        $modelDirectory = new Directory();
        $detail = $modelDirectory -> getDetail($validate['id']);
        if(!isset($detail)) return response() ->json(["msg" => "Không có dữ liệu", "status" => false],404);
        $timeStamp = date("Y-m-d H:i:s",time());
        $params = [
            $validate['name'],
            $timeStamp,
            $validate['id']
        ];
        $modelDirectory -> updateDirectory($params);
        return response() ->json(["msg" => "Cập nhật thành công!", "status" => true],200);
    }
}
