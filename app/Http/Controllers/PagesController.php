<?php

namespace App\Http\Controllers;
use App\Models\Pages;
//namespace App\Models;

use Illuminate\Http\Request;

class PagesController extends Controller
{
    //

    public function show($slug)
    {
        $page = Pages::findBySlug($slug);
        if(($page != null) && ($page->status == "ACTIVE")){
            return view('pages.show', ['page' => $page]);
        }else{
            return abort(404);
        }
    }
}
