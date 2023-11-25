// popup.js
document.addEventListener("DOMContentLoaded", function () {
  let urlInput = document.getElementById("url-input");
  let openFileButton = document.getElementById("open-file-button");

  function setUrl() {
    let url = urlInput.value;
    chrome.runtime.sendMessage({ type: "setUrl", url: url }, (response) => {
      if (response.status === "OK") {
        console.log("URL set successfully");
      }
    });
  }

  urlInput.addEventListener("input", setUrl);

  urlInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      setUrl();
      openUrl();
    }
  });

  openFileButton.addEventListener("click", openUrlsFromFile);
});

