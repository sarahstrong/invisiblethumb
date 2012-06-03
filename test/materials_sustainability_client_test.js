sustainabilityClientTest = (function( sustainabilityClient ) {
	return function() {
		sustainabilityClient.getMaterial( "acrylic fabric", function( data ) {
			// should not be an array, therefore no length member
			Assert.assertEquals( undefined, data.length, "acrylic fabric exact match" );
		});

		sustainabilityClient.searchMaterials( "fabric", function( data ) {
			Assert.assertEquals( 21, data.length, "fabric fuzzy search" );
		});

		sustainabilityClient.getMaterialList( [ "acrylic fabric", "cotton fabric" ], function( data ) {
			Assert.assertEquals( 2, data.length, "acrylic fabric, cotton fabric exact list search" );
		});

		sustainabilityClient.searchMaterialsList( [ "leather", "acrylic" ], function( data ) {
			Assert.assertEquals( 4, data.length, "leather, acryllic fuzzy list search" );
		});
	};
})( new MaterialsSustainabilityIndexClient( "http://nikemsiapi.nikebetterworld.com", "rhok", ".json" ) );