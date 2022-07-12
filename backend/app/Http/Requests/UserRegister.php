<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;


class UserRegister extends FormRequest
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
            'ten' => 'required|string|max:50',
            'dia_chi' => 'required|string|max:100',
            'ngay_sinh' => 'required|date',
            'sdt' => 'required|string|max:50',
            'gioi_tinh' => 'required|int',
            'luong' => 'nullable|float',
            'ma_hd' => 'nullable|int',
            'vai_tro' => 'required|int',
            'email' => 'required|string|email|unique:users',
            'create_at' => 'nullable|date',
            'delete_at' => 'nullable|date',
            'mat_khau' => 'required|min:6|max:255'
        ];
    }

    public function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response() -> json([$validator -> errors()], 402));
    }

}
