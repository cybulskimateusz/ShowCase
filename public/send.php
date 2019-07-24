<?php
     $text = $_POST['message'];
     $mail = $_POST['email'];
     
     mail("cybulskimateusz.work@icloud.com",$mail,$text);
?>