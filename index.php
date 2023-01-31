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
        <section class="search-div">

            <form id="searchForm" class="form" method="get">
                <input class="searchTxt" type="text" placeholder="search" autofocus name="keyWord" required>
                <!-- <input type="submit" placeholder="search" name="search"> -->
                <button>search</button>
            </form>

            <ul id="results">
                <li>One</li>
                <li>Two</li>
            </ul>

        </section>
    </main>
</body>

</html>