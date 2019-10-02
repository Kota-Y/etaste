<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Favorite extends Model
{
    protected $table = 'favorites';

    protected $guarded = array('id');
  
    public $timestamps = true;

    protected $fillable =[
        'user_id'
        , 'store_id'
    ];
}
