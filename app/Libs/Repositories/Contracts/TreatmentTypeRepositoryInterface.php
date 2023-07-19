<?php

namespace App\Libs\Repositories\Contracts;

interface TreatmentTypeRepositoryInterface
{
    public function createTreatmentType($request);
    public function getSingleTreatmentType($id);
    public function getAllTreatmentType();
    public function updateTreatmentType($request, $id);
    public function deleteTreatmentType($id);
}
