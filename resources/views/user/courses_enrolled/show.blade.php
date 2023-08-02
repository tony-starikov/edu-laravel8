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

                <p>TO UNLOCK THE NEXT LESSON YOU SHOULD GIVE 70% RIGHT ANSWERS TO QUESTIONS IN PREVIOUS LESSON. THE FIRST LESSON UNLOCKED BY DEFAULT.</p>

                <div class="row">

                    @foreach($course->lessons as $lesson)

                        @if($lesson->order == 1)
                            <div class="col-3 mb-2">
                                <div class="card" style="width: 18rem;">
                                    <div class="card-body">
                                        <h5 class="card-title">{{ $lesson->title }}</h5>
                                        <a href="{{ route('userLessonShow', $lesson->id) }}" class="card-link">Go to the lesson</a>
                                    </div>
                                </div>
                            </div>
                        @elseif($lesson->order != 1 and $user->lessons->contains(\App\Lesson::where('order', $lesson->order - 1)->first()))
                            <div class="col-3 mb-2">
                                <div class="card" style="width: 18rem;">
                                    <div class="card-body">
                                        <h5 class="card-title">{{ $lesson->title }}</h5>
                                        <a href="{{ route('userLessonShow', $lesson->id) }}" class="card-link">Go to the lesson</a>
                                    </div>
                                </div>
                            </div>
                        @else
                            <div class="col-3 mb-2">
                                <div class="card" style="width: 18rem;">
                                    <div class="card-body">
                                        <h5 class="card-title">{{ $lesson->title }}</h5>
                                    </div>
                                </div>
                            </div>
                        @endif

                    @endforeach

                </div>

            </div>

        </div>

    </div> <!-- /container -->
@endsection
