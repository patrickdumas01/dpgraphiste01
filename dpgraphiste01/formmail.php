<?php
$TO = "pdumas63@me.com";

$h = "From: " . $TO;

$message = "";
$email = "";
$name = "";

while (list($key, $val) = each($_POST)) {
$message .= "$key : $val\n";
}

mail($TO, $subject, $message, $h);

Header("Location: http://patrickdumas.me");

?>