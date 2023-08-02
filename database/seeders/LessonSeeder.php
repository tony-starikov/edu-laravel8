<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class LessonSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('lessons')->insert([
            [
                'course_id' => 1,
                'title' => 'LESSON 1',
                'order' => 1,
                'description' => 'LESSON 1 DESCRIPTION',
                'video_src' => 'https://www.youtube.com/embed/bLKc-rIWn6U',
            ],

            [
                'course_id' => 1,
                'title' => 'LESSON 2',
                'order' => 2,
                'description' => 'LESSON 2 DESCRIPTION',
                'video_src' => 'https://www.youtube.com/embed/bLKc-rIWn6U',
            ],

            [
                'course_id' => 1,
                'title' => 'LESSON 3',
                'order' => 3,
                'description' => 'LESSON 3 DESCRIPTION',
                'video_src' => 'https://www.youtube.com/embed/bLKc-rIWn6U',
            ],
        ]);
    }
}
