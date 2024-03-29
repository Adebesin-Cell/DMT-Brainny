import { useStorage } from "@plasmohq/storage/hook"

import { DashboardPriceView } from "~components/dashboard/DashboardPriceView"
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
      <DashboardPriceView />
      <DashboardCards cards={cardData} />
      <Footer />
    </div>
  )
}
