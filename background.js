// background.js
let url = "";

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "setUrl") {
    url = message.url.startsWith("http") ? message.url : "https://" + message.url;
    sendResponse({ status: "OK" });
  } else if (message.type === "openUrl") {
    chrome.tabs.create({ url: url });
  } else if (message.type === "openUrlsFromFile") {
    openUrlsFromFile();
  }
});

function openUrlsFromFile() {
  fetch(chrome.extension.getURL('toOpen.txt'))
    .then(response => response.text())
    .then(text => {
      const urls = text.split('\n').map(url => url.trim()).filter(url => url !== '');

      if (urls.length > 0) {
        urls.forEach(url => {
          chrome.tabs.create({ url: url });
        });
      } else {
        console.error('No valid URLs found in the file.');
      }
    })
    .catch(error => console.error('Error reading file:', error));
}