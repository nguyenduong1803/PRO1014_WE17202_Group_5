<?php

namespace App\Http\Requests\TableBook;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

class TableBookCreate extends FormRequest
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
            'name_user' => 'required|max:50|string',
            'id_table' => 'required|integer',
            'phone' => 'required|max:12|string',
            'total_user'=> 'required|integer',
            'status_book'=> 'required|integer',
            'time_book' => 'required|date_format:Y-m-d H:i:s',
            'description' => 'nullable|max:255|string',
        ];
    }

    public function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response() -> json([$validator -> errors()], 402));
    }
}
