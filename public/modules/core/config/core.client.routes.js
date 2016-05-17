'use strict';

// Setting up route
angular.module('core').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		// Redirect to home view when route not found
		$urlRouterProvider.otherwise('/');

		// Home state routing
		$stateProvider.
		state('home', {
			url: '/',
			templateUrl: 'modules/core/views/home.client.view.html'
		}).state('classes', {
			url: '/classes',
			templateUrl: 'modules/core/views/classes.client.view.html'
		}).state('instructors', {
			url: '/instructors',
			templateUrl: 'modules/core/views/instructors.client.view.html'
		}).state('schedules', {
			url: '/schedules',
			templateUrl: 'modules/core/views/schedule.client.view.html'
		}).state('about', {
			url: '/about',
			templateUrl: 'modules/core/views/about.client.view.html'
		}).state('waiver', {
			url: '/waiver',
			templateUrl: 'modules/core/views/waiver.client.view.html'
		}).state('contact', {
			url: '/contact',
			templateUrl: 'modules/core/views/contact.client.view.html'
		});
	}
]);