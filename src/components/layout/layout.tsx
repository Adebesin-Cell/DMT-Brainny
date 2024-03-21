import { useStorage } from "@plasmohq/storage/hook"

import { AppProvider } from "./app-providers"
import { Footer } from "./footer"
import { Navbar } from "./navbar"

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isGetStartedCompleted] = useStorage<boolean>(
    "GET_STARTED_COMPLETED",
    false
  )

  return (
    <AppProvider>
      <div className="w-[400px] flex h-full flex-col font-inter bg-white dark:bg-dark  px-5 top-0 right-0  min-h-screen">
        <Navbar />
        {children}
        {isGetStartedCompleted && <Footer />}
      </div>
    </AppProvider>
  )
}
