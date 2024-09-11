<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class EventsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request)
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'description' => $this->description,
            'event_date' => $this->event_date,
            'start_time' => $this->start_time,
            'end_time' => $this->end_time,
            'location' => $this->location,
            'category' => $this->category ? $this->category->name : null, 
            'organizer' => $this->organizer ? $this->organizer->name : null, 
            'normal_seats' => $this->normal_seats,
            'normal_price' => $this->normal_price,
            'vip_seats' => $this->vip_seats,
            'vip_price' => $this->vip_price,
            'image' => $this->image ? url($this->image) : null, 
            'restriction' => $this->restriction,
            'created_at' => $this->created_at->toDateTimeString(),
            'updated_at' => $this->updated_at->toDateTimeString(), 
        ];
    }
}
