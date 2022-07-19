<?php

namespace App\Http\Controllers\Api\Tables;

use App\Http\Controllers\Controller;
use App\Http\Requests\Tables\CreateTable;
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
}
