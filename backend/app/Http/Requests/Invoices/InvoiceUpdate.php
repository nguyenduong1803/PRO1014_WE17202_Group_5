<?php

namespace App\Http\Requests\Invoices;

use Illuminate\Foundation\Http\FormRequest;

class InvoiceUpdate extends FormRequest
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
            "status_envoice" => "integer|nullable",
            "user_name_book" => "string|required|max:50",
            "time_book" => 'nullable|date_format:Y-m-d H:i:s',
            "phone" => "string|max:12|required",
            "note" => "string|nullable",
            "id_staff" => "integer|nullable",
        ];
    }
}
