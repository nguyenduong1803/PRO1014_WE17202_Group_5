<?php

namespace App\Http\Requests\InvoiceDetail;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
class InvoiceDetailCreate extends FormRequest
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
            "id_invoice" => "required|string|max:12",
            "id_product" => "required|integer",
            "amount" => "required|integer",
        ];
    }
    public function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response() -> json([$validator -> errors()], 402));
    }
}
