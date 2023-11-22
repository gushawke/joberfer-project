<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Job extends Model
{
    use HasFactory;

     // Define the relationship with Tag
     public function tags()
     {
         return $this->belongsToMany(Tag::class);
     }
 
     // Method to retrieve jobs matching given tags
     public static function findByTags($tags)
     {
         return Job::whereHas('tags', function ($query) use ($tags) {
             $query->whereIn('name', $tags);
         })->get();
     }
}
