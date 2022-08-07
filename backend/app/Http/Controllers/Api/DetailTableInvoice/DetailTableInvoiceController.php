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
    public function updateTable(DetailTableInvoiceUpdate $request, $id_table_invoice) {
        $validate = $request -> validated();
        $modelDetailTableInvoice = new DetailTableInvoice();
        $modelTables = new Tables();
        $detailTables = $modelDetailTableInvoice -> getDetailTableInvoice($id_table_invoice);
        $result = $modelDetailTableInvoice -> checkExistsTableInvoice($validate['id_table']);
        $resultCheckTable = $modelTables -> checkStatusTable($validate['id_table'], 3);
        if(isset($result)) return response() ->json(["msg" => "Bàn này đã tồn tại, vui lòng chọn bàn khác!", "status" => false],402);
        if(!isset($resultCheckTable)) return response() ->json(["msg" => "Bàn này không tôn tại, vui lòng chọn bàn khác!", "status" => false],404);
        $updateTimeUpdateAt = date("Y-m-d H:i:s",time());
        $currTableInvoice = $detailTables['id_table'];
        $params = [
            $validate['id_table'],
            $updateTimeUpdateAt,
            $id_table_invoice
        ];
        $paramsUpdateTables = [
            2,
            $validate['id_table']
        ];
        $paramsUpdateTables2 = [
            3,
            $currTableInvoice
        ];
        $modelTables ->updateDetailStatus($paramsUpdateTables2);
        $modelTables ->updateDetailStatus($paramsUpdateTables);
        $modelDetailTableInvoice -> updateTableInvoice($params);
        return response() ->json(["msg" => "Cập nhật bàn thành công!", "status" => true],200);
    }
}
