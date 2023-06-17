<?php

    include('conf.php');

    $output = array('success'=>false, 'data' => array());

    function delete_fuel($id) {
        $output = $GLOBALS['output'];

        $sql = "DELETE FROM reFuel WHERE id = $id";

        if ($res = $conn->query($sql)) {
            $output['success'] = true;
        }

        return $output;

    }

    if (isset($post['id'])) {
        $id = $post['id'];
        delete_fuel($id);
    }

    echo json_encode($output);

?>