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
              'mail' => 'testuser@outlook.com',
              'created_at' => new DateTime(),
              'updated_at' => new DateTime(),
            ],
            [
              'mail_authentication' => 'NULL',
              'mail' => 'test@gmail.com',
              'created_at' => new DateTime(),
              'updated_at' => new DateTime(),
            ],
          ]);
    }
}