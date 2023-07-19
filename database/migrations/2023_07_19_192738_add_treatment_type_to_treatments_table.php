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
        Schema::table('treatments', function (Blueprint $table) {
            $table->foreignIdFor(\App\Models\TreatmentType::class, 'treatment_type_id')->constrained();
            $table->foreignIdFor(\App\Models\SubTreatmentType::class, 'sub_treatment_type_id')->constrained();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('treatments', function (Blueprint $table) {
            $table->dropColumn(['treatment_type_id', 'sub_treatment_type_id']);
        });
    }
};
