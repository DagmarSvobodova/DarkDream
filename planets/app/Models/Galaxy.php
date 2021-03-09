<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Galaxy extends Model
{
    use HasFactory;

    protected $table = 'galaxies';

    public function items(){
        return $this->hasMany(Item::class);
    }
    public function univers(){
        return $this->belongsTo(Univers::class);
    }
}
