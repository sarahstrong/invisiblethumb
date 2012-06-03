(function( document, $ ){
	/**
	 * request handler
	 */
	var apiKey = "rhok";
	var endPoint = "http://nikemsiapi.nikebetterworld.com/materials/list/key:"+apiKey+"/.json";
	function materialRequest( url, materialName, responseCallback ) {
		$.get( url, function( data ) {
			responseCallback(data.data);
		});
	};

	/**
	 * response handler
	 */
	var materialResult = materialRequest( endPoint, "foo", function( materials ) {
		console.debug( materials );
	});
})( document, $ );