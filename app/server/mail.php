<?php
header( 'Access-Control-Allow-Origin: *' );
header( 'Access-Control-Allow-Methods: POST' );
header( 'Access-Control-Allow-Headers: Authorization' );

require_once 'functions.php';
require_once '../../vendor/phpmailer/phpmailer/PHPMailerAutoload.php';

$params = json_decode(file_get_contents('php://input'), true);
if (hasAllRequiredFields($params)) {

    $mail = new PHPMailer();

    $mail->IsSMTP();  // set mailer to use SMTP
    $mail->Host = "ssl://smtp.gmail.com";  // specify main and backup server
    $mail->Mailer = 'smtp';
    $mail->SMTPAuth = true;     // turn on SMTP authentication
    $mail->Username = "thaismartinsweb@gmail.com";
    $mail->Password = base64_decode('dGhhdGhhMTQ=');
    $mail->Port = 587;
    $mail->SMTPDebug = 2;

    $mail->From = $params['mail'];
    $mail->FromName = $params['name'];
    $mail->AddAddress('contato@thaismartins.co'); //recipient
    $mail->Subject = '[thaismartins.co] Contato do site';
    $mail->IsHTML(true);
//    $mail->Body = "Nome: " . $_REQUEST['name'] . "\r\n\r\nTelefone: " . stripslashes($_REQUEST['phone']) .  "\r\n\r\nEmail: " . stripslashes($_REQUEST['mail']) . "\r\n\r\nMessage: " . stripslashes($_REQUEST['message']);
    $mail->Body = getBodyMail('contact', $params);
    if($mail->send()) {
        $response['success'] = true;
        $response['message'] = 'Mensagem enviada com sucesso!';
    } else {
        $response['success'] = false;
        $response['message'] = 'Erro ao enviar mensagem. Por favor, tente novamente mais tarde.';
        $response['errorMail'] = $mail->ErrorInfo;
    }

} else {
    $response['success'] = false;
    $response['message'] = 'Por favor, verifique os campos digitados.';
}

echo json_encode($response);