AssertException = function( message ) { 
	this.message = message; 
};

AssertException.prototype = {
	toString: function () {
		return this.message;
	}
};

var Assert = {
	assertEquals: function( expected, actual, message ) {
		if( expected !== actual ) {
			throw new AssertException( "[FAIL] " + message + " Expected: <" + expected + ">, but was: <" + actual + ">" );
		}
		console.debug( "[PASS] " + message );
	}
};