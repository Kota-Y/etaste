<?php

use Illuminate\Database\Seeder;

class FavoritesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('favorites')->insert([
            [
              'user_id' => 1,
              'store_id' => 1,
              'created_at' => new DateTime(),
              'updated_at' => new DateTime(),
            ],
            [
              'user_id' => 1,
              'store_id' => 2,
              'created_at' => new DateTime(),
              'updated_at' => new DateTime(),
            ],
            [
              'user_id' => 3,
              'store_id' => 1,
              'created_at' => new DateTime(),
              'updated_at' => new DateTime(),
            ],
            [
              'user_id' => 4,
              'store_id' => 4,
              'created_at' => new DateTime(),
              'updated_at' => new DateTime(),
            ],         
          ]);
    }
}
