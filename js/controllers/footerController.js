app.controller('footerController', function($scope) {
    $scope.copyright = ' \u00A9 ' + "Explore Enjoy Travel and Tours 2018";
    $scope.phone = {
        imgUrl: "images/footer/PhoneIcon@2x.png",
        number: "+63-917-320-9489",
        alt: "Phone Icon"
    };
    
    $scope.email = {
        imgUrl: "images/footer/Emailicon@2x.png",
        emailAdd: "eetravels001@gmail.com",
        alt: "Email Icon"
    };
    
    $scope.social = {
        imgUrl: "images/footer/FbIcon@2x.png",
        alt: "Facebook Icon",
        url: "https://www.facebook.com/eetravels/"
    };
    $scope.developer = {
        firstName: "Jamie Kaye",
        lastName: "Garong"
    };
    
    $scope.success = false;
    $scope.subsSubmitForm = function(isValid) {
       if(isValid) {
           $scope.success = true;
           $scope.subsFormData = {};
           $scope.subscribeForm.$setPristine();
           $scope.subscribeForm.$setUntouched();
       };
    };
    
     $scope.hideAlert = function(){
         $scope.success = false;
     };
});


