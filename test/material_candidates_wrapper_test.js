candidatesWrapperTest = (function( candidatesWrapper ) {
	return function() {
		candidatesWrapper.findAndHandleCandidates( function( index ) {
			console.debug( index + ": " + this.innerHTML );
		});
	};
})( new MaterialCandidates( $, "td.bucket.normal > div.content > ul > li" ) );