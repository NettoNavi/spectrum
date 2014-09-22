<?php

$cmd =  htmlspecialchars($_GET["cmd"]);
$user = htmlspecialchars($_GET["user"]);
$server = htmlspecialchars($_GET["server"]);

// Return CPU Load of MC server.
function get_cpu_load() {
	$load = $results = exec('uptime | awk -F ":" \'{print $5}\'');
	echo $load;
}

