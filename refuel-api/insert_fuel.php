<?php

    include('conf.php');

    
    $cost = $post['cost'];
    $price = $post['price'];
    $liters = $post['liters'];
    $km_traveled = $post['kmTraveled'];
    $car_id = $post['car_id'];

    $sql = "INSERT INTO reFuel (cost, liters, price, kmTraveled, car_id) VALUES ($cost, $liters, $price, $km_traveled, $car_id);";

    $output = array('success' => false, 'data' => array());

    if ($res = $conn->query($sql)) {
        $output['success'] = true;

    }

    echo json_encode($output);

?>