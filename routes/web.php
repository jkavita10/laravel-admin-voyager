<?php

use Illuminate\Support\Facades\Route;
//use App\Http\Controllers\ServicesController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});


Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
});

if (!Request::is('admin')) {
    Route::get('{slug}', 'PagesController@show');
}

//Route::get('ourservices', 'ServicesController@show');

Route::get('/ourservices', function () {
    return view('ourservices');
});

