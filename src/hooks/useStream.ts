import useChatStore from "~store/chat";

export const useStream = () => {
	const { selectedOption } = useChatStore();

	const fetchAnswer = async ({ search }: { search: string }) => {
		if (!search) return;

		if (selectedOption === "crypto") {
		}
	};
};
