import { createContext } from "react";
import { create } from "zustand";
import type { AnswerSources } from "./chat.schema";

export type ChatMessage = {
	search: string;
	answer: string;
	id: string;
	answerSources: AnswerSources[];
};

interface CurrentChatStateProps {
	messages: ChatMessage[] | null;
	currentAiMessage: string | null;
	currentHumanMessage: string | null;
}

interface CurrentChatState extends CurrentChatStateProps {
	addMessage: (message: ChatMessage) => void;
	updateAiMessage: (chunk: string) => void;
	sendHumanMessage: (message: string) => void;
	setMessages: (messages: ChatMessage[]) => void;
	removeMessage: (messageId: string) => void;
	removeHumanMessage: () => void;
}

/**
 * Zustand store for managing current chat state.
 * we are returning store for getting initial state from
 * the server.
 *
 * see: https://docs.pmnd.rs/zustand/guides/initialize-state-with-props
 */
export const createCurrentChatStore = (
	initialValues: Partial<CurrentChatStateProps>,
) => {
	const DEFAULT_VALUES = {
		messages: [],
		currentAiMessage: null,
		currentHumanMessage: null,
	};

	return create<CurrentChatState>((set) => ({
		...DEFAULT_VALUES,
		...initialValues,
		sendHumanMessage: (message: string) => {
			set(() => ({
				currentHumanMessage: message,
				currentAiMessage: null,
			}));
		},
		removeHumanMessage: () => {
			set(() => ({
				currentHumanMessage: null,
			}));
		},
		addMessage: (message: ChatMessage) => {
			set((state) => ({
				currentHumanMessage: null,
				currentAiMessage: null,
				messages: [...(state.messages ?? []), message],
			}));
		},
		setMessages: (messages: ChatMessage[]) => {
			set(() => ({
				messages,
			}));
		},
		removeMessage: (messageId: string) => {
			set((state) => ({
				messages: state.messages?.filter((message) => message.id !== messageId),
			}));
		},
		updateAiMessage: (chunk: string) => {
			set((state) => ({
				currentAiMessage: state.currentAiMessage
					? state.currentAiMessage + chunk
					: chunk,
			}));
		},
	}));
};

type CurrentChatStore = ReturnType<typeof createCurrentChatStore>;
export const CurrentChatContext = createContext<CurrentChatStore | null>(null);
