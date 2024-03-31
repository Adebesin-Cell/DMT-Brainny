export const getPageContent = async () => {
	try {
		const response = await new Promise((resolve, reject) => {
			chrome.runtime.sendMessage({ action: "get_page_content" }, (response) => {
				if (response?.content) {
					resolve(response.content);
				} else {
					reject(new Error("Content not found"));
				}
			});
		});
		return response as string;
	} catch (error) {
		console.error("Error getting page content:", error.message);
		return null;
	}
};
