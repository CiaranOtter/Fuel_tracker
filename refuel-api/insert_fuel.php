<?php

    include('conf.php');

    
    $cost = $post['cost'];
    $price = $post['price'];
    $liters = $post['liters'];
    $km_traveled = $post['km_traveled'];

    $sql = "INSERT INTO reFuel (cost, liters, price, km_traveled) VALUES ($cost, $liters, $price, $km_traveled);";

    $output = array('success' => false, 'data' => array());

    if ($res = $conn->qeury($sql)) {
        $output['success'] = true;

    }

    echo json_encode($output);

?>