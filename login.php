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
	$inputValue = $value;
	//echo $value.' --- '.$objDataInput->password;
}
$found = false;
foreach ($objData as $value2){
	//echo $value2->username.' - '.$value2->password;
	
	if($objDataInput->username == $value2->username && $objDataInput->password == $value2->password) {
		echo '<!--<br/>Correct combination. -->Welcome '.$value2->name.' '.$value2->surname.'<br/>';
		$found = true;
	}
	else {
		if(!$found)
			$found = false;
	}
}
if($found == false){
	echo 'Incorrect Username/Password combination!';
}


?>
