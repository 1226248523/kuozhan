let allRecords = {};

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  let tabId = sender.tab?.id; // 使用可选链式调用

  if (tabId === undefined && request.tabId !== undefined) {
    tabId = request.tabId;
  }

  if (tabId === undefined) {
    console.warn("无法确定消息来源的 tabId", sender, request);
    return;
  }

  if (request.action === 'download_data_url') {
    const url = request.url;
    console.log("Received download URL from popup:", url);
    chrome.downloads.download({
      url: url,
      filename: 'user_actions.csv'
    }, function(downloadId) {
      console.log("Download started, downloadId:", downloadId);
      sendResponse({ status: 'downloading',downloadId: downloadId });
    });
    return true; // Indicate asynchronous response
  } else if (request.action === 'get_records') {
    console.log("Received get_records request for tabId:", tabId);
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      function: () => {
        return window.records;
      }
    }, (injectionResults) => {
      console.log("Injection results for get_records:", injectionResults);
      if (chrome.runtime.lastError) {
        console.error("Error getting records:", chrome.runtime.lastError);
        sendResponse({ records: [] });
        return;
      }
      if (injectionResults && injectionResults.length > 0 && injectionResults[0].result) {
        const records = injectionResults[0].result;
        console.log("Records received in background:", records);
        // 将记录存储到 chrome.storage.local
        chrome.storage.local.set({ [tabId]: records }, () => {
          console.log("Records stored for tabId:", tabId);
        });
        sendResponse({ records });
      } else {
        sendResponse({ records: [] });
      }
    });
    return true; // Indicate asynchronous response
  } else if (request.action === 'clear_records') {
    console.log("Received clear_records request for tabId:", tabId);
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      function: () => {
        window.records = [];
      }
    });
  }
});