var data = {
  "destinations": [
    {
      "name": "Moon",
      "images": {
        "png": "../assets/destination/image-moon.png",
        "webp": "../assets/destination/image-moon.webp"
      },
      "description": "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      "distance": "384,400 km",
      "travel": "3 days"
    },
    {
      "name": "Mars",
      "images": {
        "png": "../assets/destination/image-mars.png",
        "webp": "../assets/destination/image-mars.webp"
      },
      "description": "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      "distance": "225 mil. km",
      "travel": "9 months"
    },
    {
      "name": "Europa",
      "images": {
        "png": "../assets/destination/image-europa.png",
        "webp": "../assets/destination/image-europa.webp"
      },
      "description": "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      "distance": "628 mil. km",
      "travel": "3 years"
    },
    {
      "name": "Titan",
      "images": {
        "png": "../assets/destination/image-titan.png",
        "webp": "../assets/destination/image-titan.webp"
      },
      "description": "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      "distance": "1.6 bil. km",
      "travel": "7 years"
    }
  ],
  "crew": [
    {
      "name": "Douglas Hurley",
      "images": {
        "png": "../assets/crew/image-douglas-hurley.png",
        "webp": "../assets/crew/image-douglas-hurley.webp"
      },
      "role": "Commander",
      "bio": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
    },
    {
      "name": "Mark Shuttleworth",
      "images": {
        "png": "../assets/crew/image-mark-shuttleworth.png",
        "webp": "../assets/crew/image-mark-shuttleworth.webp"
      },
      "role": "Mission Specialist",
      "bio": "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
    },
    {
      "name": "Victor Glover",
      "images": {
        "png": "../assets/crew/image-victor-glover.png",
        "webp": "../assets/crew/image-victor-glover.webp"
      },
      "role": "Pilot",
      "bio": "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
    },
    {
      "name": "Anousheh Ansari",
      "images": {
        "png": "../assets/crew/image-anousheh-ansari.png",
        "webp": "../assets/crew/image-anousheh-ansari.webp"
      },
      "role": "Flight Engineer",
      "bio": "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
    }
  ],
  "technology": [
    {
      "name": "Launch vehicle",
      "images": {
        "portrait": "../assets/technology/image-launch-vehicle-portrait.jpg",
        "landscape": "../assets/technology/image-launch-vehicle-landscape.jpg"
      },
      "description": "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
    },
    {
      "name": "Spaceport",
      "images": {
        "portrait": "../assets/technology/image-spaceport-portrait.jpg",
        "landscape": "../assets/technology/image-spaceport-landscape.jpg"
      },
      "description": "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
    },
    {
      "name": "Space capsule",
      "images": {
        "portrait": "../assets/technology/image-space-capsule-portrait.jpg",
        "landscape": "../assets/technology/image-space-capsule-landscape.jpg"
      },
      "description": "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
    }
  ]
} 

const qty = document.getElementById("qty-items");
var x = 0;
var y = 0;

data.destinations.forEach(destinations => { 
    $(qty).append(
        '<div class="row destination-pages w-100 mx-auto" data-page="'+ x++ +'">' +
        '<div class="col-12 col-md-12 col-lg-6 px-0">' +
            '<img class="resp-adap" src="' + destinations.images.png + '" alt="' + destinations.name + '" >' + 
        '</div>' + 
        '<div class="col-12 col-md-12 col-lg-6 px-0">' + 
            '<div class="d-flex" id="select">' + 
                '<div class="menu-item" data-label="0">' + '<p>' + data.destinations[0].name + '<p>' + '</div>' +
                '<div class="menu-item" data-label="1">' + '<p>' + data.destinations[1].name + '<p>' + '</div>' +
                '<div class="menu-item" data-label="2">' + '<p>' + data.destinations[2].name + '<p>' + '</div>' +
                '<div class="menu-item" data-label="3">' + '<p>' + data.destinations[3].name + '<p>' + '</div>' +
            '</div>' +
            '<h1 id="title-planet">' + destinations.name + '</h1>' +
            '<p id="destination-text">' + destinations.description + '</p>' +
            '<div class="destination-travel-info">' + 
              '<div class="destination-distance">' + 
                  '<p class="info-holders">Avg. Distance</p>' + 
                  '<span id="distance">' + 
                      destinations.distance
                  + '</span>' +
              '</div>' +
              '<div class="destination-travel">' +
                  '<p class="info-holders">Est. Travel Time</p>' +
                  '<span id="travel-time">' +
                      destinations.travel
                  + '</span>' +
              '</div>' +
            '</div>' +
        '</div>' +
        '</div>',
    );
});


$(document).ready(function(){
    var firstpage = $(".destination-pages:nth-child(1)")
    firstpage.addClass('dest-show');
})
$(".menu-item").click(function(){
    var number = $(this).attr("data-label");
    var selected = parseInt(number) + 1;
    var Main = $(this).parents("#qty-items");
    var current = $(this).parents(".destination-pages");
    var Pages = Main.children(".destination-pages:nth-child("+selected+")");
    if (selected !== current) {
        current.removeClass('dest-show');
        setTimeout(() => {
            Pages.addClass("dest-show");
        }, 1000);
    }

    $(".menu-item").addClass("disabled");
    setTimeout(() => {
        $(".menu-item").removeClass("disabled");
    }, 1500);
});

