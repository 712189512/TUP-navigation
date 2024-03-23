$(document).ready(function() {
    $('.dropdown-toggle').dropdown();

    // Resize video to fill the window
    const resizeVideo = () => {
        const video = document.getElementById('video-background');
        const containerWidth = window.innerWidth;
        const containerHeight = window.innerHeight;

        const videoWidth = video.offsetWidth;
        const videoHeight = video.offsetHeight;

        const widthRatio = containerWidth / videoWidth;
        const heightRatio = containerHeight / videoHeight;

        const ratio = Math.max(widthRatio, heightRatio);

        video.style.width = videoWidth * ratio + 'px';
        video.style.height = videoHeight * ratio + 'px';
    };

    // Call the resizeVideo function on window resize
    window.addEventListener('resize', resizeVideo);

    // Change the video source based on the selected option
    const videoSelector = document.getElementById('video-selector');
    videoSelector.addEventListener('change', function() {
        const videoSource = this.value;
        const videoElement = document.getElementById('video-background');
        videoElement.src = videoSource;
        videoElement.load();
        resizeVideo();
    });

    // Load the intro video then the looping video
    const initialVideo = videoSelector.value;
    const videoElement = document.getElementById('video-background');
    videoElement.src = "assets\\INTRO AREAL VIEW0034-0150.mp4";
    videoElement.load();
    resizeVideo();
    
    const playNextVideo = () => {
      videoElement.src = initialVideo;
      videoElement.loop = true;
      videoElement.load();
      resizeVideo();
    }
    videoElement.addEventListener('ended', playNextVideo);
});


document.addEventListener('DOMContentLoaded', function() {
  var fadeOutPicture = document.querySelector('.fade-out-picture');
    var faded = document.getElementById("fade-out-picture")

    if (fadeOutPicture) {
      faded.addEventListener('click', () => {
        fadeOutPicture.classList.add("animate")

        // Fade out the picture after a delay (e.g., 2 seconds)
        setTimeout(function() {
          faded.style.opacity = '0';
          var forDeletion = document.querySelector('.fade-out-picture.animate')
          // console.log(forDeletion)
    
          if (forDeletion) {
            forDeletion.remove();
          }
          // faded.remove();
          // fadeOutPicture.style.opacity = '0';
          // $("div").remove(".fade-out-picture animate");
    
          // Trigger autoplay of the background video
          var backgroundVideo = document.querySelector('.background-video video');
          if (backgroundVideo) {
            backgroundVideo.play();
          }
        }, 3000); // Adjust the delay to match the duration of the fade-out animation
        
      });
    }

});



const searchInput = document.getElementById('searchInput');
const suggestionList = document.getElementById('suggestionList');
const searchResults = document.getElementById('searchResults');

// search terms for search box
const searchTerms = [
  'Programs',
  'Admission Requirements',
  'Mission Vision', 
  'Graduate Program Offers',
  'ENROLLMENT GUIDE',
  'REGISTRAR',
  'CAFA',
  'CIE',
  'CIT',
];

// associated search paths
const searchPaths = [
  'assets\\Programs.jpg',
  'assets\\Admission Requirements.jpg',
  'assets\\Mission Vision.jpg', 
  'assets\\Graduate Program Offers.jpg', 
  'assets\\ENROLLMENT TOUR GUIDE FOR FRESHMEN.mp4',
  'assets\\REGISTRAR.mp4',
  'assets\\CAFA.mp4',
  'assets\\CIE.mp4',
  'assets\\CIT.mp4',
]

const videoDropups = [
  'Information and History',
  'ENROLLMENT GUIDE',
  'REGISTRAR',
  'CAFA',
  'CIE',
  'CIT',
]

// files that the user cannot access through search and is also not a part of the main files list
const inaccessibleFiles = [
  'TUP FACADE.jpg',
]

// filenames (to be matched with their respective search terms using their index)
const files = [
  'assets\\Programs.jpg',
  'assets\\Admission Requirements.jpg',
  'assets\\Mission Vision.jpg', 
  'assets\\Graduate Program Offers.jpg', 
  'assets\\TUP INFO N HISTORY VIDEO-EDITED.mp4',
  'assets\\ENROLLMENT TOUR GUIDE FOR FRESHMEN.mp4',
  'assets\\REGISTRAR.mp4',
  'assets\\CAFA.mp4',
  'assets\\CIE.mp4',
  'assets\\CIT.mp4',
]

