@extends('admin.master')

@section('title', 'ADMIN-QUESTIONS')

@section('main')
    <div class="container">

        <h1>QUESTIONS</h1>
        <a class="btn btn-success" type="button" href="{{ route('questions.create') }}">ADD QUESTION</a>

        <hr>

        <div class="row ">

                <div class="col-12">

                    @if(count($questions) <= 0)
                        <h2>YOUR QUESTIONS LIST IS EMPTY</h2>
                    @else
                        <table class="table">
                            <thead>
                            <tr>
                                <th scope="col">QUESTION ID</th>
                                <th scope="col">QUESTION</th>
                                <th scope="col">LESSON ID</th>
                                <th scope="col">Functions</th>
                            </tr>
                            </thead>
                            <tbody>
                            @foreach($questions as $question)
                                <tr>
                                    <td>{{ $question->id }}</td>
                                    <td>{{ $question->question }}</td>
                                    <td>{{ $question->lesson_id }}</td>
                                    <td>
                                        <div class="btn-group">
                                            <a href="{{ route('questions.edit', $question) }}"><button type="button" class="btn btn-link">EDIT</button></a>
                                            {{--                                            <a href="{{ route('users.show', $user) }}"><button type="button" class="btn btn-link">@if($user->status == 1) UNBLOCK @else BLOCK @endif</button></a>--}}
                                            <form id="delete-form" action="{{ route('questions.destroy', $question) }}" method="POST">
                                                @method('DELETE')
                                                @csrf
                                                <button type="submit" class="btn btn-link">DELETE</button>
                                            </form>
                                        </div>
                                    </td>
                                </tr>
                            @endforeach
                            </tbody>
                        </table>
                    @endif



                </div>
        </div>
    </div> <!-- /container -->
@endsection
