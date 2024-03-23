import { useNavigate } from "react-router-dom"

import { ArrowLeftIcon } from "~components/icons/arrow-left"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~components/ui/tabs"

interface Tab {
  label: string
  content: React.ReactNode
  value: string
}

interface HeaderTabsProps {
  title: string
  tabs: Tab[]
}

export const HeaderTabs: React.FC<HeaderTabsProps> = ({ title, tabs }) => {
  const navigate = useNavigate()

  return (
    <>
      <Tabs defaultValue={tabs[0]?.value} className="w-[400px]">
        <div className="dark:bg-dark bg-white py-5 px-5">
          <div className="flex gap-3 items-center">
            <button
              type="button"
              className="flex items-center justify-center text-gray-800 dark:text-white/90"
              onClick={() => navigate("/popup.html")}>
              <ArrowLeftIcon className="w-6 h-6" />
            </button>
            <p className="text-gray-800 dark:text-white/90 text-lg font-semibold">
              {title}
            </p>
          </div>

          <TabsList>
            {tabs.map((tab) => (
              <TabsTrigger key={tab.value} value={tab.value}>
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        <div className="dark:bg-dark-2 bg-gray-50 border-t border-gray-200 dark:border-white/20 rounded-t-lg px-5 flex-grow">
          {tabs.map((tab) => (
            <TabsContent key={tab.value} value={tab.value}>
              {tab.content}
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </>
  )
}
