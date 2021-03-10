<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Item;

class ItemController extends Controller
{
    public function index()
    {
        $items = Item::with('galaxy')
        ->with('universe')
        ->with('category')
        ->with('subcategory')
        ->with('user')
        ->get();
               

        return $items;
            
                
                
            }

    public function show($item_id)
    {
        $item = Item::with('galaxy')
        ->with('universe')
        ->with('category')
        ->with('subcategory')
        ->with('user')
        ->findOrFail($item_id);
               

        return $item;
            
                
                
            }
}
