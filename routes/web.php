<?php

use App\Http\Controllers\Admin\AdminAnswerController;
use App\Http\Controllers\Admin\AdminCourseController;
use App\Http\Controllers\Admin\AdminHomeController;
use App\Http\Controllers\Admin\AdminLessonController;
use App\Http\Controllers\Admin\AdminQuestionController;
use App\Http\Controllers\Admin\AdminUserController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\User\UserCourseController;
use App\Http\Controllers\User\UserHomeController;
use App\Http\Controllers\User\UserLessonController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Auth::routes([
    'reset' => false,
    'confirm' => false,
    'verify' => false,
]);

Route::group([
    'middleware' => 'set_locale',
], function () {
    Route::get('locale/{locale}', [PageController::class, 'changeLocale'])->name('locale');

    Route::get('/', [PageController::class, 'home'])->name('home');

    Route::get('/course', [PageController::class, 'home'])->name('course');

    Route::get('/main', [PageController::class, 'main'])->name('main');
});

Route::middleware('auth')->group(function () {

    Route::group([
        'prefix' => 'user',
    ], function () {
        Route::get('/home', [UserHomeController::class, 'index'])->name('userHome');

        Route::get('/all-courses', [UserCourseController::class, 'index'])->name('userCourses');

        Route::get('/my-courses', [UserCourseController::class, 'userEnrolledCourses'])->name('userEnrolledCourses');

        Route::get('/course/{id}', [UserCourseController::class, 'show'])->name('userCourseShow');

        Route::get('/enrolled-course/{id}', [UserCourseController::class, 'userShowEnrolledCourse'])->name('userShowEnrolledCourse');

        Route::post('/course/{course}', [UserCourseController::class, 'enroll'])->name('userCourseEnroll');

        Route::get('/lesson/{id}', [UserLessonController::class, 'show'])->name('userLessonShow');

        Route::post('/lesson/{lesson}', [UserLessonController::class, 'getAnswers'])->name('userGetAnswers');
    });

    Route::group([
        'middleware' => 'is_admin',
    ], function () {

        Route::group([
            'prefix' => 'admin',
        ], function () {
            Route::get('/home', [AdminHomeController::class, 'index'])->name('adminHome');

            Route::resource('users', AdminUserController::class);

            Route::resource('courses', AdminCourseController::class);

            Route::resource('lessons', AdminLessonController::class);

            Route::resource('questions', AdminQuestionController::class);

            Route::resource('answers', AdminAnswerController::class);
        });

    });

});
