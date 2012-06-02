testTitleChange(document, $);

function testTitleChange( dom, jq ){
	// should only appear on the sites for which we've permissions
	dom.title = "this is just a test";
	if( jq.inArray( 1, [1, 2, 3]) >= 0 ){
		console.debug("successfully loaded jquery!");
	}

};

