@extends('admin.master')

@section('title', 'ADMIN-COURSES')

@section('main')
    <div class="container">

        <h1>COURSES</h1>
        <a class="btn btn-success" type="button" href="{{ route('courses.create') }}">ADD COURSE</a>

        <hr>

        <div class="row ">

                <div class="col-12">

                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">TITLE</th>
                                <th scope="col">Functions</th>
                            </tr>
                        </thead>
                        <tbody>
                        @foreach($courses as $course)
                            <tr>
                                <th scope="row">{{ $course->id }}</th>
                                <td>{{ $course->title }}</td>
                                <td>
                                    <div class="btn-group">
                                        <a href="{{ route('courses.edit', $course) }}"><button type="button" class="btn btn-link">EDIT</button></a>
                                        {{--                                            <a href="{{ route('users.show', $user) }}"><button type="button" class="btn btn-link">@if($user->status == 1) UNBLOCK @else BLOCK @endif</button></a>--}}
                                        <form id="delete-form" action="{{ route('courses.destroy', $course) }}" method="POST">
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
