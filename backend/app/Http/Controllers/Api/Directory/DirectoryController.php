<?php

namespace App\Http\Controllers\Api\Directory;

use App\Http\Controllers\Controller;
use App\Models\Directory;
use Illuminate\Http\Request;

class DirectoryController extends Controller
{
    //
    public function getLists() {
        $modelDirectory = new Directory();
        $data = $modelDirectory -> getLists();
        return response() ->json(["data" => $data, "status" => true],200);
    }
}
