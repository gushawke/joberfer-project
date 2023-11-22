<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Tag;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    public function run()
    {
        // Reset the users and their tags
        User::query()->delete();

        // Check if any tags exist, if not create some default tags
        if (Tag::count() == 0) {
            $defaultTags = ['Laravel', 'React', 'Adobe Creative Suite', 'Data Visualization', 'SQL'];
            foreach ($defaultTags as $tagName) {
                Tag::create(['name' => $tagName]);
            }
        }

        $tags = Tag::all();

        // Create users and assign tags
        User::factory(50)->create()->each(function ($user) use ($tags) {
            // Attach a random set of tags to each user
            // Use random ids instead of the entire Tag collection
            $randomTags = $tags->random(rand(1, 3))->pluck('id')->toArray();
            $user->tags()->attach($randomTags);
        });
    }
}
