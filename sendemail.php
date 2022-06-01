<?php

    //FORM VARIABLES
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    header('Content-Type: application/json');

    // Import PHPMailer classes into the global namespace
    // These must be at the top of your script, not inside a function
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;
    
    //Load Composer's autoloader
    require 'vendor/autoload.php';


    //  ------------- Form Input Validation --------- //
    if ($name === ''){
      print json_encode(array('message' => 'Please enter your name.', 'code' => 0));
        exit();
      }
  
      if ($email === ''){
        print json_encode(array('message' => 'Please enter your email.', 'code' => 0));
        exit();
      } else {
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)){
        print json_encode(array('message' => 'Sorry. Your email format is invalid.', 'code' => 0));
        exit();
        }
      }
  
      if ($message === ''){
        print json_encode(array('message' => 'Please enter your message.', 'code' => 0));
        exit();
      }
      // ---------------------------------------------- //



    
    $mail = new PHPMailer(true);                              // Passing `true` enables exceptions
    try {
        //Server settings
        $mail->SMTPDebug = 0;                                 // Enable verbose debug output
        $mail->isSMTP();                                      // Set mailer to use SMTP
        $mail->Host = 'mail.jmalegado.com';                         // Specify main and backup SMTP servers
        $mail->SMTPAuth = true;                                     // Enable SMTP authentication
        $mail->Username = '';                 // SMTP username
        $mail->Password = '';                           // SMTP password
        $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
        $mail->Port = 26;                                    // TCP port to connect to
    
        //Recipients
        $mail->setFrom('inquiries@jmalegado.com', 'Jason');
        $mail->addAddress('jmaalegado@gmail.com');  
       

        //Content
        $mail->isHTML(true);                                  // Set email format to HTML
        $mail->Subject = "New Message From " . $name . " - <" . $email . ">";
        $mail->Body    = $message . "<br><br><strong>" . $name . "</strong><br>" . $email;
        $mail->AltBody = strip_tags($message);
    
        $mail->send();
        // echo 'Message has been sent';

        print json_encode(array('message' => 'Your message has been sent. I will get back to you very soon. Thank you.', 'code' => 1));
        exit();
    } 
    
    catch (Exception $e) {
        // echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
        print json_encode(array('message' => 'Sorry. We have encountered a problem. Your email is not sent. Please try again.', 'code' => 0));
        // $mail->ErrorInfo;
        exit();
    }
