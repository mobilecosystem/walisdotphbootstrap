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
		this.init();

		$(window).on({
			resize: function(e) {
				console.log(e);
			},
			scroll: function(e) {

			}
		});
		return _this;
	}
	Walis.prototype.scroll = function(element, time) {
		time = time || 1000;
		$('body,html').animate({
			scrollTop: $(element).offset().top
		},time);
		return _this;
	}
	Walis.prototype.init = function() {
		_this.navigation();
		_this.gmap();
		$('#contact .form-control').val('');
		$('[data-toggle="tooltip"]').tooltip();
		return _this;
	}
	Walis.prototype.resize = function() {

	}
	Walis.prototype.navigation = function(element) {
		// Navigation
		var element = element || '#navigation .navbar-nav a';
		$(element).on({
			click: function(e){
				_this.scroll($(this).attr('href'));
				return false;
			}
		});
		return _this;
	}
	Walis.prototype.gmap = function(element, btn) {
		// Google Map Us
		// Contact Us
		var element = element || '#contact';
		var btn = btn || '.gmap-btn';
		$(element).find(btn).on({
			click: function(){
				//$(element).find(b)
				$(element).find('.container.gmap-hide').fadeOut();
				$(element).find('.map .overlay').fadeOut();
				$(element).find(btn).fadeOut();
				$(element).find('.gmap-btn-bck').fadeIn();
				$(element).find('.gmap-btn-bck').on({
					click: function(){
						$(element).find('.container.gmap-hide').fadeIn();
						$(element).find('.map .overlay').fadeIn();
						$(element).find(btn).fadeIn();
						$(element).find('.gmap-btn-bck').fadeOut();
					}
				})
			}
		});
		return _this;
	}

	//Walis.prototype.
}(window, document));