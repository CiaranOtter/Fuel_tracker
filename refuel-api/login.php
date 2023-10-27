<?php

include('conf.php');

if (!isset($post['name']) || !isset($post['pass'])) {
    die(json_encode($output));
}

$sql = "SELECT * FROM accounts WHERE name = '". $post['name']."' AND password='".$pst['pass']."'";

if ($res = $conn->query($sql)) {
    if (mysqli_num_rows($res) == 1) {
        $output['success'] = true;
        $output['data'] = $res->fetch_assoc();
    }
}

echo json_encode($output);
?>