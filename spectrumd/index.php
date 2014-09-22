<?php


/*
 * BOOTSTRAPING 
 */

include('init.php');



/*
 * FUNCTIONS 
 */

switch ($cmd) {

	case ("get_cpu_load"):
	get_cpu_load();
	break;

	default:
	die("ERROR");
	break;



}



