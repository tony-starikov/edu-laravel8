@extends('admin.master')

@section('title', 'ADMIN-ANSWERS')

@section('main')
    <div class="container">

        <h1>ANSWERS</h1>
        <a class="btn btn-success" type="button" href="{{ route('answers.create') }}">ADD ANSWER</a>

        <hr>

        <div class="row ">

                <div class="col-12">

                    @if(count($answers) <= 0)
                        <h2>YOUR ANSWERS LIST IS EMPTY</h2>
                    @else
                        <table class="table">
                            <thead>
                            <tr>
                                <th scope="col">ANSWER ID</th>
                                <th scope="col">ANSWER</th>
                                <th scope="col">QUESTION ID</th>
                                <th scope="col">TRUE</th>
                                <th scope="col">Functions</th>
                            </tr>
                            </thead>
                            <tbody>
                            @foreach($answers as $answer)
                                <tr>
                                    <td>{{ $answer->id }}</td>
                                    <td>{{ $answer->answer }}</td>
                                    <td>{{ $answer->question_id }}</td>
                                    <td>@if($answer->value == 1) YES @else NO @endif</td>
                                    <td>
                                        <div class="btn-group">
                                            <a href="{{ route('answers.edit', $answer) }}"><button type="button" class="btn btn-link">EDIT</button></a>
                                            <form id="delete-form" action="{{ route('answers.destroy', $answer) }}" method="POST">
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
