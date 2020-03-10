<?php
$message = "";
if(isset($_POST['SubmitButton'])){ //check if form was submitted
  $input = $_POST['inputText']; //get input text
  $message = "Success! You entered: ".$input;
}    
?>

https://stackoverflow.com/questions/17333901/php-form-on-submit-stay-on-same-page
https://www.w3schools.com/php/php_forms.asp

try w MAMP