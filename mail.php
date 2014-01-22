<?php
	
	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];
	$phone = $_POST['phone'];
	$where = $_POST['where'];
	
	$to = 'info@mjbgolfdesign.com';
	$sub = 'Somebody Submitted a Contact Form on MJBGolfDesign.com';
	$headers = 'From: no-reply@mjbgolfdesign.com';
	$headers .= "\r\n";
	$headers .= 'MIME-Version: 1.0';
	$headers .= "\r\n";
	$headers .= 'Content-type:text/html;charset=UTF-8';
	$headers .= "\r\n";
	
	
	$msg = '
	<html>
	<head>
	<title>Form Submission</title>
	<style>
	.html {
		font-family:Tahoma, Arial, Helvetica, sans-serif;
	}
	</style>
	</head>
	<body>
		<h1>Somebody Submitted a Form on MJBGolfDesign.com</h1>
		<p>Name: ' . $name . '</p>
		<p>Reply Email: ' . $email . '</p>
		<p>Phone: ' . $phone . '</p>
		<p>Message: ' . $message . '</p>
		<h3>How they heard about Michael J. Benkusky, Inc.</h3>
		<p>' . $where . '</p>
	</body>
	</html>';
	
	if (mail($to, $sub, $msg, $headers)) {
		echo(json_encode('Success'));
	} else {
		echo(json_encode('Error'));
	}
	
?>