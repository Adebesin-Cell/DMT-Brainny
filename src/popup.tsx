import { useStorage } from "@plasmohq/storage/hook"

import { Layout } from "~components/layout/layout"
import { DashboardScreen } from "~features/dashboard"
import { GetStartedScreen } from "~features/get-started"

import "~style.css"

function IndexPopup() {
  const [isGetStartedCompleted] = useStorage<boolean>(
    "GET_STARTED_COMPLETED",
    false
  )

  return (
    <Layout>
      <div className="flex-grow pt-20">
        {!isGetStartedCompleted && <GetStartedScreen />}
        {isGetStartedCompleted && <DashboardScreen />}
      </div>
    </Layout>
  )
}

export default IndexPopup
