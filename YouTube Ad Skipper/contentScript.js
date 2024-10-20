function skipAd() {
    const videoPlayer = document.querySelector("video");
    if (videoPlayer) {
      const currentTime = videoPlayer.currentTime;
      const duration = videoPlayer.duration;
      if (currentTime < duration) {
        // Skip the ad by seeking to the 25% mark
        videoPlayer.currentTime = duration;
      }
    }
  }
  
  chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "skipAd") {
      skipAd();
    }
  });