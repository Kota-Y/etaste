<?php

use Illuminate\Database\Seeder;

class AreasTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('areas')->insert([
            [
                'pref' => '熊本県',
                'city' => '熊本市中央区',
                'other' => '上通',
                'created_at' => new DateTime(),
                'updated_at' => new DateTime(),
            ],
            [
                'pref' => '熊本県',
                'city' => '熊本市中央区',
                'other' => '下通',
                'created_at' => new DateTime(),
                'updated_at' => new DateTime(),
            ],
            [
                'pref' => '熊本県',
                'city' => '熊本市中央区',
                'other' => '新市街',
                'created_at' => new DateTime(),
                'updated_at' => new DateTime(),
              ],
              [
                'pref' => '熊本県',
                'city' => '熊本市中央区',
                'other' => '新屋敷',
                'created_at' => new DateTime(),
                'updated_at' => new DateTime(),
              ],
              [
                'pref' => '熊本県',
                'city' => '熊本市中央区',
                'other' => '黒髪',
                'created_at' => new DateTime(),
                'updated_at' => new DateTime(),
              ],
              [
                'pref' => '熊本県',
                'city' => '熊本市中央区',
                'other' => '子飼',
                'created_at' => new DateTime(),
                'updated_at' => new DateTime(),
              ],            
          ]);
    }
}
