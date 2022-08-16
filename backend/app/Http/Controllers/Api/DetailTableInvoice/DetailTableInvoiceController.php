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
        $timeStamp = date("Y-m-d H:i:s",time());
        for($i = 0; $i < count($listIdTableInvoice); $i++) {
            $detailTables = $modelDetailTableInvoice -> getDetailTableInvoice($listIdTableInvoice[$i]);
            $currTableInvoice = $detailTables['id_table'];
            $paramsDelete = [
                    2,
                    $timeStamp,
                    $listIdTableInvoice[$i]
            ];
            $paramsUpdateTables2 = [
                3,
                $currTableInvoice
            ];
            $modelDetailTableInvoice -> deleteDetailTableIv($params);
            $modelTables ->updateDetailStatus($paramsUpdateTables2);
        }
        for($j = 0; $j < count($listIdTable); $j++) {
            $params = [
                $listIdTable[$i],
                $uniIdInvoice
            ];
            $this -> create($params);
            $paramsUpdateTables = [
                2,
                $listIdTable[$j]
            ];
            $modelTables ->updateDetailStatus($paramsUpdateTables);
        }     
        return response() ->json(["msg" => "Cập nhật bàn thành công!", "status" => true],200);
    }
}
