import { ChatList } from "~components/chat/chat-list"
import { ChatBox } from "~components/chat/chatbox"
import { HeaderTabs } from "~features/header"

const tabsData = [
  {
    label: "Chatbot",
    content: <ChatList />,
    value: "account"
  },
  {
    label: "Custom Knowledge",
    content: "Change your password here.",
    value: "password"
  }
]

export const ChatBotPage = () => {
  return (
    <>
      <HeaderTabs title="IQ GPT Chatbot" tabs={tabsData} />
      <ChatBox />
    </>
  )
}
