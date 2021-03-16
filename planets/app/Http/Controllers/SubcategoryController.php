<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Subcategory;

class SubcategoryController extends Controller
{
    
    public function subcategory()
    {
        return view('subcategory.detail');
 
            }
public function subcategories($id)
            {
                
        
        return view('subcategory.index');
                    
                               
                    }
}




