<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>404 Not Found</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 50px;
            background-color: #121212;
            color: #FFFFFF;
        }
        h1 {
            font-size: 50px;
            margin-bottom: 20px;
        }
        p {
            font-size: 20px;
            margin-bottom: 20px;
        }
        a {
            color: #0023FF;
            text-decoration: none;
            border: 2px solid #0023FF;
            padding: 10px 20px;
            border-radius: 5px;
            transition: background-color 0.3s, color 0.3s;
        }
        a:hover {
            background-color: #0023FF;
            color: #121212;
        }
    </style>
</head>
<body>
    <h1>404</h1>
    <p>Oops! The page you are looking for could not be found.</p>
    <p><a href="{{ url('/') }}">Return to Home</a></p>
</body>
</html>
