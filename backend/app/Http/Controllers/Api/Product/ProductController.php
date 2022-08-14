<?php

namespace App\Http\Controllers\Api\Product;

use App\Http\Controllers\Controller;
use App\Http\Requests\Product\ProductCreate;
use App\Http\Requests\Product\ProductUpdate;
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
            $validate['short_description'],
            $validate['id_directory'],
            $validate['price'],
            $validate['id_code_sale'],
            $validate['is_status_product'],
            $user['id'],
            $validate['id_cart'],
            $validate['full_description'],
            $validate['time_complete'],
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
        $modelImg = new ImagesProduct();
        $listsImg = $modelImg -> listsImg();
        $listData = $result ->items();
        for($i = 0; $i < count($listData); $i++) {
            $arr = [];
            $listData[$i] -> listsImg = array();
            for($j = 0; $j < count($listsImg); $j++) {
                if($listsImg[$j] -> id_product_img == $listData[$i] -> id_img) {
                    array_push( $arr, $listsImg[$j] -> path);
                }
            }
            $listData[$i] -> listsImg = $arr;
        }
        return $result;
    }

    public function getDetailProduct($id) {
        $modelProduct = new Product();
        $detail = $modelProduct ->detailProduct($id);
        $modelImg = new ImagesProduct();
        $listsImg = $modelImg -> listsImg();
        $arr = [];
        $detail -> listsImg = array();
        for($j = 0; $j < count($listsImg); $j++) {
            if($listsImg[$j] -> id_product_img == $detail -> id_img) {
                array_push( $arr, $listsImg[$j] -> path);
            }
        }
        $detail -> listsImg = $arr;
        if(isset($detail)) return response() ->json(["data" => $detail, "status" => true],200);
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
    public function update(ProductUpdate $request, $id) {
        $validate = $request -> validated();
        $user = Auth::user();
        $modelProduct = new Product();
        $modelImageProduct = new ImagesProduct();
        $detailProduct = $modelProduct ->detailProduct($id);
        if(!isset($detailProduct)) return response() ->json(["msg" => "Không tìm thấy sản phẩm!", "status" => false],404);
        $updateName = isset($validate['name']) ? $validate['name'] : $detailProduct['name'];
        $updateShortDes = isset($validate['short_description']) ? $validate['short_description'] : $detailProduct['short_description'];
        $updateIdDirectory = isset($validate['id_directory']) ? $validate['id_directory'] : $detailProduct['id_directory'];
        $updatePrice = isset($validate['price']) ? (float) $validate['price'] : $detailProduct['price'];
        $updateIdCodeSale = isset($validate['id_code_sale']) ? $validate['id_code_sale'] : $detailProduct['id_code_sale'];
        $updateIsStatusProduct = isset($validate['is_status_product']) ? $validate['is_status_product'] : $detailProduct['is_status_product'];
        $updateIdCart = isset($validate['id_cart']) ? $validate['id_cart'] : $detailProduct['id_cart'];
        $updateFullDes = isset($validate['full_description']) ? $validate['full_description'] : $detailProduct['full_description'];
        $updateTimeComplete = isset($validate['time_complete']) ? $validate['time_complete'] : $detailProduct['time_complete'];
        $updateIdUser = $user['id'];
        $updateTimeUpdateAt = date("Y-m-d H:i:s",time());
        foreach ($request->file('img') as $imagefile) {
            $url = Cloudinary::upload($imagefile -> getRealPath(), [
                'folder' => 'product'
            ])->getSecurePath();
            $params = [
                $user['id'],
                $detailProduct['id_img'] ,
                $url,
            ];
            $modelImageProduct ->insert($params);
        }
        $params = [
            $updateName,
            $updateShortDes,
            $updateIdDirectory,
            $updatePrice,
            $updateIdCodeSale,
            $updateIsStatusProduct,
            $updateIdCart,
            $updateFullDes,
            $updateTimeComplete,
            $updateIdUser,
            $updateTimeUpdateAt,
            $id
        ];
        $modelProduct -> updateProduct($params);
        return response() ->json(["msg" => "Cập nhật sản phẩm thành công!", "status" => true],200);

    }
}
