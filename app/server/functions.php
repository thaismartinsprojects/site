<?php

function hasAllRequiredFields($params) {

    $required = array('name', 'mail', 'message', 'phone');

    foreach($required as $field) {
        if(!isset($params[$field]) || empty($params[$field])) {
            return false;
        }
    }

    return true;
}

function getBodyMail($template, $params) {

    ob_start();
    extract($params);
    include('../mails/' . $template . '.php');
    $output = ob_get_contents();
    ob_end_clean();

    return $output;
}