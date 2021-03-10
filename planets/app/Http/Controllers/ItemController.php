<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Item;
use App\Models\Galaxy;

class ItemController extends Controller
{
    public function index()
    {
        $items = Item::get();
               

        return $items;
            
                
                
            }

    public function show($item_id)
    {
        $item = Item::find($item_id);
               

        return $item;
            
                
                
            }
}
