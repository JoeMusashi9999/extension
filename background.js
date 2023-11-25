// background.js

let url = "";

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "setUrl") {
    url = message.url;
    sendResponse({ status: "OK" });
  } else if (message.type === "openUrl") {
    chrome.tabs.create({ url: url });
  }
});
