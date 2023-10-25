<?php

    include('conf.php');

    if (!isset($post['id'])) {
        die(json_encode($output));
    }

    $sql = "SELECT * FROM car_profile WHERE account_id=".$post['id'];

    if ($res = $conn->query($sql)) {
        $output['success'] = true;
        while ($row = $res->fetch_assoc()) {
            $output['data'][] = $row;
        }
    }

    echo json_encode($output);

?>