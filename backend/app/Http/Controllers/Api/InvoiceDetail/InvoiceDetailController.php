<?php

namespace App\Http\Controllers\Api\InvoiceDetail;

use App\Http\Controllers\Controller;
use App\Models\InvoiceDetail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

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

    public function getDetailInvoice($id, $id_invoice) {
        $user = Auth::user();
        $params = [
            $id_invoice,
            $user['id'],
            $id
        ];
        $modelDetailInvoice = new InvoiceDetail();
        $data = $modelDetailInvoice ->getDetailInvoice($params);
        if(!isset($data) || count($data) < 1) return response() ->json(["msg" => "Không có dữ liệu!", "status" => false],404);
        return response() ->json(["data" => $data, "status" => true],200);
    }

    public function insertDetailInvoice($params) {
        $modelDetailInvoice = new InvoiceDetail();
        $modelDetailInvoice ->insertDetailInvoice($params);
    }

    public function updateDetailInvoice($params) {
        $modelDetailInvoice = new InvoiceDetail();
        $modelDetailInvoice ->updateDetailInvoice($params);
    }
}
