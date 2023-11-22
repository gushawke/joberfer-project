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
        Schema::create('user_tag', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id') // foreign key referencing 'id' on 'users' table
                  ->constrained() // This adds the foreign key constraint
                  ->onDelete('cascade'); // Delete pivot row if user is deleted
            $table->foreignId('tag_id') // foreign key referencing 'id' on 'tags' table
                  ->constrained() // This adds the foreign key constraint
                  ->onDelete('cascade'); // Delete pivot row if tag is deleted
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_tag');
    }
};
