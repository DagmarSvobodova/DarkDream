<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Item;


class ItemController extends Controller
{
    public function items_api_with_all()
    {
        $items = Item::with('universe')
        ->with('galaxy')
        ->with('subcategory')
        ->with('category')
        ->with('user')
         ->get();

        return $items;
            
                
                
            }
    public function items_api()
            {
                $items = Item::with('category')
                ->with('subcategory')
               
                 ->get();
        
             return $items;
                    
                        
                        
                    }

    public function item_by_name($item_name)
            {
                // create the query builder
                $item = Item::orderBy('name')
                ->where('name', $item_name)
                ->with('universe')
                ->with('galaxy')
                ->with('subcategory')
                ->with('category')
                ->with('user')
                ->get();
        
                return $item;
            }
            public function item_by_id($item_id)
            {

                $item = Item::with('universe')
                ->with('galaxy')
                ->with('subcategory')
                ->with('category')
                ->with('user')
                ->find($item_id);
               
                
                // create the query builder
                
                return $item;
            }
           
          
                    
}
