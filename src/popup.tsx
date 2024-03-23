import { Route, BrowserRouter as Router, Routes } from "react-router-dom"

import { Layout } from "~components/layout/layout"
import { DashboardScreen } from "~features/dashboard"

import "~style.css"

import { ChatBotPage } from "~tabs/chat"

function IndexPopup() {
  return (
    <Router>
      <Layout>
        <div className="flex-grow pt-20">
          <Routes>
            <Route path="/popup.html" element={<DashboardScreen />} />
            <Route path="/tabs/chat.html" element={<ChatBotPage />} />
          </Routes>
        </div>
      </Layout>
    </Router>
  )
}

export default IndexPopup
