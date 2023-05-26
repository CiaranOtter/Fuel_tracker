<?php
	header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST');
    header("Access-Control-Allow-Headers: X-Requested-With");

	ini_set('display_errors', 1);
	ini_set('display_startup_errors', 1);

	$servername = "www.otternonesenses.co.za";
	$username = "root";
	$password = "!dKZ#10@3kc*L8w6i#";
	$db = "fuel_tracker";
// Create connection
$conn = new mysqli($servername, $username, $password, $db);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

?>
