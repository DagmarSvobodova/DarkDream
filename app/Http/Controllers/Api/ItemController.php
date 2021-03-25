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
                $items = Item::orderBy('subcategory_id', 'DESC')
                ->with('category')
                ->with('universe')
                ->with('galaxy')
                ->with('subcategory')
                ->with('user')
                 ->get();
        
             return $items;
                    
                        
                        
                    }

    public function items_by_name($item_name)
            {
              
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
               
                
                
                return $item;
            }
           
            public function items_by_user_id($user)
            {

                $items = Item::orderBy('name')
                ->where('user_id', $user)
                ->with('universe')
                ->with('galaxy')
                ->with('subcategory')
                ->with('category')
                ->with('user')
                ->get();
               
          
                
                return $items;
            }

            public function items_by_galaxy_id($galaxy)
            {

                $items = Item::orderBy('name')
                ->where('galaxy_id', $galaxy)
                ->with('universe')
                ->with('galaxy')
                ->with('subcategory')
                ->with('category')
                ->with('user')
                ->get();
               
          
                
                return $items;
            }

            public function items_by_category_id($category)
            {

                $items = Item::orderBy('name')
                ->where('category_id', $category)
                ->with('universe')
                ->with('galaxy')
                ->with('subcategory')
                ->with('category')
                ->with('user')
                ->get();
               
          
                
                return $items;
            }
            public function items_by_universe_id($universe)
            {

                $items = Item::orderBy('name')
                ->where('universe_id', $universe)
                ->with('universe')
                ->with('galaxy')
                ->with('subcategory')
                ->with('category')
                ->with('user')
                ->get();
               
          
                
                return $items;
            }
                    
}
