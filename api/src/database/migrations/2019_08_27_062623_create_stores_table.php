<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateStoresTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('stores', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name',100);
            $table->text('detail')->nullable();
            $table->string('genre',50)->nullable();
            $table->string('open_time',10);
            $table->string('close_time',10);
            $table->string('address',100);
            $table->string('parking',50)->nullable();
            $table->string('holiday',50)->nullable();
            $table->string('store_url')->nullable();
            $table->string('map_latitude',25);
            $table->string('map_longitude',25);
            $table->string('zip',10);
            $table->string('access',100)->nullable();
            $table->string('tel',20)->unique();
            $table->string('image_url');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('stores');
    }
}
