<?php

include('conf.php');

if (!isset($post['name']) || !isset($post['pass'])) {
    die(json_encode($output));
}

$sql = "INSERT INTO accounts (name, password) VALUES ('" + $post['name'] + "', '" + $post['pass'] + "')";

if ($res = $conn->uery($sql)) {
    $output['success'] = true;
}

echo json_encode($output);

?>