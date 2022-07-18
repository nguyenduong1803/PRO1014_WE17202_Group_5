<?php

namespace App\Http\Requests\User;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

class UserUpdateInfo extends FormRequest
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
            'ten' => 'string|max:50',
            'dia_chi' => 'string|max:100',
            'ngay_sinh' => 'date',
            'sdt' => 'string|max:50',
            'gioi_tinh' => 'integer',
            'email' => 'string|email|unique:users',
        ];
    }

    public function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response() -> json([$validator -> errors()], 402));
    }
}
