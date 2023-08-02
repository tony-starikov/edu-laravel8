@extends('user.master')

@section('title', 'LESSON')

@section('main')
    <div class="container">

        <div class="row">

            @if ($message = Session::get('message'))

                <div class="alert alert-success alert-block">

                    <strong>{{ $message }}</strong>

                </div>

            @endif

            <div class="col px-3">

                <h2>{{ $lesson->title }}</h2>

                <iframe width="100%" height="400" src="{{ $lesson->video_src }}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                <p>
                    {{ $lesson->description }}
                </p>

            </div>

            <div class="col px-3">
                @if(!$user->lessons->contains($lesson->id))

                    @if(count($lesson->questions))

                        <h2>QUESTIONS:</h2>

                        <section class="p-3">

                            <form method="POST" enctype="multipart/form-data" action="{{ route('userGetAnswers', $lesson) }}">
                                @csrf


                                @foreach($lesson->questions as $question)
                                    <h5>{{ $question->question }}</h5>

                                    @foreach($question->answers as $answer)
                                        <input type="hidden" name="{{ $question->id }}[{{ $answer->id }}]" value="0">

                                        <div class="form-check py-1">
                                            <input class="form-check-input" type="checkbox" name="{{ $question->id }}[{{ $answer->id }}]" value="1" id="flexCheckDefault{{ $answer->id }}">
                                            <label class="form-check-label" for="flexCheckDefault{{ $answer->id }}">
                                                {{ $answer->answer }}
                                            </label>
                                        </div>
                                    @endforeach
                                @endforeach

                                <button class="btn btn-success my-3 d-block">SEND ANSWERS</button>
                            </form>

                        </section>

                    @endif

                @else
                    <h2>QUESTIONS: LESSON PASSED</h2>
                @endif
            </div>

        </div>

    </div> <!-- /container -->
@endsection
