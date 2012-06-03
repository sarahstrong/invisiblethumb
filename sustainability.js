var sustainabilityClient = new MaterialsSustainabilityIndexClient( "http://nikemsiapi.nikebetterworld.com", "rhok", ".json" );

/**
 * response handling
 */
sustainabilityClient.getMaterial( "acrylic fabric", function( data ) {
	console.debug("in first query callback");
	console.debug( data );
});

sustainabilityClient.searchMaterials( "fabric", function( data ) {
	console.debug("in second query callback");
	console.debug( data );
});

sustainabilityClient.getMaterialList( [ "acrylic fabric", "cotton fabric" ], function( data ) {
	console.debug("in third query callback");
	console.debug( data );
});

sustainabilityClient.searchMaterialsList( [ "leather", "acrylic" ], function( data ) {
	console.debug("in fourth query callback");
	console.debug( data );
});

console.debug("sequentially done");