<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable implements JWTSubject
{
    use Notifiable;
    
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

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        return [];
    }

    public function hasUserId($id)
    {
        return DB::table($this->table)->where('id', $id)->exists();
    }
}
