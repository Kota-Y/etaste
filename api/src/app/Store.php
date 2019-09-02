<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Store extends Model
{
    protected $table = 'stores';

    protected $guarded = array('id');
  
    public $timestamps = true;
  
    public function getData($id=null)
    {
      $query = DB::table($this->table);

      if($id != null) $query->where('id', $id);
    
      $data = $query->select(
                        'id'
                        , 'name'
                        , 'image_url'
                        , 'open_time'
                        , 'close_time'
                        , 'zip'
                        , 'address'
                        , 'tel'
                        , 'holiday'
                        , 'parking'
                        , 'access'
                        , 'map'
                        , 'store_url'
                        )->get();

      return $data;
    }
}
