// background.js
let url = ""; // Initialize the url variable

// listen for messages from the popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "setUrl") {
    // set the url from the popup input
    url = message.url;
    sendResponse({ status: "OK" });
  } else if (message.type === "openUrl") {
    // open the url in a new tab
    chrome.tabss.create({ url: url }, (tab) => {
      // inject the content script to the tab
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: () => {
          // content script code here
          let cookieConsentElements = document.querySelectorAll("[data-cookie-consent], [data-cookiebanner], [data-nm-cookie-consent], .cookie-consent, .cookie-banner, .cookie-notice, .cookie-policy, .cookie-law, .cookie-message, .cookie-popup, .cookie-alert, .cookie-warning, .cookie-info, .cookie-dialog, .cookie-modal, .cookie-container, .cookie-bar, .cookie-button, .cookie-agree, .cookie-accept, .cookie-close, .cookie-dismiss, .cookie-ok, .cookie-yes, .cookie-no, .cookie-optout, .cookie-opt-in, .cookie-opt-out");

          for (let element of cookieConsentElements) {
            if (element.tagName === "BUTTON" || element.tagName === "A") {
              element.click();
            } else {
              element.style.display = "none";
            }
          }
        },
      });
    });
  }
});
