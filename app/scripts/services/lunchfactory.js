'use strict';

/**
 * @ngdoc service
 * @name angularApp.lunchFactory
 * @description
 * # lunchFactory
 * Factory in the angularApp.
 */
angular.module('angularApp')
	.factory('lunchFactory', ['empLunchFactory', function (empLunchFactory) {

		function lunchCount(excelData) {
			this.lunchDetails = [];
			excelData.forEach(function (data, iter) {
				var empDetails = new empLunchData(data, iter);
				this.lunchDetails.push(empDetails);
			});
		};

		lunchCount.prototype.getEmpData = function (id) {
			var empData = this.lunchDetails.filter(function (data) {
				return (data.iter === id);
			});
			return empData[0];
		};

		lunchCount.prototype.getNameList = function (search) {

			if (typeof search === 'undefined') {
				search = '';
			}
			search = search.toLowerCase();

			var nameList = this.lunchDetails
				.filter(function (data) {
					return (data.name.toLowerCase().indexOf(search) === 0);
				}).reduce(function (nameList, elem) {
					nameList.push(elem.name);
					return nameList;
				}, []);
			return nameList;
		};

		return lunchCount;
	}]);