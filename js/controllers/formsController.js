app.controller('itineraryFormsController', function($scope){
    $scope.regEx = /^[0-9]{11,11}$/;
    $scope.text = /^[a-zA-Z\s]*$/;
    $scope.itineraryDays = [ {day:"2d1n"}, {day:"3d2n"} ];
    $scope.selectedItiDays = [];
    $scope.toggleItiDays = function(day) {
        var index  = $scope.selectedItiDays.indexOf(day);
        if(index == -1) {
          $scope.selectedItiDays.push(day);
      } else {
          $scope.selectedItiDays.splice(index, 1);
      };  
    };
    
    $scope.resetForm = function() {
        $scope.success = false;
        $scope.selectedItiDays = [];
        $scope.itiFormData = {};
        $scope.destiItinerary.$setPristine();
        $scope.destiItinerary.$setUntouched();
    };
    
    $scope.success = false;
    $scope.submitItiForm = function(isValid) {
        if(isValid) {
            $scope.selectedItiDays = [];
            $scope.itiFormData = {};
            $scope.destiItinerary.$setPristine();
            $scope.destiItinerary.$setUntouched();
            $scope.success = true;
        };
    };
    
    $scope.hideAlert = function(){
         $scope.success = false;
     };
    
});

app.controller('reqPkgFormsController', function($scope){
    $scope.RequestPkgFormData = {};
    $scope.regEx = /^[0-9]{11,11}$/;
    $scope.text = /^[a-zA-Z\s]*$/;
    $scope.resetForm = function() {
        $scope.success = false;
        $scope.RequestPkgFormData = {};
        $scope.RequestPkgForm.$setPristine();
        $scope.RequestPkgForm.$setUntouched();
    };
    $scope.success = false;
    $scope.nightsValidation = true;
    $scope.nightsVal2 = true;
    
    $scope.durationChoices = [
        { value: "", name: "Select tour duration *" },
        { value: "dayTour", name: "Day Tour" },
        { value: "2d1n", name: "2 Days 1 Night" },
        { value: "3d2n", name: "3 Days 2 Nights" },
        { value: "4d3n", name: "4 Days 3 Nights" },
        { value: "5d4n", name: "5 Days 4 Nights" },
        { value: "6d5n", name: "6 Days 5 Nights" },
        { value: "otherDays", name: "Others" }
    ];
    $scope.selectedItemValue = "";
    $scope.submitReqPkgForm = function(isValid) {
        if(isValid) {
            $scope.RequestPkgFormData = {};
            $scope.RequestPkgForm.$setPristine();
            $scope.RequestPkgForm.$setUntouched();
            $scope.success = true;
        };
    };
    
     $scope.hideAlert = function(){
         $scope.success = false;
     };
});

app.controller('reservePkgFormsController', function($scope){
    $scope.ReservePkgFormData = {};
    $scope.regEx = /^[0-9]{11,11}$/;
    $scope.text = /^[a-zA-Z\s]*$/;
    $scope.destiChoices = [
        { value: "", name: "Select a destination *" },
        { value: "southCebu", name: "South Cebu" },
        { value: "bataan", name: "Bataan" },
        { value: "calaguas", name: "Calaguas" },
        { value: "ilocos", name: "Ilocos" },
        { value: "baguio", name: "Baguio" },
        { value: "anawangin", name: "Anawangin Cove" }
    ];
    $scope.selectedItemValue = "";
    $scope.arrivalErrMsg = false;
    $scope.arrivalCheck = function ($value) {
        var curDate = new Date();
        if(new Date($value) <=  new Date(curDate)) {
            $scope.ReservePkgFormData.arrivalDate = $value;
            $scope.arrivalErrMsg = true;
            return false;
        } else {
            $scope.arrivalErrMsg = false;
            return true;
            
        }
    };
    
    $scope.returnErrMsg = false;
    $scope.returnCheck = function ($value) {
        if(new Date($value) < new Date($scope.ReservePkgFormData.arrivalDate)) {
            $scope.ReservePkgFormData.returnDate = $value;
            $scope.returnErrMsg = true;
            return false;
        } else {
            $scope.returnErrMsg = false;
            return true;
            
        }
    };
    
    $scope.resetForm = function() {
        $scope.success = false;
        $scope.ReservePkgFormData = {};
        $scope.ReservePkgForm.$setPristine();
        $scope.ReservePkgForm.$setUntouched();
    };
    $scope.success = false;
    $scope.submitReservePkgForm = function(isValid) {
        if(isValid) {
            $scope.ReservePkgFormData = {};
            $scope.ReservePkgForm.$setPristine();
            $scope.ReservePkgForm.$setUntouched();
            $scope.success = true;
        }
    };
    
     $scope.hideAlert = function(){
         $scope.success = false;
     };
});

