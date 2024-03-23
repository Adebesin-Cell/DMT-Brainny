import avatar from "data-base64:~assets/avatar.png"

import { Logo } from "~components/icons/logo"

import { ChatOptionButton } from "./chat-button"
import { ChatBox } from "./chatbox"

export const ChatList = () => {
  return (
    <>
      <div className="grid gap-4 pb-[75px]">
        <div className="grid gap-2">
          <div className="flex gap-2">
            <Logo className="w-5 h-5 flex-shrink-0" />
            <div className="bg-white p-2 dark:bg-dark rounded-tl-none rounded-2xl flex-grow border border-gray-200 dark:border-white/10">
              <p className="text-xs font-normal text-gray-800 dark:text-white/90">
                Here are things you can do with me:
              </p>
              <div className="flex flex-wrap mt-2 gap-2">
                <ChatOptionButton
                  option="crypto"
                  label="Ask me about crypto"
                  emoji="🟡"
                />
                <ChatOptionButton
                  option="contentPageSummary"
                  label="Content/page summary."
                  emoji="📝"
                />
                <ChatOptionButton
                  option="additionalInfo"
                  label="Generate additional info for this page"
                  emoji="❓"
                />
                <ChatOptionButton option="eli5" label="ELI5" emoji="🤷‍♂️" />
              </div>
            </div>
          </div>
          <div className="flex gap-2 ml-auto">
            <div className="bg-white p-2 dark:bg-dark rounded-tr-none rounded-2xl border border-brand-500 dark:border-brand-800">
              <p className="text-xs font-normal text-gray-500 dark:text-white/70">
                Content/Page summary
              </p>
            </div>
            <img src={avatar} alt="avatar" className="w-5 h-5 flex-shrink-0" />
          </div>
          <div className="flex gap-2 mr-auto">
            <Logo className="w-5 h-5 flex-shrink-0" />
            <div className="bg-white p-2 dark:bg-dark rounded-tl-none rounded-2xl flex-grow border border-gray-200 dark:border-white/10">
              <p className="text-xs font-normal text-gray-500 dark:text-white/70">
                Here is a summary of the article: CoinMarketCap plugin for
                ChatGPT: The web page introduces a new plugin that allows users
                to ask crypto-related questions to the LLM-based AI chatbot
                ChatGPT, using data from CoinMarketCap.
              </p>
            </div>
          </div>
        </div>
      </div>
      <ChatBox />
    </>
  )
}
