<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 * @method findOrFail($id)
 * @method latest()
 * @method create(array $array)
 */
class TreatmentType extends Model
{
    use HasFactory, Sluggable, SoftDeletes;

    protected $fillable = [
        'name', 'description', 'slug'
    ];

    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'name'
            ]
        ];
    }

}
