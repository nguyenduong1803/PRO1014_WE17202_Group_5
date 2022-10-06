<?php

namespace App\Http\Controllers\Api\ImgUpload;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;

class ImgUploadController extends Controller
{
    public function imgUpload(Request $request) {
        $uploadedFileUrl = Cloudinary::upload($request->file('img')->getRealPath(), [
            'folder' => 'imgUploadJsAdvanced'
        ])->getSecurePath();
        return response() ->json(["imgLink" => $uploadedFileUrl, "status" => true],200);
    }
}
