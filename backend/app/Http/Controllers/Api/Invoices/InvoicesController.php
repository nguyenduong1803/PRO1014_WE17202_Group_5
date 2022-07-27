<?php

namespace App\Http\Controllers\Api\Invoices;

use App\Http\Controllers\Api\InvoiceDetail\InvoiceDetailController;
use App\Http\Controllers\Controller;
use App\Models\InvoiceDetail;
use App\Models\Invoices;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class InvoicesController extends Controller
{
    //
    public function create(Request $request) {
        $user = Auth::user();
        $controllerDetailInvoice = new InvoiceDetailController();
        $modelInvoices = new Invoices();
        $modelDetailInvoice = new InvoiceDetail();
        $modelUser = new User();
        $listChooseProducts = $request -> chooseProducts;
        $uniIdInvoice = strtoupper(Str::random(10));
        $totalPrice = 0;
        if(!isset($listChooseProducts) || count($listChooseProducts) < 1) response() ->json(["msg" => "Vui lòng chọn món!", "status" => false],410);
        for($i = 0; $i < count($listChooseProducts); $i++) {
            $params = [
                $user['id'],
                $uniIdInvoice,
                $listChooseProducts[$i]['id_table_book'],
                $listChooseProducts[$i]['id_product'],
                $listChooseProducts[$i]['amount'],
            ];
            $controllerDetailInvoice ->insertProduct($params);
            $params3 = [
                $listChooseProducts[$i]['id_product']
            ];
            $priceProduct = $modelDetailInvoice ->getPriceProductInDetailInvoice($params3);
            $totalPrice += $priceProduct[0] -> price * $listChooseProducts[$i]['amount'];
        }

        $userStaff = $modelUser ->getUserByRole(2, 3);
        $params2 = [
            $user['id'],
            $uniIdInvoice,
            1,
            $totalPrice,
            1,
            $userStaff['id']
        ];
        $modelInvoices ->create($params2);
        return response() ->json(["msg" => "Tạo hoá đơn thành công!", "status" => true],200);
    }

    public function getInvoice() {
        $user = Auth::user();
        $params = [$user['id']];
        $modelInvoices = new Invoices();
        $data = $modelInvoices -> getInvoice($params);
        if(!isset($data) || count($data) < 1) return response() ->json(["msg" => "Bạn chưa có hoá đơn nào, vui lòng đặt hàng!", "status" => false],404);
        $data = $data[count($data) - 1 ];
        return response() ->json(["data" => $data, "status" => true],200);
    }
}
