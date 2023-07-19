<?php

namespace App\Http\Resources;

use App\Libs\Helpers\SystemHelper;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * @property mixed $id
 * @property mixed $name
 * @property mixed $description
 * @property mixed $slug
 * @property mixed $deleted_at
 * @property mixed $updated_at
 * @property mixed $created_at
 * @property mixed $treatmentType
 * @property mixed $cost
 */
class SubTreatmentTypeResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param Request $request
     * @return array
     */
    public function toArray($request): array
    {
        $helper = new SystemHelper();
        return [
            'id' => $this->id,
            'name' => $helper->cleanStringHelper($this->name),
            'description' => $helper->cleanStringHelper($this->description),
            'cost' => $this->cost,
            'slug' => $helper->cleanStringHelper($this->slug),
            'relationship' => [
                'type' => new TreatmentTypeResource($this->treatmentType)
            ],
            'deleted_at' => $this->deleted_at,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at
        ];
    }
}
