<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $subject = $_POST['subject'];
    header('Content-Type: application/json');

    if ($name === ''){
      print json_encode(array('message' => 'Please enter your name.', 'code' => 0));
      exit();
    }

    if ($email === ''){
      print json_encode(array('message' => 'Please enter your email.', 'code' => 0));
      exit();
    } else {
      if (!filter_var($email, FILTER_VALIDATE_EMAIL)){
      print json_encode(array('message' => 'Sorry. Your email format invalid.', 'code' => 0));
      exit();
      }
    }

    if ($subject === ''){
      print json_encode(array('message' => 'Please enter a subject.', 'code' => 0));
      exit();
    }

    if ($message === ''){
      print json_encode(array('message' => 'Please enter your message.', 'code' => 0));
      exit();
    }

    $content="From: $name \nEmail: $email \nMessage: $message";
    $recipient = "inquiries@jmalegado.com";
    $mailheader = "From: $email \r\n";

    mail($recipient, $subject, $content, $mailheader) or die("Sorry. We have encountered a problem. Your email is not sent. Please try again.");
    print json_encode(array('message' => 'Your message has been successfully sent. We will get back to you very soon.', 'code' => 1));
    exit();

?>