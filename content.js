// content.js
// get the cookie consent elements from the page
let cookieConsentElements = document.querySelectorAll("[data-cookie-consent], [data-cookiebanner], [data-nm-cookie-consent], .cookie-consent, .cookie-banner, .cookie-notice, .cookie-policy, .cookie-law, .cookie-message, .cookie-popup, .cookie-alert, .cookie-warning, .cookie-info, .cookie-dialog, .cookie-modal, .cookie-container, .cookie-bar, .cookie-button, .cookie-agree, .cookie-accept, .cookie-close, .cookie-dismiss, .cookie-ok, .cookie-yes, .cookie-no, .cookie-optout, .cookie-opt-in, .cookie-opt-out");

// loop through the elements and click on them or hide them
for (let element of cookieConsentElements) {
  // check if the element is a button or a link
  if (element.tagName === "BUTTON" || element.tagName === "A") {
    // click on the element
    element.click();
  } else {
    // hide the element
    element.style.display = "none";
  }
}