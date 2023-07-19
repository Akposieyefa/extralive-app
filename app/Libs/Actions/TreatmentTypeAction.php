<?php

namespace App\Libs\Actions;

use App\Http\Resources\TreatmentTypeResource;
use App\Models\TreatmentType;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

/**
 * TreatmentTypeAction
 */
class TreatmentTypeAction
{
    /**
     * @var TreatmentType
     */
    private TreatmentType $model;

    /**
     * @param TreatmentType $model
     */
    public function __construct(TreatmentType $model)
    {
        $this->model = $model;
    }

    /**
     * @param $request
     * @return JsonResponse
     */
    public function createTreatmentTypeAction($request): JsonResponse
    {
        try {
            $treatmentType = $this->model->create([
                'name' => $request->name,
                'description' => $request->description
            ]);
            return response()->json([
                'message' => 'Treatment type created successfully',
                'data' => new TreatmentTypeResource($treatmentType),
                'success' => true
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Sorry unable to  create treatment type',
                'error' => $e->getMessage(),
                'success' => false
            ], 400);
        }
    }

    /**
     * @param $id
     * @return TreatmentTypeResource
     */
    public function getSingleTreatmentTypeAction($id): TreatmentTypeResource
    {
        $treatmentType = $this->model->findOrFail($id);
        return (new TreatmentTypeResource($treatmentType))->additional( [
            'message' => "Treatment type details",
            'success' => true
        ], 200);
    }

    /**
     * @return AnonymousResourceCollection
     */
    public function getAllTreatmentTypeAction(): AnonymousResourceCollection
    {
        $treatmentTypes = $this->model->latest()->paginate(10);
        return TreatmentTypeResource::collection($treatmentTypes)->additional([
            'message' => "All treatment types",
            'success' => true
        ], 200);
    }

    /**
     * @param $request
     * @param $id
     * @return JsonResponse
     */
    public function updateTreatmentTypeAction($request, $id): JsonResponse
    {
        $treatmentType =  $this->model->findOrFail($id);
        $treatmentType->slug = null;
        try {
            $treatmentType->update([
                'name' => empty($request->name) ? $treatmentType->name : $request->name,
                'description' =>   empty($request->description) ? $treatmentType->description : $request->description
            ]);
            return response()->json([
                'message' => 'Treatment type edited successfully',
                'data' => new TreatmentTypeResource($treatmentType),
                'success' => true
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Sorry unable to edit treatment type',
                'error' => $e->getMessage(),
                'success' => false
            ], 400);
        }
    }

    /**
     * @param $id
     * @return JsonResponse
     */
    public function deleteTreatmentTypeAction($id): JsonResponse
    {
        $treatmentType =  $this->model->findOrFail($id);
        try {
            $treatmentType->delete();
            return response()->json([
                'message' => 'Treatment type deleted successfully',
                'data' => new TreatmentTypeResource($treatmentType),
                'success' => true
            ], 200);
        }catch (\Exception $e) {
            return response()->json([
                'message' => 'Sorry unable to delete treatment',
                'error' => $e->getMessage(),
                'success' => false
            ], 400);
        }
    }
}
