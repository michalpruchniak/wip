<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('profiles', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('lastname');
            $table->string('email');
            $table->string('description')->nullable();
            $table->integer('job');

            //Only for testers
            $table->string('testing_systems')->nullable();
            $table->string('raporting_systems')->nullable();
            $table->boolean('selenium')->nullable();

            //Only for developers
            $table->string('ide')->nullable();
            $table->string('programming_languages')->nullable();
            $table->boolean('mysql')->nullable();

            //Only for PM
            $table->string('methodology')->nullable();
            $table->boolean('scrum')->nullable();


            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('profiles');
    }
};
