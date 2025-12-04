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
    Schema::create('ticket_assignments', function (Blueprint $table) {
        $table->id('assign_id'); // primary key
        $table->unsignedBigInteger('ticket_id'); // foreign key
        $table->string('assigned_to', 100);
        $table->timestamp('assigned_at')->useCurrent();

        $table->enum('status', ['pending', 'inprogress', 'completed', 'onhold'])
              ->default('pending');

        // auto updated timestamp
        $table->timestamp('updated_at')->useCurrent()->useCurrentOnUpdate();

        // index + foreign key
        $table->index('ticket_id');

        $table->foreign('ticket_id')
              ->references('ticket_id')
              ->on('tickets')
              ->onDelete('cascade');
    });
}


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ticket_assignments');
    }
};