app.controller('contactFormsController', function($scope){
    $scope.regEx = /^[0-9]{11,11}$/;
    $scope.text = /^[a-zA-Z\s]*$/;
    $scope.success = false;
    $scope.submitcontactPgForm = function(isValid) {
        if(isValid) {
            $scope.contactPgFormData = {};
            $scope.contactPgForm.$setPristine();
            $scope.contactPgForm.$setUntouched();
            $scope.success = true;
        };
    };
    
     $scope.hideAlert = function(){
         $scope.success = false;
     };
});


app.controller('vanFormsController', function($scope){
    $scope.vanFormData = {};
    $scope.regEx = /^[0-9]{11,11}$/;
    $scope.text = /^[a-zA-Z\s]*$/;
    $scope.success = false;
    $scope.vanChoices = [
        { name: "Roundtrip", value: "roundtrip" },
        { name: "One-Way", value: "oneWay" }
    ];
    $scope.destiChoices = [
        { value: "", name: "Select a destination *" },
        { value: "southCebu", name: "South Cebu" },
        { value: "bataan", name: "Bataan" },
        { value: "calaguas", name: "Calaguas" },
        { value: "ilocos", name: "Ilocos" },
        { value: "baguio", name: "Baguio" },
        { value: "anawangin", name: "Anawangin Cove" }
    ];
    $scope.selectedItemValue = "";
    
    $scope.departureErrMsg = false;
    $scope.departureCheck = function ($value) {
        var curDate = new Date();
        if(new Date($value) <=  new Date(curDate)) {
            $scope.vanFormData.departureDate = $value;
            $scope.departureErrMsg = true;
            return false;
        } else {
            $scope.departureErrMsg = false;
            return true;
            
        }
    };
    
    $scope.returnErrMsg = false;
    $scope.returnCheck = function ($value) {
        if(new Date($value) < new Date($scope.vanFormData.departureDate)) {
            $scope.vanFormData.returnDate = $value;
            $scope.returnErrMsg = true;
            return false;
        } else {
            $scope.returnErrMsg = false;
            return true;
            
        }
    };
    
    $scope.submitVanForm = function(isValid) {
        if(isValid) {
            $scope.vanFormData = {};
            $scope.vanForm.$setPristine();
            $scope.vanForm.$setUntouched();
            $scope.success = true;
        };
    };
    
     $scope.hideAlert = function(){
         $scope.success = false;
     };
    $scope.resetForm = function() {
        $scope.success = false;
        $scope.vanFormData = {};
        $scope.vanForm.$setPristine();
        $scope.vanForm.$setUntouched();
    };
});

