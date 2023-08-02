@extends('user.master')

@section('title', 'COURSES ENROLLED')

@section('main')
    <div class="container">

        <h1 class="text-center">MY COURSES</h1>

        @if ($message = Session::get('message'))

            <div class="alert alert-success alert-block text-center">

                <strong>{{ $message }}</strong>

            </div>

        @endif

        <div class="row ">

            @if(count($courses))
                @foreach($courses as $course)

                    <div class="col-3 mb-2">

                        <div class="card" style="width: 18rem;">
                            <div class="card-body">
                                <h5 class="card-title">{{ $course->title }}</h5>
                                <p class="card-text">{{ $course->description }}</p>
                                <a href="{{ route('userShowEnrolledCourse', $course->id) }}" class="card-link">Go to the course</a>
                            </div>
                        </div>

                    </div>

                @endforeach
            @else
                <p class="text-center">TO START YOUR EDUCATION, PLEASE ENROLL TO THE COURSE FROM <a href="{{ route('userCourses') }}">ALL COURSES</a>.</p>
            @endif

        </div>
    </div> <!-- /container -->
@endsection
