<?php

	function print_data($res) {
		$out = array();

		while ($row = $res->fetch_assoc()) {
			$out[] = $row;
		}

		echo json_encode($out);
	}


?>
