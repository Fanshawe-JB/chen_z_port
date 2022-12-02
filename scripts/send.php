<?php
// Required Headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

if($_POST) {
    $receipent = "letstalk@zhihanc.com";
    $subject = "Email From My Portfolio Site";
    $visitor_name = "lastname";
    $visitor_email = "email";
    $message = "message";
    $fail = array();

    if(isset($_POST['firstname']) && !empty('firstname')) {
        $visitor_name = filter_var($_POST['firstname'], FILTER_SANITIZE_STRING);
    }else {
        array_push($fail, "firstname");
    }

    if(isset($_POST['lastname']) && !empty('lastname')) {
        $visitor_name .= " ".filter_var($_POST['lastname'], FILTER_VALIDATE_EMAIL);
    }else {
        array_push($fail, "lastname");
    }

    if(isset($_POST['email']) && !empty($_POST['email'])) {
        $email = str_replace(array("\r", "\n", "%0a", "%0d"), "",
        $_POST['email']);
        $visitor_email = filter_var($email, FILTER_SANITIZE_EMAIL);
    }else {
        array_push($fail, "email");
    }

    if(isset($_POST['message']) && !empty($_POST['message'])) {
        $clean = filter_var($_POST['message'], FILTER_SANITIZE_STRING);
        $message = htmlspecialchars($clean);
    }else {
        array_push($fail, "message");
    }

    $headers = "FROM: ".$visitor_name."\r\n"."Reply-to: ".$visitor_email."\r\n"."X-mailer: PHP/".phpversion();

    if(count($fail==0)) {
        mail($receipent, $subject, $message, $headers);
        $results['message'] = sprintf("Thank you for contacting us, %s. We will respond within 24hours.", $visitor_name);
    }else {
        header("HTTP/1.1 488 YOU DID NOT fill out the form correctly.");
        die(json_encode(['message' => $fail]));
    }


}else {
    $results['message'] = "please fill out the form.";
}

echo json_encode($results);

?>