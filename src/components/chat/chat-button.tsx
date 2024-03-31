import type { ChatOptions } from "~store/chat"
import useChatStore from "~store/chat"
import { getPageContent } from "~utils/getPageContent"

interface ChatOptionButtonProps {
  option: ChatOptions
  label: string
  emoji: string
}

export const ChatOptionButton: React.FC<ChatOptionButtonProps> = ({
  option,
  label,
  emoji
}) => {
  const { setSelectedOption } = useChatStore()

  const handleOptionClick = async () => {
    if (option === "contentPageSummary") {
      try {
        const content = await getPageContent()
        console.log("content", content)
      } catch (error) {
        console.error("Error getting page content:", error.message)
      }
    }
  }

  return (
    <button
      onClick={() => {
        setSelectedOption(option)
        handleOptionClick()
      }}
      type="button"
      className="flex gap-2 border rounded border-gray-200 dark:border-white/10 p-2 text-[10px]">
      {label}
      <span>{emoji}</span>
    </button>
  )
}
