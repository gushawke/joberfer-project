<?php

use App\Http\Controllers\UserController; 
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\JobController;
use App\Http\Controllers\DashboardController;
use App\Models\Job;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    $jobs = Job::all(); // Fetch all jobs
    return Inertia::render('Welcome', [
        'jobs' => $jobs, // Pass jobs data to the Welcome component
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    $jobs = Job::all(); // Fetch all jobs
    return Inertia::render('Dashboard', [
        'jobs' => $jobs // Pass jobs data to the Dashboard component
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');




Route::get('/connectionsPage', function () {
    return Inertia::render('ConnectionsPage');
})->name('connection.list')->middleware('auth');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';

Route::get('/jobs', [JobController::class, 'index'])->name('jobs.index');
Route::get('/jobs/matched-connections/{jobId}', [JobController::class, 'getMatchedConnections']);

Route::post('/profile/send-connection/{userId}', [ProfileController::class, 'sendConnectionRequest']);
Route::post('/profile/accept-connection/{connectionId}', [ProfileController::class, 'acceptConnection']);
Route::get('/profile/connections', [ProfileController::class, 'listConnections'])->name('profile.connections');

Route::get('/all-users', [UserController::class, 'index'])->name('all-users');


Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

