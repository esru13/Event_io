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
    public function createTicket(Request $request, $eventId): JsonResponse
    {
        $event = Event::find($eventId);

        if (!$event) {
            return response()->json(['message' => 'Event not found.'], 404);
        }
        $validated = $request->validate([
            'ticket_type' => 'required|in:normal,vip',
            'quantity' => 'required|integer|min:1',
        ]);

        $ticketPrice = $validated['ticket_type'] === 'vip' ? $event->vip_price : $event->normal_price;

        $ticket = Ticket::create([
            'event_id' => $event->id, 
            'user_id' => Auth::id(),
            'quantity' => $validated['quantity'],
            'total_price' => $validated['quantity'] * $ticketPrice,
            'payment_status' => 'pending', 
            'tx_ref' => $request->input('tx_ref'),
        ]);

        return response()->json([
            'message' => 'Ticket created successfully. Proceed to payment.',
            'ticket_id' => $ticket->id,
            'total_price' => $ticket->total_price,
        ], 201);
    }
}