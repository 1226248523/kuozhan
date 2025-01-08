console.log("Content script loaded");
window.records = []; // 将 records 赋值给 window.records
console.log("records variable initialized:", window.records);

function recordEvent(event) {
  const timestamp = new Date().toISOString();
  const eventType = event.type;
  let detail = {};

  switch (eventType) {
    case 'click':
      console.log("Click event detected");
      detail = {
        target: event.target.tagName,
        targetId: event.target.id,
        targetClass: event.target.className,
        x: event.clientX,
        y: event.clientY,
      };
      break;
    case 'keydown':
    case 'keyup':
      detail = {
        key: event.key,
        code: event.code,
      };
      break;
    case 'copy':
      detail = { text: window.getSelection().toString() };
      break;
    case 'paste':
      navigator.clipboard.readText().then(text => {
        window.records.push({ timestamp, eventType, detail: { text } });
      });
      return;
  }
  window.records.push({ timestamp, eventType, detail }); // 将记录添加到 window.records
}

// 监听其他事件
document.addEventListener('click', recordEvent);
document.addEventListener('keydown', recordEvent);
document.addEventListener('keyup', recordEvent);
document.addEventListener('copy', recordEvent);
document.addEventListener('paste', recordEvent);

// 监听来自 background.js 的消息
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'get_records') {
    sendResponse({ records });
  } else if (request.action === 'clear_records') {
    window.records = [];
  }
});