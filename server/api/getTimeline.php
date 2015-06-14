<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("content-type:text/javascript");

require "twitteroauth/autoload.php";
use Abraham\TwitterOAuth\TwitterOAuth;

$consumer_key = "le1k1C7c6dcJTyc555kaI8fDl";
$consumer_secret = "fo64ppCBjoAvrolV4CTtjwpp5fTHkZmKZV8IvL9k8CGVPUy0v5";
$access_token = "2361653521-3beGNGaiKMcajUoyL8pWiD3ykbQrt1WgGdN3Sc4";
$access_token_secret = "1tRZcRFA2OaOnf3tVSeXXUinSs27xa3V19lF1cW6fFAvY";


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
