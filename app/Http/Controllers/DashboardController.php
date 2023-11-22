<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Job;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;


class DashboardController extends Controller
{
    public function index()
    {
        $jobs = Job::with('tags')->get(); // Fetch all jobs with their tags
        $user = Auth::user();

        // Fetch connections for each job
        $jobsWithConnections = $jobs->map(function ($job) use ($user) {
            $jobTagIds = $job->tags->pluck('id');

            $matchedConnections = $user->connections()->whereExists(function ($query) use ($jobTagIds) {
                $query->select(\DB::raw(1))
                      ->from('tags')
                      ->join('tag_user', 'tags.id', '=', 'tag_user.tag_id')
                      ->whereRaw('tag_user.user_id = users.id') // Specify 'tag_user.user_id'
                      ->whereIn('tags.id', $jobTagIds);
            })->get();

            $job->matchedConnections = $matchedConnections;
            return $job;
        });

        return Inertia::render('Dashboard', [
            'jobs' => $jobsWithConnections
        ]);
    }
}
