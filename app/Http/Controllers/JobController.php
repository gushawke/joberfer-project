<?php

namespace App\Http\Controllers;

use App\Models\Job;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;



class JobController extends Controller
{
    public function index()
    {
        $jobs = Job::all(); // Retrieve all jobs from the database
        return Inertia::render('JobBoard', ['jobs' => $jobs]); // Pass the jobs to your React component
    }

    public function match(Request $request)
{
    $tags = $request->input('tags', []); // Get tags from request, default to empty array
    $matchingJobs = Job::findByTags($tags);
    return Inertia::render('JobBoard', ['jobs' => $matchingJobs]);
}

public function getMatchedConnections(Request $request, $jobId)


{
    $job = Job::with('tags')->findOrFail($jobId);
    \Log::info('Job Tags:', $job->tags->toArray()); // Log the job's tags

    $user = $request->user();
    $jobTagIds = $job->tags->pluck('id');


    $matchedConnections = $user->connections()->whereExists(function ($query) use ($jobTagIds) {
        $query->select(DB::raw(1))
              ->from('tags')
              ->join('tag_user', 'tags.id', '=', 'tag_user.tag_id')
              ->whereRaw('tag_user.user_id = users.id') // Specify 'tag_user.user_id'
              ->whereIn('tags.id', $jobTagIds);
    })->get();

    return response()->json($matchedConnections);
}

}
