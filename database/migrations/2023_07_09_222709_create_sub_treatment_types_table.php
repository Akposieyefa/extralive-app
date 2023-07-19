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
        Schema::create('sub_treatment_types', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(\App\Models\TreatmentType::class, 'treatment_type_id')->constrained();
            $table->string('name');
            $table->unsignedBigInteger('cost');
            $table->longText('description');
            $table->string('slug')->unique();
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
        Schema::dropIfExists('sub_treatment_types');
    }
};
