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

    public function getUserData($userId=null)
    {
      $query = DB::table($this->table);

      if($userId != null) $query->where('trades.user_id', $userId);
    
      $data = $query->select(
                        'trades.id as id'
                        , 'foods.id as foodId'
                        , 'stores.id as storeId'
                        , 'foods.name as foodName'
                        , 'stores.name as storeName'
                        , 'trades.amount as amount'
                        , 'sale_price'
                        , 'recieve_time as recieveTime'
                        , 'is_completed as isCompleted'
                        , 'foods.image_url as foodImage'
                        )
                    ->join('foods','foods.id','=','trades.food_id')
                    ->join('stores','stores.id','=','trades.store_id')
                    ->get();

      return $data;
    }

    public function getStoreData($storeId=null)
    {
      $query = DB::table($this->table);

      if($storeId != null) $query->where('trades.store_id', $storeId);
    
      $data = $query->select(
                        'foods.id as foodId'
                        , 'foods.name as foodName'
                        , 'foods.amount as amount'
                        , 'foods.start_time as startTime'
                        , 'foods.end_time as endTime'
                        , 'foods.image_url as foodImage'
                        , 'trades.id as id'
                        , 'trades.amount as orderAmount'
                        , 'sale_price'
                        , 'recieve_time as recieveTime'
                        , 'users.mail as userName'
                        , 'is_completed as isCompleted'
                        )
                    ->join('users','users.id','=','trades.user_id')
                    ->join('foods','foods.id','=','trades.food_id')
                    ->get();

      return $data;
    }

    public function hasTradeId($id)
    {
        return DB::table($this->table)->where('id', $id)->exists();
    }

    public function isCompleted($id)
    {
        DB::table($this->table)->where('id', $id)->update(['is_completed' => true]);
    }
}
