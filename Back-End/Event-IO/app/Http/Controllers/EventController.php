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

        $events = Event::with('organizer')->get();
        
        return response()->json([
            'events' => EventsResource::collection($events), 
        ], 200);
    }

    public function createEvent(EventRequest $request): JsonResponse
    {
        $imagePath = null;

        if ($request->hasFile('image')) {
            $filename = time() . '_' . $request->file('image')->getClientOriginalName();
            $request->file('image')->move(public_path('images'), $filename);
            $imagePath = 'images/' . $filename; 
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
            'location_link' => $request->location_link,
            'country' => $request->country,
            'phone_number' => $request->phone_number,
        ]);

        return response()->json([
            'message' => 'Event created successfully',
            'event' => $event,
        ], 201);
    }

    public function UpdateEvent(EventRequest $request, $id): JsonResponse
    {
        $event = Event::findOrFail($id);
        $authenticatedUser = auth()->user();
        
        if ($authenticatedUser->id !== $event->organizer_id) {
        
            return response()->json(['error' => 'You are not authorized to update this event.'], 403);
        }
        
        $event->update([
            'title' => $request->title,
            'description' => $request->description,
            'event_date' => $request->event_date,
            'start_time' => $request->start_time,
            'end_time' => $request->end_time,
            'location' => $request->location,
            'category_id' => $request->category_id,
            'normal_seats' => $request->normal_seats,
            'normal_price' => $request->normal_price,
            'vip_seats' => $request->vip_seats,
            'vip_price' => $request->vip_price, 
            'image' => $request->image,
            'restriction' => $request->restriction,
            'location_link' => $request->location_link,
        ]);

        return response()->json([
            'message' => 'Event updated successfully',
            'event' => $event,
        ], 200);
    }
    public function DeleteEvent($id): JsonResponse
    {
        $event = Event::findOrFail($id);
        
        $authenticatedUser = auth()->user();
        
        if ($authenticatedUser->id !== $event->organizer_id) {
        
            return response()->json(['error' => 'You are not authorized to delete this event.'], 403);
        }

        $event->delete();

        return response()->json(['message' => 'Event deleted successfully'], 200);
    }
    public function getEvent($id): JsonResponse
    {
        $event = Event::with('organizer')->findOrFail($id);

        return response()->json([
            'event' => new EventsResource($event), 
        ], 200);
    }
}
