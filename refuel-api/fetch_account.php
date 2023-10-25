<?php

    include('conf.php');

    if (!isset($post['id'])) {
        die(json_encode($output));
    }

    $query = "SELECT * FROM accounts WHERE id = ". $post['id'];

    if ($res = $conn->query($query)) {
        $output['success'] = true;
        while($row = $res->fetch_assoc()) {
            $output['data'][] = $row;
        }
    }

    echo json_encode($output);

?>