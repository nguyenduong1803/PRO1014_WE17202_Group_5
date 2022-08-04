<?php

namespace App\Http\Requests\InvoiceDetail;

use Illuminate\Foundation\Http\FormRequest;

class InvoiceDetailUpdate extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            "id_table_book" => "integer|required",
            "id_product" => "integer|required",
            "amount" => "integer|required",
        ];
    }
}