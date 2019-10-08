<?php

namespace App\Models;

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

    public function hasUserId($id)
    {
        return DB::table($this->table)->where('id', $id)->exists();
    }
}
