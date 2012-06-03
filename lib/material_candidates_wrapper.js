MaterialCandidates = function( jQuery, selector ) {
	this.jQuery = jQuery;
	this.selector = selector;
};

MaterialCandidates.prototype = {
	findAndHandleCandidates: function( candidateHandler ) {
		this.jQuery( this.selector ).each( candidateHandler );
	}
};