import { z } from "zod";
import { create } from "zustand";

export const ChatOptionsSchema = z.enum([
	"crypto",
	"contentPageSummary",
	"additionalInfo",
	"eli5",
]);

export type ChatOptions = z.infer<typeof ChatOptionsSchema>;

interface ChatStoreState {
	selectedOption: ChatOptions | null;
}

interface ChatStoreActions {
	setSelectedOption: (option: ChatOptions) => void;
}

type ChatStore = ChatStoreState & ChatStoreActions;

const useChatStore = create<ChatStore>((set) => ({
	selectedOption: null as ChatOptions | null,
	setSelectedOption: (option: ChatOptions) => {
		set({ selectedOption: option });
	},
}));

export default useChatStore;
