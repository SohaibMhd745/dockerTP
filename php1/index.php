<?php

try {
    echo 'Current PHP version: ' . phpversion();
    echo 'énorme zob';
    echo '<br />';

    $host = 'php1';
    $dbname = 'tp';
    $user = 'user';
    $pass = 'user';
    $dsn = "mysql:host=$host;dbname=$dbname;charset=utf8";
    $conn = new PDO($dsn, $user, $pass);

    echo 'Database connected successfully';
    echo '<br />';
} catch (\Throwable $t) {
    echo 'Error: ' . $t->getMessage();
    echo '<br />';
}