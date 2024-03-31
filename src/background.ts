chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	if (request.action === "get_page_content") {
		chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
			console.log("tabs", tabs);
			if (tabs.length > 0) {
				chrome.scripting.executeScript(
					{
						target: { tabId: tabs[0].id },
						func: () => document.body.innerText,
					},
					(result) => {
						if (chrome.runtime.lastError) {
							sendResponse({ error: chrome.runtime.lastError.message });
						} else {
							sendResponse({ content: result[0].result });
						}
					},
				);
			} else {
				sendResponse({ error: "No active tabs" });
			}
		});
		return true;
	}
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
	if (message.action === "openPopup") {
		// Open the popup with the selected option and text
		chrome.windows.create(
			{
				url: "popup.html",
				type: "popup",
				width: 400, // adjust the width and height as needed
				height: 600,
				focused: true, // ensure the popup window is focused
			},
			(window) => {
				// After the window is created, send the message to the popup
				chrome.tabs.query({ active: true, windowId: window.id }, (tabs) => {
					if (tabs[0]) {
						chrome.tabs.sendMessage(tabs[0].id, message);
					}
				});
			},
		);
	}
});
