app.controller('destiController', ['$scope', '$stateParams', function destiController($scope, $stateParams) {
    $scope.id = $stateParams.id;
    $scope.Math = window.Math;
    $scope.destinations = [
        {
            id: 1,
            title: "Cebu",
            urlPhoto: "images/homepage/destinations/Cebu.jpg",
            altPhoto: "Cebu Photo",
            name: "South Cebu",
            destiDesc: "Cebu (/seɪˈbuː/; Cebuano: Lalawigan sa Sugbu; Filipino: Lalawigan ng Cebu) is a province of the Philippines located in the Central Visayas (Region VII) region, and consisting of a main island and 167 surrounding islands and islets. Its capital is Cebu City, the oldest city and first capital of the Philippines, which is politically independent from the provincial government.",
            sourceUrl: "https://en.wikipedia.org/wiki/Cebu",
            topDesti: [
            {
                name: "Sirao Flower Farm",
                urlPhoto: "images/destinations/cebu/Sirao_Flower_Farm.jpg",
                altPhoto: "Sirao Flower Farm Photo",
                title: "Sirao Flower Farm",
                class: "right-float",
                desc: "Sirao Flower Farm a.k.a. “Little Amsterdam” is located in a mountain baranggay just few minutes from Lahug, Cebu City, Philippines. Celosia is the main flower grown in Sirao Flower Farm. This flower is considered to be a genus of edible and ornamental plants of the Amaranth family, Amaranthaceae. Its name was derived from the Ancient Greek word “kḗleos” which means “burning” and it refers to its flame-like flower heads."
            },
            
            {
                name: "Moalboal",
                urlPhoto: "images/destinations/cebu/Moalboal_Cebu.jpg",
                altPhoto: "Moalboal Photo",
                title: "Moalboal",
                class: "left-float",
                desc: "Moalboal, Cebu is known as home of sardine run. There are about thousands to million of sardines perfectly coordinated in swimming and moving!"
            },
            
            {
                name: "Basilica Minore del Santo Niño",
                urlPhoto: "images/destinations/cebu/Basilica_Minore.jpg",
                altPhoto: "Basilica Minore del Santo Niño Photo",
                title: "Basilica Minore del Santo Niño",
                class: "right-float",
                desc: "The Minor Basilica of the Holy Child and commonly known as the Santo Niño Basilica, is a minor basilica in Cebu City in the Philippines that was founded in the 1565. It is the oldest Roman Catholic church in the country."
            },
            
            {
                name: "Kawasan Falls",
                urlPhoto: "images/destinations/cebu/Kawasan_Falls.jpg",
                altPhoto: "Kawasan Falls Photo",
                title: "Kawasan Falls",
                class: "left-float",
                desc: "Kawasan Falls is a three-stage cascade of clear turquoise water from mountain springs located in the jungles of the Cebu island. The waterfall is considered as a pearl of the Philippines."
            },
            
            {
                name: "Fuerte de San Pedro",
                urlPhoto: "images/destinations/cebu/Fort_San_Pedro.jpg",
                altPhoto: "Fuerte de San Pedro Photo",
                title: "Fuerte de San Pedro",
                class: "right-float",
                desc: "Fuerte de San Pedro is a military defence structure in Cebu (Philippines), built by the Spanish under the command of Miguel López de Legazpi, first governor of the Captaincy General of the Philippines. It is located in the area now called Plaza Indepedencia, in the pier area of the city."
            },
            
            {
                name: "Magellan’s Cross",
                urlPhoto: "images/destinations/cebu/Magellans_Cross.jpg",
                altPhoto: "Magellan’s Cross Photo",
                title: "Magellan’s Cross",
                class: "left-float",
                desc: "It is an important symbol of Cebu that was planted by Magellan 1521 when he baptised the first Christian Filipinos, Rajah Humabon and Queen Juana. This cross is housed in a chapel next to the Basilica Minore del Santo Niño on Magallanes Street, just in front of the city center of Cebu City."
            }
            
        ]},
        
        {
            id: 2,
            title: "Bataan",
            urlPhoto: "images/homepage/destinations/Bataan.jpg",
            altPhoto: "Bataan Photo",
            name: "Bataan",
            destiDesc: "Bataan (/bɑːtɑːˈɑːn/ Filipino: Lalawigan ng Bataan; Kapampangan: Lalawigan ning Bataan) is a province situated in the Central Luzon region of the Philippines. Its capital is the City of Balanga. Occupying the entire Bataan Peninsula on Luzon, Bataan is bordered by the provinces of Zambales and Pampanga to the north. The peninsula faces the South China Sea to the west and Subic Bay to the north-west, and encloses Manila Bay to the east. The Battle of Bataan is famous in history as one of the last stands of American and Filipino soldiers before they were overwhelmed by the Japanese forces in World War II. The Bataan Death March was named after the province, where the infamous march started.",
            sourceUrl: "https://en.wikipedia.org/wiki/Bataan",
            topDesti: [  
            {
                name: "Bataan Nuclear Powerplant",
                urlPhoto: "images/destinations/bataan/bataan_nuclear_powerplant.jpg",
                altPhoto: "Bataan Nuclear Powerplant Photo",
                title: "Bataan Nuclear Powerplant",
                class: "right-float",
                desc: "Bataan Nuclear Powerplant is is a nuclear power plant, completed but never fueled, on Bataan Peninsula, 100 kilometres (62 mi) west of Manila in the Philippines. It is located on a 3.57 square kilometre government reservation at Napot Point in Morong, Bataan. It was the Philippines' only attempt at building a nuclear power plant. It was mothballed due to safety concerns in the wake of the 1986 Chernobyl nuclear disaster in the former Soviet Ukraineand issues regarding corruption. The plant has been described by the bishop of Balanga, Bataan, as 'a colossal monument to man’s greed, model of graft and corruption'."
            },
                
            
            {
                name: "Filipino-Japanese Friendship Marker",
                urlPhoto: "images/destinations/bataan/fil-jap_friendship_marker.jpg",
                altPhoto: "Filipino-Japanese Friendship Marker Photo",
                title: "Filipino-Japanese Friendship Marker",
                class: "left-float",
                desc: "Filipino-Japanese Friendship Marker is located in Bagac.It is 2-hour drive from Manila and 2-hour drive from Balanga by means of Mini Bus"
            },
                
            {
                name: "Mount Samat",
                urlPhoto: "images/destinations/bataan/mount_samat.jpg",
                altPhoto: "Mount Samat Photo",
                title: "Mount Samat",
                class: "right-float",
                desc: "Mount Samat (Tagalog pronunciation: [samat]) is a historic mountain in the town of Pilár, Province of Bataan, in the Republic of the Philippines. Located near its summit is the Mount Samat National Shrine, a national shrine dedicated to the fallen Filipino and American fallen during World War II."
            },
            
            {
                name: "Pawikan Conservatory",
                urlPhoto: "images/destinations/bataan/pawikan_conservatory.jpg",
                altPhoto: "Pawikan Conservatory Photo",
                title: "Pawikan Conservatory",
                class: "left-float",
                desc: "The center was set up by the Department of Environment and Natural Resources (DENR) as an NGO effort to help save the endangered species. Poaching problems, natural predation, illegal trade, harsh fishing conditions and climate change all threaten the pawikan. Pawikan Conservation Center (PCC) aims to help protect the endangered species by educating the local community, providing a hatchery and allowing volunteers to help release the baby turtles to the sea."
            },
            

            {
                name: "Las Casas Filipinas de Acuzar",
                urlPhoto: "images/destinations/bataan/las_casas.jpg",
                altPhoto: "Las Casas Filipinas de Acuzar Photo",
                title: "Las Casas Filipinas de Acuzar",
                class: "right-float",
                desc: "Travel back to Old Manila when you step foot in Las Casas Filipinas de Acuzar. Home to Jose Acuzar’s collection of restored Spanish-Filipino houses, Las Casas Filipinas de Acuzar showcases the best of Filipino heritage and culture. Each casa comes from an elite and notable accesoria that has its own story to tell. Marvel at the unique Filipino craftsmanship used in the restoration of each house through an interactive heritage tour.The only property in the Philippines to be part of Historic Hotels Worldwide, Las Casas Filipinas de Acuzar serves as a bridge between the rich history of the Spanish colonial era and the contemporary luxury and comfort of a modern hotel."
            },
            
            {
                name: "Zero Kilometer Death March Marker",
                urlPhoto: "images/destinations/bataan/zero_km_death.jpg",
                altPhoto: "Zero Kilometer Death March Marker Photo",
                title: "Zero Kilometer Death March Marker",
                class: "left-float",
                desc: "The Zero Km. Death March Marker was the starting point of the Bataan Death March in Bagac in 1942. A similar marker can be found in Mariveles. There are two (2) Zero Km. Death March Marker, one in the Free Port town of Mariveles and the other is in the beach town of Bagac, the largest town in Bataan. A Philippine Japan Friendship tower is also erected at Bagac."
            }
        ]},
        
        {
            id: 3,
            title: "Calaguas",
            urlPhoto: "images/homepage/destinations/Calaguas.jpg",
            altPhoto: "Calaguas Photo",
            name: "Calaguas",
            destiDesc: "Calaguas, also known as Calaguas Islands, is a group of islands located in the Philippine province of Camarines Norte. It includes the major islands of Tinaga Island and Guintinua Island, the minor Maculabo Island, as well as several other minor islands. Most of the islands are under the administrative jurisdiction of Vinzons, while the minor island of Maculabo is under the jurisdiction of the municipality of Paracale. Recently, the island of Tinaga where the well-known long beach called Mahabang Buhangin is located is experiencing an influx of tourists despite the absence of accommodation. Campers and backpackers visit Mahabang Buhangin to experience its powdery white sands.",
            sourceUrl: "https://en.wikipedia.org/wiki/Calaguas",
            topDesti: [
            {
                name: "Maculabo Island",
                urlPhoto: "images/destinations/calaguas/maculabo_island.jpeg",
                altPhoto: "Guintinua Island Photo",
                title: "Maculabo Island",
                class: "right-float",
                desc: "Maculabo is an island of the Calaguas group of islands in Camarines Norte province of the Philippines. Although part of the Calaguas group, the island is under the jurisdiction of the municipality of Paracale, Camarines Norte. The island serves as a major stop-over going to Tinaga Island where the well-known long beach Mahabang Buhangin is located. The island is about four kilometers long. Locals reside on parts of the Island with farming and fishing as their main source of income."
            },
                
            {
                name: "Tinaga Island",
                urlPhoto: "images/destinations/calaguas/tinaga_island.jpg",
                altPhoto: "Tinaga Island Photo",
                title: "Tinaga Island",
                class: "left-float",
                desc: "Tinaga is an island located in the municipality of Vinzons, Camarines Norte in the Philippines. It is one of the two major islands in the Calaguas Group of Islands, about eight kilometers long. Tinaga island is famous for its long white sand beach called Mahabang Buhangin, which literally means long beach. The beach is becoming popular among backpackers and campers from Manila and elsewhere."
            },
            
            {
                name: "Guintinua Island",
                urlPhoto: "images/destinations/calaguas/guintinua_island.jpg",
                altPhoto: "Guintinua Island Photo",
                title: "Guintinua Island",
                class: "right-float",
                desc: "Guintinua is one of the two major islands in the Calaguas group. It is located in Vinzons, Camarines Norte, Philippines, and is part of the Barangay Banocboc. The island is the second largest in the Calaguas group, measuring almost six and half kilometers long."
            },
            
            {
                name: "St. Peter the Apostle Parish of Vinzons",
                urlPhoto: "images/destinations/calaguas/st_peter_parish.jpg",
                altPhoto: "St. Peter the Apostle Parish of Vinzons Photo",
                title: "St. Peter the Apostle Parish of Vinzons",
                class: "left-float",
                desc: "The St. Peter the Apostle Church, also known as the Parroquia de San Pedro Apostol, is a Roman Catholic church located in the municipality of Vinzons in Camarines Norte, Philippines. It is the oldest church in Camarines Norte built by the Franciscan friars in 1611. The current parish priest is Rev. Fr. Augusto Jesus B. Angeles III, appointed in 2013."
            },
            
            {
                name: "Our Lady of Candelaria Church, Paracale",
                urlPhoto: "images/destinations/calaguas/our_lady_candelaria.jpg",
                altPhoto: "Our Lady of Candelaria Church, Paracale Photo",
                title: "Our Lady of Candelaria Church, Paracale",
                class: "right-float",
                desc: "Thirty years after the arrival of the Spaniards in the Visayas, Paracale became a mission post by Franciscan friars. The mission was, however, abandoned in 1634. It was reestablished four years later only to be abandoned again in 1662. It was formally established as a town in 1863. Derived from 'para cale' or canal digger, Paracale was known to have a number of gold mines. Its 404-year-old church features the miraculous image of the Our Lady of the Candelaria. In the historical accounts treasured in the vaults of the Paracale Roman Catholic Convent, it was recorded that one morning in 1809, 37 fully-loaded vintas attempted an invasion of Paracale."
            },
            
            {
                name: "Surfing in Daet’s Bagasbas Beach",
                urlPhoto: "images/destinations/calaguas/surf_bagasbas.jpg",
                altPhoto: "Bagasbas Beach Photo",
                title: "Bagasbas Beach",
                class: "left-float",
                desc: "Being the easiest break to get to makes Bagasbas Beach, the surf spot of choice for most surfers visiting the area. The surf here breaks left and right on a sand bar, it is ideal for beginners and experienced surfers alike."
            }
            
            
        ]},
        
        {
            id: 4,
            title: "Ilocos",
            urlPhoto: "images/homepage/destinations/Ilocos.jpg",
            altPhoto: "Ilocos Photo",
            name: "Ilocos",
            destiDesc: "The Ilocos Region, containing four provinces, is named after Ilocos. 56 percent of the inhabitants of the region are Pangasinan people, who belong to a different ethnolinguistic group from the Ilocanos. Ilocos may also refer to the former province before Ilocos Norte and Ilocos Sur were divided.",
            sourceUrl: "https://en.wikipedia.org/wiki/Ilocos",
            topDesti: [
            {
                name: "Marcos Mausoleum",
                urlPhoto: "images/destinations/ilocos/marcos_musoleum.jpg",
                altPhoto: "Marcos Mausoleum Photo",
                title: "Marcos Mausoleum",
                class: "right-float",
                desc: "The Ferdinand E. Marcos Presidential Center is a museum situated in Batac, Ilocos Norte dedicated to former Philippine President Ferdinand Marcos which also hosts the cenotaph of the former President. The museum shows memorabilia of the late president, from his stint in the armed forces down to his presidency. The large cenotaph which contains the glass-encased coffin in which the widely believed embalmed body of Marcos was on public display shortly after his remains were brought in Ilocos Norte from the United States in 1993 until his body was re-interred at the Heroes' Cemetery in Taguig on November 18, 2016. A wax replica of Marcos remains to be displayed inside the glass coffin."
            },
               
            {
                name: "Bangui Windmills",
                urlPhoto: "images/destinations/ilocos/bangui_windmills.jpg",
                altPhoto: "Bangui Windmills Photo",
                title: "Bangui Windmills",
                class: "left-float",
                desc: "Bangui Wind Farm is a wind farm in Bangui, Ilocos Norte, Philippines. The wind farm uses 20 units of 70-metre (230 ft) high Vestas V82 1.65 MW wind turbines, arranged on a single row stretching along a nine-kilometer shoreline off Bangui Bay, facing the West Philippine Sea."
            },
            
            {
                name: "Paoay Sand Dunes",
                urlPhoto: "images/destinations/ilocos/sand_dunes.jpg",
                altPhoto: "Paoay Sand Dunes Photo",
                title: "Paoay Sand Dunes",
                class: "right-float",
                desc: "The Ilocos Sand Dunes Stretches encompasses the towns of Currimao through to Pasuquin in Ilocos Norte. The La Paz Sand Dunes in Laoag City is one of the more popular sand dune destinations in Ilocos Norte. But more recently, the PAOAY SAND DUNES is remarkably gaining popularity to tourists travelling up north."
            },
                
            {
                name: "Pagudpud",
                urlPhoto: "images/destinations/ilocos/pagudpud.jpg",
                altPhoto: "Pagudpud Photo",
                title: "Pagudpud",
                class: "left-float",
                desc: "Pagudpud, officially the Municipality of Pagudpud, is a 4th class municipality in the province of Ilocos Norte, Philippines. According to the 2015 census, it has a population of 23,770 people. It is the northernmost settlement on Luzon Island and a popular tourist destination because of its resorts and beaches. Pagudpud was made a municipality on July 5, 1954. It had previously been a part of the neighboring town of Bangui."
            },
            
            {
                name: "Paoay Church",
                urlPhoto: "images/destinations/ilocos/paoay_church.jpg",
                altPhoto: "Paoay Church Photo",
                title: "Paoay Church",
                class: "right-float",
                desc: "The Saint Augustine Church (Spanish: Iglesia de San Agustín de Paoay), commonly known as the Paoay Church, is the Roman Catholic church of the municipality of Paoay, Ilocos Norte in the Philippines. Completed in 1710, the church is famous for its distinct architecture highlighted by the enormous buttresses on the sides and back of the building. It is declared as a National Cultural Treasure by the Philippine government in 1973 and a UNESCO World Heritage Site under the collective group of Baroque Churches of the Philippines in 1993."
            },
                
            {
                name: "Baluarte Zoo",
                urlPhoto: "images/destinations/ilocos/baluarte.jpg",
                altPhoto: "Baluarte Zoo Photo",
                title: "Baluarte Zoo",
                class: "left-float",
                desc: "The Baluarte Zoo was established by local politician and businessman, Chavit Singson. Singson, who cites his hunting hobby as his motive in setting up Baluarte only considered opening a zoo when his hunting trophy collection grew too big. He thought that a zoo would serve to edify it patrons aside from promoting conservation and protection of endangered species. Described as a interactive wildlife sanctuary, the facility was designed and developed by Singson himself."
            }
            
            
        ]},
        {
            id: 5,
            title: "Baguio",
            urlPhoto: "images/homepage/destinations/Baguio.jpg",
            altPhoto: "Baguio Photo",
            name: "Baguio",
            destiDesc: "Baguio, officially the City of Baguio (Ibaloi: Ciudad ne Bagiw; Ilokano: Siudad ti Baguio; Filipino: Lungsod ng Baguio) and popularly referred to as Baguio City, is a mountain resort city located in Northern Luzon, Philippines. It is known as the Summer Capital of the Philippines, owing to its cool climate since the city is located approximately 1,540 meters (5,050 feet) above sea level in the Luzon tropical pine forests ecoregion, which also makes it conducive for the growth of mossy plants and orchids. Baguio is classified as a Highly Urbanized City (HUC). It is geographically located within Benguet, serving as the provincial capital from 1901 to 1916, but has since been administered independently from the province following its conversion into a chartered city. The city is the center of business, commerce, and education in northern Luzon, as well as the regional center of the Cordillera Administrative Region.[5] According to the 2015 census, Baguio has a population of 345,366. Baguio was established as a hill station by the Americans in 1900 at the site of an Ibaloi village known as Kafagway. It was the United States' only hill station in Asia.[6] The name of the city is derived from bagiw, the Ibaloi word for 'moss'.",
            sourceUrl: "https://en.wikipedia.org/wiki/Baguio",
            topDesti: [
            {
                name: "Strawberry Farm",
                urlPhoto: "images/destinations/baguio/strawberry_farm.jpg",
                altPhoto: "Strawberry Farm Photo",
                title: "Strawberry Farm",
                class: "right-float",
                desc: "The Strawberry Farm is located in the nearby town of La Trinidad, Benguet, about less than 10 kms away or 30 minutes travel time from the center of Baguio. The strawberry picking season is from November to May."
            },
            
            {
                name: "Burnham Park",
                urlPhoto: "images/destinations/baguio/burnham_park.jpg",
                altPhoto: "Burnham Park Photo",
                title: "Burnham Park",
                class: "left-float",
                desc: "Burnham Park was envisioned by American architect Daniel Hudson Burnham as part of a larger plan for the city of Baguio in 1905. Burnham worked with William E. Parsons in coming up with plans for the city of Baguio, as well as the capital city of Manila. The area where Burnham Park is situated was formerly known as 'Baguio Meadow'."
            },
            
            {
                name: "Mines View Park",
                urlPhoto: "images/destinations/baguio/mines_view_park.jpg",
                altPhoto: "Mines View Park Photo",
                title: "Mines View Park",
                class: "right-float",
                desc: "Mines View Park is an overlook park on the northeastern outskirts of Baguio in the Philippines. Located on a land promontory 4 km from downtown Baguio, the park overlooks the mining town of Itogon, particularly the abandoned gold and copper mines of the Benguet Corporation, and offers a glimpse of the Amburayan Valley. The observation deck is situated below a winding stone-covered stairway close to the parking area."
            },
            
            {
                name: "Wright Park",
                urlPhoto: "images/destinations/baguio/wright_park.jpg",
                altPhoto: "Wright Park Photo",
                title: "Wright Park",
                class: "left-float",
                desc: "Wright Park is one of the many scenic parts of Baguio. It is located at the city’s eastern part and in front of the main gate of The Mansion (the official summer residence of the president). Wright Park’s main features are the “Pool of Pines” and the Park Circle. Pool of Pines is a shallow elongated rectangular body of water, while the Park Circle is a beautiful spot located at the park’s other end."
            },
            
            {
                name: "Botanical Garden",
                urlPhoto: "images/destinations/baguio/botanical_garden.jpg",
                altPhoto: "Botanical Garden Photo",
                title: "Botanical Garden",
                class: "right-float",
                desc: "The Botanical Garden is located just 1 kilometer from Session Road, along beautiful Leonard Wood between Teachers Camp and Wright Park. You will be welcomed by a bas relief sculpture made of cement and stone depicting the different rituals of the Cordillera tribes, with real live Igorots who will be more than willing to pose for photos for a small fee."
            },
            
            {
                name: "The Mansion",
                urlPhoto: "images/destinations/baguio/mansion.jpg",
                altPhoto: "The Mansion Photo",
                title: "The Mansion",
                class: "right-float",
                desc: "The Mansion House (also known as The Mansion) is the official summer palace of the President of the Philippines. The mansion is located in the summer capital of the country, Baguio, situated around 5,000 feet (1,500 m) asl in the Cordillera Central Range of northern Luzon."
            }
        ]},
        {
            id: 6,
            title: "Anawangin Cove",
            urlPhoto: "images/homepage/destinations/Anawangin.jpg",
            altPhoto: "Anawangin Cove Photo",
            name: "Anawangin Cove",
            destiDesc: "It is a crescent shaped cove with a pristine white sand beach. What makes the place unique is the unusual riddle of tall pine-like trees flourishing round its vicinity. In fact they are not pine trees; they are agoho trees, a species endemic to the Philippines, some Southeast Asian countries and north-eastern parts of Australia. There are no roads leading to Anawangin. It is only accessible by a 30-minute boat ride from Pundaquit, San Antonio, or by a six-hour trek through hot, open trails thru the Pundaquit range. The cove's relative isolation has kept it free from development - as of this writing, there are no resorts on this sparkling piece of natural beauty, save for a few huts and deep wells. Just behind the beach is the pine forest and a marsh, where one can find natural springs feeding to the sea. The area is home to a number of bird species.",
            sourceUrl: "https://en.wikipedia.org/wiki/San_Antonio,_Zambales",
            topDesti: [
            {
                name: "Camping",
                urlPhoto: "images/destinations/anawangin/camping_anawangin.jpg",
                altPhoto: "Camping Photo",
                title: "Camping",
                class: "center-img",
                desc: ""
            },
            
            {
                name: "Swimming",
                urlPhoto: "images/destinations/anawangin/swimming_anawangin.jpg",
                altPhoto: "Swimming at Anawangin Cove Photo",
                title: "Swimming at Anawangin Cove",
                class: "center-img",
                desc: ""
            },
            
            {
                name: "Capones Island",
                urlPhoto: "images/destinations/anawangin/capones_island.jpg",
                altPhoto: "Capones Island Photo",
                title: "Capones Island",
                class: "center-img",
                desc: ""
            },
            
            {
                name: "Camara Island",
                urlPhoto: "images/destinations/anawangin/camara_island.jpg",
                altPhoto: "Camara Island Photo",
                title: "Camara Island",
                class: "center-img",
                desc: ""
            },
            
            {
                name: "Trekking",
                urlPhoto: "images/destinations/anawangin/trekking_anawangin1.jpg",
                altPhoto: "Trekking at Anawangin Cove Photo",
                title: "Trekking at Anawangin Cove",
                class: "center-img",
                desc: ""
            },
            
            {
                name: "",
                urlPhoto: "images/destinations/anawangin/trekking_anawangin.jpg",
                altPhoto: "Trekking at Anawangin Cove Photo",
                title: "Trekking at Anawangin Cove",
                class: "center-img",
                desc: ""
            }
                
        ]} 
    ];
    $scope.hoverText = "[View]";
    
    $scope.page1 = true;
    $scope.page2 = false;

    $scope.pg1 = function() {
        $scope.page1 = true;
        $scope.page2 = false;
    }

    $scope.pg2 = function() {
        $scope.page1 = false;
        $scope.page2 = true;
    }
    
}]);