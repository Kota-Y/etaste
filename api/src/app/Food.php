<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Food extends Model
{
    protected $table = 'foods';

    protected $guarded = array('id');
  
    public $timestamps = true;
  
    public function getData($id=null)
    {
      $query = DB::table($this->table);

      if($id != null) $query->where('foods.id', $id);
    
      $data = $query->select(
                        'foods.id as foodId'
                        , 'foods.name as foodName'
                        , 'original_price as originalPrice'
                        , 'sale_price as salePrice'
                        , 'start_time as startTime'
                        , 'end_time as endTime'
                        , 'allergy'
                        , 'why_sale as whySale'
                        , 'foods.image_url as foodImage'
                        , 'map_latitude as foodMapLatitude'
                        , 'map_Longitude as foodMapLongitude'
                        , 'stores.id as storeId'
                        , 'stores.name as storeName'
                        , 'stores.image_url as storeImage'
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
                        , 'map_latitude as storeMapLatitude'
                        , 'map_Longitude as storeMapLongitude'
                        , 'store_url as url'
                        )
                    ->join('stores','stores.id','=','foods.store_id')
                    ->join('areas','areas.id','=','stores.area_id')
                    ->get();

      return $data;
    }
}
