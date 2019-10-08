<?php

namespace App\Models;

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

      if($id != null) $query->where('stores.id', $id);
    
      $data = $query->select(
                        'stores.id as id'
                        , 'name'
                        , 'image_url as image'
                        , 'open_time as openTime'
                        , 'close_time as closeTime'
                        , 'areas.pref as areaPref'
                        , 'areas.city as areaCity'
                        , 'areas.other as areaOther'
                        , 'zip'
                        , 'address'
                        , 'tel'
                        , 'holiday'
                        , 'parking'
                        , 'access'
                        , 'map_latitude as mapLatitude'
                        , 'map_Longitude as mapLongitude'
                        , 'store_url as url'
                        )
                    ->join('areas','areas.id','=','stores.area_id')
                    ->get();

      return $data;
    }

    public function hasStoreId($id)
    {
        return DB::table($this->table)->where('id', $id)->exists();
    }
}
