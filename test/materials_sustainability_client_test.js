/**
 * This test suite is awful and *superly* coupled to the current dataset as it's exposed on the service.
 * Luckily, all it would take is a new instance of the sustainabilityClient object that mocks out data provision.
 */
sustainabilityClientTest = (function( sustainabilityClient ) {
	return {
		testGetMaterial: function() {
			sustainabilityClient.getMaterial( "acrylic fabric", function( data ) {
				// should not be an array, therefore no length member
				Assert.assertEquals( undefined, data.length, "acrylic fabric exact match" );
			});
		},

		testSearchMaterials: function() {
			sustainabilityClient.searchMaterials( "fabric", function( data ) {
				Assert.assertEquals( 21, data.length, "fabric fuzzy search" );
			});
		},

		testGetMaterialList: function() {
			sustainabilityClient.getMaterialList( [ "acrylic fabric", "cotton fabric" ], function( data ) {
				Assert.assertEquals( 2, data.length, "acrylic fabric, cotton fabric exact list search" );
			});
		},

		testSearchMaterialsList: function() {
			sustainabilityClient.searchMaterialsList( [ "leather", "acrylic" ], function( data ) {
				Assert.assertEquals( 4, data.length, "leather, acryllic fuzzy list search" );
			});
		},
		
		run: function() {
			this.testGetMaterial();
			this.testGetMaterialList();
			this.testSearchMaterials();
			this.testSearchMaterialsList();
		}
	};
})( new MaterialsSustainabilityIndexClient( "http://nikemsiapi.nikebetterworld.com", "rhok", ".json" ) );