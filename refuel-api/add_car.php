<?php

include('conf.php');

if (isset($_GET['name'])) {
    $car_name = $_GET['name'];

    $query = "INSERT INTO car_profile (name) VALUES ('$car_name')";

    if ($res = $conn->query($query)) {
        echo "1";
    } else {
        echo "0";
    }
} else {
    echo "0";
}


?>