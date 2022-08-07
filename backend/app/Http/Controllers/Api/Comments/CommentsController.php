<?php

namespace App\Http\Controllers\Api\Comments;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\Comments\CommentsCreate;
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
}
