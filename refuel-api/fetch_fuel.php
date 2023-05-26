<?php

	include('conf.php');


	$query = "SELECT * from reFuel";

	if ($res = $conn->query($query)) {
		print_data($res);
	}

?>
