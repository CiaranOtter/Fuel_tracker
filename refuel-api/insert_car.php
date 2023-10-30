<?php

include('conf.php');

if (!isset($post['name'])) {
    die(json_encode($outpu));
}

$sql = "INSERT INTO car_profiles (name) VALUES ('"+$post['name']+"');";

if ($res = $conn->query($sql)) {
    $output['success'] = true;
}

echo json_encode($output);
?>