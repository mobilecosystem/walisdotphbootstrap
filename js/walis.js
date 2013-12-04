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
				$(element).find('.map').addClass('iamthemap');
				$(element).find('.gmap-btn-bck').on({
					click: function(){
						$(element).find('.container.gmap-hide').fadeIn();
						$(element).find('.map .overlay').fadeIn();
						$(element).find(btn).fadeIn();
						$(element).find('.gmap-btn-bck').fadeOut();
						$(element).find('.map').removeClass('iamthemap');
					}
				});
			}
		});
		return _this;
	}
	Walis.prototype.contact = function(element) {
		var e = element || '#contact';
		/*
		$('#contact form').on({
			submit: function(evnt){
				$(e).find('form').validate({
					rules: {
						name: {
							required: true,
							minlength: 2
						},
						email: {
							required: true,
							email: true
						},
						message: 'required'
					}
				})
				//_this.contactAjax(e);
				//evnt.preventDefault();
				
			}
		});
		*/
		$(e).find('form').validate({
			rules: {
				name: {
					required: true,
					minlength: 2
				},
				email: {
					required: true,
					email: true
				},
				message: 'required'
			},
			submitHandler: function(form) {
				//form.submit();
				_this.contactAjax(e);
			},
			showErrors: function(ee, l) {
				console.log(ee.name);
				(ee.name) ? $(e).find('#name').parent().addClass('has-error') : $(e).find('#name').parent().removeClass('has-error');
				(ee.email) ? $(e).find('#email').parent().addClass('has-error') : $(e).find('#email').parent().removeClass('has-error');
				(ee.message) ? $(e).find('#message').parent().addClass('has-error') : $(e).find('#message').parent().removeClass('has-error')
			}
		})
	}
	Walis.prototype.contactAjax = function(element) {
		// Contact Form
		var e = element || '#contact';
		var url = '/contactus';
		$.ajax({
			url: url,
			type: 'POST',
			data: $(e).find('form').serialize(),
			success: function(data) {
				//console.log(data);
				$(e).find('.ty .alert-link').text(data.data.name);
				$(e).find('.form').hide();
				$(e).find('.ty').fadeIn();
			}
		});
		return false;
	}

	Walis.prototype.hpackers = function(element) {
		var e = element || '#clients';
		$(e).find('img').lazyload({
			event: 'turnPage',
			effect: 'fadeIn'
		});
		$(e).find('.pager').jPages({
			containerID: 'thumbnails',
			animation: 'fadeInUp',
			perPage: 24,
			//links: 'blank',
			previous: 'PREV',
			//scrollBrowse: true,
			next: 'NEXT',
			minHeight: false,
			callback: function(p, i){
				// console.log(i);
				// console.log(_this);
				i.showing.find('img').trigger('turnPage');
				i.oncoming.find('img').trigger('turnPage');
				
			}
		})
		return _this;
	}

	Walis.prototype.init = function() {
		_this.navigation();
		_this.gmap();
		_this.contact();
		$('#contact .required').val('');
		$('[data-toggle="tooltip"]').tooltip();
		_this.hpackers();
		return _this;
	}
}(window, document));