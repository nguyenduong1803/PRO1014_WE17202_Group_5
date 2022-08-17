<?php

namespace App\Http\Controllers\Api\Invoices;

use App\Http\Controllers\Api\InvoiceDetail\InvoiceDetailController;
use App\Http\Controllers\Api\DetailTableInvoice\DetailTableInvoiceController;
use App\Models\Tables;
use App\Http\Controllers\Controller;
use App\Http\Requests\Invoices\InvoiceUpdate;
use App\Models\DetailTableInvoice;
use App\Models\InvoiceDetail;
use App\Models\Invoices;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Carbon\Carbon;
use App\Models\Product;


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
        if(count($listIdProduct) > 0) {
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
            $request['create_at']
        ];
        $modelInvoices ->create($params2);
        return response() ->json(["msg" => "Tạo hoá đơn thành công!", "status" => true],200);
    }

    public function getInvoicesByUser(Request $request) {
        $currentDate = Carbon::now('Asia/Ho_Chi_Minh') ->toDateTimeString();
        $modelProduct = new Product();
        $user = Auth::user();
        $modelInvoices = new Invoices();
        $modelDetailInvoice = new InvoiceDetail();
        $data = $modelInvoices -> getInvoicesByUser($user['id'], $currentDate, $request);
        $listData = $data -> items();
        $modelDetailTableInvoice = new DetailTableInvoice();
        $timeUpdateAt = date("Y-m-d H:i:s",time());
        if(!isset($listData) || count($listData) < 1) return response() ->json(["msg" => "Bạn chưa có hoá đơn nào, vui lòng đặt hàng!", "status" => false],404);
        
        for($i =0;$i < count($data); $i++) {
            $params2 = [
                    $data[$i] -> id_invoice,
                    $user['id']
                ];
            $listDetailInvoice = $modelDetailInvoice -> getListDetailInvoice($params2);
            $data[$i] -> listDetailInvoice = $listDetailInvoice;
            $totalPrice = 0;
            for($j = 0; $j < count($listDetailInvoice); $j++) {
                $detail = $modelProduct ->detailProduct($listDetailInvoice[$j] -> id_product);
                $totalPrice += (float) $detail['price'] * $listDetailInvoice[$j] -> amount;
            }
            $params4 = [
                $totalPrice,
                $timeUpdateAt,
                $data[$i] -> id
            ];
            $modelInvoices -> updatePrice($params4);
        }
        for($i =0;$i < count($data); $i++) {
            $params3 = [
                $data[$i] -> id_invoice,
            ];
            $listDetailTbInvoice = $modelDetailTableInvoice -> getLists($params3);
            $data[$i] -> listDetailTbInvoice = $listDetailTbInvoice;
        }
        return $data;
    }
    public function getInvoicesByAdmin(Request $request) {
        $user = Auth::user();
        $modelProduct = new Product();
        $modelDetailInvoice = new InvoiceDetail();
        $modelInvoices = new Invoices();
        $modelDetailTableInvoice = new DetailTableInvoice();
        $data = $modelInvoices -> getInvoicesByAdmin($request);
        $listData = $data -> items();
        if(!isset($listData) || count($listData) < 1) return response() ->json(["msg" => "Bạn chưa có hoá đơn nào, vui lòng đặt hàng!", "status" => false],404);
        for($i =0;$i < count($listData); $i++) {
            $params2 = [
                    $listData[$i] -> id_invoice,
                    $user['id']
                ];
            $listDetailInvoice = $modelDetailInvoice -> getListDetailInvoice($params2);
            $listData[$i] -> listDetailInvoice = $listDetailInvoice;
            $totalPrice = 0;
            $timeUpdateAt = date("Y-m-d H:i:s",time());
            for($j = 0; $j < count($listDetailInvoice); $j++) {
                $detail = $modelProduct ->detailProduct($listDetailInvoice[$j] -> id_product);
                $totalPrice += (float) $detail['price'] * $listDetailInvoice[$j] -> amount;
            }
            $params4 = [
                $totalPrice,
                $timeUpdateAt,
                $listData[$i] -> id
            ];
            $modelInvoices -> updatePrice($params4);
        }
        for($i =0;$i < count($listData); $i++) {
            $params3 = [
                $listData[$i] -> id_invoice,
            ];
            $listDetailTbInvoice = $modelDetailTableInvoice -> getLists($params3);
            $listData[$i] -> listDetailTbInvoice = $listDetailTbInvoice;
        }
        return $data;
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