app.controller('hotelFormsController', function($scope, $rootScope, $timeout, $uibModal){
    $scope.hotelFormData = {};
    $scope.regEx = /^[0-9]{11,11}$/;
    $scope.num = /^[0-9]$/;
    $scope.text = /^[a-zA-Z\s]*$/;
    $scope.success = false;
    $scope.ratingChoices = [
        { name: "Roundtrip", value: "roundtrip" },
        { name: "One-Way", value: "oneWay" }
    ];
    $scope.destiChoices = [
        { value: "", name: "Select a destination *" },
        { value: "southCebu", name: "South Cebu" },
        { value: "bataan", name: "Bataan" },
        { value: "calaguas", name: "Calaguas" },
        { value: "ilocos", name: "Ilocos" },
        { value: "baguio", name: "Baguio" },
        { value: "anawangin", name: "Anawangin Cove" }
    ];
    $scope.selectedItemValue = "";
    
    $scope.priceRangeSlider = {
        minValue: 2000,
        maxValue: 5000,
        options: {
            floor: 100,
            ceil: 10000,
            setp: 100
        }
    };
    
    $scope.checkInErrMsg = false;
    $scope.checkInCheck = function ($value) {
        var curDate = new Date();
        if(new Date($value) <=  new Date(curDate)) {
            $scope.hotelFormData.checkIn = $value;
            $scope.checkInErrMsg = true;
            return false;
        } else {
            $scope.checkInErrMsg = false;
            return true;
            
        }
    };
    
    $scope.checkOutErrMsg = false;
    $scope.checkOutCheck = function ($value) {
        if(new Date($value) < new Date($scope.hotelFormData.checkIn)) {
            $scope.hotelFormData.checkOut = $value;
            $scope.checkOutErrMsg = true;
            return false;
        } else {
            $scope.checkOutErrMsg = false;
            return true;
            
        }
    };
    
    $scope.submitHotelForm = function(isValid) {
        if(isValid) {
            $scope.hotelFormData = {};
            $scope.priceRangeSlider = {
                minValue: 2000,
                maxValue: 5000,
                options: {
                    floor: 100,
                    ceil: 10000,
                    setp: 100
                }
            };
            $scope.hotelForm.$setPristine();
            $scope.hotelForm.$setUntouched();
            $scope.success = true;
        };
    };
    
     $scope.hideAlert = function(){
         $scope.success = false;
     };
    $scope.resetForm = function() {
        $scope.success = false;
        $scope.hotelFormData = {};
        $scope.hotelForm.$setPristine();
        $scope.hotelForm.$setUntouched();
    };
});

app.controller('flightFormsController', function($scope){
    $scope.flightFormData = {};
    $scope.regEx = /^[0-9]{11,11}$/;
    $scope.text = /^[a-zA-Z\s]*$/;
    $scope.success = false;
    $scope.flightChoices = [
        { name: "Roundtrip", value: "roundtrip" },
        { name: "One-Way", value: "oneWay" }
    ];
    $scope.destiChoices = [
        { value: "", name: "Select a destination *" },
        { value: "southCebu", name: "South Cebu" },
        { value: "bataan", name: "Bataan" },
        { value: "calaguas", name: "Calaguas" },
        { value: "ilocos", name: "Ilocos" },
        { value: "baguio", name: "Baguio" },
        { value: "anawangin", name: "Anawangin Cove" }
    ];
    $scope.seatClasses = [
        { value: "", name: "Select a Seat Class *" },
        { value: "economy", name: "Economy" },
        { value: "business", name: "Business" },
        { value: "firstClass", name: "First Class" },
        { value: "premEconomy", name: "Premium Economy" }
    ];
    $scope.selectedItemValue = "";
    
    $scope.departureErrMsg = false;
    $scope.departureCheck = function ($value) {
        var curDate = new Date();
        if(new Date($value) <=  new Date(curDate)) {
            $scope.flightFormData.departureDate = $value;
            $scope.departureErrMsg = true;
            return false;
        } else {
            $scope.departureErrMsg = false;
            return true;
            
        }
    };
    
    $scope.returnErrMsg = false;
    $scope.returnCheck = function ($value) {
        if(new Date($value) < new Date($scope.flightFormData.departureDate)) {
            $scope.flightFormData.returnDate = $value;
            $scope.returnErrMsg = true;
            return false;
        } else {
            $scope.returnErrMsg = false;
            return true;
            
        }
    };
    
    $scope.submitFlightForm = function(isValid) {
        if(isValid) {
            $scope.flightFormData = {};
            $scope.flightForm.$setPristine();
            $scope.flightForm.$setUntouched();
            $scope.success = true;
        };
    };
    
     $scope.hideAlert = function(){
         $scope.success = false;
     };
    $scope.resetForm = function() {
        $scope.success = false;
        $scope.flightFormData = {};
        $scope.flightForm.$setPristine();
        $scope.flightForm.$setUntouched();
    };
});
