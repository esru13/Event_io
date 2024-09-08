<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EventOrgRegisterRequest extends FormRequest
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
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'first_name' => 'required|string|min:2|max:255',
            'last_name' => 'required|string|min:2|max:255',
            'email' => 'required|email|unique:users',
            'phone_number' => 'required|numeric|digits_between:10,15',
            'password' => 'required|string|min:8|confirmed', 
            'password_confirmation' => 'required|string|min:8', 
            'date_of_birth' => 'required|nullable|date|date_format:Y-m-d',
        ];
    }
}
