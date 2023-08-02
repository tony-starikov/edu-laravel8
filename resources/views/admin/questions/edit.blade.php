@extends('admin.master')

@section('title', 'EDIT QUESTION')

@section('main')
    <div class="container">

        <hr>

        <h1>EDIT QUESTION</h1>

        <hr>

        <form method="POST" enctype="multipart/form-data" action="{{ route('questions.update', $question) }}">
            <div>
                @method('PUT')
                @csrf

                <div class="input-group mb-3">
                    <label class="input-group-text" for="inputGroupSelect01">SELECT THE LESSON</label>
                    <select name="lesson_id" class="form-select" id="inputGroupSelect01">
                        @foreach($lessons as $lesson)

                            <option @if($lesson->id == $question->lesson_id) selected @endif value="{{ $lesson->id }}">{{ $lesson->title }}</option>

                        @endforeach
                    </select>
                </div>

                <div class="input-group flex-nowrap mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="addon-wrapping">QUESTION</span>
                    </div>
                    <input value="{{ $question->question }}" type="text" name="question" id="question" class="form-control" placeholder="title" aria-describedby="addon-wrapping">
                </div>

                <button type="submit" class="btn btn-success mt-3">EDIT</button>

            </div>
        </form>

    </div> <!-- /container -->
@endsection
