setInterval(() => {
    const adProgressBar = document.querySelector('.ytp-ad-persistent-progress-bar-container');
    if(adProgressBar && adProgressBar?.style.display !== 'none') {
        document.querySelector('ytd-player').querySelector("video").currentTime = 10000
    }
}, 100)