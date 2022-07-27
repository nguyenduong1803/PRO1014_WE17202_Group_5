<?php

namespace App\Http\Controllers\Api\InvoiceDetail;

use App\Http\Controllers\Controller;
use App\Models\InvoiceDetail;
use Illuminate\Http\Request;

class InvoiceDetailController extends Controller
{
    //
    public function getDetailInvoice() {
        $modelDetailInvoice = new InvoiceDetail();
        $data = $modelDetailInvoice ->getDetailInvoice();
        if(!isset($data) || count($data) < 1) return response() ->json(["msg" => "Không có dữ liệu!", "status" => false],404);
        return response() ->json(["data" => $data, "status" => true],200);
    }

    public function insertProduct($params) {
        $modelDetailInvoice = new InvoiceDetail();
        $modelDetailInvoice ->insertDetailInvoice($params);
    }
}
