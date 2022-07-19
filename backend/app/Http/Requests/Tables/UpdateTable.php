<?php

namespace App\Http\Requests\Tables;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

class UpdateTable extends FormRequest
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
            'address_shop' => 'nullable|max:255|string',
            'floor' => 'nullable|integer',
            'description' => 'nullable|max:255|string',
            'status'=> 'nullable|integer',
            'index_table' => 'nullable|integer',
            'total_user_sitting'=> 'nullable|integer',
            'limit_time_book' => 'nullable|date_equals:date',
            'id' => 'required|integer|exists:tables',
        ];
    }
    public function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response() -> json([$validator -> errors()], 402));
    }
}
