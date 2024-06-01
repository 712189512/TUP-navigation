$(document).ready(function() {
  // $('.dropdown-toggle').dropdown();
  // Resize video to fill the window
  const resizeVideo = () => {
    loadingScreen.style.display = 'none';
    const videoRatio = videoBackground.offsetWidth / videoBackground.offsetHeight;
    const windowRatio = window.innerWidth / window.innerHeight;

    if (videoRatio < windowRatio) {
      videoBackground.style.width = 'auto';
      videoBackground.style.height = '100vh';
    } else {
      videoBackground.style.width = '100vw';
      videoBackground.style.height = 'auto';
    }
  };

  function loadScreen() {
    // Show loading screen initially
    loadingScreen.style.display = 'flex';
  
    // Hide loading screen when video is loaded
    videoBackground.onloadeddata = function() {
      resizeVideo(); // Call the resizeVideo function here
    };
  }

  // reposition search bar
  const searchContainer = document.querySelector('.search-container');
  const screenWidth = window.innerWidth;
  const aspectRatio = 16 / 9;
  const screenHeight = screenWidth / aspectRatio;
  const halfHeight = screenHeight / 2;
  var centerY = window.innerHeight / 2 - halfHeight;
  if (centerY < 0) {
    centerY = 0
  }
  searchContainer.style.top = `${centerY}px`;
  
  // reposition bottom row
  const minimapCircle = document.getElementById('map-container');
  const buttonRow = document.getElementById('homeButtons');

  var centerBottom = window.innerHeight / 2 - halfHeight;
  // if (centerBottom < window.innerHeight && centerBottom > 0) {
  if (centerBottom < 0) {
    centerBottom = 5
  }
  minimapCircle.style.bottom = `${centerBottom}px`;
  buttonRow.style.bottom = `${centerBottom}px`;
  
  // minimapCircle.style.bottom = min(5);
  // buttonRow.style.bottom = `5px`;
  






  // Call the resizeVideo function on window resize
  window.addEventListener('resize', resizeVideo);
  window.onload = resizeVideo()

  // selector for background video element
  const videoSelector = document.getElementById('video-selector');

  // Load the intro video then the looping video
  const initialVideo = videoSelector.value;
  const videoElement = document.getElementById('video-background');
  // videoElement.src = "assets\\INTRO AREAL VIEW0034-0150.mp4";
  videoElement.src = "https://github.com/712189512/TUP-navigation/raw/main/assets/INTRO%20AREAL%20VIEW0034-0150.mp4";
  videoElement.type = "video/mp4"
  videoElement.load();
  loadingScreen.style.display = 'flex';
  loadScreen();
  
  const playNextVideo = () => {
    videoElement.src = initialVideo;
    videoElement.loop = true;
    videoElement.muted = true;
    videoElement.load();
    loadingScreen.style.display = 'flex';
    loadScreen();
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


const loadingScreen = document.getElementById('loadingScreen');
const videoBackground = document.getElementById('video-background');

const searchInput = document.getElementById('searchInput');
const suggestionList = document.getElementById('suggestionList');
const searchResults = document.getElementById('searchResults');



// search terms for search box
const searchTerms = [
  'Programs',
  'Admission Requirements',
  'Mission Vision', 
  'Graduate Program Offers',
  'ENROLLMENT TOUR GUIDE FOR FRESHMEN',
  'ENROLLMENT TOUR GUIDE FOR MASTERAL',
  'REGISTRAR',
  'CASHIER',
  'CAFA',
  'CIE',
  'CIT',
  'COS',
  'CLA',
  'COE',
  'CHAPEL',
  'GRAD OFFICE',
];

// associated search paths
// const searchPaths = [
//   'assets\\Programs.jpg',
//   'assets\\Admission Requirements.jpg',
//   'assets\\Mission Vision.jpg', 
//   'assets\\Graduate Program Offers.jpg', 
//   'assets\\ENROLLMENT TOUR GUIDE FOR FRESHMEN.mp4',
//   'assets\\ENROLLMENT TOUR GUIDE FOR MASTERAL.mp4',
//   'assets\\REGISTRAR.mp4',
//   'assets\\CASHIER.mp4',
//   'assets\\CAFA (1).mp4',
//   'assets\\CIE (1).mp4',
//   'assets\\CIT (1).mp4',
//   'assets\\COS (1).mp4',
//   'assets\\CLA.mp4',
//   'assets\\COE (1).mp4',
//   'assets\\CHAPEL.mp4',
//   'assets\\GRAD OFFICE.mp4',
// ]

const searchPaths = [
  'https://raw.githubusercontent.com/712189512/TUP-navigation/main/assets/Programs.jpg',
  'https://raw.githubusercontent.com/712189512/TUP-navigation/main/assets/Admission%20Requirements.jpg',
  'https://raw.githubusercontent.com/712189512/TUP-navigation/main/assets/Mission%20Vision.jpg', 
  'https://raw.githubusercontent.com/712189512/TUP-navigation/main/assets/Graduate%20Program%20Offers.jpg', 
  'https://github.com/712189512/TUP-navigation/raw/main/assets/ENROLLMENT%20TOUR%20GUIDE%20FOR%20FRESHMEN.mp4',
  'https://github.com/712189512/TUP-navigation/raw/main/assets/ENROLLMENT%20TOUR%20GUIDE%20FOR%20MASTERAL.mp4',
  'https://github.com/712189512/TUP-navigation/raw/main/assets/REGISTRAR.mp4',
  'https://github.com/712189512/TUP-navigation/raw/main/assets/CASHIER.mp4',
  'https://github.com/712189512/TUP-navigation/raw/main/assets/CAFA.mp4',
  'https://github.com/712189512/TUP-navigation/raw/main/assets/CIE.mp4',
  'https://github.com/712189512/TUP-navigation/raw/main/assets/CIT.mp4',
  'https://github.com/712189512/TUP-navigation/raw/main/assets/COS.mp4',
  'https://github.com/712189512/TUP-navigation/raw/main/assets/CLA.mp4',
  'https://github.com/712189512/TUP-navigation/raw/main/assets/COE.mp4',
  'https://github.com/712189512/TUP-navigation/raw/main/assets/CHAPEL.mp4',
  'https://github.com/712189512/TUP-navigation/raw/main/assets/GRAD%20OFFICE.mp4',
]

const videoDropups = [
  'Home Page',
  'Information and History',
  'ENROLLMENT TOUR GUIDE FOR FRESHMEN',
  'ENROLLMENT TOUR GUIDE FOR MASTERAL',
  'REGISTRAR',
  'CASHIER',
  'CAFA',
  'CIE',
  'CIT',
  'COS',
  'CLA',
  'COE',
  'CHAPEL',
  'GRAD OFFICE',
]


// const videoPaths = [
//   'assets\\3D Tour Guide.mp4',
//   'assets\\VIRTUAL REALITY OF LAKBAY TUP-M.mp4',
//   'assets\\ENROLLMENT TOUR GUIDE FOR FRESHMEN.mp4',
//   'assets\\ENROLLMENT TOUR GUIDE FOR MASTERAL.mp4',
//   'assets\\REGISTRAR.mp4',
//   'assets\\CASHIER.mp4',
//   'assets\\CAFA (1).mp4',
//   'assets\\CIE (1).mp4',
//   'assets\\CIT (1).mp4',
//   'assets\\COS (1).mp4',
//   'assets\\CLA.mp4',
//   'assets\\COE (1).mp4',
//   'assets\\CHAPEL.mp4',
//   'assets\\GRAD OFFICE.mp4',
// ]

const videoPaths = [
  'https://github.com/712189512/TUP-navigation/raw/main/assets/3D%20Virtual%20Tour%20With%20Voice%20Over%20(Revise)%20compressed.mp4',
  'https://github.com/712189512/TUP-navigation/raw/main/assets/VIRTUAL%20REALITY%20OF%20LAKBAY%20TUP-M.mp4',
  'https://github.com/712189512/TUP-navigation/raw/main/assets/ENROLLMENT%20TOUR%20GUIDE%20FOR%20FRESHMEN.mp4',
  'https://github.com/712189512/TUP-navigation/raw/main/assets/ENROLLMENT%20TOUR%20GUIDE%20FOR%20MASTERAL.mp4',
  'https://github.com/712189512/TUP-navigation/raw/main/assets/REGISTRAR.mp4',
  'https://github.com/712189512/TUP-navigation/raw/main/assets/CASHIER.mp4',
  'https://github.com/712189512/TUP-navigation/raw/main/assets/CAFA%20(1).mp4',
  'https://github.com/712189512/TUP-navigation/raw/main/assets/CIE%20(1).mp4',
  'https://github.com/712189512/TUP-navigation/raw/main/assets/CIT%20(1).mp4',
  'https://github.com/712189512/TUP-navigation/raw/main/assets/COS%20(1).mp4',
  'https://github.com/712189512/TUP-navigation/raw/main/assets/CLA.mp4',
  'https://github.com/712189512/TUP-navigation/raw/main/assets/COE%20(1).mp4',
  'https://github.com/712189512/TUP-navigation/raw/main/assets/CHAPEL.mp4',
  'https://github.com/712189512/TUP-navigation/raw/main/assets/GRAD%20OFFICE.mp4',
]

// const navigationPaths = [
//   'assets\\Programs.jpg',
//   'assets\\Admission Requirements.jpg',
//   'assets\\Mission Vision.jpg', 
//   'assets\\Graduate Program Offers.jpg', 
//   'assets\\ENROLLMENT TOUR GUIDE FOR FRESHMEN.mp4',
//   'assets\\ENROLLMENT TOUR GUIDE FOR MASTERAL.mp4',
//   'assets\\REGISTRAR.mp4',
//   'assets\\CASHIER.mp4',
//   'assets\\CAFA.mp4',
//   'assets\\CIE.mp4',
//   'assets\\CIT.mp4',
//   'assets\\COS.mp4',
//   'assets\\CLA.mp4',
//   'assets\\COE.mp4',
//   'assets\\CHAPEL.mp4',
//   'assets\\GRAD OFFICE.mp4',
// ]

function generateDropdown(namesArray) {
  var dropdown = document.getElementById('video-selector');

  // // Clear existing options
  dropdown.innerHTML = '';

  // // Create and append new options
  namesArray.forEach(function(name) {
      var option = document.createElement('option');
      // var option = document.createElement('li');
      option.classList.add('dropup-item')
      // console.log(videoPaths[namesArray.indexOf(name)])
      option.value = videoPaths[namesArray.indexOf(name)];    // path
      // option.setAttribute('value', videoPaths[index])          // path
      option.textContent = name;                              // shown text
      dropdown.appendChild(option);
      // dropupMenu.appendChild(option);
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
  // const intermediate = originalsearchPaths[searchTerms.indexOf(selectedSearchTerm)]
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

  // if modal has a minimap, play the navigation
  if (minimapAppend) {
    // newElement.onloadeddata = function() {
    //   minimapHandler.animateRoute();
    // }
    minimapHandler.animateRoute();
  }

  // mute the background video when the modal is shown
  var backMute = document.getElementById("video-background");
  if (backMute) {
    backMute.muted = true
    backMute.pause()
  }

  // unmute when modal is hidden
  $("#fileModal").on('hide.bs.modal', function(){
    backMute.muted = false
    backMute.play()
    minimapAppend = null

    // remove everything from minimap
    miniMap.eachLayer(function (layer) {
        miniMap.removeLayer(layer);
    });

    // remove minimap modal
    var forRemoval = document.getElementById("minimapModal")
    if (forRemoval) {
      forRemoval.remove()
    }

    miniMap.remove()
    miniMap = initializeMinimap()
    // miniMapContainer = null
    // miniMapContainer = newMiniMapContainer()


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

function ARVRselect(univ) {
  if (univ === "COS") {
    searchInput.value = "COS"
    changeSelectedOption(searchInput.value)
    $('#ARVR').modal('hide');

    const videoElement = document.getElementById('video-background');
    videoElement.src = videoPaths[videoDropups.indexOf(univ)]
    videoElement.muted = false
    videoElement.load();
    loadingScreen.style.display = 'flex';
    loadScreen();
  }
  else if (univ === "CLA") {
    searchInput.value = "CLA"
    changeSelectedOption(searchInput.value)
    $('#ARVR').modal('hide');

    const videoElement = document.getElementById('video-background');
    videoElement.src = videoPaths[videoDropups.indexOf(univ)]
    videoElement.muted = false
    videoElement.load();
    loadingScreen.style.display = 'flex';
    loadScreen();
  }
  else if (univ === "COE") {
    searchInput.value = "COE"
    changeSelectedOption(searchInput.value)
    $('#ARVR').modal('hide');

    const videoElement = document.getElementById('video-background');
    videoElement.src = videoPaths[videoDropups.indexOf(univ)]
    videoElement.muted = false
    videoElement.load();
    loadingScreen.style.display = 'flex';
    loadScreen();
  }
  else if (univ === "CAFA") {
    searchInput.value = "CAFA"
    changeSelectedOption(searchInput.value)
    $('#ARVR').modal('hide');

    const videoElement = document.getElementById('video-background');
    videoElement.src = videoPaths[videoDropups.indexOf(univ)]
    videoElement.muted = false
    videoElement.load();
    loadingScreen.style.display = 'flex';
    loadScreen();
  }
  else if (univ === "CIE") {
    searchInput.value = "CIE"
    changeSelectedOption(searchInput.value)
    $('#ARVR').modal('hide');

    const videoElement = document.getElementById('video-background');
    videoElement.src = videoPaths[videoDropups.indexOf(univ)]
    videoElement.muted = false
    videoElement.load();
    loadingScreen.style.display = 'flex';
    loadScreen();
  }
  else if (univ === "CIT") {
    searchInput.value = "CIT"
    changeSelectedOption(searchInput.value)
    $('#ARVR').modal('hide');

    const videoElement = document.getElementById('video-background');
    videoElement.src = videoPaths[videoDropups.indexOf(univ)]
    videoElement.muted = false
    videoElement.load();
    loadingScreen.style.display = 'flex';
    loadScreen();
  }
}

function interactiveTour() {
  const videoElement = document.getElementById('video-background');
    videoElement.src = "https://github.com/712189512/TUP-navigation/raw/main/assets/3D%20Virtual%20Tour%20Guide%20With%20Voice%20Over%20Compressed.mp4"
    // videoElement.src = "assets/3D Virtual Tour Guide With Voice Over Compressed.mp4"
    videoElement.muted = false
    videoElement.load();
    loadingScreen.style.display = 'flex';
    loadScreen();
}


function URtour() {
  const videoElement = document.getElementById('video-background');
    videoElement.src = "https://github.com/712189512/TUP-navigation/raw/main/assets/VIRTUAL%20REALITY%20OF%20LAKBAY%20TUP-M.mp4"
    // videoElement.src = "assets/VIRTUAL REALITY OF LAKBAY TUP-M.mp4"
    videoElement.muted = false
    videoElement.load();
    loadingScreen.style.display = 'flex';
    loadScreen();
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
const cos = [14.58716,120.98385]
const cla = [14.58756,120.98413]
const coe = [14.58635,120.98423]
const chapel = [14.58770,120.98445]
const gradoffice = [14.58669,120.98395]

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

// COS-specific navigation
// start
// entrance
// leftstep
// CIEnode1
const COSnode1 = [14.587151254044747, 120.98408246404587]
const COSCLApoly = L.polygon([
  [14.58778,120.98413],
  [14.58764,120.98435],
  [14.58689,120.98380],
  [14.58703,120.98360]
], {color: 'blue', interactive: false})

// CAFA-specific navigation
// start
// entrance
// leftstep
// CIEnode1
// CIEnode2
const CAFAnode1 = [14.58771771706005, 120.98472671117692]
const CAFApoly = L.polygon([
  [14.587740560340244, 120.98459805754821],
  [14.587850879382245, 120.98489980606578],
  [14.588286963528633, 120.98471205143264],
  [14.588305133682477, 120.98446931151406],
  [14.588157176671745, 120.98436336425678],
  [14.588028687608057, 120.98456452993516],
  [14.587878134667296, 120.98453502563547],
], {color: 'blue', interactive: false})

// CIT-specific navigation
// start
// entrance
// leftstep
// CIEnode1
// CIEnode2
const CITnode1 = [14.58763,120.98452]
const CITnode2 = [14.58728,120.98465]
const CITpoly = L.polygon([
  [14.58763,120.98461],
  [14.58776,120.98494],
  [14.58713,120.98519],
  [14.58700,120.98485],
], {color: 'blue', interactive: false})

// CLA-specific navigation
// entrance
const CLAnode1 = [14.587395297856212, 120.98391170298156]
const CLAnode2 = [14.587230105474747, 120.98410800193018]
const CLAnode3 = [14.58735399977304, 120.98408429432762]
// COSCLApoly

// Registrar-specific navigation
// entrance
const REGISTRARnode1 = [14.587386677759618, 120.98401477064333]
const REGISTRARnode2 = [14.58748791187015, 120.98408719028798]
// COSCLApoly

// Cashier-specific navigation
// start
// entrance
// leftstep
// CIEnode1
// CIEnode2
// CITnode1
// CITnode2
const CASHIERnode1 = [14.58673,120.98485]
const CASHIERnode2 = [14.58669,120.98443]
const CASHIERpoly = L.polygon([
  [14.58667,120.98463],
  [14.58656,120.98465],
  [14.58652,120.98423],
  [14.58662,120.98422],
], {color: 'blue', interactive: false})

// COE-specific navigation
// start
// entrance
// leftstep
// CIEnode1
// CIEnode2
// CITnode1
// CITnode2
// CASHIERnode1
const COEnode1 = [14.58649,120.98470] 
const COEnode2 = [14.58642,120.98431] 
const COEpoly = L.polygon([
  [14.58642,120.98436],
  [14.58628,120.98432],
  [14.58627,120.98409],
  [14.58640,120.98408],
], {color: 'blue', interactive: false})

// Chapel-specific navigation
// start
// entrance
// leftstep
// CIEnode1
// CIEnode2
// CITnode1
// chapel
const CHAPELpoly = L.polygon([
  [14.58761,120.98439],
  [14.58769,120.98457],
  [14.58780,120.98453],
  [14.58773,120.98436],
], {color: 'blue', interactive: false})

// Grad office-specific navigation
// entrance
// CLAnode1
// CLAnode2
const GRADOFFICEnode1 = [14.58686,120.98388]
gradoffice
const GRADOFFICEpoly = L.polygon([
  [14.5867767391865, 120.9839568201875],
  [14.586713143199947, 120.98389110606591],
  [14.58661450449076, 120.98392195147002],
  [14.586709249567718, 120.98401851099565],
], {color: 'blue', interactive: false})

// Freshman enrollment-specific navigation
// start
// entrance
// registrarnode1
// registrarnode2
const FRESHMANnode1 = [14.58772,120.98425]
// CIEnode1
// CIEnode2
// CITnode1
// CITnode2
// CASHIERnode1
// CASHIERnode2
// COSCLApoly
// CASHIERpoly

// Masteral enrollment-specific navigation
// start
// entrance
// REGISTRARnode1
// REGISTRARnode2
// FRESHMANnode1
// CIEnode1
// CLAnode2
// GRADOFFICEnode1
// COSCLApoly
// GRADOFFICEpoly



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
var marker1 = L.marker(cla)
        .addTo(map)
        .bindPopup('<b>COS/CLA Building</b><br />College of Liberal Arts')
var marker2 = L.marker(cafa)
        .addTo(map)
        .bindPopup('<b>CAFA Building</b><br />College of Fine Arts')
var marker3 = L.marker(cit)
        .addTo(map)
        .bindPopup('<b>CIT Building</b><br />College of Industrial Technology')
var marker4 = L.marker(admin)
        .addTo(map)
        .bindPopup('<b>Admin Building</b><br />Cashier')
var marker5 = L.marker(cie)
        .addTo(map)
        .bindPopup('<b>CAFA Building</b><br />College of Industrial Education')
var marker6 = L.marker(cos)
        .addTo(map)
        .bindPopup('<b>COS/CLA Building</b><br />College of Science')
var marker7 = L.marker(coe)
        .addTo(map)
        .bindPopup('<b>COE Building</b><br />College of Engineering')
var marker8 = L.marker(chapel)
        .addTo(map)
        .bindPopup('<b>Chapel</b><br />To God be the glory')
var marker9 = L.marker(gradoffice)
        .addTo(map)
        .bindPopup('<b>Ripalda Hall</b><br />Grad Office')

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

// marker functionality
marker1.on('mouseover', () => {marker1.openPopup()})
marker1.on('mouseout', () => {marker1.closePopup()})
marker1.on('click', () => {
  searchInput.value = "CLA"
  $('#mapModal').modal('hide');
  openFileModal()
})

marker2.on('mouseover', () => {marker2.openPopup()})
marker2.on('mouseout', () => {marker2.closePopup()})
marker2.on('click', () => {
  searchInput.value = "CAFA"
  $('#mapModal').modal('hide');
  openFileModal()
})

marker3.on('mouseover', () => {marker3.openPopup()})
marker3.on('mouseout', () => {marker3.closePopup()})
marker3.on('click', () => {
  searchInput.value = "CIT"
  $('#mapModal').modal('hide');
  openFileModal()
})

marker4.on('mouseover', () => {marker4.openPopup()})
marker4.on('mouseout', () => {marker4.closePopup()})
marker4.on('click', () => {
  searchInput.value = "CASHIER"
  $('#mapModal').modal('hide');
  openFileModal()
})

marker5.on('mouseover', () => {marker5.openPopup()})
marker5.on('mouseout', () => {marker5.closePopup()})
marker5.on('click', () => {
  searchInput.value = "CIE"
  $('#mapModal').modal('hide');
  openFileModal()
})

marker6.on('mouseover', () => {marker6.openPopup()})
marker6.on('mouseout', () => {marker6.closePopup()})
marker6.on('click', () => {
  searchInput.value = "COS"
  $('#mapModal').modal('hide');
  openFileModal()
})

marker7.on('mouseover', () => {marker7.openPopup()})
marker7.on('mouseout', () => {marker7.closePopup()})
marker7.on('click', () => {
  searchInput.value = "COE"
  $('#mapModal').modal('hide');
  openFileModal()
})

marker8.on('mouseover', () => {marker8.openPopup()})
marker8.on('mouseout', () => {marker8.closePopup()})
marker8.on('click', () => {
  searchInput.value = "CHAPEL"
  $('#mapModal').modal('hide');
  openFileModal()
})

marker9.on('mouseover', () => {marker9.openPopup()})
marker9.on('mouseout', () => {marker9.closePopup()})
marker9.on('click', () => {
  searchInput.value = "GRAD OFFICE"
  $('#mapModal').modal('hide');
  openFileModal()
})

// another minimap for the home screen
const homemap = L.map('newMinimap', {
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
.setView(center, 16.6)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
}).addTo(homemap);






// Create a new map container for the minimap
function newMiniMapContainer() {
  let container = L.DomUtil.create('div', 'minimap-container');
  container.id = "minimapModal"
  return container
}
var miniMapContainer = newMiniMapContainer()

// Initialize the minimap
function initializeMinimap() {
  return L.map(miniMapContainer, {
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
}

var miniMap = initializeMinimap()

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
        ],
        [2500, 1333, 4875, 4292] // interval between points
      ]
    }
    else if (destination === 'COS') {
      var package = [
        [
          start,
          entrance,
          entranceLeftStep,
          CIEnode1,
          COSnode1
        ],
        [
          COSCLApoly
        ],
        [3250, 833, 4333, 2792]
      ]
    }
    else if (destination === 'CAFA') {
      var package = [
        [
          start,
          entrance,
          entranceLeftStep,
          CIEnode1,
          CIEnode2,
          CAFAnode1
        ],
        [
          CAFApoly
        ],
        // [3250, 833, 4333, 2792]
        // [ 0, 2150, 8230, 12180, 14180,  20210, ]
        // [ 2150, 6080, 3950, 2000, 6030, ]
        // 8833, 10875, 20708
        // 2042, 9833
        [3250, 833, 4333, 2042, 9833]
      ]
    }
    else if (destination === 'CIT') {
      var package = [
        [
          start,
          entrance,
          entranceLeftStep,
          CIEnode1,
          CIEnode2,
          CITnode1,
          CITnode2,
        ],
        [
          CITpoly
        ],
        //          8:20  12:13 15:23 19:05
        //          8833  12541 15958 19208
        [3250, 833, 4333, 3000, 3417, 3250]
      ]
    }
    else if (destination === 'CLA') {
      var package = [
        [
          entrance,
          CLAnode1,
          CLAnode2,
          CLAnode3,
        ],
        [
          COSCLApoly
        ],
        //     3500  6000
        [1000, 2500, 4000]
      ]
    }
    else if (destination === 'REGISTRAR') {
      var package = [
        [
          start,
          entrance,
          entranceLeftStep,
          REGISTRARnode1,
          REGISTRARnode2
        ],
        [
          COSCLApoly
        ],
        //1:0  3:0   6:12  12:0
        //1000 3000  6500 12000
        [1000, 2000, 4500, 6000]
      ]
    }
    else if (destination === 'CASHIER') {
      var package = [
        [
          start,
          entrance,
          entranceLeftStep,
          CIEnode1,
          CIEnode2,
          CITnode1,
          CITnode2,
          CASHIERnode1,
          CASHIERnode2,
        ],
        [
          CASHIERpoly
        ],
        //          8:20             19:05 20:12 23:06
        //          8833             17500 20500 23250
        [3250, 833, 4333, 3000, 3417, 3250, 2500, 2000]
      ]
    }
    else if (destination === 'COE') {
      var package = [
        [
          start,
          entrance,
          entranceLeftStep,
          CIEnode1,
          CIEnode2,
          CITnode1,
          CITnode2,
          CASHIERnode1,
          COEnode1,
          COEnode2,
        ],
        [
          COEpoly
        ],
        //          8:20             19:05 20:12 24:00 28:00
        //          8833             17500 20500 24000 28000
        [3250, 833, 4333, 3000, 3417, 3250, 2500, 3500, 4000]
      ]
    }
    else if (destination === 'CHAPEL') {
      var package = [
        [
          start,
          entrance,
          entranceLeftStep,
          CIEnode1,
          CIEnode2,
          CITnode1,
          chapel
        ],
        [
          CHAPELpoly
        ],
        //          8:20  12:13 15:23 19:05
        //          8833  12541 15958 19208
        [3250, 833, 4333, 3000, 3417, 2000]
      ]
    }
    else if (destination === 'GRAD OFFICE') {
      var package = [
        [
          entrance,
          CLAnode1,
          CLAnode2,
          GRADOFFICEnode1,
          gradoffice,
        ],
        [
          GRADOFFICEpoly
        ],
        //     3500  6000
        [1000, 2500, 3800, 900]
      ]
    }
    else if (destination === 'ENROLLMENT TOUR GUIDE FOR FRESHMEN') {
      var package = [
        [
          start, 
          entrance,
          REGISTRARnode1,
          REGISTRARnode2,
          FRESHMANnode1,
          CIEnode2,
          CITnode1,
          CITnode2,
          CASHIERnode1,
          CASHIERnode2,
        ],
        [
          COSCLApoly,
          CASHIERpoly
        ],
        //10:12  14:12   26:0  29:12  31:12  32:12
        //10500  14500  26000  29500  31500  32500 35500 36500
        // [ 10500,  4000, 11500,  3500,  2000, 1000,  3000, 1000]
        [ 10500,  4000, 5750, 5750,  3500,  2000, 1000,  3000, 1000]
      ]
    }
    else if (destination === 'ENROLLMENT TOUR GUIDE FOR MASTERAL') {
      var package = [
        [
          start,
          entrance,
          REGISTRARnode1,
          FRESHMANnode1,
          CIEnode2,
          CLAnode2,
          GRADOFFICEnode1,
          gradoffice
        ],
        [
          COSCLApoly,
          GRADOFFICEpoly
        ],
        //      5:0   12:12   16:0 19:17  23:0
        //      5000  12500  16000 19708 23000
         [2208, 2792,  9708,  1500, 2708, 2292, 1000]
      ]
    }

    return createMiniMap(package)
}
  

  
function createMiniMap(data) {
  // clean the minimap first
  miniMap.eachLayer(function (layer) {
    miniMap.removeLayer(layer);
  });

  // more sanity checking
  miniMap.remove()
  miniMap = initializeMinimap()

  var points = data[0]
  var other = data[1]
  var interval = data[2]
  // console.log(data)
  var line = L.polyline(points, {color: 'green', interactive: false}).addTo(miniMap)
  miniMap.panTo(points[0])
  other.forEach(func => func.addTo(miniMap))

  // create navigation
  var objArr = points.map(function(x) {return {latlng: x};})
	let marker = L.markerPlayer(objArr, interval).addTo(miniMap)

  // Add a tile layer to the minimap
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(miniMap);

  // Function to animate the route
  function animateRoute() {
    $('#fileModal').on('shown.bs.modal', function(){
      if (document.getElementById("minimapModal")) {
        
        marker.start();
  
        // always center on the marker
        var interval = setInterval(function() {
          if (!marker.isEnded()) {
            miniMap.panTo(marker.getLatLng())
          } else {
            clearInterval(interval);
            L.marker(marker.getLatLng({interactive: false})).addTo(miniMap)
            delete marker
          }
        }, 1);
      }
    });
    
    $("#fileModal").on('hide.bs.modal', function(){
      marker.stop()
      marker.remove()
      markerHidden = true
    })

  }

  // Style the minimap container
  var miniMapStyle = document.createElement('style');
  miniMapStyle.innerHTML = `
      .minimap-container {
          position: absolute;
          /* bottom: 10px; */
          /* left: 10px; */
          width: 400px;
          height: 400px;
          border: 1px solid #ccc;
          z-index: 10000;
          border-radius: 50%;
      }
  `;
  document.head.appendChild(miniMapStyle);

  return { miniMapContainer, animateRoute };
}


// resize minimap just in case
document.addEventListener('click', () => {
  homemap.invalidateSize();
})


// change name on carousel image switch
$('#imageCarousel').on('slid.bs.carousel', function () {
  var $current = $(this).find('.carousel-item.active');
  var altText = $current.find('.modal-image').data('alt-text');
  $('#imageModalLabel').text(altText);
});

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

  