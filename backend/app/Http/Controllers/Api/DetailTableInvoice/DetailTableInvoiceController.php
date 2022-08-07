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
}
