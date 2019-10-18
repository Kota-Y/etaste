<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(UsersTableSeeder::class);
        $this->call(AreasTableSeeder::class);
        $this->call(StoresTableSeeder::class);
        $this->call(FoodsTableSeeder::class);
        $this->call(FavoritesTableSeeder::class);
        $this->call(TradesTableSeeder::class);
        $this->call(MailVerificationsTableSeeder::class);
    }
}
