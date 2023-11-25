// background.js

let url = "";

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "setUrl") {
    url = message.url;
    sendResponse({ status: "OK" });
  } else if (message.type === "openUrl") {
    chrome.tabs.create({ url: url }, (tab) => {
      chrome.tabs.executeScript(tab.id, {
        file: "content.js",
        allFrames: true, // Run the script in all frames of the tab
        matchAboutBlank: true // Run the script in about:blank frames
      });
    });
  }
});
