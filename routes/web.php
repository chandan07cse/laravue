<?php

Route::get('{path}', function () {
    return view('welcome');
})->where( 'path', '([A-z\d-\/_.]+)?' );