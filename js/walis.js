(function(window, document, undefined){

	'use strict';

	var _walis = window._walis = {
		get: function(){
			return _this;
		},
		// Main entry point
		init: function(options){
			return _this || new Walis(options);
		},
		VERSION: '0'
	};
	//Minify optimization.
	var hasProp = Object.prototype.hasOwnProperty;
	var Math = window.Math;
	var getStyle = window.getComputedStyle;

	var documentElement, body, time;

	var _this;

	function Walis(options) {
		documentElement = document.documentElement;
		body = document.body;
		options = options || {};
		_this = this;

		return _this;
	}
	Walis.prototype.navigation = function(element, time) {
		time = time || 1000;
		$('body').animate({
			scrollTop: $(element).offset().top
		},time);
		return _this;
	}

	//Walis.prototype.
}(window, document));