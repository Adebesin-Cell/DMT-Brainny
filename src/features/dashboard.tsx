import { useStorage } from "@plasmohq/storage/hook"

import { button } from "~components/element/button"
import { LampIcon } from "~components/icons/lamp-charge"
import { Logo } from "~components/icons/logo"
import { Footer } from "~components/layout/footer"
import { GetStartedScreen } from "~features/get-started"

import DashboardCards from "./dashboard-cards"

const cardData = [
  {
    title: "IQGPT Chatbot",
    descriptions: [
      "IQ GPT/Custom Knowledge",
      "With the IQGPT Chatbot, you are able to generate page summary, as well as add documents to your custom knowledge."
    ],
    buttonLabel: "Use the IQ GPT Chatbot",
    Icon: Logo,
    href: "/tabs/chat.html"
  },
  {
    title: "Crypto News/ Wikis",
    descriptions: [
      "Crypto news, wikis, twitter crypto timeline and events",
      "Know what is going on in the crypto world in all capacities."
    ],
    buttonLabel: "Check it out",
    Icon: Logo,
    href: "/tabs/news.html"
  },
  {
    title: "Quizzes",
    descriptions: [
      "For all crypto enthusiasts and Web3 wizards! Take this quiz to see if you're truly up-to-date on the latest trends and hottest topics in the blockchain space. Get ready to learn and be entertained!"
    ],
    buttonLabel: "Start Quiz",
    Icon: LampIcon,
    href: "/tabs/quiz.html"
  }
]

export const DashboardScreen = () => {
  const [isGetStartedCompleted] = useStorage<boolean>(
    "GET_STARTED_COMPLETED",
    false
  )

  return !isGetStartedCompleted ? (
    <GetStartedScreen />
  ) : (
    <div className="flex-grow py-3 pb-[60px] px-5">
      <div className="border border-gray-200 dark:border-white/10 p-2 rounded-lg">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <div className="flex gap-2 items-center">
              <h1 className="text-gray-600 dark:text-white/70 text-xs">
                IQ Price
              </h1>
            </div>
            <p className="text-gray-600 dark:text-white/70 text-base font-bold">
              $0.18 <span className="text-[8px] text-green-500">(+3.457%)</span>
            </p>
          </div>
          <div>
            <button
              type="button"
              className={button({
                variant: "primary",
                class: "px-10 py-2 text-xs"
              })}
              onClick={() =>
                window.open("https://iq.braindao.org/dashboard", "_blank")
              }>
              Stake IQ
            </button>
          </div>
        </div>
      </div>
      <DashboardCards cards={cardData} />
      <Footer />
    </div>
  )
}
