<!doctype html>
<html lang="en">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">

    <!-- Font Awesome -->
    <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
        rel="stylesheet"
    />

    <title>@yield('title')</title>
</head>
<body>


<div class="container">
    <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
        <a href="{{ route('main') }}" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
            <span class="fs-4 fw-bold text-primary">EDUCATION</span>
        </a>

        <div class="col-md-3 text-end">
            @guest()
                <a class="btn btn-outline-primary me-2" href="{{ route('login') }}">Sign-in</a>
                <a class="btn btn btn-primary" href="{{ route('register') }}">Sign-up</a>
            @endguest

            @auth()

                <div class="btn-group me-2">
                    <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        MENU
                    </button>
                    <ul class="dropdown-menu">

                        <li><a href="{{ route('userEnrolledCourses') }}" class="dropdown-item">MY COURSES</a></li>
                        <li><a href="{{ route('userCourses') }}" class="dropdown-item">ALL COURSES</a></li>

                    </ul>
                </div>


                @if(Auth::user()->isAdmin())
                    <a class="btn btn-outline-primary me-2" href="{{ route('adminHome') }}">Admin</a>
                @else
                    <a class="btn btn-outline-primary me-2" href="{{ route('userHome') }}">Home</a>
                @endif

                <form class="d-inline" id="logout-form" action="{{ url('logout') }}" method="POST">
                    @csrf
                    <button type="submit" class="btn btn btn-primary">Logout</button>
                </form>

            @endauth

        </div>
    </header>

    <main style="min-height: 50vh" role="main">
        @yield('main')
    </main>

</div>

<!-- Option 1: Bootstrap Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</body>
</html>
