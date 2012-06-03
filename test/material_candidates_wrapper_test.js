candidatesWrapperTest = (function( candidatesWrapper ) {
	return {
		testFindAndHandleCandidates: function() {
			candidatesWrapper.findAndHandleCandidates( function( index ) {
				console.debug( index + ": " + this.innerHTML );
			});
		},
		
		run: function() {
			this.testFindAndHandleCandidates();
		}
	};
})( new MaterialCandidates( $, "td.bucket.normal > div.content > ul > li" ) );