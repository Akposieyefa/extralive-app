<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Libs\Repositories\Contracts\TreatmentTypeRepositoryInterface;
use Illuminate\Http\Request;

/**
 *  TreatmentTypeController
 */
class TreatmentTypeController extends Controller
{
    /**
     * @var TreatmentTypeRepositoryInterface
     */
    private TreatmentTypeRepositoryInterface $repository;

    /**
     * @param TreatmentTypeRepositoryInterface $repository
     */
    public function __construct(TreatmentTypeRepositoryInterface $repository)
    {
        $this->repository = $repository;
    }

    /**
     * @return mixed
     */
    public function index(): mixed
    {
        return $this->repository->getAllTreatmentType();
    }

    /**
     * @param Request $request
     * @return mixed
     */
    public function store(Request $request): mixed
    {
        return $this->repository->createTreatmentType($request);
    }

    /**
     * @param $id
     * @return mixed
     */
    public function show($id): mixed
    {
        return $this->repository->getSingleTreatmentType($id);
    }

    /**
     * @param Request $request
     * @param $id
     * @return mixed
     */
    public function update(Request $request, $id): mixed
    {
        return $this->repository->updateTreatmentType($request, $id);
    }

    /**
     * @param $id
     * @return mixed
     */
    public function destroy($id): mixed
    {
        return $this->repository->deleteTreatmentType($id);
    }
}
