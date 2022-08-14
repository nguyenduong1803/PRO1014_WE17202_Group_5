<?php

namespace App\Http\Controllers\Api\Statistical;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Statistical;
use Carbon\Carbon;

class StatisticalController extends Controller
{
    //
    public function statisticalByInvoices(Request $request) {
        $statisticalModel = new Statistical();
        $dayNow = Carbon::now('Asia/Ho_Chi_Minh') ->toDateString();
        $filterDate = $request -> get('filterDate');
        $subDays = $filterDate ? Carbon::now('Asia/Ho_Chi_Minh') -> subdays($filterDate) ->toDateString() : $dayNow;
        $params = [
            $subDays,
            $dayNow
        ];
        $data = $statisticalModel -> statisticalByInvoices($params);
        return response() ->json(["data" => $data, "status" => true],200);
    }
}
