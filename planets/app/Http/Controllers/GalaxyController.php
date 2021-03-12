<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;


class GalaxyController extends Controller
{
        public function galaxy()
            {
                return view('galaxy.detail');
         
                    }
        public function galaxies()
                    {
                        
                
                return view('galaxy.index');
                            
                                       
                            }
}




