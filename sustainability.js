var API = new NikeAPI( "http://nikemsiapi.nikebetterworld.com/materials/list", "rhok", ".json" );

/**
 * response handling
 */
var materialResult, materialsResult;
console.debug("running first query");
API.getMaterial( "Acrylic fabric", function( data ) {
	console.debug("in first query callback");
	console.debug( data );
});
console.debug("running second query");
API.getMaterial( "*foo*", function( data ) {
	console.debug("in second query callback");
	console.debug( data );
});
console.debug("sequentially done");