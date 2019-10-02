<?php

use Illuminate\Database\Seeder;

class TradesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('trades')->insert([
            [
              'user_id' => 1,
              'store_id' => 1,
              'food_id' => 1,
              'amount' => 2,
              'recieve_time' => '1800',
              'is_completed' => false,
              'created_at' => new DateTime(),
              'updated_at' => new DateTime(),
            ],
            [
              'user_id' => 1,
              'store_id' => 2,
              'food_id' => 2,
              'amount' => 1,
              'recieve_time' => '1900',
              'is_completed' => false,
              'created_at' => new DateTime(),
              'updated_at' => new DateTime(),
            ],
            [
              'user_id' => 2,
              'store_id' => 4,
              'food_id' => 3,
              'amount' => 2,
              'recieve_time' => '2200',
              'is_completed' => true,
              'created_at' => new DateTime(),
              'updated_at' => new DateTime(),
            ],
            [
              'user_id' => 4,
              'store_id' => 1,
              'food_id' => 1,
              'amount' => 3,
              'recieve_time' => '2100',
              'is_completed' => false,
              'created_at' => new DateTime(),
              'updated_at' => new DateTime(),
            ],         
          ]);
    }
}
