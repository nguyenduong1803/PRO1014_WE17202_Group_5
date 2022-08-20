<?php

namespace App\Http\Requests\Checkout;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

class CreateInfoPaymentVNPay extends FormRequest
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
            "vnp_Amount" => "required|max:50|string",
            "vnp_BankCode" => "required|max:50|string",
            "vnp_BankTranNo" => "required|max:50|string",
            "vnp_CardType" => "required|max:50|string",
            "vnp_OrderInfo" => "required|max:50|string",
            "vnp_PayDate" => "required|max:50|string",
            "vnp_TmnCode" => "required|max:50|string",
            "vnp_TransactionNo" => "required|max:50|string",
            "vnp_TransactionStatus" => "required|max:50|string",
            "vnp_TxnRef" => "required|max:50|string",
            "id_invoices" => "nullable|integer",
        ];
    }

    public function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response() -> json([$validator -> errors()], 402));
    }
}
