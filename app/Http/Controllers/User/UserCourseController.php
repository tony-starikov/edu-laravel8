<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Course;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserCourseController extends Controller
{
    public function index()
    {
        $courses = Course::orderBy('id', 'desc')->get();
        return  view('user.courses.index', compact('courses'));
    }

    public function show($id)
    {
        $user = Auth::user();

        $course = Course::where('id', $id)->first();

        return  view('user.courses.show', compact('course', 'user'));
    }

    public function enroll(Request $request, Course $course)
    {
        $user = Auth::user();

        if ($user->courses->contains($course->id)) {

            $request->session()->flash('message', 'Already enrolled!');

        } else {

            $course->users()->attach($user->id);

            $pivotRow = $user->courses()->where('course_id', $course->id)->first()->pivot;

            $pivotRow->enroll_status = 1;

            $pivotRow->payment_status = 1;

            $pivotRow->update();

//            dd($pivotRow);

            $request->session()->flash('message', 'Course enrolled!');
        }

        return redirect()->route('userEnrolledCourses');
    }

    public function userEnrolledCourses()
    {
        $user = Auth::user();

        $courses = $user->enrolledCourses;

        return  view('user.courses_enrolled.index', compact('courses', 'user'));
    }



    public function userShowEnrolledCourse($id)
    {
        $user = Auth::user();

        $course = Course::where('id', $id)->first();

//        $pivotRow = $user->courses()->where('course_id', $course->id)->first()->pivot;

        return  view('user.courses_enrolled.show', compact('course', 'user'));
    }
}
