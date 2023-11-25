// background.js

let url = "";

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "setUrl") {
    // Ensure the URL is well-formed
    url = message.url.startsWith("http") ? message.url : "https://" + message.url;
    sendResponse({ status: "OK" });
  } else if (message.type === "openUrl") {
    chrome.tabs.create({ url: url });
  }
});
