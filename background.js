const rule = {
  conditions: [
    new chrome.declarativeContent.PageStateMatcher({
      pageUrl:{pathContains: 'wonder'}
    })
  ],
  actions: [new chrome.declarativeContent.ShowPageAction()]
}

chrome.runtime.onInstalled.addListener(() => {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
    chrome.declarativeContent.onPageChanged.addRules([rule]);
  });
})