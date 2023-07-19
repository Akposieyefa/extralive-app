<?php

namespace App\Libs\Repositories\Contracts;

interface SubTreatmentTypeRepositoryInterface
{
    public function createSubTreatmentType($request);
    public function getSingleSubTreatmentType($id);
    public function getAllSubTreatmentType();
    public function updateSubTreatmentType($request, $id);
    public function deleteSubTreatmentType($id);

}
