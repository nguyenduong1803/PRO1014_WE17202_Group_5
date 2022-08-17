<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;


class Invoices extends Model
{
    use HasFactory;

    protected $table = 'invoices';

    public function create($params) {
        DB::insert('INSERT INTO invoices
    (id_user ,id_invoice, status_cart_order, total_price, status_envoice, id_staff, user_name_book, time_book, phone, note, purchase_status, create_at)
    values (?, ? , ? , ?, ?, ?, ?, ?, ?, ?, ?, ?)', $params);
    }

    public function getInvoicesByUser($id_user, $currentDate, $request) {
        $search = $request -> get('q');
        $limitPage = $request -> get('limit') ? $request -> get('limit'): 10;
        $statusInvoice = $request -> get('status_envoice');
        $invoices = Invoices::query();
        $data = $invoices
            -> join('users', 'users.id', '=', 'invoices.id_user')
            -> select('invoices.*','users.ten')
            -> where('invoices.is_delete', '1')
            -> where('invoices.create_at', '>=', $currentDate)
            -> where('invoices.id_user', $id_user)
            -> where('invoices.user_name_book', 'like', '%' . $search . '%')
            -> where('users.is_delete', '1')
            -> paginate($limitPage);
        if($statusInvoice) $data = $invoices -> where('status_envoice', $statusInvoice);
        return $data;
    }
    public function getInvoicesByAdmin($request) {
        $search = $request -> get('q');
        $limitPage = $request -> get('limit') ? $request -> get('limit'): 10;
        $statusInvoice = $request -> get('status_envoice');
        $invoices =  Invoices::query();
        $data = $invoices
            -> where('is_delete', '1')
            -> where('user_name_book', 'like', '%' . $search . '%');
        if($statusInvoice) $data = $invoices -> where('status_envoice', $statusInvoice);
        $data = $invoices -> paginate($limitPage);
        return $data;
    }

    public function getDetailInvoice($id) {
        return Invoices::query() -> where('id', $id)
            -> where('is_delete', 1)
            -> first();
    }

    public function updateInvoice($params) {
        DB::update("UPDATE invoices SET `status_envoice` = ?, `user_name_book` = ?,`time_book` = ?,
                    `phone` = ?,`note` = ?,`id_user` = ?,`id_staff` = ?,
                    `update_at` = ?
                WHERE `id` = ?", $params);
    }

    public function updateStatusOrderDateInvoice($params) {
        DB::update("UPDATE invoices SET `status_envoice` = ?, `order_date` = ?,
        `update_at` = ?
        WHERE `id` = ?", $params);
    }
    public function updatePrice($params) {
        DB::update("UPDATE invoices SET `total_price` = ?,
        `update_at` = ?
        WHERE `id` = ?", $params);
    }

    public function getInvoicesStatisticalWithMostFrequent($params) {
        return DB::select('SELECT * FROM `invoices` WHERE `id_user` = ? AND `is_delete` = 1', $params);
    }
}
