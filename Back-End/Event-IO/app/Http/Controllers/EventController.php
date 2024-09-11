<?php

namespace App\Http\Controllers;
use App\Models\Event;
use App\Http\Resources\EventsResource;
use App\Http\Requests\EventRequest;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class EventController extends Controller
{
    public function events(){
        $events = Event::all();

        // $events = Event::with(['category', 'organizer'])->get();
        
        return EventsResource::collection($events);
    }
    public function createEvent(EventRequest $request): JsonResponse
    {
        \Log::info($request->all());
       
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('public/images');
        } else {
            $imagePath = null;
        }
    
        $event = Event::create([
            'title' => $request->title,
            'description' => $request->description,
            'event_date' => $request->event_date,
            'start_time' => $request->start_time,
            'end_time' => $request->end_time,
            'location' => $request->location,
            'category_id' => $request->category_id,
            'organizer_id' => auth()->id(),
            'normal_seats' => $request->normal_seats,
            'normal_price' => $request->normal_price,
            'vip_seats' => $request->vip_seats,
            'vip_price' => $request->vip_price,
            'image' => $imagePath,
            'restriction' => $request->restriction,
        ]);
    
        return response()->json([
            'message' => 'Event created successfully',
            'event' => $event,
        ], 201);
    }
}
