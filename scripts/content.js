window.addEventListener('load', () => {
  setTimeout(() => {
    const videoElement = document.querySelector('.html5-video-container > video');
    const adModule = document.querySelector('.ytp-ad-module');

    if (adModule.children.length > 0) {
      videoElement.currentTime = 10000;
    }
    
    (new MutationObserver(() => {
      console.log(videoElement.currentTime);
      videoElement.currentTime = 10000;
    })).observe(adModule, { attributes: true, childList: true });
  }, 100)
})