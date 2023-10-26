<?php

include('conf.php');

if (!isset($post['id'])) {
    die(json_encode($output));
}

$sql = "SELECT * FROM car_profile WHERE id = " . $post['id'];

if($res = $conn->query($sql)) {
    $car = $res->fetch_assoc();
    $output['success'] = true;
    $output['data'] = $car;
}

echo json_encode($output);

?>