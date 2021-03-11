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

            public function show(Request $request)
            {
                // create the query builder
                $query_builder = Galaxy::orderBy('name');
        
                if ($request->input('parent')) { // if there is 'parent' in $_GET
                    $query_builder->where('parent_id', $request->input('parent'));
                } else {
                    $query_builder->whereNull('parent_id');
                }
        
                // run the query, get the categories
                $galaxy = $query_builder->get();
        
                return $galaxy;
            }


            public function galaxy()
            {
                return view('galaxy.index');
        
                
                    
                        
                        
                    }
                    public function galaxies()
                    {
                        
                
                        return view('galaxy.detail');
                            
                                
                                
                            }
}




