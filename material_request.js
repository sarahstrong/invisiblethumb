/**
 * Define the object constructor
 */
var MaterialsSustainabilityIndexClient = function( serviceUri, apiKey, contentType ) {
	this.serviceUri = serviceUri;
	this.apiKey = apiKey;
	this.contentType = contentType;
	
	/**
	 * These are all of the operations actually supported by the API. In contrast, we're doing
	 * a lot of the search processing on the client side.
	 */
	this.operationsMap = {
		"list": "materials/list",
		"match": "materials/list/match",
		"matchRange": "materials/list/range",
		"search": "materials/search",
		"view": "materials/view"
	};
};

/**
 * Define the object API
 */
MaterialsSustainabilityIndexClient.prototype = {
	/**
	 * Public API
	 */
	getMaterial: function( materialName, responseHandler ) {
		this._grabMaterialList( materialName, this._exactMatch, responseHandler );
	},
	
	// concatenates a list of materials into a regex "or" match and then runs the search API on it
	getMaterialList: function( materialsList, responseHandler ) {
		var materialName = "(";
		for( var i = 0; i < materialsList.length; i++ ) {
			materialName += materialsList[i] + "|";
		}
		materialName = materialName.slice(0,materialName.length-1) + ")";
		this._grabMaterialList( materialName, this._fuzzyMatch, responseHandler );
	},
	
	searchMaterials: function( materialQuery, responseHandler ) {
		this._grabMaterialList( materialQuery, this._fuzzyMatch, responseHandler );
	},
	
	// this just passes through to getMaterialList since the implementation would be no different
	searchMaterialsList: function( materialsQueryList, responseHandler ) {
		this.getMaterialList( materialsQueryList, responseHandler );
	},
	
	/**
	 * "Private" methods
	 */
	_grabMaterialList: function( queryString, searchHandler, responseHandler ) {
		$.get( this._assembleUrl("list"), function( data ) {
			responseHandler( searchHandler( queryString, data.data ) );
		});
	},
	
	_exactMatch: function( name, data ) {
		for( var i = 0; i < data.length; i++ ) {
			if( data[i].Material.name.toLowerCase() === name.toLowerCase() ) {
				return data[i];
			}
		}
		return null;
	},
	
	// uses js built-in match method to run a pcre match against a string (usually the match is simple)
	_fuzzyMatch: function( query, data ) {
		var matches = [];
		for( var i = 0; i < data.length; i++ ) {
			if( data[i].Material.name.toLowerCase().match( query.toLowerCase() ) !== null ) {
				matches.push( data[i] );
			}
		}
		return matches;
	},
	
	_assembleUrl: function( operation ) {
		return this.serviceUri + "/" + this.operationsMap[ operation ] + "/key:" + this.apiKey + "/" + this.contentType;
	},
};