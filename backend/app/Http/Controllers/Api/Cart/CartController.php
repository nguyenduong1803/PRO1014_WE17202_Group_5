<?php

namespace App\Http\Controllers\Api\Cart;

use App\Http\Controllers\Controller;
use App\Http\Requests\Cart\SaveCart;
use App\Http\Requests\Cart\UpdateOrder;
use App\Models\Cart;
use Illuminate\Support\Facades\Auth;

class CartController extends Controller
{
    public function saveCart(SaveCart $request) {
        $validate = $request -> validated();
        $user = Auth::user();
        $modelCart = new Cart();
        $params = [
            $user['id'],
            $validate['id_product'],
            $validate['amount'],
        ];
        $modelCart ->saveCart($params);
        return response() ->json(["msg" => "Thêm đơn hàng vào giỏ hàng thành công!", "status" => true],200);
    }

    public function getCart() {
        $user = Auth::user();
        $params = [
            $user['id'],
            $user['id'],
        ];
        $modelCart = new Cart();
        $data = $modelCart ->getCart($params);
        if(!isset($data)) return response() ->json(["msg" => "Đã xảy ra lỗi!", "status" => false],405);
        return response() ->json(["data" => $data, "status" => true],200);
    }

    public function deleteOrder($id) {
        $modelCart = new Cart();
        $result = $modelCart -> checkDetailOrderDeleted($id);
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

    public function updateOrder(UpdateOrder $request) {
        $validate = $request -> validated();
        $modelCart = new Cart();
        $detailOrder = $modelCart -> checkDetailOrderDeleted($validate['id']);
        if(!isset($detailOrder)) return response() ->json(["msg" => "Đã xảy ra lỗi", "status" => false],405);
        $updateAmount=  isset($validate['amount']) ? $validate['amount'] : $detailOrder['amount'];
        $timeUpdateAt = date("Y-m-d H:i:s",time());
        $params = [
            $updateAmount,
            $timeUpdateAt,
            $validate['id']
        ];
        $modelCart -> updateOrder($params);
        return response() ->json(["msg" => "Cập nhật thành công!", "status" => true],200);
    }
}
