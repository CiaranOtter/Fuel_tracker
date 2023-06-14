<?php

    include('conf.php');

    
    $cost = $post['cost'];
    $price = $post['price'];
    $liters = $post['liters'];
    $date = $post['date'];
    $km_traveled = $post['km_traveled'];

    $sql = "INSERT INTO reFuel (cost, liters, price, date, km_traveled) VALUES ($);";

    $output = array('success' => false, 'data' => array());

    if ($res = $conn->qeury($sql)) {
        $output['success'] = true;

    }

    echo json_encode($output);

?>