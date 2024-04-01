import {
	type EventSourceMessage,
	fetchEventSource,
} from "@microsoft/fetch-event-source";

export const useStream = () => {
	const handleMessage = (msg: EventSourceMessage) => {};

	const fetchAnswer = async ({ search }: { search: string }) => {
		if (!search) return;

		const requestObject = {
			enableStream: true,
			search,
			language: "en",
			isChat: true,
		};

		try {
			await fetchEventSource("https://iqgpt.com/api/generate", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"x-auth-key": "008422dc-3a80-4106-ba9c-de821dd549e3",
				},
				body: JSON.stringify(requestObject),
				openWhenHidden: true,
				onmessage: async (msg) => {
					handleMessage(msg);
				},
				onerror(err) {
					console.error("🚨 Error generating answer: ", err);

					throw err;
				},
			});
		} catch (e) {
			console.log(`Could not fetch data. Error: ${e}`);
		}
	};

	return { fetchAnswer };
};
