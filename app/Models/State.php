<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 * @method static create(string[] $array)
 */
class State extends Model
{
    use HasFactory;

    protected $fillable = [
        'state_name'
    ];

    public function lga(): HasMany
    {
        return $this->hasMany(Lga::class);
    }

}
