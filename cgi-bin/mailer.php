<?php

$_POST = json_decode(file_get_contents('php://input'), true);

$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$phoneNumber = $_POST['phoneNumber'];
$email = $_POST['email'];
$message = $_POST['message'];


$to = "cusiubs@gmail.com";
$subject = "[SITO WEB] Messagio da $firstName $lastName";
$sender = "postmaster@dielleimpianti.it";

$headers = "From: $sender\n";
$headers = "Reply-To: $email\n";
$headers .= "MIME-Version: 1.0\n";
$headers .= "Content-Type: text/plain\n";
$headers .= "X-Mailer: PHP " . phpversion();
 
ini_set("sendmail_from", $sender);

$msg = "
Nome: $firstName $lastName
Email: $email
Telefono: $phoneNumber

$message
";

if (mail($to, $subject, $msg, $headers, "-f$sender")) { 
    echo "Email sent";
} else { 
    echo "An error occurrend while sending the email";
}

?>