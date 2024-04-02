<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  // Retrieve form data
  $name = $_POST['fname'];
  $email = $_POST['hemail'];
  $subject = $_POST['csubject'];
  $message = $_POST['pmessage'];

  // Validate and sanitize the data (optional)
  // ...

  // Perform necessary actions with the data
  // For example, you can store the feedback in a database or send email notifications
  // ...

  // Redirect the user to a thank you page
  header("Location: thank_you.html");
  exit();
}
?>







