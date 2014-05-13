<?php
// The request is a JSON request.
// We must read the input.
// $_POST or $_GET will not work!

$dataInput = file_get_contents("php://input");
$data = file_get_contents("api/loginData.json");

$objDataInput = json_decode($dataInput);
$objData = json_decode($data);

// Check if the keywords are in our array
$inputValue = '';

foreach ($objDataInput as $value){
	echo $value;
	$inputValue = $value;
	echo '<br/><br/>';
	
	
	
}

foreach ($objData as $value2){
	echo '<br/>';
	echo $value2->username.' - '.$value2->password;
	
	if($inputValue == $value2->username) {
		echo '<br/>I have found what you\'re looking for!';
	}
	else {
		echo '<br/>Sorry, no match!<br/>$value: '.$inputValue.' - $value2->username'.$value2->username;
	}
}



?>
