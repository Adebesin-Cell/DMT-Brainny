import { ThemeProvider } from "next-themes"

import { useStorage } from "@plasmohq/storage/hook"

import { Layout } from "~components/layout/layout"
import { GetStartedScreen } from "~features/get-started"

import "~style.css"

function IndexPopup() {
  const [isGetStartedCompleted] = useStorage("GET_STARTED_COMPLETED")

  return (
    <ThemeProvider attribute="class" enableSystem={false}>
      <Layout>
        <div className="flex-grow pt-20">
          {!isGetStartedCompleted && <GetStartedScreen />}
        </div>
      </Layout>
    </ThemeProvider>
  )
}

export default IndexPopup
