<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <!-- Meta tags for socials -->
        <meta property="og:title" content="Ryan de Jonge - Full Stack Software Engineer" />
        <meta property="og:description" content="Experienced Full Stack Software Engineer specializing in Open-Source development. Skilled in C#, PHP, JavaScript, and more." />
        <meta property="og:url" content="{{ url()->current() }}" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Ryan de Jonge - Full Stack Software Engineer" />
        <meta name="twitter:description" content="Experienced Full Stack Software Engineer specializing in Open-Source development. Skilled in C#, PHP, JavaScript, and more." />
        <meta name="twitter:url" content="{{ url()->current() }}" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Naamloos" />
        <meta name="description" content="Experienced Full Stack Software Engineer specializing in Open-Source development. Skilled in C#, PHP, JavaScript, and more." />
        <meta name="author" content="Ryan de Jonge" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="Ryan de Jonge, Software Engineer, Full Stack Developer, Netherlands, Drenthe, C#, PHP, JavaScript, TypeScript, Open-Source, Development, Programming, Coding, Web Development, Backend, Frontend, Hire, Job, Gezocht, Programmeur, Developer, Full-Stack, Back-End, Front-End, Sollicitatie" />
        <meta name="theme-color" content="#0023FF" />
        <meta name="msapplication-TileColor" content="#0023FF" />

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@500&family=Roboto&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.tsx', "resources/js/Pages/{$page['component']}.tsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
