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