// starts at index 4 of the files array for matching purposes
const videoPaths = [
  'assets\\TUP INFO N HISTORY VIDEO-EDITED.mp4',
  'assets\\ENROLLMENT TOUR GUIDE FOR FRESHMEN.mp4',
  'assets\\REGISTRAR.mp4',
  'assets\\CAFA.mp4',
  'assets\\CIE.mp4',
  'assets\\CIT.mp4',
]

function generateDropdown(namesArray) {
  var dropdown = document.getElementById('video-selector');

  // Clear existing options
  dropdown.innerHTML = '';

  // Create and append new options
  namesArray.forEach(function(name) {
    var option = document.createElement('option');
    option.value = videoPaths[namesArray.indexOf(name)];    // path
    option.textContent = name;                              // shown text
    if (!dropdown.hasChildNodes) {
      option.selected = true
    }
    dropdown.appendChild(option);
  });
}
generateDropdown(videoDropups)

searchInput.addEventListener('click', () => {
  showSuggestionsAsResults();
});

searchInput.addEventListener('input', () => {
  performSearch();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault()
    sanitizeInput()
  }
});


document.addEventListener('click', (event) => {
  if (!searchInput.contains(event.target)) {
    searchResults.style.display = 'none';
  }
});

var userClicked = false
function showSuggestionsAsResults() {
  searchResults.innerHTML = '';
  searchResults.style.display = 'block';
  userClicked = false;

  searchTerms.forEach((searchTerm) => {
    const suggestionItem = document.createElement('div');
    suggestionItem.textContent = searchTerm;
    suggestionItem.addEventListener('click', () => {
      searchInput.value = searchTerm;
      searchResults.style.display = 'none';
      userClicked = true;
      // sanitizeInput()
    });
    searchResults.appendChild(suggestionItem);
  });
}

function performSearch(selectedSuggestion = '') {
  searchResults.innerHTML = '';
  let searchTerm = searchInput.value.toLowerCase();

  if (selectedSuggestion) {
    searchTerm = selectedSuggestion.toLowerCase();
    searchInput.value = selectedSuggestion;
    userClicked = true;
  }

  if (searchTerm.trim() === '') {
    showSuggestionsAsResults();
    return;
  }

  const filteredData = searchTerms.filter((item) =>
    item.toLowerCase().includes(searchTerm)
  );

  if (filteredData.length === 0) {
    searchResults.innerHTML = 'No results found.';
    searchResults.style.display = 'block';
  } else {
    filteredData.forEach((item) => {
      const resultItem = document.createElement('div');
      // resultItem.textContent = item;
      // searchResults.appendChild(resultItem);

      resultItem.textContent = item;
      resultItem.addEventListener('click', () => {
        searchInput.value = item; // Set the value to the clicked suggestion
        searchResults.style.display = 'none';
        // sanitizeInput(); // Perform search based on the clicked suggestion
      });
      searchResults.appendChild(resultItem);


    });
    // searchResults.style.display = 'block';
    if (userClicked) {
        searchResults.style.display = 'none';
    } else {
        searchResults.style.display = 'block';
    }
  }
}

function sanitizeInput() {
  const lowercaseInput = searchInput.value.toLowerCase();
  var fileExists = searchTerms.some(searchTerm => searchTerm.toLowerCase() === lowercaseInput)
  if (fileExists) {
    openFileModal()
  }
}

var minimapAppend = null
function openFileModal() {
  const selectedSearchTerm = searchInput.value;
  const path = searchPaths[searchTerms.indexOf(selectedSearchTerm)]
  const modalBody = fileModal.querySelector('.file-modal-body');
  var newElement;

  // Clear the modal body content
  modalBody.innerHTML = '';

  // Create an video element and set its source
  if (path.includes(".mp4")) {
    newElement = document.createElement('video');
    newElement.src = path;
    newElement.controls = true
    newElement.autoplay = true
    newElement.style.maxWidth = '65%';
    newElement.style.width = "fit-content";
    newElement.style.margin = "3px";
    var minimapHandler = minimap(selectedSearchTerm);
    minimapAppend = minimapHandler.miniMapContainer

  }
  // Create an image element and set its source
  else if (path.includes(".jpg")) {
    newElement = document.createElement('img');
    newElement.src = path;
    newElement.alt = selectedSearchTerm;
    newElement.style.maxWidth = '100%';
    minimapAppend = null;
  }


  // Append the new element to the modal body
  modalBody.appendChild(newElement);
  if (minimapAppend) {
    modalBody.appendChild(minimapAppend);
  }


  // Show the modal
  $('#fileModal').modal('show');
  minimapHandler.animateRoute();

  // mute the background video when the modal is shown
  var backMute = document.getElementById("video-background");
  if (backMute) {
    backMute.muted = true
  }

  // unmute when modal is hidden
  $("#fileModal").on('hide.bs.modal', function(){
    backMute.muted = false
    minimapAppend = null

    miniMap.eachLayer(function (layer) {
      miniMap.removeLayer(layer);
   });

  });

  // change dropdown
  changeSelectedOption(selectedSearchTerm);
}

