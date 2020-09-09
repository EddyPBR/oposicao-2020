<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CandidateRequest extends FormRequest
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
            'name' => 'required',
            'age' => 'required',
            'bio' => 'required',
            'image.*' => 'image',
        ];
    }

    public function messages(){
        return [
            'required' => 'O campo é obrigatório',
            'image' => 'Arquivo não é uma imagem válida',
        ];
    }
}