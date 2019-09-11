<?php

use Illuminate\Database\Seeder;

class StoresTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('stores')->insert([
            [
              'name' => '滝川パン',
              'detail' => 'コロッケが監修しているパン屋さんです。',
              'genre' => 'パン',
              'open_time' => '0800',
              'close_time' => '2000',
              'address' => '熊本県熊本市中央区安政町2-34 HILLS KAGOMACHIビル1F',
              'parking' => '駐車場 徒歩5分にあり(有料)',
              'holiday' => '不定休(店休)',
              'store_url' => 'http://takigawapan.jp/',
              'map_latitude' => '32.802525',
              'map_Longitude' => '130.710501',
              'zip' => '860-0801',
              'access' => '通町筋から徒歩10分',
              'tel' => '096-342-4398',
              'image_url' => 'https://dl.dropboxusercontent.com/s/7vyyl6u3h66enwv/takigawa-pan.jpg',
              'created_at' => new DateTime(),
              'updated_at' => new DateTime(),
            ],
            [
                'name' => 'Manly 熊本',
                'detail' => 'オランダ料理が有名です。',
                'genre' => 'カフェ・喫茶',
                'open_time' => '1130',
                'close_time' => '2400',
                'address' => '熊本県熊本市中央区南坪井町5-29',
                'parking' => '駐車場 無',
                'holiday' => '不定休（お盆も休まず営業致します）',
                'store_url' => 'http://fukuoka-diningbar.com/',
                'map_latitude' => '32.807607',
                'map_Longitude' => '130.712464',
                'zip' => '860-0848',
                'access' => '藤崎宮前駅から203m',
                'tel' => '096-223-5388',
                'image_url' => 'https://dl.dropboxusercontent.com/s/7vyyl6u3h66enwv/takigawa-pan.jpg',
                'created_at' => new DateTime(),
                'updated_at' => new DateTime(),
              ],
              [
                'name' => 'rojipan 並木坂店',
                'detail' => 'パンがとても美味しいです。',
                'genre' => 'パン',
                'open_time' => '0830',
                'close_time' => '2000',
                'address' => '熊本県熊本市中央区上通町11-3 1F',
                'parking' => '駐車場 無',
                'holiday' => '水曜日',
                'store_url' => '',
                'map_latitude' => '32.806794',
                'map_Longitude' => '130.711840',
                'zip' => '860-0845',
                'access' => '藤崎宮前駅から321m',
                'tel' => '050-5594-4846',
                'image_url' => 'https://dl.dropboxusercontent.com/s/7vyyl6u3h66enwv/takigawa-pan.jpg',
                'created_at' => new DateTime(),
                'updated_at' => new DateTime(),
              ],
              [
                'name' => 'チャオリー',
                'detail' => '中華料理が美味しいです。',
                'genre' => '中華料理',
                'open_time' => '1130',
                'close_time' => '2400',
                'address' => '熊本県熊本市中央区上通町11-6',
                'parking' => '駐車場 無',
                'holiday' => '火曜日',
                'store_url' => 'https://chao-li.owst.jp/',
                'map_latitude' => '32.807494',
                'map_Longitude' => '130.713635',
                'zip' => '860-0845',
                'access' => '藤崎宮前駅から299m',
                'tel' => '096-351-5015',
                'image_url' => 'https://dl.dropboxusercontent.com/s/7vyyl6u3h66enwv/takigawa-pan.jpg',
                'created_at' => new DateTime(),
                'updated_at' => new DateTime(),
              ],
              [
                'name' => 'ゴキゲン家G.O',
                'detail' => '雰囲気のいい居酒屋です。',
                'genre' => '居酒屋',
                'open_time' => '1800',
                'close_time' => '0100',
                'address' => '熊本県熊本市中央区下通1丁目6-19',
                'parking' => '駐車場 無',
                'holiday' => '不定休',
                'store_url' => '',
                'map_latitude' => '32.801858',
                'map_Longitude' => '130.710561',
                'zip' => '860-0807',
                'access' => '通町筋駅から254mm',
                'tel' => '096-328-8288',
                'image_url' => 'https://dl.dropboxusercontent.com/s/7vyyl6u3h66enwv/takigawa-pan.jpg',
                'created_at' => new DateTime(),
                'updated_at' => new DateTime(),
              ],
          ]);
    }
}
