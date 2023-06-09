<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('transactions', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(\App\Models\Enrolle::class, 'enrolle_id')->constrained();
            $table->foreignIdFor(\App\Models\Plan::class, 'plan_id')->constrained();
            $table->string('trans_ref')->unique();
            $table->string('type');
            $table->bigInteger('amount');
            $table->longText('description');
            $table->string('payment_gateway');
            $table->boolean('status')->default(false);
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('transactions');
    }
};
