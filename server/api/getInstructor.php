<?php

// Some headers to allow cross-domain requests (so the browser will not complain)
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("content-type:text/javascript");

require_once 'config.php';

// GET parameter 'course'
$instructor = $_GET['instructor'];

// Check that the course argument is present
if(!isset($_GET['instructor'])){
    echo "Missing argument 'instructor'";
    exit();
}

// Setup a connection to the database
$conn = new mysqli($mysql_hostname, $mysql_user, $mysql_password, $mysql_database);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Prevent SQL injection :)
mysqli_real_escape_string($instructor);

// The data that we will return (null if a query failed)
$data = null;

if ($instructor != "all") {
    // SINGLE INSTRUCTOR

    // Get all the data about the instructor
    $sql = "SELECT * FROM `instructor` WHERE `url`='" . $instructor . "'";
    $result = $conn->query($sql); // Execute

    if($result) {
        // The result should (is) always be just one row
        $row = $result->fetch_array(MYSQL_ASSOC);
        $row = array_map('utf8_encode', $row);

        $result->close();

        // Add the query result to the data to be returned
        $data = $row;
    }

    // Get the awards of the instructor
    $sql = "SELECT `award`.* FROM `award`, `instructor` WHERE `instructor`.`id` = `award`.`instructor` AND " .
        "`instructor`.`url`='" . $instructor . "'";
    $result = $conn->query($sql); // Execute

    if($result->num_rows > 0) {
        // Create an array to contain all the rows of the query
        $awardsArray = array();
        // Populate the array
        while($row = $result->fetch_array(MYSQL_ASSOC)) {
            $awardsArray[] = array_map('utf8_encode', $row);
        }

        $result->close();

        // Add the scheduleArray to the data to be returned with the 'schedule' key
        $data["awards"] = $awardsArray;

    }

    // Get the courses of the instructor
    $sql = "SELECT `course`.`name`, `course`.`url` FROM `course`, `staff`, `instructor` " .
        "WHERE `course`.`id` = `staff`.`course` AND `instructor`.`id` = `staff`.`instructor`  AND `instructor`.`url`='" .
        $instructor . "'";
    $result = $conn->query($sql); // Execute

    if($result->num_rows > 0) {
        // Create an array to contain all the rows of the query
        $courseArray = array();
        // Populate the array
        while($row = $result->fetch_array(MYSQL_ASSOC)) {
            $courseArray[] = array_map('utf8_encode', $row);
        }

        $result->close();

        // Add the staffArray to the data to be returned with the 'schedule' key
        $data["courses"] = $courseArray;

    }

} else {
    // ALL INSTRUCTORS

    // Get all the data about the course
    $sql = "SELECT `name`, `thumb`, `url` FROM `instructor`";
    $result = $conn->query($sql); // Execute

    if($result->num_rows > 0) {

        $instructorsArray = array();
        while($row = $result->fetch_array(MYSQL_ASSOC)) {
            $instructorsArray[] = array_map('utf8_encode', $row);
        }

        $result->close();

        $data = $instructorsArray;

    }

}

$callback = $_GET['callback'];
$json = json_encode($data);
echo "{$callback} ({$json});";

$conn->close();

?>
