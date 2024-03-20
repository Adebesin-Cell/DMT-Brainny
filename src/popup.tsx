import { ThemeProvider } from "next-themes"

import { Layout } from "~components/layout/layout"
import { GetStartedScreen } from "~features/get-started"

import "~style.css"

function IndexPopup() {
  return (
    <ThemeProvider attribute="class" enableSystem={false}>
      <Layout>
        <div className="flex-grow pt-20">
          <GetStartedScreen />
        </div>
      </Layout>
    </ThemeProvider>
  )
}

export default IndexPopup
