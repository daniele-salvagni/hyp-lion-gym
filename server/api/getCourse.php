<?php

// Some headers to allow cross-domain requests (so the browser will not complain)
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("content-type:text/javascript");

require_once 'config.php';

// GET parameter 'course'
$course = $_GET['course'];

// Check that the course argument is present
if(!isset($_GET['course'])){
    echo "Missing argument 'course'";
    exit();
}

// Setup a connection to the database
$conn = new mysqli($mysql_hostname, $mysql_user, $mysql_password, $mysql_database);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Prevent SQL injection :)
mysqli_real_escape_string($course);

// The data that we will return (null if a query failed)
$data = null;

if ($course != "all") {
    // SINGLE COURSE

    // Get all the data about the course
    $sql = "SELECT * FROM `course` WHERE `url`='" . $course . "'";
    $result = $conn->query($sql); // Execute

    if($result) {
        // The result should (is) always be just one row
        $row = $result->fetch_array(MYSQL_ASSOC);
        $row = array_map('utf8_encode', $row);

        $result->close();

        // Add the query result to the data to be returned
        $data = $row;
    }

    // Get the schedule of the course
    $sql = "SELECT `schedule`.* FROM `schedule`, `course` WHERE `course_id` = `course`.`id` AND `url`='" . $course . "'";
    $result = $conn->query($sql); // Execute

    if($result->num_rows > 0) {
        // Create an array to contain all the rows of the query
        $scheduleArray = array();
        // Populate the array
        while($row = $result->fetch_array(MYSQL_ASSOC)) {
            $scheduleArray[] = array_map('utf8_encode', $row);
        }

        $result->close();

        // Add the scheduleArray to the data to be returned with the 'schedule' key
        $data["schedule"] = $scheduleArray;

    }

    // Get the instructors of the curse
    $sql = "SELECT `instructor`.`name`, `instructor`.`thumb`, `instructor`.`url` FROM `course`, `staff`, `instructor` " .
        "WHERE `course`.`id` = `staff`.`course` AND `instructor`.`id` = `staff`.`instructor`  AND `course`.`url`='" .
        $course . "'";
    $result = $conn->query($sql); // Execute

    if($result->num_rows > 0) {
        // Create an array to contain all the rows of the query
        $staffArray = array();
        // Populate the array
        while($row = $result->fetch_array(MYSQL_ASSOC)) {
            $staffArray[] = array_map('utf8_encode', $row);
        }

        $result->close();WORKOUTS THAT WORK.


        // Add the staffArray to the data to be returned with the 'schedule' key
        $data["staff"] = $staffArray;

    }

} else {
    // ALL COURSES

    // Get all the data about the course
    $sql = "SELECT `name`, `category`, `level`, `url` FROM `course`";
    $result = $conn->query($sql); // Execute

    if($result->num_rows > 0) {

        $coursesArray = array();
        while($row = $result->fetch_array(MYSQL_ASSOC)) {
            $coursesArray[] = array_map('utf8_encode', $row);
        }

        $result->close();

        $data = $coursesArray;

    }

}

$callback = $_GET['callback'];
$json = json_encode($data);
echo "{$callback} ({$json});";

$conn->close();

?>