function changeSelectedOption(newValue) {
  // Get the dropdown element
  var dropChange = document.getElementById('video-selector');

  // Loop through the options
  for (var i = 0; i < dropChange.options.length; i++) {
      // Check if the option value matches the new value
      if (dropChange.options[i].textContent === newValue) {
          // Set the option as selected
          dropChange.selectedIndex = i;
          break;
      }
  }
}






// common coordinates for navigation purposes
const start = [14.587325072165925, 120.98375008034971]
const entranceLeftStep = [14.58746394462632, 120.98392978835241]


// coordinates for TUP locations
const center = [14.58747,120.98445]
const entrance = [14.5874366892922, 120.9839083306817]
const cafa = [14.58786,120.98471]
const cit = [14.58737,120.98491]
const admin = [14.58658,120.98443]
const cie = [14.58781,120.98434]

// bounding box in case we somehow move the map (it shouldnt)
const corner1 = L.latLng(14.58969,120.98683)
const corner2 = L.latLng(14.58578,120.98245)
const bounds = L.latLngBounds(corner1, corner2)

// CIE-specific navigation
// -start
// -entrance
// -leftstep
const CIEnode1 = [14.587297816814845, 120.98416314053932]
const CIEnode2 = [14.58758,120.98437]
const CIEnode3 = [14.587826050847909, 120.98439381058128]
const CIEpoly = L.polygon([
    [14.587658625506519, 120.98436430621317],
    [14.587814370078304, 120.98412693071268],
    [14.588160901355186, 120.98436967063125],
    [14.588031114424, 120.98457083630964],
    [14.58787796574675, 120.98453864980107],
], {color: 'blue', interactive: false})


// define map and turn of all zoom and movement settings
const map = L.map('map', {
  center: center,
  zoomControl: false,
  dragging: false,
  boxZoom: false,
  doubleClickZoom: false,
  keyboard: false,
  scrollWheelZoom: false,
  touchZoom: false,
  maxBounds: bounds,
  zoomSnap: 0.1,
})
.setView(center, 17.5)



// map tile and mandatory attribution
const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '<a href="https://www.openstreetmap.org/fixthemap">Fix the Map</a> | &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// markers for buildings
var marker1 = L.marker(entrance)
        .addTo(map)
        .bindPopup('<b>COS/CLA Building</b><br />Main Entrance')
var marker2 = L.marker(cafa)
        .addTo(map)
        .bindPopup('<b>CAFA Building</b><br />College of Fine Arts')
var marker3 = L.marker(cit)
        .addTo(map)
        .bindPopup('<b>CIT Building</b><br />College of Industrial Technology')
var marker4 = L.marker(admin)
        .addTo(map)
        .bindPopup('<b>Admin Building</b><br />Administration Offices')
var marker5 = L.marker(cie)
        .addTo(map)
        .bindPopup('<b>CAFA Building</b><br />College of Industrial Education')

// polygon is drawn by:
//	1st array: shaded area
// 	successive arrays: cut away from shaded area
// so we draw 1 massive rectangle and cut away the outline of TUP
var polygon = L.polygon([
  [
    [14.59135,120.97814],		// the big rectangle
    [14.59241,120.99277],
    [14.58231,120.99385],
    [14.58164,120.97670],
  ],
  [
    [14.58834,120.98474],		// TUP itself
    [14.58639,120.98561],
    [14.58621,120.98406],
    [14.58682,120.98383],
    [14.58703,120.98356],
    [14.58834,120.98448]
  ]
], {
  color: "red",
  fillColor: '#f03',
    fillOpacity: 0.5,
  interactive: false,
}).addTo(map);

