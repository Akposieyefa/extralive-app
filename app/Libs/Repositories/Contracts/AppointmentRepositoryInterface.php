<?php

namespace App\Libs\Repositories\Contracts;

/**
 *
 */
interface AppointmentRepositoryInterface
{
    /**
     * @param $request
     * @return mixed
     */
    public function createAppointment($request): mixed;

    /**
     * @return mixed
     */
    public function getAllAppointment(): mixed;

    /**
     * @param $id
     * @return mixed
     */
    public function getSingleAppointment($id): mixed;

    /**
     * @param $request
     * @param $id
     * @return mixed
     */
    public function approveAppointment($request, $id): mixed;

    /**
     * @param $id
     * @return mixed
     */
    public function cancelAppointment($id): mixed;

    /**
     * @param $id
     * @return mixed
     */
    public function deleteAppointment($id): mixed;
}
