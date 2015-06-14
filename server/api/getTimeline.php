<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("content-type:text/javascript");

require "twitteroauth/autoload.php";
use Abraham\TwitterOAuth\TwitterOAuth;

$consumer_key = "xxxxxxxxxxxxxxx";
$consumer_secret = "xxxxxxxxxxxxxxx";
$access_token = "xxxxxxxxxxxxxxx";
$access_token_secret = "xxxxxxxxxxxxxxx";


// Check that the user argument is present
if(!isset($_GET['user'])){
    echo "Missing argument 'user'";
    exit();
}

$user = $_GET['user'];

// Default count
$count = 3;

// If we have the count parameter we override it
if(isset($_GET['count'])){
    $count = $_GET['count'];
}

$connection = new TwitterOAuth($consumer_key, $consumer_secret, $access_token, $access_token_secret);

$tweets = $connection->get("statuses/user_timeline", array("screen_name" => $user, "count" => 3));

$callback = $_GET['callback'];
$json = json_encode($tweets);
echo "{$callback} ({$json});";

?>
