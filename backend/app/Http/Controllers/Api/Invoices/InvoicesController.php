<?php

namespace App\Http\Controllers\Api\Invoices;

use App\Http\Controllers\Controller;
use App\Models\Invoices;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class InvoicesController extends Controller
{
    //
    public function create() {
        $user = Auth::user();
        $params = [
            $user['id']
        ];
        $modelInvoices = new Invoices();
        $modelUser = new User();
        $userStaff = $modelUser ->getUserByRole(2, 3);
        $listProduct =  $modelInvoices ->getListsPriceProductInCart($params);
        $countPrice = 0;
        foreach ($listProduct as &$item) {
            $countPrice += $item -> total_price;
        }
        $params2 = [
            $user['id'],
            1,
            $countPrice,
            1,
            $userStaff['id']
        ];
        $modelInvoices ->create($params2);
        return response() ->json(["msg" => "Tạo hoá đơn thành công!", "status" => true],200);
    }

    public function getInvoice() {
        $user = Auth::user();
        $params = [$user['id']];
        return $params;
        $modelInvoices = new Invoices();
        $data = $modelInvoices -> getInvoice($params);
        if(!isset($data) || count($data) < 1) return response() ->json(["msg" => "Bạn chưa có hoá đơn nào, vui lòng đặt hàng!", "status" => false],404);
        $data = $data[count($data) - 1 ];
        return response() ->json(["data" => $data, "status" => true],200);
    }
}
