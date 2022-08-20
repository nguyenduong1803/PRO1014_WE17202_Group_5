<?php

namespace App\Http\Requests\TableBook;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

class TableBookUpdate extends FormRequest
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
            'id' => 'required|integer|exists:table_book',
            'name_user' => 'nullable|max:50|string',
            'id_table' => 'nullable|integer',
            'phone' => 'nullable|max:12|string',
            'total_user'=> 'nullable|integer',
            'status_book'=> 'nullable|required|integer',
            'time_book' => 'nullable|date_format:Y-m-d H:i:s',
            'description' => 'nullable|max:255|string',
        ];
    }

    public function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response() -> json([$validator -> errors()], 402));
    }
}
