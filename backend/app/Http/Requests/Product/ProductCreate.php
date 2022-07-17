<?php

namespace App\Http\Requests\Product;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

class ProductCreate extends FormRequest
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
            'name' => 'required|max:255|string',
            'short_desscription' => 'required|max:255|string',
//            'id_directory' => 'nullable|int',
            'price' => 'required|max:50|string',
//            'id_code_sale' => 'nullable|int',
//            'is_status_product' => 'nullable|int',
//            'id_user' => 'nullable|int',
//            'id_cart' => 'nullable|int',
//            'full_description' => 'nullable|string',
//            'time_complete' => 'nullable|datetime',
//            'is_delete' => 'nullable|int',
//            'update_at' => 'nullable|timestamp',
//            'delete_at' => 'nullable|timestamp'
        ];
    }
    public function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response() -> json([$validator -> errors()], 402));
    }
}
