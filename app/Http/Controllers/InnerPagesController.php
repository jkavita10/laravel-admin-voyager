<?php

namespace App\Http\Controllers;
use App\Models\InnerPages;
//namespace App\Models;

use Illuminate\Http\Request;

class InnerPagesController extends Controller
{
    //

    public function show($slug)
    {
        $page = InnerPages::findBySlug($slug);
        if(($page != null) && ($page->status == "ACTIVE")){
            return view('pages.show', ['page' => $page]);
        }else{
            return abort(404);
        }
    }
}
