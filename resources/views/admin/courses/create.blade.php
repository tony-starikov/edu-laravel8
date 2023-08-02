@extends('admin.master')

@section('title', 'CREATE')

@section('main')
    <div class="container">

        <hr>

        <h1>ADD COURSE</h1>

        <hr>

        <form method="POST" action="{{ route('courses.store') }}">
            @csrf

            @error('name')
            <div class="alert alert-danger">{{ $message }}</div>
            @enderror

            <div class="input-group flex-nowrap mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="addon-wrapping">TITLE</span>
                </div>
                <input type="text" name="title" id="title" class="form-control" placeholder="title" aria-describedby="addon-wrapping">
            </div>

            <div class="input-group flex-nowrap mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="addon-wrapping">DESCRIPTION</span>
                </div>
                <input type="text" name="description" id="description" class="form-control" placeholder="description" aria-describedby="addon-wrapping">
            </div>

            <div class="input-group flex-nowrap mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="addon-wrapping">VIDEO SRC</span>
                </div>
                <input type="text" name="video_src" id="video_src" class="form-control" placeholder="video_src" aria-describedby="addon-wrapping">
            </div>

            <button type="submit" class="btn btn-success mt-3">CREATE</button>
        </form>

    </div> <!-- /container -->
@endsection
