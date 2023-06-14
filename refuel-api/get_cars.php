<?php

include('conf.php');
$sql = "SELECT * FROM car_profile";

$output = array("success" => false);

if ($res = $conn->query($sql)) {
    $output['success'] = true;
    $output['data'] = array();
    while ($row = $res->fetch_assoc()) {
        $output['data'][] = $row;
    }
}

echo json_encode($output);

?>