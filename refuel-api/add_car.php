<?php

include('conf.php');

$car_name = '';

if (isset($post['name'])) {
    $car_name = $post['name'];
}



$sql = "INSERT INTO car_profile (name) VALUES ('$car_name')";

if ($car_name!= '') {
    $output = array('success' => false);
    echo json_encode($output);
    exit;
}
if ($res = $conn->query($sql)) {
    $output = array('success' => true);
} else {
    $output = array('success' => false);
}

echo json_encode($output);



?>