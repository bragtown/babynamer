'use strict';

angular.module('babynamerApp')
  .controller('GirlCtrl', function ($scope, $firebase) {
    document.body.style.background = 'lightpink';
    var firstRef = new Firebase('https://babynamer.firebaseIO.com/girls/first');
    $scope.firsts = $firebase(firstRef);
    var middleRef = new Firebase('https://babynamer.firebaseIO.com/girls/middle');
    $scope.middles = $firebase(middleRef);
    var lastRef = new Firebase('https://babynamer.firebaseIO.com/girls/last');
    $scope.lasts = $firebase(lastRef);
    var likeRef = new Firebase('https://babynamer.firebaseIO.com/girls/like');
    $scope.liked = $firebase(likeRef);
    $scope.name = {
    	first: '',
    	middle: '',
    	last: ''
    };
    $scope.addFirst = function(e){
    	if(e.keyCode !== 13) {
    		return;
    	}
    	$scope.firsts.$add({
    		body: $scope.name.first
    	});
    	$scope.name.first = '';
    };
    $scope.addMiddle = function(e){
    	if(e.keyCode !== 13) {
    		return;
    	}
    	$scope.middles.$add({
    		body: $scope.name.middle
    	});
    	$scope.name.middle = '';
    };
    $scope.addLast = function(e){
    	if(e.keyCode !== 13) {
    		return;
    	}
    	$scope.lasts.$add({
    		body: $scope.name.last
    	});
    	$scope.name.last = '';
    };
    $scope.generateName = function(){
    	var names = $scope.firsts.$getIndex();
    	var firstgname = names[Math.round(Math.random() * (names.length - 1))];
    	var gnameRef = new Firebase('https://babynamer.firebaseIO.com/girls/first/'+firstgname);
    	gnameRef.on('value', function(snapshot) {
    		$scope.name.first = snapshot.val().body;
    	});
      names = $scope.middles.$getIndex();
      var middlegname = names[Math.round(Math.random() * (names.length - 1))];
      gnameRef = new Firebase('https://babynamer.firebaseIO.com/girls/middle/'+middlegname);
      gnameRef.on('value', function(snapshot) {
        $scope.name.middle = snapshot.val().body;
      });
      names = $scope.lasts.$getIndex();
      var lastgname = names[Math.round(Math.random() * (names.length - 1))];
      gnameRef = new Firebase('https://babynamer.firebaseIO.com/girls/last/'+lastgname);
      gnameRef.on('value', function(snapshot) {
        $scope.name.last = snapshot.val().body;
      });
    };
    $scope.like = function(){
      $scope.liked.$add({
        body: $scope.name
      });
    };
    $scope.delete_first = function(){
      console.log(this.id);
      firstRef.child(this.id).remove();
    };
    $scope.delete_middle = function(){
      console.log(this.id);
      middleRef.child(this.id).remove();
    };
    $scope.delete_last = function(){
      console.log(this.id);
      lastRef.child(this.id).remove();
    };
    $scope.delete_like = function(){
      console.log(this.id);
      likeRef.child(this.id).remove();
    };
  });

