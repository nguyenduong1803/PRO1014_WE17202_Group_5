<?php

namespace App\Http\Controllers\Api\Product;

use App\Http\Controllers\Controller;
use App\Http\Requests\Product\ProductCreate;
use App\Models\ImagesProduct;
use App\Models\Product;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ProductController extends Controller
{
    //
    public function create(ProductCreate $request) {
        $validate = $request -> validated();
        $modelProduct = new Product();
        $modelImageProduct = new ImagesProduct();
        $uniIdImg = strtoupper(Str::random(10));
        $paramsProduct = [
            $validate['name'],
            $validate['short_desscription'],
            $validate['price'],
            $uniIdImg
        ];
        foreach ($request->file('img') as $imagefile) {
            $url = Cloudinary::upload($imagefile -> getRealPath(), [
                'folder' => 'product'
            ])->getSecurePath();
            $params = [
                $uniIdImg ,
                $url,
            ];
            $modelImageProduct ->insert($params);
        }

        $modelProduct ->createTest($paramsProduct);
        return response() ->json(["msg" => "Thêm mới sản phẩm thành công!", "status" => true],200);
    }

    public function uploadFile(Request $request) {
        $arr = array();
        foreach ($request->file('img') as $imagefile) {
            $url = Cloudinary::uploadFile($imagefile -> getRealPath(), [
                'folder' => 'product'
            ])->getSecurePath();
           $arr[] = $url;

        }
        return $arr;


    }
}
