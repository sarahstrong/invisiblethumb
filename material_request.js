/**
 * Define the object constructor
 */
var NikeAPI = function( endPoint, key, contentType ) {
	this.endPoint = endPoint;
	this.key = key;
	this.contentType = contentType;
};

/**
 * Define the object API
 */
NikeAPI.prototype = {
	/**
	 * Public API
	 */
	getMaterial: function( materialName, callback ) {
		this._grabMaterialList( materialName, this._exactMatch, callback );
	},
	
	searchMaterials: function( materialQuery, callback ) {
		this._grabMaterialList( materialQuery, this._fuzzyMatch, callback );
	},
	
	/**
	 * "Private" methods
	 */
	_grabMaterialList: function( query, callback, responseCallback ) {
		$.get( this._assembleUrl(), function( data ) {
			responseCallback( callback( query, data.data ) );
		});
	},
	
	_exactMatch: function( name, data ) {
		for( var i = 0; i < data.length; i++ ) {
			if( data[i].Material.name === name ) {
				return data[i];
			}
		}
		return null;
	},
	
	_fuzzyMatch: function( query, data ) {
		console.debug("trying to do a fuzzy search on " + query );
	},
	
	_assembleUrl: function() {
		return this.endPoint + "/key:" + this.key + "/" + this.contentType;
	},
};