<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    use HasFactory;

    public function category(){
        return $this->belongsTo(Category::class);
    }

    public function subcategory(){
        return $this->belongsTo(Subcategory::class);
    }

    public function galaxie(){
        return $this->belongsTo(Galaxie::class);
    }

    public function univers(){
        return $this->belongsTo(Univers::class);
    }

    public function user(){
        return $this->belongsTo(User::class);
    }
}
