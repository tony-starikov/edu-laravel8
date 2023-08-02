@extends('admin.master')

@section('title', 'EDIT COURSE')

@section('main')
    <div class="container">

        <hr>

        <h1>EDIT COURSE</h1>

        <hr>

        <form method="POST" enctype="multipart/form-data" action="{{ route('courses.update', $course) }}">
            <div>
                @method('PUT')
                @csrf

                @error('name')
                <div class="alert alert-danger">{{ $message }}</div>
                @enderror

                <div class="input-group flex-nowrap mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="addon-wrapping">TITLE</span>
                    </div>
                    <input value="{{ $course->title }}" type="text" name="title" id="title" class="form-control" placeholder="title" aria-describedby="addon-wrapping">
                </div>

                <div class="input-group flex-nowrap mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="addon-wrapping">DESCRIPTION</span>
                    </div>
                    <input value="{{ $course->description }}" type="text" name="description" id="description" class="form-control" placeholder="description" aria-describedby="addon-wrapping">
                </div>

                <button type="submit" class="btn btn-success mt-3">EDIT</button>

            </div>
        </form>

    </div> <!-- /container -->
@endsection
