<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('events', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('description');
            $table->dateTime('event_date');
            $table->dateTime('start_time');
            $table->dateTime('end_time');
            $table->string('location');
            $table->foreignId('category_id')->constrained('categories')->onDelete('cascade');
            $table->foreignId('organizer_id')->constrained('users')->onDelete('cascade');
            $table->integer('normal_seats'); 
            $table->decimal('normal_price', 8, 2);
            $table->integer('vip_seats')->nullable();
            $table->decimal('vip_price', 8, 2)->nullable();
            $table->string('image')->nullable(); 
            $table->text('restriction')->nullable(); 
            $table->timestamps();
            $table->softDeletes(); 
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('events');
    }
};
