<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>


    <link rel="stylesheet" type="text/css" href="{{ asset('/css/app.css') }}" media="screen" />
    @yield('styles')
</head>

<body>      
    @include('template.header')
         
    @yield('content')
    

    @include('template.footer')
    
    <script src="{{ asset('js/vendor.js') }}"></script>
</body>

</html>