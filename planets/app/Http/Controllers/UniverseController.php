<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UniverseController extends Controller
{
    public function universe()
    {
        return view('universe.detail');
 
            }
public function universes()
            {
                
        
        return view('universe.index');
                    
                               
                    }
}
