<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Tag;
use Faker\Factory as Faker;

class UsersTableSeeder extends Seeder
{
    public function run()
    {
        // Reset the users and their tags
        User::query()->delete();

        if (Tag::count() == 0) {
            $defaultTags = ['Laravel', 'React', 'Adobe Creative Suite', 'Data Visualization', 'SQL'];
            foreach ($defaultTags as $tagName) {
                Tag::create(['name' => $tagName]);
            }
        }

        $tags = Tag::all();

        // Create users and assign tags
        User::factory(50)->create()->each(function ($user) use ($tags) {

            $randomTags = $tags->random(rand(1, 3))->pluck('id')->toArray();
            $user->tags()->attach($randomTags);
        });
    }
}
