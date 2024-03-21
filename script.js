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

function searchMedia() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase();
    const mediaContainer = document.getElementById('imageContainer');
    mediaContainer.innerHTML = ''; // Clear previous results
  
    // Array of media objects with type and URL properties
    const media = [
      { type: "image", url: "assets/Programs.jpg" },
      { type: "image", url: "assets/TUP FACADE.jpg" },
      { type: "image", url: "assets/Admmision Requirements.jpg" },
      { type: "image", url: "assets/Mission Vision.jpg" },
      { type: "image", url: "assets/Graduate Program Offers.jpg" },
      { type: "video", url: "assets/test-video.mp4" },

      // Add video objects with type: "video" and url properties here
    ];
  
    media.forEach(mediaItem => {
      if (mediaItem.url.toLowerCase().includes(searchTerm)) {
        const mediaElement = mediaItem.type === "image" ? document.createElement('img') : document.createElement('video');
        mediaElement.classList.add("media-item"); // Add a class for styling
        if (mediaItem.type === "image") {
          mediaElement.src = mediaItem.url;
        } else {
          mediaElement.controls = true; // Add controls for video playback
          const sourceElement = document.createElement("source");
          sourceElement.src = mediaItem.url;
          mediaElement.appendChild(sourceElement);
        }
        mediaElement.alt = mediaItem.type === "image" ? mediaItem.url : "Video";  // Set alt text
  
        mediaElement.onclick = function() {
          openModal(mediaElement.src, mediaItem.type);
        };
        mediaContainer.appendChild(mediaElement);
      }
    });
  
    if (mediaContainer.children.length === 0) {
      mediaContainer.innerHTML = 'Not found.';
    }
  }
  function openModal(mediaSrc, mediaType) {
    const modal = document.getElementById('myModal');
    const modalContent = document.getElementById('modalContent');
    modal.style.display = 'block';
  
    modalContent.innerHTML = ''; // Clear previous content
  
    if (mediaType === "image") {
      const modalImg = document.createElement('img');
      modalImg.src = mediaSrc;
      modalContent.appendChild(modalImg);
    } else {
      const modalVideo = document.createElement('video');
      modalVideo.setAttribute('autoplay', 'true');
      modalVideo.muted = true ;  // Mute the video by default
      const sourceElement = document.createElement("source");
      sourceElement.src = mediaSrc;
      modalVideo.appendChild(sourceElement);
      modalContent.appendChild(modalVideo);
      playButton.addEventListener('click', function() {
        modalVideo.muted = false;  // Unmute the video on click
        modalVideo.play();  // Play the video with sound
      });
    }
  }
  

  function closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
  }
  
