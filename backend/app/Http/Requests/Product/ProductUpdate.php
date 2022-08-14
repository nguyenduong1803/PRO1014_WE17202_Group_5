<?php

namespace App\Http\Requests\Product;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

class ProductUpdate extends FormRequest
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
            'name' => 'nullable|max:255|string',
            'short_description' => 'nullable|max:255|string',
            'id_directory' => 'nullable|integer',
            'price' => 'nullable|max:50|string',
            'id_code_sale' => 'nullable|integer',
            'is_status_product' => 'nullable|integer',
            'id_cart' => 'nullable|integer',
            'full_description' => 'nullable|string',
            'time_complete' => 'nullable|datetime',
        ];
    }
    public function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response() -> json([$validator -> errors()], 402));
    }
}
