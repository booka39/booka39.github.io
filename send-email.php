<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  // Create the email content
  $to = 'ahmed.shehata.360@gmail.com';
  $subject = 'New Message from Contact Form';
  $body = "Name: $name\nEmail: $email\nMessage: $message";

  // Send the email
  $headers = "From: $email\r\n";
  $headers .= "Reply-To: $email\r\n";
  $mailSent = mail($to, $subject, $body, $headers);

  // Check if the email was sent successfully
  if ($mailSent) {
    echo 'Email sent successfully!';
  } else {
    echo 'Failed to send email.';
  }
}
?>
