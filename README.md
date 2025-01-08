# chrome扩展使用文档：网页操作记录器

## 简介

本扩展旨在帮助用户跟踪和记录在任何网站上的交互操作，以便进行分析或报告。它能够捕获各种用户事件，如点击、按键、复制粘贴操作以及截图，并允许用户将这些记录下载为CSV文件。

## 功能

- **记录用户交互**：捕获点击、按键、复制粘贴操作和截图等事件。
- **下载记录数据**：用户可以将记录的事件下载为CSV文件。
- **查看记录**：在扩展弹出窗口中显示记录的事件列表。
- **广泛兼容性**：适用于所有网站，因为内容脚本注入到所有URL。

## 安装

1. **开发模式安装**：
   - 打开Chrome浏览器，进入`chrome://extensions/`页面。
   - 启用“开发人员模式”（右上角开关）。
   - 点击“加载已解压的扩展程序”，选择扩展文件夹路径。

## 使用方法

1. **开始记录**：
   - 访问任何网站，扩展会自动开始记录交互事件。

2. **访问弹出窗口**：
   - 点击浏览器工具栏中的扩展图标，打开弹出窗口。

3. **下载记录**：
   - 在弹出窗口中，选择相应的标签页。
   - 点击“download records”按钮，下载CSV文件。

4. **查看记录**：
   - 在弹出窗口中，点击“get records”按钮，查看记录的事件列表。

## CSV文件格式

CSV文件包含以下列：

- **Timestamp**：事件发生的时间。
- **Event Type**：事件类型（如点击、按键等）。
- **Detail**：事件的详细信息（如按键代码、点击位置等）。

## 故障排除

- **无数据记录**：
  - 确保扩展已正确安装并启用。
  - 检查浏览器权限设置，确保扩展权限已授予。
  
- **下载问题**：
  - 确保选择正确的标签页。
  - 尝试重新加载页面或重新启动浏览器。

## 结论

感谢您使用网页操作记录器！如果您有任何反馈或建议，请联系开发者。

---

通过这份文档，用户可以轻松了解和使用该扩展，确保记录和分析网页交互操作的顺利进行。

**免责声明：网页互动记录器**

1. **目的和预期用途：**

   此扩展程序专为个人研究使用而设计。它旨在记录网页上的用户互动，供分析或报告使用。用户应确保其使用符合所有适用的法律和法规。

2. **禁止滥用：**

   不得将此扩展程序用于违反隐私法律的任何活动。在监控涉及第三方的活动时，用户必须获得适当的授权。严禁滥用此扩展程序进行隐私侵犯或从事非法活动。

3. **责任：**

   扩展程序的创建者不对因使用该扩展程序而产生的任何损害、损失或法律后果负责。这包括但不限于数据丢失、隐私泄露或因滥用扩展程序而产生的任何法律问题。

4. **用户责任：**

   用户有责任确保其使用扩展程序符合所有适用的法律和法规。用户必须尊重他人的隐私权，并在监控活动前获得必要的许可。

5. **兼容性和支持：**

   创建者不保证由于外部因素（如浏览器更新或网站结构变化）而导致的持续功能。创建者不对因这些变化而产生的问题负责。

6. **权限和信任：**

   用户应检查扩展程序的权限，并在安装前确保信任其来源。创建者不对用户决定安装或使用扩展程序的后果负责。

7. **遵守法律法规：**

   用户必须遵守所有适用的法律和法规使用扩展程序。用户有责任确保其使用不违反任何法律规定。

8. **协议：**

   通过使用此扩展程序，用户同意本免责声明的条款，并承认使用该扩展程序所涉及的风险。用户同意负责任地使用扩展程序，并遵守所有适用的法律和法规。

**注意：**

本免责声明旨在清楚地告知用户使用扩展程序的风险和责任。用户如对使用扩展程序的合法性有疑虑，应寻求法律建议。

