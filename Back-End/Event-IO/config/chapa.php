<?php

/*
 * This file is part of the Chapa Laravel package.
 *
 * Kidus Yared - @kidus363 <kidusy@chapa.co>
 *
 * 
 */
return [


    /**
     * Secret Key: Your Chapa secretKey. Sign up on https://dashboard.chapa.co/ to get one from your settings page
     *
     */
    'secret_key' => env('CHAPA_SECRET_KEY'),
    'public_key' => env('CHAPA_PUBLIC_KEY'),
    'callback_url' => env('CHAPA_CALLBACK_URL'),


];