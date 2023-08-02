<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Lesson;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserLessonController extends Controller
{
    public function show($id)
    {
        $user = Auth::user();

        $lesson = Lesson::where('id', $id)->first();

        return  view('user.lessons.show', compact('lesson', 'user'));
    }

    public function getAnswers(Request $request, Lesson $lesson)
    {
        $user = Auth::user();

        if ($user->lessons->contains($lesson->id)) {

            $request->session()->flash('message', 'Already passed!');

            return redirect()->route('userLessonShow', $lesson->id);

        }

        $user_answers = $request->all();

        $results = [];

        $question_results = [];

        $questions = $lesson->questions;

        foreach ($questions as $question) {
            $answers = $question->answers;

            foreach ($answers as $answer) {
                if ($user_answers[$question->id][$answer->id] == $answer->value){
                    $results[$question->id][$answer->id] = true;
                } else {
                    $results[$question->id][$answer->id] = false;
                }
            }

            if (in_array(false, $results[$question->id], true)) {
                $question_results[$question->id] = 0;
            } else {
                $question_results[$question->id] = 1;
            }

        }

        $final_result = 0;

        foreach ($question_results as $question_result) {
            $final_result += $question_result;
        }

        if (($final_result / (count($questions)/100)) >= 66 ) {

            $lesson->users()->attach($user->id);

//                    $pivotRow = $user->lessons()->where('lesson->id', $lesson->id)->first()->pivot;
//
//                    $pivotRow->passed = 1;

//                    $pivotRow->update();

            $request->session()->flash('message', 'Lesson passed!');
        } else {

            $request->session()->flash('message', 'Lesson failed!');

        }


        return redirect()->route('userLessonShow', $lesson->id);

    }
}