# User Manual: Web Page Interaction Recorder Extension

## Introduction

This extension is designed to help users track and record interactions on any website, facilitating analysis or reporting. It captures various user events, such as clicks, key presses, copy-paste operations, and screenshots, allowing users to download these records as a CSV file.

## Features

- **Record User Interactions**: Captures clicks, key presses, copy-paste operations, and screenshots.
- **Download Record Data**: Users can download the recorded events as a CSV file.
- **View Records**: Displays a list of recorded events in the popup window.
- **Broad Compatibility**:适用于所有网站，因为内容脚本注入到所有URL。

## Installation

1. **Install in Developer Mode**:
   - Open Chrome browser, navigate to `chrome://extensions/`.
   - Enable "Developer mode" (toggle switch in the top-right corner).
   - Click "Load unpacked extension" and select the extension folder path.

## Usage

1. **Start Recording**:
   - Visit any website; the extension automatically starts recording interactions.

2. **Access Popup Window**:
   - Click the extension icon in the browser toolbar to open the popup window.

3. **Download Records**:
   - In the popup window, select the corresponding tab.
   - Click the "download records" button to download the CSV file.

4. **View Records**:
   - In the popup window, click the "get records" button to view the list of recorded events.

## CSV File Format

The CSV file includes the following columns:

- **Timestamp**: Time when the event occurred.
- **Event Type**: Type of event (e.g., click, key press, etc.).
- **Detail**: Detailed information about the event (e.g., key code, click position, etc.).

## Troubleshooting

- **No Data Recorded**:
  - Ensure the extension is correctly installed and enabled.
  - Check browser permissions to ensure the extension has been granted the necessary permissions.

- **Download Issues**:
  - Ensure the correct tab is selected.
  - Try reloading the page or restarting the browser.

## Conclusion

Thank you for using the Web Page Interaction Recorder extension! If you have any feedback or suggestions, please contact the developer.

---

This manual should help users easily understand and use the extension, ensuring smooth recording and analysis of web page interactions.

**Disclaimer for Web Page Interaction Recorder Extension**

**1. Purpose and Intended Use:**
This extension is designed for personal research use. It is intended to record user interactions on web pages for analytical or reporting purposes. Users are solely responsible for ensuring that their use of this extension complies with all applicable laws and regulations.

**2. Prohibition of Misuse:**
The extension should not be used for any activities that violate privacy laws or regulations. Users must obtain proper authorization before monitoring any activities that involve third parties. Misuse of this extension to invade privacy or engage in illegal activities is strictly prohibited.

**3. Liability:**
The creator of this extension is not liable for any damages, losses, or legal consequences arising from the use of this extension. This includes, but is not limited to, data loss, privacy breaches, or any legal issues stemming from the misuse of the extension.

**4. User Responsibility:**
Users are responsible for ensuring that they comply with all applicable laws and regulations when using this extension. It is the user's responsibility to respect the privacy rights of others and to obtain necessary permissions before monitoring any activities.

**5. Compatibility and Support:**
The creator does not guarantee continuous functionality due to external factors such as browser updates or changes in website structures. The creator is not responsible for fixing issues arising from such changes.

**6. Permissions and Trust:**
Users are advised to review the extension's permissions and ensure they trust the source before installing it. The creator is not responsible for any consequences arising from the user's decision to install or use the extension.

**7. Compliance with Laws and Regulations:**
Users must comply with all applicable laws and regulations when using this extension. It is the user's responsibility to ensure that their use of the extension does not violate any legal provisions.

**8. Agreement:**
By using this extension, the user agrees to the terms of this disclaimer and acknowledges the risks involved. The user agrees to use the extension responsibly and in accordance with all applicable laws and regulations.

**Note:**
This disclaimer is provided in clear and concise language to ensure that users are fully informed about the risks and responsibilities involved in using the extension. Users are encouraged to seek legal advice if they have any concerns about the legality of their use of the extension.
