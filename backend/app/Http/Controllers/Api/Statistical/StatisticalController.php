<?php

namespace App\Http\Controllers\Api\Statistical;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Statistical;
use Carbon\Carbon;
use App\Models\Invoices;

class StatisticalController extends Controller
{
    //
    public function statisticalByInvoices(Request $request) {
        $statisticalModel = new Statistical();
        $dayNow = Carbon::now('Asia/Ho_Chi_Minh') ->toDateString();
        $filterDate = $request -> get('filterDate');
        $subDays = isset($filterDate) ? Carbon::now('Asia/Ho_Chi_Minh') -> subdays($filterDate) ->toDateString() : $dayNow;
        $params = [
            $subDays,
            $dayNow
        ];
        $data = $statisticalModel -> statisticalByInvoices($params);
        return response() ->json(["data" => $data, "status" => true],200);
    }
    public function statisticalByProduct() {
        $statisticalModel = new Statistical();
        $data = $statisticalModel -> statisticalByProduct();
        return response() ->json(["data" => $data, "status" => true],200);
        
    }

    public function statisticalWithMostFrequent() {
        $statisticalModel = new Statistical();
        $modelInvoices = new Invoices();
        $data = $statisticalModel -> statisticalWithMostFrequent();
        for($i = 0; $i < count($data); $i++) {
            $params = [
                $data[$i] -> id_user
            ];
            $data[$i] -> listInvoices = $modelInvoices -> getInvoicesStatisticalWithMostFrequent($params);

        }
        return response() ->json(["data" => $data, "status" => true],200);
        
    }
}
