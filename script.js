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
    const images = ['Programs.jpg', 'TUP FACADE.jpg', 'Admmision Requirements.jpg', 'Mission Vision.jpg', 'Graduate Programs Offers.jpg']; // Add your image filenames here

    images.forEach(image => {
        if (image.toLowerCase().includes(searchTerm)) {
            const imgElement = document.createElement('img');
            imgElement.src = 'assets/' + image; // Assuming your images are in a folder named 'assets'
            imgElement.alt = image;
            imgElement.onclick= function() {
                openModal(imgElement.src);
            };
            imageContainer.appendChild(imgElement);
        }
    });

    if (imageContainer.children.length === 0) {
        imageContainer.innerHTML = 'Not found.';
    }
}

function openModal(imageSrc) {
    const modal = document.getElementById('myModal');
    const modalImg = document.getElementById('modalImage');
    modal.style.display = 'block';
    modalImg.src = imageSrc;
}

function closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
}

