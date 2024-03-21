// background.js
chrome.runtime.onMessage.addListener((message) => {
	if (message.action === "injectIframe") {
		chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
			const tabId = tabs[0].id;
			console.log(tabId);
			chrome.scripting.executeScript({
				target: { tabId },
				func: injectIframe,
			});
		});
	}
});

function injectIframe() {
	const iframe = document.createElement("iframe");
	iframe.src = chrome.runtime.getURL("tabs/hello.html");
	document.body.appendChild(iframe);
}
