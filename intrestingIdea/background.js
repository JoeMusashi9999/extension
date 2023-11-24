// background.js
let url = "mit.edu"; // the url of the page to open and accept cookies

// listen for messages from the popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "setUrl") {
    // set the url from the popup input
    url = message.url;
    sendResponse({status: "OK"});
  } else if (message.type === "openUrl") {
    // open the url in a new tab
    chrome.tabs.create({url: url}, (tab) => {
      // inject the content script to the tab
      chrome.scripting.executeScript({
        target: {tabId: tab.id},
        files: ["content.js"]
      });
    });
  }
});

