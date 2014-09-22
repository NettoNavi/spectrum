$( document ).ready(function() {

	$( "#server-nav-heading" ).css( "display", "none" );

	$.get("spectrumd/?cmd=get_cpu_load",function(data,status){
		document.getElementById("server-load").innerHTML=data;
	});

	$( ".server-select" ).change(function() {
		var selection = $(".server-select").val();
		if ($(".server-select").val() != "NULL") {
			$( "#server-nav-heading" ).css( "display", "inline" );
			document.getElementById("server-nav-name").innerHTML=selection;
		} else {
			$( "#server-nav-heading" ).css( "display", "none" );
		}
		
		return false;
		

	});


	$( "#console-btn" ).click(function() {
		$( "#status-area" ).css( "display", "none" );
		$( "#config-area" ).css( "display", "none" );
		$( "#console-area" ).css( "display", "block" );
		return false;

	});

	$( "#status-btn" ).click(function() {
		$( "#status-area" ).css( "display", "block" );
		$( "#config-area" ).css( "display", "none" );
		$( "#console-area" ).css( "display", "none" );
		return false;

	});

	$( "#config-btn" ).click(function() {
		$( "#status-area" ).css( "display", "none" );
		$( "#config-area" ).css( "display", "block" );
		$( "#console-area" ).css( "display", "none" );
		return false;

	});

	setInterval(function() {
		$.get("spectrumd/?cmd=get_cpu_load",function(data,status){
			document.getElementById("server-load").innerHTML=data;
		});

	}, 3000);




});
