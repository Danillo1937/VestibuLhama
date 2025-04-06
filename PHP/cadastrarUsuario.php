<?php
   $nome = $_GET['nome'];
   $email = $_GET['email'];
   $senha = $_GET['senha'];
   $confirmarSenha = $_GET['confirmarSenha'];

   if ($senha !== $confirmarSenha) {
     die("Senhas Diferentes");
    }

   
header('index.html')
?>