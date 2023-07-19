<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 *
 * @method create(array $array)
 * @method findOrFail($id)
 * @method latest()
 * @method static find($sub_type)
 */
class SubTreatmentType extends Model
{
    use HasFactory, Sluggable, SoftDeletes;

    /**
     * @var string[]
     */
    protected $fillable = [
        'treatment_type_id', 'name', 'description', 'cost', 'slug'
    ];

    /**
     * @return BelongsTo
     */
    public function treatmentType(): BelongsTo
    {
        return $this->belongsTo(TreatmentType::class, 'treatment_type_id');
    }

    /**
     * @return array[]
     */
    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'name'
            ]
        ];
    }

}
