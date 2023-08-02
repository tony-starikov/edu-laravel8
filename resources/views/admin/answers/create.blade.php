@extends('admin.master')

@section('title', 'CREATE ANSWER')

@section('main')
    <div class="container">

        <hr>

        <h1>ADD ANSWER</h1>

        <hr>

        <form method="POST" action="{{ route('answers.store') }}">
            @csrf

            @error('name')
            <div class="alert alert-danger">{{ $message }}</div>
            @enderror

            <div class="input-group mb-3">
                <label class="input-group-text" for="inputGroupSelect01">SELECT THE QUESTION</label>
                <select name="question_id" class="form-select" id="inputGroupSelect01">
                    @foreach($questions as $question)

                        <option value="{{ $question->id }}">{{ $question->question }}</option>

                    @endforeach
                </select>
            </div>

            <div class="input-group flex-nowrap mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="addon-wrapping">ANSWER</span>
                </div>
                <input type="text" name="answer" id="answer" class="form-control" placeholder="answer" aria-describedby="addon-wrapping">
            </div>

            <input type="hidden" name="value" value="0">

            <div class="form-check">
                <input class="form-check-input" type="checkbox" name="value" value="1" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                    TRUE ANSWER
                </label>
            </div>

            <button type="submit" class="btn btn-success mt-3">CREATE</button>
        </form>

    </div> <!-- /container -->
@endsection
