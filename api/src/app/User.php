<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class User extends Model
{
    protected $table = 'users';

    protected $guarded = array('id');
  
    public $timestamps = true;

    protected $fillable =[
        'first_name'
        , 'last_name'
        , 'first_name_kana'
        , 'last_name_kana'
        , 'mail'
        , 'password'
    ];
}
