<?php

namespace App\Http\Controllers\Api\Invoices;

use App\Http\Controllers\Api\InvoiceDetail\InvoiceDetailController;
use App\Http\Controllers\Api\DetailTableInvoice\DetailTableInvoiceController;
use App\Models\Tables;
use App\Http\Controllers\Controller;
use App\Http\Requests\Invoices\InvoiceUpdate;
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
        $detailTableInvoiceController = new DetailTableInvoiceController();
        $modelUser = new User();
        $listIdProduct = $request['list_id_product'];
        $listAmount = $request['list_amount'];
        $listTableBook = $request['list_table_book'];
        $purchaseStatus = $request['purchase_status'];
        $totalPrice = 0;
        $uniIdInvoice = strtoupper(Str::random(10));
        $arrMerge = array();
        $modelTables = new Tables();
        foreach ( $listIdProduct as $idx => $val ) {
            $arrMerge[] = ["id_product" => $val,"amount" => $listAmount[$idx]];
        }
        for($i = 0; $i < count($arrMerge); $i++) {
                    $params = [
                        $user['id'],
                        $uniIdInvoice,
                        $arrMerge[$i]['id_product'],
                        $arrMerge[$i]['amount'],
                    ];
                    $controllerDetailInvoice ->insertDetailInvoice($params);
                    $params3 = [
                        $listIdProduct[$i]
                    ];
                    $priceProduct = $modelDetailInvoice ->getPriceProductInDetailInvoice($params3);
                    $totalPrice += $priceProduct[0] -> price * $arrMerge[$i]['amount'];


        }
        for($i = 0; $i < count($listTableBook); $i++) {
            $params = [
                $listTableBook[$i],
                $uniIdInvoice
            ];
            $detailTableInvoiceController -> create($params);
            $params2 = [
                2,
                $listTableBook[$i],
            ];
            $modelTables -> updateDetailStatus($params2);
        }
        $userStaff = $modelUser ->getUserByRole(2, 3);
        $params2 = [
            $user['id'],
            $uniIdInvoice,
            1,
            $totalPrice,
            1,
            $userStaff['id'],
            $request['user_name_book'],
            $request['time_book'],
            $request['phone'],
            $request['note'],
            $purchaseStatus,
        ];
        $modelInvoices ->create($params2);
        return response() ->json(["msg" => "Tạo hoá đơn thành công!", "status" => true],200);
    }

    public function getInvoicesByUser() {
        $user = Auth::user();
        $params = [$user['id']];
        $modelInvoices = new Invoices();
        $data = $modelInvoices -> getInvoicesByUser($params);
        if(!isset($data) || count($data) < 1) return response() ->json(["msg" => "Bạn chưa có hoá đơn nào, vui lòng đặt hàng!", "status" => false],404);
        return response() ->json(["data" => $data, "status" => true],200);
    }
    public function getInvoicesByAdmin() {
        $modelInvoices = new Invoices();
        $data = $modelInvoices -> getInvoicesByAdmin();
        if(!isset($data) || count($data) < 1) return response() ->json(["msg" => "Bạn chưa có hoá đơn nào, vui lòng đặt hàng!", "status" => false],404);
        return response() ->json(["data" => $data, "status" => true],200);
    }

    public function updateInvoice(InvoiceUpdate $request,$id) {
        $validate = $request -> validated();
        $modelInvoices = new Invoices();
        $user = Auth::user();
        $modelUser = new User();
        $userStaff = $modelUser ->getUserByRole($validate['id_staff'], 3);
        $detailInvoice = $modelInvoices ->getDetailInvoice($id);
        if(!isset($detailInvoice) || !isset($userStaff)) return response() ->json(["msg" => "Lấy dữ liệu thất bại!", "status" => false],404);
        $statusEnvoice = isset($validate['status_envoice']) ? $validate['status_envoice'] : $detailInvoice['status_envoice'];
        $userNameBook = isset($validate['user_name_book']) ? $validate['user_name_book'] : $detailInvoice['user_name_book'];
        $timeBook = isset($validate['time_book']) ? $validate['time_book'] : $detailInvoice['time_book'];
        $phone = isset($validate['phone']) ? $validate['phone'] : $detailInvoice['phone'];
        $note = isset($validate['note']) ? $validate['note'] : $detailInvoice['note'];
        $idStaff = isset($validate['id_staff']) ? $validate['id_staff'] : $detailInvoice['id_staff'];
        $timeUpdateAt = date("Y-m-d H:i:s",time());
        $params =[
            $statusEnvoice,
            $userNameBook,
            $timeBook,
            $phone,
            $note,
            $user['id'],
            $idStaff,
            $timeUpdateAt,
            $id
        ];
        $modelInvoices ->updateInvoice($params);
        return response() ->json(["msg" => "Cập nhật thành công!", "status" => true],200);
    }
}
