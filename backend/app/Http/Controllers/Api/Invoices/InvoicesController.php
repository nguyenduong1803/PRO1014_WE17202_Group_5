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
}
