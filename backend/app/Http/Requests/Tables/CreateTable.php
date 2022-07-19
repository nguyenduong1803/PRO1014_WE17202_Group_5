<?php

namespace App\Http\Requests\Tables;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

class CreateTable extends FormRequest
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
            'address_shop' => 'required|max:255|string',
            'floor' => 'required|integer',
            'description' => 'required|max:255|string',
            'status'=> 'required|integer',
            'index_table' => 'required|integer',
            'total_user_sitting'=> 'required|integer',
            'limit_time_book' => 'nullable|date_equals:date',
        ];
    }
    public function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response() -> json([$validator -> errors()], 402));
    }
}
