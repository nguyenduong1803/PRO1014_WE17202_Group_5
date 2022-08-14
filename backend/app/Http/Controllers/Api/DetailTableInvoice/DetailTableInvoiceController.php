<?php

namespace App\Http\Controllers\Api\DetailTableInvoice;
use App\Http\Requests\DetailTableInvoice\DetailTableInvoiceUpdate;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\DetailTableInvoice;
use App\Models\Tables;

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
    public function updateTable(DetailTableInvoiceUpdate $request) {
        $validate = $request -> validated();
        $modelDetailTableInvoice = new DetailTableInvoice();
        $modelTables = new Tables();
        
        $listIdTableInvoice = $validate['list_id_table_invoice'];
        $listIdTable = $validate['list_id_table'];
        for($i = 0; $i < count($listIdTableInvoice); $i++) {
            for($j = 0; $j < count($listIdTable); $j++) {
                $detailTables = $modelDetailTableInvoice -> getDetailTableInvoice($listIdTableInvoice[$i]);
                $result = $modelDetailTableInvoice -> checkExistsTableInvoice($listIdTable[$j]);
                $resultCheckTable = $modelTables -> checkStatusTable($listIdTable[$j], 3);
                if(isset($result)) return response() ->json(["msg" => "Bàn này đã tồn tại, vui lòng chọn bàn khác!", "status" => false],402);
                if(!isset($resultCheckTable)) return response() ->json(["msg" => "Bàn này không tôn tại, vui lòng chọn bàn khác!", "status" => false],404);
                $updateTimeUpdateAt = date("Y-m-d H:i:s",time());
                $currTableInvoice = $detailTables['id_table'];
                $params = [
                    $listIdTable[$j],
                    $updateTimeUpdateAt,
                    $listIdTableInvoice[$i]
                ];
                $paramsUpdateTables = [
                    2,
                    $listIdTable[$j]
                ];
                $paramsUpdateTables2 = [
                    3,
                    $currTableInvoice
                ];
                $modelTables ->updateDetailStatus($paramsUpdateTables2);
                $modelTables ->updateDetailStatus($paramsUpdateTables);
                $modelDetailTableInvoice -> updateTableInvoice($params);
            }
        }        
        return response() ->json(["msg" => "Cập nhật bàn thành công!", "status" => true],200);
    }
}
