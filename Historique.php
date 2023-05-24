<!DOCTYPE html>
<html>
<head>
	<title>External Consultant Qualification</title>
	<meta charset="utf-8">
	<meta lang="fr">
	<meta name="author" content="Mathéo Boileau">
	<meta name="viewport" content="width=device-width, initial-scale=1">
   

    <!-- CSS/JAVASCRIPT/SCSS/!\ -->
    <script src="External.js"></script>
	<link rel="stylesheet" type="text/css" href="External.css"> 

    <!-- Connexion base de données -->
    <?php

$serverName = "CRLRMPC-9F492EO\SA";
$connectionOptions = array(
    "Database" => "test",
    "Uid" => "root",
    "PWD" => ""
);
$conn = sqlsrv_connect($serverName, $connectionOptions);
if ($conn === false) {
    die(print_r(sqlsrv_errors(), true));
}



//Récupération de la date du jour 
$dateDuJour = date("Y-m-d");

//Requête d'insertion dans la base de données 
$sql = "INSERT INTO test (date) VALUES ('$dateDuJour')";
?>