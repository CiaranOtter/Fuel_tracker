<?php

	include('conf.php');
	include('func.php');


	$query = "SELECT * from reFuel";

	if ($res = $conn->query($query)) {
		print_data($res);
	}

?>
