$( document ).ready(function() {


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
	


});
