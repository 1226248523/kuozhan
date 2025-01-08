
function getCurrentTab(callback) {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    if (tabs && tabs.length > 0) {
      callback(tabs[0]);
    } else {
      console.error("No active tab found.");
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  populateTabSelect();
});

function populateTabSelect() {
  chrome.tabs.query({}, function(tabs) {
    const tabSelect = document.getElementById('tabSelect');
    tabs.forEach(tab => {
      const option = document.createElement('option');
      option.value = tab.id.toString(); // 确保是字符串
      option.textContent = tab.title || '无标题';
      tabSelect.appendChild(option);
    });
  });
}

document.getElementById('downloadBtn').addEventListener('click', () => {
  const tabSelect = document.getElementById('tabSelect');
  if (!tabSelect) {
    console.error("tabSelect 元素未找到");
    return;
  }
  const selectedTabId = tabSelect.value;
  if (!selectedTabId) {
    alert('请选择一个标签页');
    return;
  }
  chrome.storage.local.get(selectedTabId, (result) => {
    console.log("Data retrieved from storage:", result);
    if (result[selectedTabId]) {
      const data = result[selectedTabId];
      const csv = formatToCSV(data);
      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = `user_actions_${selectedTabId}.csv`;
      link.click();
    } else {
      alert('No data to export for this tab.');
    }
  });
});

document.getElementById('screenshotBtn').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.captureVisibleTab(tabs[0].windowId, { format: 'png' }, (screenshotUrl) => {
      const link = document.createElement('a');
      link.href = screenshotUrl;
      link.download = 'screenshot.png';
      link.click();

      // 记录截图操作
      const action = {
        timestamp: Date.now(),
        eventType: 'screenshot',
        detail: {
          url: tabs[0].url
        }
      };
      chrome.storage.local.get(String(tabs[0].id), (result) => {
        let actions = result[tabs[0].id] || [];
        actions.push(action);
        chrome.storage.local.set({ [tabs[0].id]: actions }, () => {
          console.log('Screenshot action recorded.');
        });
      });
    });
  });
});

function formatToCSV(records) {
  let csv = '';
  if (records.length > 0) {
    // 确定所有可能的字段
    const keys = new Set();
    records.forEach(record => {
      keys.add('timestamp');
      keys.add('eventType'); // 假设是 eventType 而不是 type
      Object.keys(record.detail).forEach(key => keys.add(key));
    });
    const headers = Array.from(keys).sort();
    // 写入标题行
    csv += headers.join(',') + '\n';
    // 写入数据行
    records.forEach(record => {
      let line = '';
      headers.forEach(header => {
        let value = '';
        if (header === 'timestamp') {
          value = record.timestamp || '';
        } else if (header === 'eventType') {
          value = record.eventType || '';
        } else {
          value = record.detail[header] || '';
        }
        // 处理特殊字符
        if (typeof value === 'string' && (value.includes(',') || value.includes('"'))) {
          value = `"${value.replace(/"/g, '""')}"`;
        }
        line += value + ',';
      });
      csv += line.slice(0, -1) + '\n';
    });
  }
  return csv;
}

document.getElementById('getRecordsBtn')?.addEventListener('click', () => {
  getCurrentTab(function(tab) {
    if (tab) {
      const tabId = tab.id;
      console.log("Sending get_records request with tabId:", tabId);
      chrome.runtime.sendMessage({ action: 'get_records', tabId: tabId }, function(response) {
        if (response && response.records) {
          console.log("Received records:", response.records);
          displayRecords(response.records);
        } else {
          console.log("No records received.");
          displayRecords([]);
        }
      });
    }
  });
});

function displayRecords(records) {
  const recordsDiv = document.getElementById('recordsDisplay');
  if (recordsDiv) {
    recordsDiv.innerHTML = '';

    if (records.length === 0) {
      recordsDiv.textContent = 'No records available.';
      return;
    }

    const ul = document.createElement('ul');
    records.forEach(record => {
      const li = document.createElement('li');
      li.textContent = `[${record.timestamp}] ${record.eventType}: ${JSON.stringify(record.detail)}`;
      ul.appendChild(li);
    });
    recordsDiv.appendChild(ul);
  }
}