<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Item;
use App\Models\Galaxy;

class GalaxyController extends Controller
{
    public function index()
    {
        $galaxies = Galaxy::get();
               

        return $galaxies;
            
                
                
            }

    public function show($galaxy_id)
    {
        $galaxy = Galaxy::find($galaxy_id);
               

        return $galaxy;
            
                
                
            }
}




