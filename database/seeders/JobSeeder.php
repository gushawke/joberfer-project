<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Job;
use App\Models\Tag;

class JobSeeder extends Seeder
{
    public function run(): void
    {
        Job::truncate();
        Tag::truncate(); // Assuming you want to reset tags as well

        // Create some tags
        $tags = [
            'Laravel', 'React', 'Adobe Creative Suite', 'Data Visualization', 'SQL'
        ];

        foreach ($tags as $tagName) {
            Tag::create(['name' => $tagName]);
        }

        // Define jobs with tags
        $jobs = [
            [
                'title' => 'Software Developer',
                'description' => 'Responsible for developing and maintaining web applications.',
                'tags' => ['Laravel', 'React']
            ],
            [
                'title' => 'Graphic Designer',
                'description' => 'Looking for a creative graphic designer to join our team.',
                'tags' => ['Adobe Creative Suite']
            ],
            [
                'title' => 'Data Analyst',
                'description' => 'Seeking a data analyst with experience in data visualization.',
                'tags' => ['Data Visualization', 'SQL']
            ],
        ];

        // Insert jobs and associate tags
        foreach ($jobs as $jobData) {
            $job = Job::create([
                'title' => $jobData['title'],
                'description' => $jobData['description']
            ]);

            $tagIds = Tag::whereIn('name', $jobData['tags'])->pluck('id');
            $job->tags()->attach($tagIds);
        }
    }
}
