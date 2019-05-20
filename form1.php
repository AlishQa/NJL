<?php

if (isset($_POST['form1__send'])) {
	$name = $_POST['form1__name'];
	$phone = $_POST['form1__phone'];
	$time = $_POST['form1__time'];
	
	$mailTo = "meepo.thegeomancer@yandex.kz";
	$headers = "Заголовок";
	$txt = "Имя: ".$n."\nНомер: ".$p."\nВ какое время позвонить: ".$t;
	
	$response = array();
	$response['status'] = 'success';

	mail($mailTo, $headers, $txt);
	
	echo json_encode($response);
}




 
 


?>