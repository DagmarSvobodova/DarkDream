<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Item;
use App\Models\Galaxy;

class GalaxyController extends Controller
{
    public function index()
    {
        $galaxies = Galaxy::with('universe')
         ->get();

        return $galaxies;
            
                
                
            }

    public function show($galaxy_id)
    {
        $galaxy = Galaxy::with('universe')
        ->findOrFail($galaxy_id);
               

        return $galaxy;
            
                
                
            }

            public function galaxy($galaxy_id)
            {
                return view('galaxy.index');
        
                
                    
                        
                        
                    }
                    public function galaxies()
                    {
                        
                
                        return view('galaxy.detail');
                            
                                
                                
                            }
}




