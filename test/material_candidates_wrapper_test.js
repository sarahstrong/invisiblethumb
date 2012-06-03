function testCandidatesWrapper() {
	var candidatesWrapper = new MaterialCandidates( $, "td.bucket.normal > div.content > ul > li" );

	candidatesWrapper.findAndHandleCandidates( function( index ) {
		console.debug( index + ": " + this.innerHTML );
	});
}