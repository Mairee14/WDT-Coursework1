<?php
$errors = array();
$success = '';

if(isset($_POST['submit'])) {
    $Name = $_POST['name'];
    $Email = $_POST['email'];
    $Subject =$POST['subject'];
    $Message = $_POST['message'];

    if(empty($Name)) {
        $errors[] = "Name field is required.";
    }
    if(empty($Email)) {
        $errors[] = "Email field is required.";
    }
    if(empty($Message)) {
        $errors[] = "Message field is required.";
    }
    if(!empty($Email) && !filter_var($Email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Invalid email format.";
    }

    if(empty($errors)) {
        $connection = mysqli_connect("localhost", "id20601244_user", "|#{E}Z&/6s2D>]if", "id20601244_user_information") or die("connection failed!");

        $sql = "INSERT INTO user_message(Name, Email, Subject, Message) VALUES('{$Name}', '{$Email}', '{$Subject}', '{$Message}')";

        $result = mysqli_query($connection, $sql) or die("query failed!");

        mysqli_close($connection);

        $success = "Your message has been sent successfully";
        echo '<script>alert("'.$success.'");</script>';

        header("location: https://costcheckr.000webhostapp.com/php/Contactus.php?success=true");
    }
}
?>
