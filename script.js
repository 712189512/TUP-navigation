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

    // Load the initial video
    const initialVideo = videoSelector.value;
    const videoElement = document.getElementById('video-background');
    videoElement.src = initialVideo;
    videoElement.load();
    resizeVideo();
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

  }
  // Create an image element and set its source
  else if (path.includes(".jpg")) {
    newElement = document.createElement('img');
    newElement.src = path;
    newElement.alt = selectedSearchTerm;
    newElement.style.maxWidth = '100%';
  }


  // Append the image element to the modal body
  modalBody.appendChild(newElement);

  // Show the modal
  $('#fileModal').modal('show');

  // mute the background video when the modal is shown
  var backMute = document.getElementById("video-background");
  if (backMute) {
    backMute.muted = true
  }

  // unmute when modal is hidden
  $("#fileModal").on('hide.bs.modal', function(){
    backMute.muted = false
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












// coordinates for TUP locations
const center = [14.58747,120.98445]
const entrance = [14.587456148690714, 120.98400705626362]
const cafa = [14.58786,120.98471]
const cit = [14.58737,120.98491]
const admin = [14.58658,120.98443]
const cie = [14.58781,120.98434]

// bounding box in case we somehow move the map (it shouldnt)
const corner1 = L.latLng(14.58969,120.98683)
const corner2 = L.latLng(14.58578,120.98245)
const bounds = L.latLngBounds(corner1, corner2)


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
        .bindPopup('<b>COS/CLA Building</b><br />College of Science and College of Liberal Arts')
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
var lineLatLngs = [cafa,admin]
var polyline = L.polyline(lineLatLngs, {color: 'green', interactive: false}).addTo(map)

// resize map to fit inside popup modal
$('#mapModal').on('shown.bs.modal', function(){
  setTimeout(function() {
    map.invalidateSize();
  }, 1);
  });
  