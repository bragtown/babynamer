'use strict';

angular.module('babynamerApp')
  .controller('MainCtrl', function ($scope, $firebase) {
  	document.body.style.background = 'lightgreen';
  	 var threadRef = new Firebase('https://babynamer.firebaseIO.com/threads');
    $scope.threads = $firebase(threadRef);
    $scope.addThread = function(e){
    	if(e.keyCode !== 13) {
    		return;
    	}
    	$scope.threads.$add({
    		body: $scope.thread
    	});
    	$scope.thread = '';
    };
  });
