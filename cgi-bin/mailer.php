<?php

$_POST = json_decode(file_get_contents('php://input'), true);

$name = $_POST['name'];
$phone_number = $_POST['phone_number'];
$email = $_POST['email'];
$message = $_POST['message'];


$to = "ciao@giacomocusinato.co";
$subject = "[SITO WEB] Messagio da $name";
$sender = "postmaster@dielleimpianti.it";

$headers = "From: $sender\n";
$headers = "Reply-To: $email\n";
$headers .= "MIME-Version: 1.0\n";
$headers .= "Content-Type: text/plain\n";
$headers .= "X-Mailer: PHP " . phpversion();
 
// Imposta il Return-Path (funziona solo su hosting Windows)
ini_set("sendmail_from", $sender);

$msg = "
Nome: $name
Email: $email
Telefono: $phone_number

Messaggio:

$message
";

// Invia il messaggio, il quinto parametro "-f$sender" imposta il Return-Path su hosting Linux
if (mail($to, $subject, $msg, $headers, "-f$sender")) { 
    echo "Mail inviata correttamente a $email";
} else { 
    echo "Recapito e-Mail fallito!";
}

?>