<?php

namespace App\Libs\Actions;

use App\Http\Resources\SubTreatmentTypeResource;
use App\Models\SubTreatmentType;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

/**
 *  SubTreatmentTypeAction
 */
class SubTreatmentTypeAction
{
    /**
     * @var SubTreatmentType
     */
    private SubTreatmentType $model;

    /**
     * @param SubTreatmentType $model
     */
    public function __construct(SubTreatmentType $model)
    {
        $this->model = $model;
    }

    /**
     * @param $request
     * @return JsonResponse
     */
    public function createSubTreatmentTypeAction($request): JsonResponse
    {
        try {
            $subTreatmentType = $this->model->create([
                'treatment_type_id' => $request->type,
                'name' => $request->name,
                'description' => $request->description,
                'cost' => $request->cost
            ]);
            return response()->json([
                'message' => 'Sub treatment type created successfully',
                'data' => new SubTreatmentTypeResource($subTreatmentType),
                'success' => true
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Sorry unable to  create sub treatment type',
                'error' => $e->getMessage(),
                'success' => false
            ], 400);
        }
    }

    /**
     * @param $id
     * @return SubTreatmentTypeResource
     */
    public function getSingleSubTreatmentTypeAction($id): SubTreatmentTypeResource
    {
        $subTreatmentType = $this->model->findOrFail($id);
        return (new SubTreatmentTypeResource($subTreatmentType))->additional( [
            'message' => "Sub treatment type details",
            'success' => true
        ], 200);
    }

    /**
     * @return AnonymousResourceCollection
     */
    public function getAllSubTreatmentTypeAction(): AnonymousResourceCollection
    {
        $subTreatmentTypes = $this->model->latest()->paginate(10);
        return SubTreatmentTypeResource::collection($subTreatmentTypes)->additional([
            'message' => "All treatment types",
            'success' => true
        ], 200);
    }

    /**
     * @param $request
     * @param $id
     * @return JsonResponse
     */
    public function updateSubTreatmentTypeAction($request, $id): JsonResponse
    {
        $subTreatmentType =  $this->model->findOrFail($id);
        $subTreatmentType->slug = null;
        try {
            $$subTreatmentType->update([
                'cost' =>  empty($request->cost) ? $subTreatmentType->cost : $request->cost,
                'name' => empty($request->name) ? $subTreatmentType->name : $request->name,
                'description' =>   empty($request->description) ? $subTreatmentType->description : $request->description
            ]);
            return response()->json([
                'message' => 'Sub treatment type edited successfully',
                'data' => new SubTreatmentTypeResource($subTreatmentType),
                'success' => true
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Sorry unable to edit sub treatment type',
                'error' => $e->getMessage(),
                'success' => false
            ], 400);
        }
    }

    /**
     * @param $id
     * @return JsonResponse
     */
    public function deleteSubTreatmentTypeAction($id): JsonResponse
    {
        $subTreatmentType =  $this->model->findOrFail($id);
        try {
            $subTreatmentType->delete();
            return response()->json([
                'message' => 'Sub treatment type deleted successfully',
                'data' => new SubTreatmentTypeResource($subTreatmentType),
                'success' => true
            ], 200);
        }catch (\Exception $e) {
            return response()->json([
                'message' => 'Sorry unable to delete sub treatment',
                'error' => $e->getMessage(),
                'success' => false
            ], 400);
        }
    }

}
