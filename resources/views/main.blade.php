@extends('master')

@section('title', 'MAIN')

@section('main')

    <div class="row">

        <div class="container col px-4 py-5">
            <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div class="col-10 col-sm-8 col-lg-6">
                    <img src="/images/edu1.png" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" loading="lazy" width="700" height="500">
                </div>
                <div class="col-lg-6">
                    <h1 class="display-5 fw-bold lh-1 mb-3">LEARN WITHOUT LIMITS</h1>
                    <p class="lead">Do you want to achieve all your goals in the new year?<br>Develop new skills with courses, certifications and programs.</p>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                        <a class="btn btn-primary btn-lg px-4 me-md-2" href="{{ route('login') }}" role="button">Sign-in</a>
                        <a class="btn btn-outline-secondary btn-lg px-4" href="{{ route('register') }}" role="button">Sign-up</a>
                    </div>
                </div>
            </div>
        </div>

    </div>

@endsection

