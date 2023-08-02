@extends('user.master')

@section('title', 'COURSE')

@section('main')
    <div class="container">

        <div class="row">

            <div class="col">

                <h1>{{ $course->title }}</h1>

                <iframe width="50%" height="400" src="{{ $course->video_src }}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                <p>
                    {{ $course->description }}
                </p>

                @if($user->courses->contains($course->id))
                    <p>ALREADY ENROLLED TO THE COURSE, CHECK <a href="{{ route('userEnrolledCourses') }}">MY COURSES</a>.</p>
                @else
                    <form method="POST" enctype="multipart/form-data" action="{{ route('userCourseEnroll', $course) }}">
                        @csrf

                        <button class="btn btn-success my-3">ENROLL</button>
                    </form>
                @endif


                <div class="row">

                    @foreach($course->lessons as $lesson)

                        <div class="col-3 mb-2">

                            <div class="card" style="width: 18rem;">
                                <div class="card-body">
                                    <h5 class="card-title">{{ $lesson->title }}</h5>
                                </div>
                            </div>

                        </div>

                    @endforeach

                </div>

            </div>

        </div>

    </div> <!-- /container -->
@endsection
