angular.module('userProfiles').controller('MainController', function($scope, mainSvc){

  // $scope.thisAppIsBroken = "This angular app is working";

  $scope.getUsers = function() {
    $scope.data = mainSvc.getData();
  };

  $scope.toggle = function(id) {
    mainSvc.toggleFavorite(id);
  };

  $scope.getUsers();

});
