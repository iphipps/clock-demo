'use strict';

/**
 * @ngdoc function
 * @name clockApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clockApp
 */







angular.module('clockApp')
  .controller('MainCtrl', function ($scope, $interval) {
  	console.log('mainCtrl run');
  	//$scope initial settings
  	$scope.twentyFour = true;
  	$scope.am = true;
  	//setting up clock
  	var clock = clock || {
		init: function(){
			this.nownow = this.now.getTime();
			this.midnight = new Date ( (this.now.getYear() + 1900), this.now.getMonth(), this.now.getDate() );
			this.todaysTime = this.nownow - this.midnight;
			this.convertTime();
		},
		now: new Date(),
		nownow: 0,
		midnight: 0,
		utilities: {
			daymilli: 24*60*60*1000,
			hourmilli: 60*60*1000,
			minmilli: 60*1000
		},
		convertTime: function(){
			var hours = Math.floor( this.todaysTime / this.utilities.hourmilli );
			var minutes = Math.floor( (this.todaysTime  % this.utilities.hourmilli) / this.utilities.minmilli  );
			var seconds = Math.floor( (this.todaysTime  % this.utilities.minmilli) / 1000  );

			var stringify = function(time){
				var digits = [];
				if(time < 10){
					digits.push('0');
					digits.push(time);
				}else{
					digits.push(time.toString().charAt(0));
					digits.push(time.toString().charAt(1));
				}
				return digits;
			};

			if($scope.twentyFour === false){
				if(hours > 12){
					$scope.am = false;
					$scope.hourOne = stringify(hours - 12)[0];
					$scope.hourTwo = stringify(hours - 12)[1];
				}else{
					$scope.am = true;
					$scope.hourOne = stringify(hours)[0];
					$scope.hourTwo = stringify(hours)[1];
				}	
			}else{
					$scope.hourOne = stringify(hours)[0];
					$scope.hourTwo = stringify(hours)[1];
			}
			


			$scope.minuteOne = stringify(minutes)[0];
			$scope.minuteTwo = stringify(minutes)[1];
			$scope.secondOne = stringify(seconds)[0];
			$scope.secondTwo = stringify(seconds)[1];

		},
		adjustTime: function(){
			this.nownow = this.nownow + 1000;
			this.todaysTime = this.todaysTime + 1000;
			this.convertTime();
		}
	};
	clock.init();
	
	$scope.setMilitary = function(){
		console.log('twentyfour');
		$scope.twentyFour = true;
	};
	$scope.setCommon = function(){
		//this has some holes.  what if it is 11:59 when you click the button
		if(clock.now.getHours() > 12){
			$scope.am = false;
		}
		$scope.twentyFour = false;
	};
	$interval(function(){
		clock.adjustTime();

  	}, 1000);



  });
