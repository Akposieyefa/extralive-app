<?php

namespace App\Libs\Repositories;

use App\Http\Resources\TreatmentTypeResource;
use App\Libs\Actions\TreatmentTypeAction;
use App\Libs\Repositories\Contracts\TreatmentTypeRepositoryInterface;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Support\Facades\Validator;

/**
 * TreatmentTypeRepository
 */
class TreatmentTypeRepository implements TreatmentTypeRepositoryInterface
{
    /**
     * @var TreatmentTypeAction
     */
    private TreatmentTypeAction $action;

    /**
     * @param TreatmentTypeAction $action
     */
    public function __construct(TreatmentTypeAction $action)
    {
        $this->action =$action;
    }

    /**
     * @param $request
     * @return JsonResponse
     */
    public function createTreatmentType($request): JsonResponse
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
            return $this->action->createTreatmentTypeAction($request);
        }
    }

    /**
     * @param $id
     * @return TreatmentTypeResource
     */
    public function getSingleTreatmentType($id): TreatmentTypeResource
    {
        return $this->action->getSingleTreatmentTypeAction($id);
    }

    /**
     * @return AnonymousResourceCollection
     */
    public function getAllTreatmentType(): AnonymousResourceCollection
    {
        return $this->action->getAllTreatmentTypeAction();
    }

    /**
     * @param $request
     * @param $id
     * @return JsonResponse
     */
    public function updateTreatmentType($request, $id): JsonResponse
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
            return $this->action->updateTreatmentTypeAction($request, $id);
        }
    }

    /**
     * @param $id
     * @return JsonResponse
     */
    public function deleteTreatmentType($id): JsonResponse
    {
        return $this->action->deleteTreatmentTypeAction($id);
    }
}
