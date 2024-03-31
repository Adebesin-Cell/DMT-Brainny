import { Route, BrowserRouter as Router, Routes } from "react-router-dom"

import { Layout } from "~components/layout/layout"
import { DashboardScreen } from "~features/dashboard"

import "~style.css"

import { ChatBotPage } from "~tabs/chat"
import { NewsPage } from "~tabs/news"

function IndexPopup() {
  return (
    <Router>
      <Layout>
        <div className="flex-grow pt-20 flex flex-col">
          <Routes>
            <Route path="/tabs/news.html" element={<DashboardScreen />} />
            <Route path="/tabs/chat.html" element={<ChatBotPage />} />
            <Route path="/popup.html" element={<NewsPage />} />
          </Routes>
        </div>
      </Layout>
    </Router>
  )
}

export default IndexPopup
