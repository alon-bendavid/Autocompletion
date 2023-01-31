<?php


// Connect to database
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "autocompletion";

$key = $_GET['keyWord'];

$conn = mysqli_connect($servername, $username, $password, $dbname);
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Fetch data from database
$sql = "SELECT id, name, km FROM store WHERE name LIKE '%$key%'";
$result = mysqli_query($conn, $sql);


// var_dump($result);

// Store data in an array
$data = mysqli_fetch_all($result, MYSQLI_ASSOC);



// Return data as JSON
//print_r($data);

// $arr = array();

// $jsonStr = json_encode($data);

// var_dump($jsonStr); 
echo json_encode($data);

// Close connection
// mysqli_close($conn);
