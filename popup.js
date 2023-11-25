// popup.js
document.addEventListener("DOMContentLoaded", function () {
  // get the elements from the popup
  let urlInput = document.getElementById("url-input");
  let openButton = document.getElementById("open-button");

  // send the url to the background script
  function setUrl() {
    let url = urlInput.value;
    chrome.runtime.sendMessage({ type: "setUrl", url: url }, (response) => {
      if (response.status === "OK") {
        console.log("URL set successfully");
      }
    });
  }

  // send a message to the background script to open the url
  function openUrl() {
    chrome.runtime.sendMessage({ type: "openUrl" });
  }

  // add event listeners to the elements
  urlInput.addEventListener("input", setUrl);

  // Listen for "keydown" event on the input field
  urlInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      // Prevent the default behavior (form submission, new line in textarea, etc.)
      event.preventDefault();
      
      // Trigger the setUrl function when the "Enter" key is pressed
      setUrl();

      // Optionally, you can also trigger the openUrl function here if needed
      openUrl();
    }
  });

  openButton.addEventListener("click", openUrl);
});
