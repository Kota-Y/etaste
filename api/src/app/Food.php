<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Food extends Model
{
    protected $table = 'foods';

    protected $guarded = array('id');
  
    public $timestamps = true;

    protected $fillable =[
        'name'
        , 'detail'
        , 'genre'
        , 'why_sale'
        , 'original_price'
        , 'sale_price'
        , 'start_time'
        , 'end_time'
        , 'image_url'
        , 'store_id'
        , 'amount'
        , 'allergy'
    ];
  
    public function getAllData()
    {
      $query = DB::table($this->table);
    
      $data = $query->select(
                        'foods.id as id'
                        , 'foods.name as name'
                        , 'original_price as originalPrice'
                        , 'sale_price as salePrice'
                        , 'start_time as startTime'
                        , 'end_time as endTime'
                        , 'foods.image_url as image'
                        , 'map_latitude as mapLatitude'
                        , 'map_Longitude as mapLongitude'
                        )
                    ->join('stores','stores.id','=','foods.store_id')
                    ->get();

      return $data;
    }

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
                        , 'map_latitude as mapLatitude'
                        , 'map_Longitude as mapLongitude'
                        , 'store_url as url'
                        )
                    ->join('stores','stores.id','=','foods.store_id')
                    ->join('areas','areas.id','=','stores.area_id')
                    ->get();

      return $data;
    }
}
