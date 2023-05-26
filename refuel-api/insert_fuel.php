<?php

	include('conf.php');

	$data = true;
	$cost;
	$price;
	$liters;

	if (isset($_GET['cost'])) {
		$cost = $_GET['cost'];
	} else {
		$data = false;
	}

	if (isset($_GET['price'])) {
		$price = $_GET['price'];
	} else {
		$data = false;
	}

	if (isset($_GET['liters'])) {
		$liters = $_GET['liters'];
	} else {
		$data = false;
	}

	if ($data) {

		$query = "INSERT INTO reFuel (cost, price, liters) VALUES ($cost,$price, $liters);";

		if ($res = $conn->query($query)) {
			echo "1";
		} else {
			echo "0";
		}
	} else {
		 echo "0";
	}
?>