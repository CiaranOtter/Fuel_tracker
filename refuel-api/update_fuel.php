<?php

include('conf.php');

if (
    !isset($post['price']) ||
    !isset($post['cost']) ||
    !isset($post['liters']) ||
    !isset($post['kmTraveled']) ||
    !isset($post['date']) ||
    !isset($post['id']) ) {
        die(json_encode($output));
    }

$sql = "UPDATE reFuel SET price = " . $post['price'] . ", cost = " . $post['cost'] . ", liters = " . $post['liters'] . ", kmTraveled = " . $post['kmTraveled'] . ", date = '" . $post['date']. "' WHERE id = " . $post['id'];

if ($res = $conn->query($sql)) {
    $output['success'] = true;

}

echo json_encode($output);

?>