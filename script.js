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