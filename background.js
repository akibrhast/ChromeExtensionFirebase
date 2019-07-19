/*
chrome.runtime.onInstalled.addListener(function() {
  // Replace all rules ...
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    // With a new rule ...
    chrome.declarativeContent.onPageChanged.addRules([
      {
        // That fires when a page's URL contains a 'g' ...
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { urlContains: 'youtube.com',pathContains:'watch' },
          })
        ],
        // And shows the extension's page action.
        actions: [ new chrome.declarativeContent.ShowPageAction() ]
      }
    ]);
  });
});
*/
// this file will run once on extension load
mylist = []

chrome.contextMenus.create({
  id: "some-command",
  title: "Add To Lost",
  contexts: ["all"]
});


function appendToList(){
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {file: 'myList.js'});
  });
  
}


chrome.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId == "some-command") {
      appendToList()
  }
});







