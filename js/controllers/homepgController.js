app.controller('abtController', function abtController($scope) {
    $scope.whatWeDo = [
        {
            servicesIcon: "images/homepage/icons/ic_bus_24px@2x.png",
            servicesAlt: "Van Transfer Icon",
            servicesDesc: "Round Trip Van Transfers"
        },
        
        {
            servicesIcon: "images/homepage/icons/ic_hotel_24px@2x.png",
            servicesAlt: "Hotel Icon",
            servicesDesc: "Room Accommodation"
        },
        
        {
            servicesIcon: "images/homepage/icons/ic_place_24px@2x.png",
            servicesAlt: "Tour Icon",
            servicesDesc: "Tour Services"
        },
        
        {
            servicesIcon: "images/homepage/icons/ic_airport_24px@2x.png",
            servicesAlt: "Airline Icon",
            servicesDesc: "Airline Flight Ticketing"
        }
        
    ];
});

app.controller('testiController', function testiController($scope) {
    $scope.clientTesti = [
        {
            testi: "“Thank you so much EE Travels and Tours ❤️Super fun and worth it 😊 Sa uulitin!!❤️ Check their page, they offer affordable packages for summer getaways ☀️☀️”",
            name: "Pam Jasme"
        },
        {
            testi: "“Thank you EE Travel and Tours for a great experience! Verry accomodating.. Salamat po sa pag aasikaso samin buong time.. Sobrang enjoy kami! Sa uulitin!”",
            name: "Kristian Luis Rocillo Bayanin"
        }
    ];
        
        
    ;
});

