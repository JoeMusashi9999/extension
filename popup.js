
// popup.js
// get the elements from the popup
let urlInput = document.getElementById("url-input");
let openButton = document.getElementById("open-button");

// send the url to the background script
function setUrl() {
  let url = urlInput.value;
  chrome.runtime.sendMessage({type: "setUrl", url: url}, (response) => {
    if (response.status === "OK") {
      console.log("URL set successfully");
    }
  });
}

// send a message to the background script to open the url
function openUrl() {
  chrome.runtime.sendMessage({type: "openUrl"});
}

// add event listeners to the elements
urlInput.addEventListener("change", setUrl);
openButton.addEventListener("click", openUrl);


