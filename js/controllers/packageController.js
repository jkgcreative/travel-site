app.controller('pkgController',['$scope', '$stateParams', function pkgController($scope, $stateParams) {
    $scope.id = $stateParams.id;
    $scope.packages = {
        desti: [
            {
                id: 1,
                name: "South Cebu",
                urlPhoto: "images/destinations/cebu/Oslob.jpg",
                alt: "South Cebu Photo",
                daysPkg: "3D2N",
                daysPkgDesc: "(3 Days 2 Nights)",
                pkgDesc: "",
                pkgInclusions: [
                    { list: "Snorkeling Gear" },
                    { list: "Canyoneering Gear" },
                    { list: "Entrance Fees" },
                    { list: "Transportation (Van/Innova from Mactan-Cebu Airport to Moalboal to Oslob to Moalboal to Mactan-Cebu Airport)" },
                    { list: "Meals after canyoneering" },
                    { list: "3 Days + 2 Nights room accommodation" },
                    { list: "Trained and Trusted Tour Guide/s (takes the best photos too)" }
                ],
                pkgSite: [
                    { list: "Moalboal" },
                    { list: "Panagsama Beach" },
                    { list: "Pescador Island" },
                    { list: "Kawasan Falls" },
                    { list: "Osmeña Peak" },
                    { list: "Whalesharks In Oslob" },
                    { list: "Tumalog Falls" },
                    { list: "Sumilon Island" },
                    { list: "Aguinid Falls" },
                    { list: "Tabo-An Market" },
                    { list: "Magellan’s Cross" },
                    { list: "Basilica Del Santo Niño" },
                    { list: "And More…" }
                ],
                pkgActivities: [
                    { list: "Island Hopping" },
                    { list: "Snorkeling with thousands of Sardines" },
                    { list: "Watching/Swimming with the Turtles" },
                    { list: "Snorkeling at Pescador Island" },
                    { list: "Kawasan Canyoneering (Alegria-Badian)" },
                    { list: "Trekking at Osmeña Peak, Dalaguete" },
                    { list: "Whale Shark watching/interaction at Oslob" },
                    { list: "Swimming at Tumalog Falls, Oslob" },
                    { list: "Island Hopping to Sumilon Island, Oslob" },
                    { list: "Wall Climbing at Aguinid Falls, Samboan" }
                ],
                pkgOptional: [{ list: "Upon request" }],
                price: "6,300" 
            },
            {
                id: 2,
                name: "Bataan",
                urlPhoto: "images/destinations/bataan/las_casas.jpg",
                alt: "Bataan Photo",
                daysPkg: "2D1N",
                daysPkgDesc: "(2 Days 1 Night)",
                pkgDesc: "EXCLUSIVE/PRIVATE TOUR Also offered Any day of the week on your preferred travel time and date for your convenience. Free Pick-up within Metro Manila.",
                pkgInclusions: [
                    { list: "2 Days and 1 Night in Bataan" },
                    { list: "Environmental Fee" },
                    { list: "Entrance Fee at Mount Samat" },
                    { list: "Round trip air-conditioned van service (Manila-Bataan-Manila)" },
                    { list: "Professional Licensed Driver, Tour Coordinator/s, Fuel, Parking & Toll Fees" }
                ],
                pkgSite: [
                    { list: "Mount Samat" },
                    { list: "Dambana ng Kagitingan" },
                    { list: "Zero Kilometer Death March Marker" },
                    { list: "Filipino-Japanese Friendship Marker" },
                    { list: "Pawikan Conservatory" },
                    { list: "Bataan Nuclear Power Plant" }
                ],
                pkgActivities: [{ list: "Upon request" }],
                pkgOptional: [{ list:  "Las Casas Filipinas de Acuzar Day Tour – P1200.00 per pax. PM us for more details." }],
                price: "1,599" 
            },
            {
                id: 3,
                name: "Calaguas",
                urlPhoto: "images/destinations/calaguas/calaguas.jpg",
                alt: "Calaguas Photo",
                daysPkg: "2D1N",
                daysPkgDesc: "(2 Days 1 Night)",
                pkgDesc: "EXCLUSIVE/PRIVATE TOUR Also offered Any day of the week on your preferred travel time and date for your convenience. Free Pick-up within Metro Manila.",
                pkgInclusions: [
                    { list: "2Days and 1 Night in Calaguas" },
                    { list: "Round trip air-conditioned van service (Manila-Vinzons Port-Manila)" },
                    { list: "Fuel, Parking, Toll Fees, Drivers Fee" },
                    { list: "Professional Licensed Driver and Tour Coordinator/s" },
                    { list: "Calaguas entrance" },
                    { list: "Environmental fee" },
                    { list: "Round trip boat service" },
                    { list: "Tent good for 2 pax" },
                    { list: "Cottage for group (minimum of 10 pax)" },
                    { list: "Drinking water" },
                    { list: "Ice" },
                    { list: "3 overload buffet meals (Day1: lunch-dinner Day 2: breakfast)" }
                ],
                pkgSite: [{ list: "Upon request" }],
                pkgActivities: [{ list: "Upon request" }],
                pkgOptional: [{ list: "Surfing at Bagasbas Beach in Daet" }],
                price: "2,600" 
            },
            {
                id: 4,
                name: "Ilocos",
                urlPhoto: "images/destinations/ilocos/ilocos.jpg",
                alt: "Ilocos Photo",
                daysPkg: "4D3N",
                daysPkgDesc: "(4 Days 3 Nights)",
                pkgDesc: "EXCLUSIVE/PRIVATE TOUR Also offered any day of the week on your preferred travel time and date for your convenience. Free Pick-up within Metro Manila. DIFFERENT RATES APPLY DURING HOLY WEEK AND HOLIDAYS.",
                pkgInclusions: [
                    { list: "4 days ILOCOS Tour" },
                    { list: "3-nights’ accommodation. Clean and comfortable Transient, Inn or Lodging House." },
                    { list: "Vehicle Transfer MNL-ILOCOS-MNL" },
                    { list: "Fuel, Toll Fees, Drivers Fee" },
                    { list: "Professional Licensed Driver and Tour Coordinator/s" },
                    { list: "MEALS ARE NOT INCLUDED" }
                ],
                pkgSite: [
                    { list: "Paoay Church" },
                    { list: "Paoay Sand Dunes" },
                    { list: "Paoay Lake" },
                    { list: "Malacañang of the North" },
                    { list: "Herencia Cafe" },
                    { list: "Baluarte" },
                    { list: "Marcos Mausoleum" },
                    { list: "Sinking Bell Tower" },
                    { list: "Bantay Church" },
                    { list: "Hidden Garden" },
                    { list: "Bell Tower" },
                    { list: "Vigan Plaza" },
                    { list: "Calle Crisologo" },
                    { list: "Patapat Viaduct" },
                    { list: "Bantay Abot Cave" },
                    { list: "Blue Lagoon" },
                    { list: "Kabigan Falls" },
                    { list: "Pagudpud Beach Side" },
                    { list: "Cape Bojeador Lighthouse" },
                    { list: "Kapurpurawan Rock Formation" },
                    { list: "Bangui Windmills" }
                ],
                pkgActivities: [{ list: "Upon request" }],
                pkgOptional: [
                    { list:  "Sand Boarding" },
                    { list:  "4X4 Atv Ride" },
                    { list:  "Zip Line" }
                ],
                price: "2,599" 
            },
            {
                id: 5,
                name: "Baguio",
                urlPhoto: "images/homepage/destinations/Baguio.jpg",
                alt: "Baguio Photo",
                daysPkg: "Day Tour",
                daysPkgDesc: "",
                pkgDesc: "EXCLUSIVE/PRIVATE TOUR Also offered Any day of the week on your preferred travel time and date for your convenience. Free Pick-up within Metro Manila.",
                pkgInclusions: [
                    { list: "1 day Baguio City Tour" },
                    { list: "Round trip air-conditioned van service (Manila-Baguio-Manila)" },
                    { list: "Professional Licensed Driver, Tour Coordinator/s, Fuel, Parking \u0026 Toll Fees" }
                ],
                pkgSite: [
                    { list: "Strawberry Farm" },
                    { list: "Bell Church" },
                    { list: "Burnham Park" },
                    { list: "Mines View Park" },
                    { list: "Wright Park" },
                    { list: "Botanical Garden" },
                    { list: "The Mansion" },
                    { list: "Lion’s Head" }
                ],
                pkgActivities: [{ list: "Upon request" }],
                pkgOptional: [
                    { list: "Strawberry Picking – PHP450.00 per" },
                    { list: "2 pax" },
                    { list: "Boat Rentals at Swan Lake" },
                    { list: "Bicycle rentals at Burnham Park" },
                    { list: "Horseback riding at Wright Park" },
                    { list: "Picture-taking with Douglas: Baguio’s Largest St. Bernard dog – PHP20.00 for one shot" }
                ],
                price: "899" 
            },
            {
                id: 6,
                name: "Anawangin Cove",
                urlPhoto: "images/destinations/anawangin/anawangin01.jpg",
                alt: "Anawangin Cove Photo",
                daysPkg: "2D1N",
                daysPkgDesc: "(2 Days 1 Night)",
                pkgDesc: "EXCLUSIVE/PRIVATE TOUR Also offered Any day of the week on your preferred travel time and date for your convenience. Free Pick-up within Metro Manila.",
                pkgInclusions: [
                    { list: "2Days and 1 Night in Anawangin" },
                    { list: "Boat Transfers" },
                    { list: "Entrance Fees" },
                    { list: "Side Trip to Capones" },
                    { list: "Entrance Fee at Cove" },
                    { list: "Tent for Group Capacity" },
                    { list: "Ice and Icebox" },
                    { list: "Drinking Water" },
                    { list: "Kitchen Utensils" },
                    { list: "Charcoal for cooking" },
                    { list: "Set of Woods for Bonfire" },
                    { list: "Round trip air-conditioned van service (Manila-Zambales-Manila)" },
                    { list: "Professional Licensed Driver, Tour Coordinator/s, Fuel, Parking \u0026 Toll Fees" }
                ],
                pkgSite: [{ list: "Upon request" }],
                pkgActivities: [{ list: "Upon request" }],
                pkgOptional: [{ list:  "Side Trip to Camara (Add 50 PHP)" }],
                price: "1,599" 
            }    
        ]
    };
    
    $scope.destiData = null;
    $scope.setData = function(destipkg) {
        $scope.destiData = destipkg;
    };
        
}]);
