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
        Schema::create('course_user', function (Blueprint $table) {
            $table->id();
            $table->integer('course_id')->nullable();
            $table->integer('user_id')->nullable();
            $table->integer('enroll_status')->default(0);
            $table->integer('payment_status')->default(0);
            $table->integer('enroll_time')->default(time());
            $table->integer('payment_time')->default(time());
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('course_user');
    }
};
