import { ChatList } from "~components/chat/chat-list"
import { CustomKnowledge } from "~components/chat/custom-knowledge"
import { HeaderTabs } from "~features/header"

const tabsData = [
  {
    label: "Chatbot",
    content: <ChatList />,
    value: "account"
  },
  {
    label: "Custom Knowledge",
    content: <CustomKnowledge />,
    value: "password"
  }
]

const ChatBotPage = () => {
  return <HeaderTabs title="IQ GPT Chatbot" tabs={tabsData} />
}

export default ChatBotPage
