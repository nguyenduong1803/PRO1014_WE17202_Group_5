<?php

namespace App\Http\Controllers\Api\Cart;

use App\Http\Controllers\Controller;
use App\Http\Requests\Cart\SaveCart;
use App\Models\Cart;
use App\Models\Tables;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CartController extends Controller
{
    public function saveCart(SaveCart $request) {
        $validate = $request -> validated();
        $user = Auth::user();
        $modelCart = new Cart();
        $purchaseStatus = isset($validate['id_table_book']) ? 2 : 1;
        $params = [
            $user['id'],
            $validate['id_product'],
            $validate['amount'],
            $validate['id_table_book'],
            $purchaseStatus,
        ];
        $modelCart ->saveCart($params);
        return response() ->json(["msg" => "Thêm đơn hàng vào giỏ hàng thành công!", "status" => true],200);
    }

    public function getCart() {
        $user = Auth::user();
        $params = [
            $user['id']
        ];
        $modelCart = new Cart();
        $data = $modelCart ->getCart($params);
        if(!isset($data)) return response() ->json(["msg" => "Đã xảy ra lỗi!", "status" => false],405);
        return response() ->json(["data" => $data, "status" => true],200);
    }

    public function deleteOrder($id) {
        $modelCart = new Cart();
        $result = $modelCart -> checkOrderDeleted($id);
        $timeStamp = date("Y-m-d H:i:s",time());
        $params = [
            2,
            $timeStamp,
            $id
        ];
        if(isset($result)) {
            $modelCart -> deleteOrder($params);
            return response() ->json(["msg" => "Xoá thành công!", "status" => true],200);
        }
        return response() ->json(["msg" => "Dữ liệu không tồn tại!", "status" => false],404);
    }
}
