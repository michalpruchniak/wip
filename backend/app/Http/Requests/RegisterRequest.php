<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'email' => 'required|email|unique:users',
            'name' => 'required|string|between:3,30',
            'lastname' => 'required|string|between:3,35',
            'description' => 'nullable',
            'job' => 'required|integer|between:1,3',

            'testing_systems' => 'required_if:job,1|string|between:3,100',
            'raporting_systems' => 'required_if:job,1,3|string|between:3,100',
            'selenium' => 'nullable|boolean',

            'ide' => 'required_if:job,2|string|between:3,100',
            'programming_languages' => 'required_if:job,2|string|between:3,100',
            'mysql' => 'nullable|boolean',

            'methodology' => 'required_if:job,3|string|between:3,100',
            'scrum' => 'nullable|boolean',

        ];
    }
}
