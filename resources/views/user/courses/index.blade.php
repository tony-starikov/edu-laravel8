@extends('user.master')

@section('title', 'COURSES')

@section('main')
    <div class="container">

        <h1 class="text-center">ALL COURSES</h1>

        <div class="row ">

            @foreach($courses as $course)

                <div class="col-3 mb-2">

                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">{{ $course->title }}</h5>
                            <p class="card-text">{{ $course->description }}</p>
                            <a href="{{ route('userCourseShow', $course->id) }}" class="card-link">Go to the course</a>
                        </div>
                    </div>

                </div>

            @endforeach

        </div>
    </div> <!-- /container -->
@endsection
