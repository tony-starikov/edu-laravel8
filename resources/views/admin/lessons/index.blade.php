@extends('admin.master')

@section('title', 'ADMIN-COURSES')

@section('main')
    <div class="container">

        <h1>LESSONS</h1>
        <a class="btn btn-success" type="button" href="{{ route('lessons.create') }}">ADD LESSON</a>

        <hr>

        <div class="row ">

                <div class="col-12">

                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">COURSE ID</th>
                                <th scope="col">ORDER</th>
                                <th scope="col">TITLE</th>
                                <th scope="col">Functions</th>
                            </tr>
                        </thead>
                        <tbody>
                        @foreach($lessons as $lesson)
                            <tr>
                                <th scope="row">{{ $lesson->id }}</th>
                                <td>{{ $lesson->course_id }}</td>
                                <td>{{ $lesson->order }}</td>
                                <td>{{ $lesson->title }}</td>
                                <td>
                                    <div class="btn-group">
                                        <a href="{{ route('lessons.edit', $lesson) }}"><button type="button" class="btn btn-link">EDIT</button></a>
                                        {{--                                            <a href="{{ route('users.show', $user) }}"><button type="button" class="btn btn-link">@if($user->status == 1) UNBLOCK @else BLOCK @endif</button></a>--}}
                                        <form id="delete-form" action="{{ route('lessons.destroy', $lesson) }}" method="POST">
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

                </div>
        </div>
    </div> <!-- /container -->
@endsection
