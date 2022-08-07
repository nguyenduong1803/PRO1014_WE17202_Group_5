<?php

namespace App\Http\Controllers\Api\Comments;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\Comments\CommentsCreate;
use App\Http\Requests\Comments\CommentsUpdate;
use Illuminate\Support\Facades\Auth;
use App\Models\Comments;


class CommentsController extends Controller
{
    //
    public function postComment(CommentsCreate $request ) {
        $validate = $request -> validated();
        $user = Auth::user();
        $params = [
            $validate['description'],
            $validate['id_product'],
            $user['id'],
        ];
        $modelComments = new Comments();
        $modelComments -> insert($params);
        return response() ->json(["msg" => "Bình luận thành công!", "status" => true],200);
    }

    public function getListByProduct(Request $request){
        $modelComments = new Comments();
        $result = $modelComments -> getListByProduct($request);
        return $result;
    }

    public function updateComment(CommentsUpdate $request ,$id_comment) {
        $validate = $request -> validated();
        $user = Auth::user();
        $updateTimeUpdateAt = date("Y-m-d H:i:s",time());
        $params = [
            $validate['description'],
            $updateTimeUpdateAt,
            $user['id'],
            $id_comment
        ];
        $modelComments = new Comments();

        $modelComments -> updateComment($params);
        return response() ->json(["msg" => "Cập nhật bình luận thành công!", "status" => true],200);
    }

    public function deleteComment($id) {
        $modelComments = new Comments();
        $timeStamp = date("Y-m-d H:i:s",time());
        $user = Auth::user();
        $result = $modelComments -> checkExistsComment($id, $user['id'] );
        $params2 = [
            2,
            $timeStamp,
            $id,
            $user['id']
        ];
        if(!isset($result)) return response() ->json(["msg" => "Bình luận không tôn tại!", "status" => false],404);
        $modelComments -> deleteComment($params2);
        return response() ->json(["msg" => 'Xoá bình luận thành công!', "status" => true],200);
    }

}
