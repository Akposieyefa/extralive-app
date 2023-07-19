<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Libs\Repositories\Contracts\SubTreatmentTypeRepositoryInterface;
use Illuminate\Http\Request;

/**
 * SubTreatmentTypeController
 */
class SubTreatmentTypeController extends Controller
{
    /**
     * @var SubTreatmentTypeRepositoryInterface
     */
    private SubTreatmentTypeRepositoryInterface $repository;

    /**
     * @param SubTreatmentTypeRepositoryInterface $repository
     */
    public function __construct(SubTreatmentTypeRepositoryInterface $repository)
    {
        $this->repository = $repository;
    }

    /**
     * @return mixed
     */
    public function index(): mixed
    {
        return $this->repository->getAllSubTreatmentType();
    }

    /**
     * @param Request $request
     * @return mixed
     */
    public function store(Request $request): mixed
    {
        return $this->repository->createSubTreatmentType($request);
    }

    /**
     * @param $id
     * @return mixed
     */
    public function show($id): mixed
    {
        return $this->repository->getSingleSubTreatmentType($id);
    }

    /**
     * @param Request $request
     * @param $id
     * @return mixed
     */
    public function update(Request $request, $id): mixed
    {
         return $this->repository->updateSubTreatmentType($request, $id);
    }

    /**
     * @param $id
     * @return mixed
     */
    public function destroy($id): mixed
    {
        return $this->repository->deleteSubTreatmentType($id);
    }
}
