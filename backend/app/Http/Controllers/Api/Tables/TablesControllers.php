<?php

namespace App\Http\Controllers\Api\Tables;

use App\Http\Controllers\Controller;
use App\Http\Requests\Tables\CreateTable;
use App\Http\Requests\Tables\UpdateTable;
use App\Models\Tables;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TablesControllers extends Controller
{
    public function create(CreateTable $request) {
        $validate = $request -> validated();
        $uploadedFileUrl = Cloudinary::upload($request->file('img')->getRealPath(), [
            'folder' => 'tables'
        ])->getSecurePath();
        $user = Auth::user();
        $modelTables = new Tables();
        $params = [
            $validate['address_shop'],
            $validate['floor'],
            $validate['description'],
            $validate['status'],
            $validate['index_table'],
            $validate['total_user_sitting'],
            $validate['limit_time_book'],
            $uploadedFileUrl,
            $user['id']
        ];

        $modelTables ->create($params);
        return response() ->json(["msg" => "Tạo mới bàn thành công!", "status" => true],200);
    }

    public function getLists() {
        $modelTables = new Tables();
        $data = $modelTables ->getLists();
        return response() ->json(["data" => $data, "status" => true],200);
    }

    public function update(UpdateTable $request) {
        $validate = $request -> validated();
        $uploadedFileUrl = Cloudinary::upload($request->file('img')->getRealPath(), [
            'folder' => 'tables'
        ])->getSecurePath();
        $user = Auth::user();
        $modelTables = new Tables();
        $detailProduct = $modelTables ->getDetailTable($validate['id']);
        $updateAddress = isset($validate['address_shop']) ? $validate['address_shop'] : $detailProduct['address_shop'];
        $updateFloor = isset($validate['floor']) ? $validate['floor'] : $detailProduct['floor'];
        $updateDes = isset($validate['description']) ? $validate['description'] : $detailProduct['description'];
        $updateStatus = isset($validate['status']) ? $validate['status'] : $detailProduct['status'];
        $updateIdxTable = isset($validate['index_table']) ? $validate['index_table'] : $detailProduct['index_table'];
        $updateIdxLimitTime = isset($validate['limit_time_book']) ? $validate['limit_time_book'] : $detailProduct['limit_time_book'];
        $updateTotalUserSetting = isset($validate['total_user_sitting']) ? $validate['total_user_sitting'] : $detailProduct['total_user_sitting'];
        $timeUpdateAt = date("Y-m-d H:i:s",time());
        $updateImg = isset($uploadedFileUrl) ? $uploadedFileUrl : $detailProduct['img'];
        $params = [
            $updateAddress,
            $updateFloor,
            $updateDes,
            $updateStatus,
            $updateIdxTable,
            $updateTotalUserSetting,
            $updateIdxLimitTime,
            $updateImg,
            $user['id'],
            $timeUpdateAt,
            $validate['id']
        ];
        $modelTables -> updateTable($params);
        return response() ->json(["msg" => "Cập nhật thành công!", "status" => true],200);
    }

    public function deleteTable($id) {
        $modelTables = new Tables();
        $result = $modelTables -> checkTableDeleted($id);
        $timeStamp = date("Y-m-d H:i:s",time());
        $params = [
            2,
            $timeStamp,
            $id
        ];
        if(isset($result)) {
            $modelTables -> deleteTable($params);
            return response() ->json(["msg" => "Xoá thành công!", "status" => true],200);
        }
        return response() ->json(["msg" => "Dữ liệu không tồn tại!", "status" => false],404);
    }
}
