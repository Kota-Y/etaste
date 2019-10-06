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

    public function getData($userId=null)
    {
      $query = DB::table($this->table);

      if($userId != null) $query->where('favorites.user_id', $userId);
    
      $data = $query->select(
                        'stores.id as id'
                        , 'name'
                        , 'image_url as image'
                        )
                    ->join('stores','stores.id','=','favorites.store_id')
                    ->get();

      return $data;
    }
}
