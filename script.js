function watchAnime(videoPath) {
    const videoPlayerSection = document.getElementById('videoPlayer');
    const videoElement = document.getElementById('video');
    const videoSource = document.getElementById('videoSource');

    // Set the video source to the provided path
    videoSource.src = videoPath;
    videoElement.load(); // Load the new video
    videoPlayerSection.style.display = 'block'; // Show the video player
}