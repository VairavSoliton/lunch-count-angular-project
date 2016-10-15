'use strict';

/**
 * @ngdoc service
 * @name angularApp.empLunchFactory
 * @description
 * # empLunchFactory
 * Factory in the angularApp.
 */
angular.module('angularApp')
	.factory('empLunchFactory', ['choiceDetailsFactory', function (choiceDetailsFactory) {

		function empLunchData(data, iter) {
			var self = this;
			this.name = data.name;
			this.iter = data.iter;
			this.choiceDetails = [];
			data.details.forEach(function (chData) {
				var choiceDetail = new choiceDetails(chData, self);
				this.choiceDetails.push(choiceDetail);
			});
		};

		empLunchData.prototype.getDateAndChoice = function () {
			var dateAndChoice = this.choiceDetails.reduce(function (retData, elem) {
				var data = {};
				data.date = elem.date;
				data.choice = elem.choice;
				retData.push(data);
				return retData;
			}, []);
			return dateAndChoice;
		};

		empLunchData.prototype.setChoiceBasedOnDate = function (date, choice) {
			var chObj = this.choiceDetails.filter(function (detail) {
				return (detail.date.toLowerCase() === date.toLowerCase());
			});
			chObj[0].setChoice(choice);
		};

		return empLunchData;
	}]);