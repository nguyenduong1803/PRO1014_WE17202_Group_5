<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
class AuthController extends Controller
{
    public function getListUser() {
        $user = new User();
        $list = $user->getAllUser();
        return $list;
    }
}
