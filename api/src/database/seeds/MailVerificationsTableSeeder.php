<?php

use Illuminate\Database\Seeder;

class MailVerificationsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('mail_verifications')->insert([
            [
              'mail_authentication' => 'NULL',
              'mail' => 'mcz-0604-htt@outlook.com',
              'created_at' => new DateTime(),
              'updated_at' => new DateTime(),
            ],
            [
              'mail_authentication' => 'NULL',
              'mail' => 'mcz1127htt@gmail.com',
              'created_at' => new DateTime(),
              'updated_at' => new DateTime(),
            ],
          ]);
    }
}