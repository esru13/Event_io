<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\Ticket;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
class TicketController extends Controller
{
    public function selectTicket(Request $request, $eventId): JsonResponse
    {
        $event = Event::find($eventId);

        if (!$event) {
            return response()->json(['message' => 'Event not found.'], 404);
        }

        $availableTicketTypes = [];
        if ($event->normal_seats && $event->normal_price) {
            $availableTicketTypes['normal'] = [
                'price' => $event->normal_price,
                'available_seats' => $event->normal_seats,
            ];
        }
        if ($event->vip_seats && $event->vip_price) {
            $availableTicketTypes['vip'] = [
                'price' => $event->vip_price,
                'available_seats' => $event->vip_seats,
            ];
        }

        if (empty($availableTicketTypes)) {
            return response()->json(['message' => 'No tickets available for this event.'], 404);
        }

        return response()->json([
            'message' => 'Select your ticket',
            'event_details' => [
                'event_title' => $event->title,
                'event_date' => $event->event_date,
                'event_time' => $event->start_time,
            ],
            'available_ticket_types' => $availableTicketTypes,
        ], 200);
    }

    // public function buyTicket(Request $request, $eventId): JsonResponse
    // {
    //     $request->validate([
    //         'ticket_type' => 'required|string|in:normal,vip',
    //         'quantity' => 'required|integer|min:1',
    //     ]);

    //     $event = Event::find($eventId);

    //     if (!$event) {
    //         return response()->json(['message' => 'Event not found.'], 404);
    //     }

    //     $ticketPrice = $request->ticket_type === 'normal' ? $event->normal_price : $event->vip_price;
    //     $availableSeats = $request->ticket_type === 'normal' ? $event->normal_seats : $event->vip_seats;

    //     if ($availableSeats < $request->quantity) {
    //         return response()->json(['message' => 'Not enough seats available.'], 400);
    //     }

    //     $ticket = Ticket::create([
    //         'event_id' => $eventId, 
    //         'user_id' => Auth::id(),
    //         'quantity' => $request->quantity,
    //         'total_price' => $request->quantity * $ticketPrice,
    //         'payment_status' => 'pending',
    //     ]);

    //     if ($request->ticket_type === 'normal') {
    //         $event->normal_seats -= $request->quantity;
    //     } else {
    //         $event->vip_seats -= $request->quantity;
    //     }
    //     $event->save();

    //     return response()->json([
    //         'message' => 'Ticket purchased successfully.',
    //         'ticket' => $ticket,
    //     ], 201);
    // }

}