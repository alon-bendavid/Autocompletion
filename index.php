<!DOCTYPE html>

<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>search engine</title>
    <link rel="stylesheet" href="style.css">
    <script defer src="script.js"></script>
</head>

<body>
    <main>
        <!-- <img class="ski" src="ski.png" alt=""> -->
        <section class="search-div">
            <div class="info">
                <h2>Ski resort search</h2>
                <p>Get an idea of the scale of ski resorts in France with this informative tool! Search for a ski resort by name and discover its size in kilometers, providing a fun and interesting fact for ski enthusiasts</p>
            </div>
            <form id="searchForm" class="form" method="get">
                <input class="searchTxt" type="text" placeholder="search" autofocus name="keyWord" autocomplete="off" required>
                <!-- <input type="submit" placeholder="search" name="search"> -->
                <!-- <button>search</button> -->
            </form>
            <ul class="results-housing" id="results">
                <!-- <li>One</li> -->
                <!-- <li>Two</li> -->
            </ul>
        </section>
    </main>
</body>

</html>