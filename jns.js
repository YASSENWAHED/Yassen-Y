const audioPlayer = document.getElementById('audioPlayer');
        const audioSource = document.getElementById('audioSource');
        const progressBar = document.querySelector('.progress-bar');
        const playPauseBtn = document.getElementById('playPauseBtn');
        const rewindBtn = document.getElementById('rewindBtn');
        const forwardBtn = document.getElementById('forwardBtn');
        const volumeRange = document.getElementById('volumeRange');
        const sidebar = document.querySelector('.sidebar');
        const sidebarContent = document.querySelector('.sidebar-content');

        // Toggle sidebar
        sidebar.addEventListener('click', () => {
            sidebarContent.classList.toggle('show');
        });

        // Play/Pause button
        playPauseBtn.addEventListener('click', () => {
            if (audioPlayer.paused) {
                audioPlayer.play();
                playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
            } else {
                audioPlayer.pause();
                playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
            }
        });

        // Rewind button
        rewindBtn.addEventListener('click', () => {
            audioPlayer.currentTime -= 10;
        });

        // Forward button
        forwardBtn.addEventListener('click', () => {
            audioPlayer.currentTime += 10;
        });

        // Volume control
        volumeRange.addEventListener('input', () => {
            audioPlayer.volume = volumeRange.value;
        });

        // Update progress bar
        audioPlayer.addEventListener('timeupdate', () => {
            if (audioPlayer.duration) {
                const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
                progressBar.style.width = progress + '%';
            }
        });

        // Update audio source
        document.querySelectorAll('.sidebar-content div').forEach(button => {
            button.addEventListener('click', () => {
                const src = `https://qurango.net/radio/${button.getAttribute('data-value')}`;
                audioSource.src = src;
                audioPlayer.load();
                audioPlayer.play();
                playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
            });
        });
