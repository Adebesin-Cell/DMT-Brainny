import type { ChatOptions } from "~store/chat"
import useChatStore from "~store/chat"

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

  return (
    <button
      onClick={() => setSelectedOption(option)}
      type="button"
      className="flex gap-2 border rounded border-gray-200 dark:border-white/10 p-2 text-[10px]">
      {label}
      <span>{emoji}</span>
    </button>
  )
}
