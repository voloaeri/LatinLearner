<?php

if(isset($_POST['nom']) === true && empty($_POST['type']) === false){
  require 'connect.php';
}

$nom =  $_POST['nom'];
$type = $_POST['type'];
//echo 'hello';

//echo $type.$nom;

$sql = "SELECT ".$type."  FROM first_dec where nom='".$nom."';";
//echo $sql;
$result = $conn->query($sql);

$row = $result->fetch_array(MYSQLI_NUM);

echo $row[0];


?>

