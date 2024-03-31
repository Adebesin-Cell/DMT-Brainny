import { LatestWikis } from "~components/news/LatestWikis"
import { TrendingNews } from "~components/news/TrendingNews"
import { HeaderTabs } from "~features/header"

const tabsData = [
  {
    label: "IQ.wiki",
    content: <LatestWikis />,
    value: "iq-wiki"
  },
  {
    label: "News",
    content: <TrendingNews />,
    value: "crypto-news"
  },
  {
    label: "Events",
    content: "",
    value: "events"
  },
  {
    label: "Twitter",
    content: "",
    value: "twitter"
  }
]

export const NewsPage = () => {
  return <HeaderTabs title="Crypto News/ Wikis" tabs={tabsData} />
}
