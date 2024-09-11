<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EventRequest extends FormRequest
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
     * after:start_time
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => 'required|string',
            'description' => 'required|string',
            'event_date' => 'required|date',
            'start_time' => 'required|date_format:H:i', 
            'end_time' => 'required|date_format:H:i|after:start_time',   
            'location' => 'required|string',
            'category_id' => 'required|exists:categories,id',
            'normal_seats' => 'required|integer',
            'normal_price' => 'required|numeric',
            'vip_seats' => 'integer',
            'vip_price' => 'numeric',
            'image' => 'image',
            'restriction' => 'required|string',
        ];
    }
}
