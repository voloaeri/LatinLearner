<?php

//if(isset($_POST['name']) === true && empty($_POST['name']) === false){
  require 'connect.php';




$sql = "SELECT count(*)  FROM first_dec";
$result = $conn->query($sql);

$row = $result->fetch_array(MYSQLI_NUM);

$limit =  $row[0];
$limit = rand(1,$limit);

$sql = "SELECT nom FROM first_dec where id='".$limit."'";
$result = $conn->query($sql);

$row = $result->fetch_array(MYSQLI_NUM);

echo $row[0];

?>
