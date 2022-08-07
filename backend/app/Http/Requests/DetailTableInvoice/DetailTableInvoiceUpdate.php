<?php

namespace App\Http\Requests\DetailTableInvoice;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

class DetailTableInvoiceUpdate extends FormRequest
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
            'id_invoice' => 'string|max:12|required|exists:invoices',
            'id_table' => 'integer|required',
        ];
    }

    public function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response() -> json([$validator -> errors()], 402));
    }
}
