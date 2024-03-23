import { useEffect, useState, type ChangeEvent } from "react"

import { button } from "~components/element/button"
import { SendIcon } from "~components/icons/send"

export const ChatBox = () => {
  const [textareaValue, setTextareaValue] = useState("")

  // Function to handle textarea input and resize
  const handleTextareaInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = e.target
    setTextareaValue(textarea.value)
    textarea.style.height = "auto"
    textarea.style.height = `${textarea.scrollHeight}px`
  }

  // Adjust the textarea height based on its content initially
  useEffect(() => {
    const textarea = document.getElementById("chat")
    if (textarea) {
      textarea.style.height = "auto"
      textarea.style.height = `${textarea.scrollHeight}px`
    }
  }, [])

  return (
    <div className="border-t fixed left-0 bottom-0 w-full bg-white dark:bg-dark flex border-gray-200 dark:border-white/10 h-auto justify-between px-2 py-2 items-center">
      <textarea
        value={textareaValue}
        onChange={handleTextareaInput}
        name="chat"
        id="chat"
        placeholder="Ask me anything..."
        className="w-full bg-transparent py-2 text-sm text-gray-400 font-normal resize-none px-2 pr-9 overflow-hidden"
        style={{ minHeight: "40px", maxHeight: "144px" }}
      />
      <button
        type="button"
        className={button({
          variant: "primary",
          class:
            "absolute right-2 top-2 w-9 h-9 flex items-center justify-center rounded-full pt-1 pr-1"
        })}>
        <SendIcon />
      </button>
    </div>
  )
}