// Crew Javascript
const crewbox = document.getElementById('crew-team');
var a = 0;
var b = 0;
data.crew.forEach(crew => { 
  $(crewbox).append(
      '<div class="row crew-pages w-100 mx-auto" data-page="'+ a++ +'">' +
      '<div class="col-12 col-md-12 col-lg-6 px-0 row-reverse mt-5">' +
          '<img class="resp-adap" src="' + crew.images.png + '" alt="' + crew.name + '" >' + 
      '</div>' + 
        '<div class="col-12 col-md-12 col-lg-6 px-0">' + 
          '<div class="destination-travel-info">' + 
            '<div class="destination-distance mt-5">' + 
                '<span id="crew-role">' + 
                    crew.role
                + '</span>' +
            '</div>' +
          '</div>' +
          '<h1 id="title-planet">' + crew.name + '</h1>' +
          '<p id="destination-text">' + crew.bio + '</p>' +
          '<div class="d-flex mt-3" id="select-crew">' + 
            '<div class="menu-item" data-label="0">' + '<span class="crew-item">' + '<span>' + '</div>' +
            '<div class="menu-item" data-label="1">' + '<span class="crew-item">' + '<span>' + '</div>' +
            '<div class="menu-item" data-label="2">' + '<span class="crew-item">' + '<span>' + '</div>' +
            '<div class="menu-item" data-label="3">' + '<span class="crew-item">' + '<span>' + '</div>' +
          '</div>' +
        '</div>' +
      '</div>',
  );
});


$(document).ready(function(){
  var firstpage = $(".crew-pages:nth-child(1)")
  firstpage.addClass('crew-show');
})
$(".menu-item").click(function(){
  var number = $(this).attr("data-label");
  var selected = parseInt(number) + 1;
  var Main = $(this).parents("#crew-team  ");
  var current = $(this).parents(".crew-pages");
  var Pages = Main.children(".crew-pages:nth-child("+selected+")");
  if (selected !== current) {
      current.removeClass('crew-show');
      setTimeout(() => {
          Pages.addClass("crew-show");
      }, 1000);
  }

  $(".menu-item").addClass("disabled");
  setTimeout(() => {
      $(".menu-item").removeClass("disabled");
  }, 1500);
});



// Technology Javascript
const technology = document.getElementById('technology');
var h = 0;
var k = 0;
data.technology.forEach(tech => { 
  $(technology).append(
      '<div class="row tech-pages w-100 mx-auto" data-page="'+ h++ +'">' +
        '<div class="col-12 col-md-12 col-lg-6 px-0 row-reverse mt-5">' +
            '<img class="resp-adap" src="' + tech.images.portrait + '" alt="' + tech.name + '" >' + 
            '<img class="resp-adap-md" src="' + tech.images.landscape + '" alt="' + tech.name + '" >' + 
        '</div>' + 
        '<div class="col-12 col-md-12 col-lg-6 px-0 container-tech">' + 

          '<div class="row w-100">' +

            '<div class="col-12 col-md-12 col-lg-2">' +
              '<div class="d-flex mt-3" id="select-tech">' + 
                '<div class="menu-item" data-label="0">' + '<span class="tech-item">' + '1' + '<span>' + '</div>' +
                '<div class="menu-item" data-label="1">' + '<span class="tech-item">' + '2' + '<span>' + '</div>' +
                '<div class="menu-item" data-label="2">' + '<span class="tech-item">' + '3' + '<span>' + '</div>' +
              '</div>' +
            '</div>' +

            '<div class="col-12 col-md-12 col-lg-10">' +
              '<span class="small-title">THE TERMINOLOGY…</span>' +
              '<h1 id="title-planet">' + tech.name + '</h1>' +
              '<div class="tech-travel-info">' + 
                '<div class="tech-distance mt-5">' + 
                    '<span id="tech-role">' + 
                        tech.description
                    + '</span>' +
                '</div>' +
              '</div>' +
            '</div>' +

          '</div>' +
          
        '</div>' +
      '</div>',
  );
});


$(document).ready(function(){
  var firstpage = $(".tech-pages:nth-child(1)")
  firstpage.addClass('tech-show');
})
$(".menu-item").click(function(){
  var number = $(this).attr("data-label");
  var selected = parseInt(number) + 1;
  var Main = $(this).parents("#technology  ");
  var current = $(this).parents(".tech-pages");
  var Pages = Main.children(".tech-pages:nth-child("+selected+")");
  if (selected !== current) {
      current.removeClass('tech-show');
      setTimeout(() => {
          Pages.addClass("tech-show");
      }, 1000);
  }

  $(".menu-item").addClass("disabled");
  setTimeout(() => {
      $(".menu-item").removeClass("disabled");
  }, 1500);
});

