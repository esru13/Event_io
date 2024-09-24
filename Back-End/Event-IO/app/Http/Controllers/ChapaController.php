<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Log;
use App\Models\PaymentLog;
use App\Models\Ticket;

class ChapaController extends Controller
{
     public function initializeTransaction(Request $request)
    {
        $refNo = "kaleb" . Str::random(10);
        $secretKey = env('CHAPA_SECRET_KEY'); 

        $response = Http::withHeaders([
            'Authorization' => 'Bearer ' . $secretKey,
            'Content-Type' => 'application/json',
        ])->post('https://api.chapa.co/v1/transaction/initialize', [
            "amount" => $request->input('amount'),
            "currency" => "ETB",
            "first_name" => $request->input('first_name'),
            "last_name" => $request->input('last_name'),
            "phone_number" => $request->input('phone_number'),
            "tx_ref" => $refNo,
            "return_url" => route('chapa.webhook'),
            "customization" => [
                "title" => "Event Payment",
                "description" => "Payment for event tickets", 
            ]
        ]);
        

        if ($response->successful()) {
            $checkoutUrl = $response->json('data.checkout_url');
            return response()->json([
                'success' => true,
                'message' => 'Transaction initialized successfully.',
                'checkout_url' => $checkoutUrl
            ]);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Failed to initialize transaction: ' . $response->body()
            ], 500);
        }
    }

    public function handleWebhook(Request $request)
    {
        $data = $request->all();
        $txRef = $request->input('tx_ref');

        if (!$txRef) {
            Log::error('Webhook received without tx_ref');
            return response()->json(['error' => 'Missing transaction reference'], 400);
        }

        $paymentStatus = $request->input('status'); 

        $ticket = Ticket::where('tx_ref', $txRef)->first();

        if ($ticket) {

            $ticket->payment_status = ($paymentStatus == 'success') ? 'completed' : 'failed';
            $ticket->save();

           

            return response()->json(['status' => 'Payment processed successfully'], 200);
        } else {
            Log::error('Ticket not found for tx_ref: ' . $txRef);
            return response()->json(['error' => 'Ticket not found'], 404);
        }
    }
}