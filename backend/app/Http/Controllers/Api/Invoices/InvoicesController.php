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
        return response() ->json(["data" => $data, "status" => true],200);
    }

    public function updateInvoice(Request $request,$id) {
        $modelInvoices = new Invoices();
        $user = Auth::user();
        $controllerDetailInvoice = new InvoiceDetailController();
        $modelDetailInvoice = new InvoiceDetail();
        $modelUser = new User();
        $detailInvoice = $modelInvoices ->getDetailInvoice($id);
        if(!isset($detailInvoice)) return response() ->json(["msg" => "Lấy dữ liệu thất bại!", "status" => false],404);
        $listChooseProducts = $request -> chooseProducts;
        $idDetailInvoices = $request -> id_invoice;
        $totalPriceUpdate = 0;
        if(!isset($listChooseProducts) || count($listChooseProducts) < 1) return response() ->json(["msg" => "Vui lòng chọn món!", "status" => false],410);
        for($i = 0; $i < count($listChooseProducts); $i++) {
            $timeUpdateAt = date("Y-m-d H:i:s",time());
            $paramsInsert = [
                $user['id'],
                $idDetailInvoices,
                $listChooseProducts[$i]['id_table_book'],
                $listChooseProducts[$i]['id_product'],
                $listChooseProducts[$i]['amount'],
            ];
            if(isset($listChooseProducts[$i]['id'])) {
                $paramsUpdate = [
                    $listChooseProducts[$i]['id_table_book'],
                    $listChooseProducts[$i]['id_product'],
                    $listChooseProducts[$i]['amount'],
                    $timeUpdateAt,
                    $idDetailInvoices,
                    $listChooseProducts[$i]['id']
                ];
                $params4 = [
                    $idDetailInvoices,
                    $listChooseProducts[$i]['id']
                ];
                $detail = $modelDetailInvoice ->getDetailInvoice2($params4);
                if(!isset($detail) || count($detail) < 1) return response() ->json(["msg" => "Cập nhật dữ liệu thất bại!", "status" => false],404);
                $controllerDetailInvoice ->updateDetailInvoice($paramsUpdate);
            }
            if(is_null($listChooseProducts[$i]['id'])) $controllerDetailInvoice ->insertDetailInvoice($paramsInsert);

            $params5 = [
                $listChooseProducts[$i]['id_product']
            ];
            $params6 = [
                $idDetailInvoices
            ];
            $modelDetailInvoice = new InvoiceDetail();
            $dataInvoices = $modelDetailInvoice ->getDetailInvoice($params6);
            $priceProduct = $modelDetailInvoice ->getPriceProductInDetailInvoice($params5);

            for($i = 0; $i < count($dataInvoices); $i++) {
                $totalPriceUpdate += $priceProduct[0] -> price * $dataInvoices[$i] -> amount;
            }
        }

        $userStaff = $modelUser ->getUserByRole(2, 3);
        $timeUpdateAt = date("Y-m-d H:i:s",time());
        $params2 = [
            1,
            $totalPriceUpdate,
            1,
            $userStaff['id'],
            $timeUpdateAt,
            $id
        ];
        $modelInvoices ->updateInvoice($params2);
        return response() ->json(["msg" => "Cập nhật hoá đơn thành công!", "status" => true],200);
    }
}
