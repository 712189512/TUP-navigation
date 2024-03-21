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

function searchImage() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase();
    const imageContainer = document.getElementById('imageContainer');
    imageContainer.innerHTML = ''; // Clear previous results
  
    // Array of image filenames in your assets
    const images = [
      'Programs.jpg',
      'TUP FACADE.jpg',
      'Admmision Requirements.jpg',
      'Mission Vision.jpg',
      'Graduate Programs Offers.jpg'
    ]; // Add your image filenames here
  
    images.forEach(image => {
      if (image.toLowerCase().includes(searchTerm)) {
        const imgElement = document.createElement('img');
        imgElement.src = 'assets/' + image; // Assuming your images are in a folder named 'assets'
        imgElement.alt = image;
        imgElement.onclick = function() {
          openModal(imgElement.src);
        };
        imageContainer.appendChild(imgElement);
      }
    });
  
    if (imageContainer.children.length === 0) {
      imageContainer.innerHTML = 'Not found.';
    }
  }
  
  function searchVideo() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase();
    const videoContainer = document.getElementById('videoContainer'); // Assuming you have an element with this ID
    videoContainer.innerHTML = ''; // Clear previous results
  
    // Array of video objects with properties like title and url
    const videos = [
      { title: 'Cafa', url: 'assets/test-video.mp4' },
      { title: 'Campus Tour', url: 'path/to/tour.mp4' },
      { title: 'Student Activities', url: 'path/to/activities.mp4' }
    ]; // Add your videos here with title and url properties
  
    videos.forEach(video => {
      if (video.title.toLowerCase().includes(searchTerm)) {
        const videoElement = document.createElement('video');
        videoElement.src = video.url;
        videoElement.controls = true; // Add controls for play/pause etc.
        videoElement.title = video.title;
        videoContainer.appendChild(videoElement);
      }
    });
  
    if (videoContainer.children.length === 0) {
      videoContainer.innerHTML = 'Not found.';
    }
  }
  
  function openModal(imageOrVideoSrc) {
    const modal = document.getElementById('myModal');
    const modalContent = document.getElementById('modalContent'); // Assuming you have an element with this ID for modal content
  
    // Handle both image and video sources
    if (imageOrVideoSrc.endsWith('.jpg') || imageOrVideoSrc.endsWith('.png') || imageOrVideoSrc.endsWith('.gif')) {
      const modalImg = document.createElement('img');
      modalImg.src = imageOrVideoSrc;
      modalContent.innerHTML = ''; // Clear previous content
      modalContent.appendChild(modalImg);
    } else {
      const modalVideo = document.createElement('video');
      modalVideo.src = imageOrVideoSrc;
      modalVideo.controls = true; // Add controls if needed
      modalContent.innerHTML = ''; // Clear previous content
      modalContent.appendChild(modalVideo);
    }
  
    modal.style.display = 'block';
  }
  
  function closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
  }
  