<?php

namespace App\Http\Controllers\Api\Product;

use App\Http\Controllers\Controller;
use App\Http\Requests\Product\ProductCreate;
use App\Models\ImagesProduct;
use App\Models\Product;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class ProductController extends Controller
{
    //
    public function create(ProductCreate $request) {
        $user = Auth::user();
        $validate = $request -> validated();
        $modelProduct = new Product();
        $modelImageProduct = new ImagesProduct();
        $uniIdImg = strtoupper(Str::random(10));
        $paramsProduct = [
            $validate['name'],
            $validate['short_desscription'],
            $validate['id_directory'],
            $validate['price'],
            $validate['id_code_sale'],
            $validate['is_status_product'],
            $user['id'],
            $validate['id_cart'],
            $validate['full_description'],
            $validate['time_complete'],
            $validate['is_delete'],
            $validate['update_at'],
            $validate['delete_at'],
            $uniIdImg
        ];
        foreach ($request->file('img') as $imagefile) {
            $url = Cloudinary::upload($imagefile -> getRealPath(), [
                'folder' => 'product'
            ])->getSecurePath();
            $params = [
                $user['id'],
                $uniIdImg ,
                $url,
            ];
            $modelImageProduct ->insert($params);
        }

        $modelProduct ->create($paramsProduct);
        return response() ->json(["msg" => "Thêm mới sản phẩm thành công!", "status" => true],200);
    }

    public function getListProduct(Request $request) {
        $modelProduct = new Product();
        $result = $modelProduct ->listsProduct($request);
        return $result;
    }

    public function getDetailProduct($id) {
        $modelProduct = new Product();
        $result = $modelProduct ->detailProduct($id);
        if(isset($result)) return response() ->json(["data" => $result, "status" => true],200);
        else return response() ->json(["msg" =>"Lấy chi tiết sản phẩm thất bại!", "status" => false],402);
    }
    public function deleteProduct($id) {
        $modelProduct = new Product();
        $timeStamp = date("Y-m-d H:i:s",time());
        $params = [
            2,
            $timeStamp,
            $id
        ];
        $result = $modelProduct -> checkProductDeleted($id);
        if(isset($result)) return response() ->json(["msg" => "Sản phẩm đã bị xoá!", "status" => false],404);
        else {
            $modelProduct -> deleteProduct($params);
            return response() ->json(["msg" => "Xoá sản phẩm thành công!", "status" => true],200);
        }
    }
}