// draw line
// var lineLatLngs = [cafa,admin]
// var polyline = L.polyline(lineLatLngs, {color: 'green', interactive: false}).addTo(map)

// Create a new map container for the minimap
var miniMapContainer = L.DomUtil.create('div', 'minimap-container');
miniMapContainer.id = "minimapModal"

// Initialize the minimap
// function initializeMinimap() {
//   return L.map(miniMapContainer, {
//     zoom: 18, // Set the initial zoom level
//     center: center,
//     zoomControl: false, // Disable the zoom control
//     attributionControl: false, // Hide the attribution control
//     dragging: false, // Disable dragging
//     doubleClickZoom: false, // Disable double-click zoom
//     scrollWheelZoom: false, // Disable scroll wheel zoom
//     boxZoom: false, // Disable box zoom
//     keyboard: false, // Disable keyboard navigation
//     zoomSnap: 0.25 // Set the zoom snap level
//   });
// }

var miniMap = L.map(miniMapContainer, {
  zoom: 18, // Set the initial zoom level
  center: center,
  zoomControl: false, // Disable the zoom control
  attributionControl: false, // Hide the attribution control
  dragging: false, // Disable dragging
  doubleClickZoom: false, // Disable double-click zoom
  scrollWheelZoom: false, // Disable scroll wheel zoom
  boxZoom: false, // Disable box zoom
  keyboard: false, // Disable keyboard navigation
  zoomSnap: 0.25 // Set the zoom snap level
});

var interval = []
function minimap(destination) {
    if (destination === 'CIE') {
      var package = [
        [
          start,
          entrance,
          entranceLeftStep,
          CIEnode1,
          CIEnode2,
          CIEnode3,
        ],
        [
          CIEpoly
        ]
      ]

      interval = [2500, 3833, 8708, 13000]
    }
    return createMiniMap(package)
}
  

  
function createMiniMap(data) {
  var points = data[0]
  var other = data[1]
  // console.log(data)
  var line = L.polyline(points, {color: 'green', interactive: false}).addTo(miniMap)
  // miniMap.panTo(points[0])

  // var animatedMarker = L.animatedMarker(line.getLatLngs());

  // miniMap.addLayer(animatedMarker)

//   let myMarkerPlayer = L.markerPlayer([
//       {
//           latlng: [48.8567, 2.3508]
//       },
//       {
//           latlng: [48.8567, 2.3508]
//       }
//   ], 30000).addTo(map);
// //...
// myMarkerPlayer.start();


  other.forEach(func => func.addTo(miniMap))


  // Add a tile layer to the minimap
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(miniMap);

  
  // Create a marker for the current position
  var currentPositionMarker = L.marker(points[0]).addTo(miniMap);

  // Function to update the position of the marker on the minimap
  function updateMiniMapMarker(latlng) {
      currentPositionMarker.setLatLng(latlng);
      miniMap.panTo(latlng);
  }

  // Function to animate the route
  function animateRoute() {
      var currentPoint = 0;
      var interval = setInterval(function() {
          if (currentPoint < points.length) {
              updateMiniMapMarker(points[currentPoint]);
              currentPoint++;
          } else {
              clearInterval(interval);
          }
      }, 500); // Adjust the delay (in milliseconds) between points
  }

  
  // Update the position of the marker on the minimap during route animation
  miniMap.on('moveend', function () {
        updateMiniMapMarker(miniMap.getCenter());
    });
    
    // function animateRoute() {
    //   console.log("Hello world")
    // }

  // Style the minimap container
  var miniMapStyle = document.createElement('style');
  miniMapStyle.innerHTML = `
      .minimap-container {
          position: absolute;
          bottom: 10px;
          left: 10px;
          width: 200px;
          height: 150px;
          border: 1px solid #ccc;
          z-index: 999;
      }
  `;
  document.head.appendChild(miniMapStyle);

  return { miniMapContainer, animateRoute };
}



// resize map to fit inside popup modal
$('#mapModal').on('shown.bs.modal', function(){
  setTimeout(function() {
    map.invalidateSize();
  }, 1);
});

// resize minimap to fit inside popup
$('#fileModal').on('shown.bs.modal', function(){
  setTimeout(function() {
    miniMap.invalidateSize();
  }, 1);
});

  