<?php

namespace App\Http\Controllers\Api\InvoiceDetail;

use App\Http\Controllers\Controller;
use App\Http\Requests\InvoiceDetail\InvoiceDetailUpdate;
use App\Models\InvoiceDetail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\InvoiceDetail\InvoiceDetailCreate;

class InvoiceDetailController extends Controller
{
    //
    public function getListDetailInvoice($id_invoice) {
        $user = Auth::user();
        $params = [
            $id_invoice,
            $user['id']
        ];
        $modelDetailInvoice = new InvoiceDetail();
        $data = $modelDetailInvoice ->getListDetailInvoice($params);
        if(!isset($data) || count($data) < 1) return response() ->json(["msg" => "Không có dữ liệu!", "status" => false],404);
        return response() ->json(["data" => $data, "status" => true],200);
    }

    public function getDetailInvoice($id) {
        $user = Auth::user();
        $params = [
            $user['id'],
            $id
        ];
        $modelDetailInvoice = new InvoiceDetail();
        $data = $modelDetailInvoice ->getDetailInvoice($params);
        if(!isset($data) || count($data) < 1) return response() ->json(["msg" => "Không có dữ liệu!", "status" => false],404);
        return response() ->json(["data" => $data[0], "status" => true],200);
    }

    public function insertDetailInvoice($params) {
        $modelDetailInvoice = new InvoiceDetail();
        $modelDetailInvoice ->insertDetailInvoice($params);
    }

    public function updateDetailInvoice(InvoiceDetailUpdate $request, $id) {
        $validate = $request -> validated();
        $modelDetailInvoice = new InvoiceDetail();
        $timeUpdateAt = date("Y-m-d H:i:s",time());
        $idProduct = $validate['id_product'];
        $amount = $validate['amount'];
        $user = Auth::user();
        $params = [
            $user['id'],
            $idProduct,
            $amount,
            $timeUpdateAt,
            $id
        ];
        $params2 = [
            $user['id'],
            $id
        ];
        $data = $modelDetailInvoice ->getDetailInvoice($params2);
        if(!isset($data) || count($data) < 1) return response() ->json(["msg" => "Không có dữ liệu!", "status" => false],404);
        $modelDetailInvoice -> updateDetailInvoice($params);
        return response() ->json(["msg" => "Cập nhật thành công!", "status" => true],200);
    }

    public function deleteDetailInvoice($id) {
        $modelDetailInvoice = new InvoiceDetail();
        $user = Auth::user();
        $params = [
            $user['id'],
            $id
        ];
        $timeStamp = date("Y-m-d H:i:s",time());
        $params2 = [
            2,
            $timeStamp,
            $id
        ];
        $data = $modelDetailInvoice ->getDetailInvoice($params);
        if(!isset($data) || count($data) < 1) return response() ->json(["msg" => "Không có dữ liệu!", "status" => false],404);
        $modelDetailInvoice -> deleteDetailInvoice($params2);
        return response() ->json(["msg" => "Xoá thành công!", "status" => true],200);
    }
    public function createDetailInvoice(InvoiceDetailCreate $request) {
        $validate = $request -> validated();
        $modelDetailInvoice = new InvoiceDetail();
        $user = Auth::user();
        $params = [
            $validate['id_invoice'],
            $validate['id_product'],
            $validate['amount'],
            $user['id'],
        ];
        $modelDetailInvoice -> create($params);
        return response() ->json(["msg" => "Thêm mới chi tiết hoá đơn thành công!", "status" => true],200);
    }
}
