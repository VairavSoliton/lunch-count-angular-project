'use strict';

/**
 * @ngdoc service
 * @name angularApp.choiceDetailsFactory
 * @description
 * # choiceDetailsFactory
 * Factory in the angularApp.
 */
angular.module('angularApp')
	.factory('choiceDetailsFactory', function () {

		function choiceDetails(data, parent) {
			this.super = parent;
			this.date = data.date;
			this.choice = data.choice;
		};

		choiceDetails.prototype.setChoice = function (choice) {
			this.choice = choice;
		};

		return choiceDetails;
	});