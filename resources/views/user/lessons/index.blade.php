@extends('user.master')

@section('title', 'COURSES')

@section('main')
    <div class="container">

        <div class="row ">

                <div class="col-12">

                    <section>

                        @foreach($courses as $course)
                            <div class="card" style="width: 18rem;">
                                <div class="card-body">
                                    <h5 class="card-title">{{ $course->title }}</h5>
                                    <p class="card-text">{{ $course->description }}</p>
                                    <a href="{{ route('userCourseShow', $course->id) }}" class="card-link">Go to the course</a>
                                </div>
                            </div>
                        @endforeach

                    </section>

                </div>
        </div>
    </div> <!-- /container -->
@endsection
