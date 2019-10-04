<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Trade extends Model
{
    protected $table = 'trades';

    protected $guarded = array('id');
  
    public $timestamps = true;

    protected $fillable =[
        'user_id'
        , 'store_id'
        , 'food_id'
        , 'amount'
        , 'receive_time'
    ];
}
