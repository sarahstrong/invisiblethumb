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
	getMaterial: function( materialName, responseHandler ) {
		this._grabMaterialList( materialName, this._exactMatch, responseHandler );
	},
	
	searchMaterials: function( materialQuery, responseHandler ) {
		this._grabMaterialList( materialQuery, this._fuzzyMatch, responseHandler );
	},
	
	/**
	 * "Private" methods
	 */
	_grabMaterialList: function( queryString, searchHandler, responseHandler ) {
		$.get( this._assembleUrl(), function( data ) {
			responseHandler( searchHandler( queryString, data.data ) );
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