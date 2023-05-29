<?php

    include('conf.php');

    if (isset($_GET['id'])) {
        $fuel = $_GET['id'];
    }

    $query = "DELETE FROM fuel WHERE id = '$fuel'";

    if ($conn->query($query)) {
        die("1");
    }

    die("0");

?>