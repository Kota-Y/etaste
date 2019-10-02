<?php

use Illuminate\Database\Seeder;

class FoodsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('foods')->insert([
            [
              'store_id' => 1,
              'name' => '塩パンセット',
              'detail' => '当店の人気No.1商品です。',
              'genre' => 'パン',
              'why_sale' => '雨が降ってきたので出品しました。',
              'original_price' => 500,
              'sale_price' => 300,
              'start_time' => '1500',
              'end_time' => '1900',
              'amount' => 3,
              'allergy' => '卵,乳',
              'image_url' => 'https://dl.dropboxusercontent.com/s/7vyyl6u3h66enwv/takigawa-pan.jpg',
              'created_at' => new DateTime(),
              'updated_at' => new DateTime(),
            ],
            [
              'store_id' => 2,
              'name' => 'ラクダのステーキ',
              'detail' => 'オランダの伝統料理です。',
              'genre' => '肉',
              'why_sale' => '天気が悪くなってきたから。',
              'original_price' => 900,
              'sale_price' => 600,
              'start_time' => '1800',
              'end_time' => '2200',
              'amount' => 2,
              'allergy' => '',
              'image_url' => 'https://dl.dropboxusercontent.com/s/7vyyl6u3h66enwv/takigawa-pan.jpg',
              'created_at' => new DateTime(),
              'updated_at' => new DateTime(),
            ],
            [
              'store_id' => 4,
              'name' => '杏仁豆腐',
              'detail' => 'トロトロで絶品です。',
              'genre' => 'デザート',
              'why_sale' => '作り過ぎちゃいました。',
              'original_price' => 650,
              'sale_price' => 400,
              'start_time' => '2200',
              'end_time' => '2400',
              'amount' => 5,
              'allergy' => '卵',
              'image_url' => 'https://dl.dropboxusercontent.com/s/7vyyl6u3h66enwv/takigawa-pan.jpg',
              'created_at' => new DateTime(),
              'updated_at' => new DateTime(),
            ],
            [
              'store_id' => 5,
              'name' => '馬刺し',
              'detail' => 'とてもおいしいです。',
              'genre' => '肉',
              'why_sale' => 'ドタキャンされました。',
              'original_price' => 1500,
              'sale_price' => 700,
              'start_time' => '2100',
              'end_time' => '2300',
              'amount' => 1,
              'allergy' => '',
              'image_url' => 'https://dl.dropboxusercontent.com/s/7vyyl6u3h66enwv/takigawa-pan.jpg',
              'created_at' => new DateTime(),
              'updated_at' => new DateTime(),
            ],
          ]);
    }
}
