<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $to = "as@siftai.in", "at@siftai.in"; 
    $subject = "New SIFT Website Signup";
    $message = "New email signup: " . $email;
    $headers = "From: " . $email;

    mail($to, $subject, $message, $headers);
    
    // Redirect back to the main page
    header("Location: index.html");
    exit();
}
?> 