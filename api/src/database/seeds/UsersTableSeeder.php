<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            [
                'first_name' => '山下',
                'last_name' => '昂太',
                'first_name_kana' => 'ヤマシタ',
                'last_name_kana' => 'コウタ',
                'tel' => '000-0000-0000',
                'mail' => 'k_yamashita@etaste-jp.com',
                'password' => bcrypt('aaa'),
                'is_login' => false,
                'is_store' => false,
                'created_at' => new DateTime(),
                'updated_at' => new DateTime(),
            ],
            [
                'first_name' => '川畑',
                'last_name' => '孝史',
                'first_name_kana' => 'カワバタ',
                'last_name_kana' => 'タカフミ',
                'tel' => '111-1111-1111',
                'mail' => 'bbb@etaste-jp.com',
                'password' => bcrypt('bbb'),
                'is_login' => true,
                'is_store' => false,
                'created_at' => new DateTime(),
                'updated_at' => new DateTime(),
            ],
            [
                'first_name' => '中野',
                'last_name' => '柊人',
                'first_name_kana' => 'ナカノ',
                'last_name_kana' => 'シュウト',
                'tel' => '222-2222-2222',
                'mail' => 'ccc@etaste-jp.com',
                'password' => bcrypt('ccc'),
                'is_login' => false,
                'is_store' => true,
                'created_at' => new DateTime(),
                'updated_at' => new DateTime(),
            ],
            [
                'first_name' => '工藤',
                'last_name' => '昂大',
                'first_name_kana' => 'クドウ',
                'last_name_kana' => 'コウダイ',
                'tel' => '333-3333-3333',
                'mail' => 'ddd@etaste-jp.com',
                'password' => bcrypt('ddd'),
                'is_login' => true,
                'is_store' => true,
                'created_at' => new DateTime(),
                'updated_at' => new DateTime(),
            ],          
          ]);
    }
}
