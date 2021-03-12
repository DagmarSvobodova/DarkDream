<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function category()
    {
        return view('category.detail');
 
            }
public function categories()
            {
                
        
        return view('category.index');
                    
                               
                    }
}
