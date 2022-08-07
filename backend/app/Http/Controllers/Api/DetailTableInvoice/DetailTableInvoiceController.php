<?php

namespace App\Http\Controllers\Api\DetailTableInvoice;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\DetailTableInvoice;

class DetailTableInvoiceController extends Controller
{
    //
    public function create($params) {
        $modelDetailTableInvoice = new DetailTableInvoice();
        $modelDetailTableInvoice -> insert($params);
    }
    public function getLists($id_invoice) {
        $modelDetailTableInvoice = new DetailTableInvoice();
        $params = [
            $id_invoice
        ];
        $data = $modelDetailTableInvoice -> getLists($params);
        return response() ->json(["data" => $data, "status" => true],200);
    }
}
