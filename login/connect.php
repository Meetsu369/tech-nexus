<?php

$host="localhost";
$user="root";
$pass="root@1234";
$db="technexus";
$conn=new mysqli($host,$user,$pass,$db);
if($conn->connect_error){
    echo "Failed to connect DB".$conn->connect_error;
}
?>