@extends('admin.master')

@section('title', 'CREATE QUESTION')

@section('main')
    <div class="container">

        <hr>

        <h1>ADD QUESTION</h1>

        <hr>

        <form method="POST" action="{{ route('questions.store') }}">
            @csrf

            @error('name')
            <div class="alert alert-danger">{{ $message }}</div>
            @enderror

            <div class="input-group mb-3">
                <label class="input-group-text" for="inputGroupSelect01">SELECT THE LESSON</label>
                <select name="lesson_id" class="form-select" id="inputGroupSelect01">
                    @foreach($lessons as $lesson)

                        <option value="{{ $lesson->id }}">{{ $lesson->title }}</option>

                    @endforeach
                </select>
            </div>

            <div class="input-group flex-nowrap mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="addon-wrapping">QUESTION</span>
                </div>
                <input type="text" name="question" id="question" class="form-control" placeholder="title" aria-describedby="addon-wrapping">
            </div>

            <button type="submit" class="btn btn-success mt-3">CREATE</button>
        </form>

    </div> <!-- /container -->
@endsection
