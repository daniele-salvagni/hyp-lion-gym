<?php

// Some headers to allow cross-domain requests (so the browser will not complain)
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("content-type:text/javascript");

require_once 'config.php';

// Setup a connection to the database
$conn = new mysqli($mysql_hostname, $mysql_user, $mysql_password, $mysql_database);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Prevent SQL injection :)
mysqli_real_escape_string($category);

// The data that we will return (null if a query failed)
$data = null;

// Get the contacts data
$sql = "SELECT * FROM `contacts`";
$result = $conn->query($sql); // Execute

if($result->num_rows > 0) {
    $categoriesArray = array();
    while($row = $result->fetch_array(MYSQL_ASSOC)) {
        $categoriesArray[] = array_map('utf8_encode', $row);
    }

    $result->close();

    $data = $categoriesArray;
}

$callback = $_GET['callback'];
$json = json_encode($data);
echo "{$callback} ({$json});";

$conn->close();

?>
