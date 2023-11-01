<?php

    include('conf.php');

    if (!isset($post['id'])) {
        die(json_encode($output));
    }

    $sql = "SELECT * FROM reFuel where id =" . $post['id'];

    if ($res = $conn->query($sql)) {
        $output['success'] = true;
        $output['data'] = $res->fetch_assoc();
    }

    echo json_encode($output);

?>