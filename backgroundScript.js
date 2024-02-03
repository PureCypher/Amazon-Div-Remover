// backgroundScript.js
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status === 'complete') {
      chrome.tabs.executeScript(tabId, { file: 'contentScript.js' });
    }
  });
  
  chrome.webNavigation.onDOMContentLoaded.addListener(function(details) {
    chrome.tabs.executeScript(details.tabId, { file: 'contentScript.js' });
  });
  
  chrome.webNavigation.onHistoryStateUpdated.addListener(function(details) {
    chrome.tabs.executeScript(details.tabId, { file: 'contentScript.js' });
  });
  