// Select elements
const player = document.querySelector('.player');
const video = player.querySelector('.player__video');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// Play and Pause the Video
const togglePlay = () => {
    if (video.paused) {
        video.play();
        toggle.textContent = '❚ ❚'; // Change to pause symbol
    } else {
        video.pause();
        toggle.textContent = '►'; // Change to play symbol
    }
};

// Update Progress Bar
const updateProgress = () => {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.width = `${percent}%`;
};

// Skip Video
const skip = (e) => {
    video.currentTime += parseFloat(e.target.dataset.skip);
};

// Handle Range Changes
const handleRangeUpdate = (e) => {
    video[e.target.name] = e.target.value;
};

// Update Progress Bar on Click
const scrub = (e) => {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
};

// Event Listeners
toggle.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);
video.addEventListener('timeupdate', updateProgress);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('input', handleRangeUpdate));
progress.addEventListener('click', scrub);
video.addEventListener('contextmenu', (e) => e.preventDefault());
