<?php

include('conf.php');

if (!isset($post['id'])) {
    die(json_encode($post['id']));
}

$sql = "SELECT * FROM reFuel WHERE car_id = ".$post['id']." ORDER BY date DESC";

$output = array("success" => false, "data" => array());

if ($res = $conn->query($sql)) {
    $output['success'] = true;
    while ($row = $res->fetch_assoc()) {
        $output['data'][] = $row;
    }
}

echo json_encode($output);


?>