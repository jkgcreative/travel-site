app.controller('mainController', function mainController($scope){
    $scope.doTheBack = function() {
      window.history.back();
    };
    $scope.contacts = {
        phoneUrl: "images/Phone@2x.png",
        emailUrl: "images/Email@2x.png",
        socialUrl: "images/facebook@2x.png",
    };
});

