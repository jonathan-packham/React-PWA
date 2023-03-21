<?php 
    $servername = "localhost";
    $username = "root";
    $password = "";
    $database = "artech-v2";

    // create connection
    $conn = new mysqli($servername, $username, $password, $database);

    // check connection
    if ($link->connect_error) {
        die("Connection failed: ".$link->connect_error);
    }
?>