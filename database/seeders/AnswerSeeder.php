<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AnswerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('answers')->insert([
            [
                'question_id' => 1,
                'answer' => 'ANSWER 1 FALSE',
                'value' => 0,
            ],

            [
                'question_id' => 1,
                'answer' => 'ANSWER 2 FALSE',
                'value' => 0,
            ],

            [
                'question_id' => 1,
                'answer' => 'ANSWER 3 TRUE',
                'value' => 1,
            ],


            [
                'question_id' => 2,
                'answer' => 'ANSWER 1 FALSE',
                'value' => 0,
            ],

            [
                'question_id' => 2,
                'answer' => 'ANSWER 2 FALSE',
                'value' => 0,
            ],

            [
                'question_id' => 2,
                'answer' => 'ANSWER 3 TRUE',
                'value' => 1,
            ],


            [
                'question_id' => 3,
                'answer' => 'ANSWER 1 FALSE',
                'value' => 0,
            ],

            [
                'question_id' => 3,
                'answer' => 'ANSWER 2 FALSE',
                'value' => 0,
            ],

            [
                'question_id' => 3,
                'answer' => 'ANSWER 3 TRUE',
                'value' => 1,
            ],
        ]);
    }
}
