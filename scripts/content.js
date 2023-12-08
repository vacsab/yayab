window.addEventListener('load', () => {
  const videoElement = document.querySelector('.html5-video-container > video');
  const adModule = document.querySelector('.ytp-ad-module');
  
  (new MutationObserver(() => {
    videoElement.currentTime = 10000;
  })).observe(adModule, { attributes: true, childList: true });
})