document.addEventListener("DOMContentLoaded", function () {
    const skipAdButton = document.getElementById("skip-ad");
  
    skipAdButton.addEventListener("click", function () {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "skipAd" });
      });
    });
  });