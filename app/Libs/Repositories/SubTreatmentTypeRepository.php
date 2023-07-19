<?php

namespace App\Libs\Repositories;

use App\Http\Resources\SubTreatmentTypeResource;
use App\Libs\Actions\SubTreatmentTypeAction;
use App\Libs\Repositories\Contracts\SubTreatmentTypeRepositoryInterface;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Support\Facades\Validator;

/**
 * SubTreatmentTypeRepository
 */
class SubTreatmentTypeRepository implements SubTreatmentTypeRepositoryInterface
{
    /**
     * @var SubTreatmentTypeAction
     */
    private  SubTreatmentTypeAction $action;

    /**
     * @param SubTreatmentTypeAction $action
     */
    public function __construct(SubTreatmentTypeAction $action)
    {
        $this->action = $action;
    }

    /**
     * @param $request
     * @return JsonResponse
     */
    public function createSubTreatmentType($request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'type'  => 'required',
            'name' => 'required',
            'description' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => $validator->messages()->first(),
                'success' => false
            ], 422);
        }else {
            return $this->action->createSubTreatmentTypeAction($request);
        }
    }

    /**
     * @param $id
     * @return SubTreatmentTypeResource
     */
    public function getSingleSubTreatmentType($id): SubTreatmentTypeResource
    {
        return $this->action->getSingleSubTreatmentTypeAction($id);
    }

    /**
     * @return AnonymousResourceCollection
     */
    public function getAllSubTreatmentType(): AnonymousResourceCollection
    {
        return $this->action->getAllSubTreatmentTypeAction();
    }

    /**
     * @param $request
     * @param $id
     * @return JsonResponse
     */
    public function updateSubTreatmentType($request, $id): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'description' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => $validator->messages()->first(),
                'success' => false
            ], 422);
        }else {
            return $this->action->updateSubTreatmentTypeAction($request, $id);
        }
    }

    /**
     * @param $id
     * @return JsonResponse
     */
    public function deleteSubTreatmentType($id): JsonResponse
    {
        return $this->action->deleteSubTreatmentTypeAction($id);
    }
}
