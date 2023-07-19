<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 * @method findOrFail($id)
 * @method where(string $string, string $string1, $id)
 * @method create(array $array)
 */
class Treatment extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'enrolle_id', 'health_care_id', 'verified_by', 'date_and_time', 'is_capitated', 'is_ffs', 'drugs', 'cost_of_treatment',
        'height', 'weight', 'blood_pressure', 'pulse', 'respiration', 'temperature', 'treatment_give', 'is_referred',  'summary', 'treatment_type_id', 'sub_treatment_type_id'
    ];

    public function enrolle(): BelongsTo
    {
        return $this->belongsTo(Enrolle::class, 'enrolle_id');
    }

    public function hospital(): BelongsTo
    {
        return $this->belongsTo(HealthCare::class, 'health_care_id');
    }

    public function type()
    {
        return $this->belongsTo(TreatmentType::class, 'treatment_type_id');
    }

    public function sub_type()
    {
        return $this->belongsTo(SubTreatmentType::class, 'sub_treatment_type_id');
    }

}
