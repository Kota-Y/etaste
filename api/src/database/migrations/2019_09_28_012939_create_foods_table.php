<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFoodsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('foods', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('store_id');
            $table->foreign('store_id')->references('id')->on('stores');
            $table->string('name',100);
            $table->text('detail')->nullable();
            $table->string('genre',50)->nullable();
            $table->string('why_sale')->nullable();
            $table->integer('original_price');
            $table->integer('sale_price');
            $table->string('start_time',10);
            $table->string('end_time',10);
            $table->integer('amount');
            $table->text('allergy')->nullable();
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
        Schema::dropIfExists('foods');
    }
}
