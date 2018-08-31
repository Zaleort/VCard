<?php

$data = json_decode(file_get_contents('php://input'));
$response = new stdClass();

if (!isset($data)) {
    $response->status = 'No data';
    die(json_encode($response));
}

if (empty($data->nombre) || empty($data->email) || empty($data->mensaje)) {
    $response->status = 'Insufficient data';
    die(json_encode($response));
}

$to = 'zaleortgames@outlook.com';
$subject = "Nuevo mensaje desde VCard";
$message = "Nombre: " . $data->nombre . "\r\n" .
            "Correo: " . $data->email . "\r\n" .
            "Teléfono: " . $data->tel . "\r\n" .
            $data->mensaje;

$headers = "Content-Type: text/html; charset=UTF-8";

mail($to, $subject, $message, $headers);
$response->status = '200';
echo json_encode($response);
