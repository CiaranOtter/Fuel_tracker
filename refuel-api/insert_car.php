<?php

include('conf.php');

if (!isset($post['name']) || !isset($post['account_id'])) {
    die(json_encode($output));
}

$sql = "INSERT INTO car_profile (name, account_id) VALUES ('".$post['name']."', ".$post['account_id'].");";

if ($res = $conn->query($sql)) {
    $output['success'] = true;
}

echo json_encode($output);
?>