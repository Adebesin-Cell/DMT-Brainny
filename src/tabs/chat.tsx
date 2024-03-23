import { ChatBox } from "~components/chat/chatbox"
import { HeaderTabs } from "~features/header"

const tabsData = [
  {
    label: "Account",
    content: "Make changes to your account here.",
    value: "account"
  },
  {
    label: "Password",
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
