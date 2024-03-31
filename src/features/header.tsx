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

  const tabsCount = tabs.length
  const gridTemplateColumns = `repeat(${tabsCount}, minmax(0, 1fr))`

  return (
    <Tabs
      defaultValue={tabs[0]?.value}
      className="h-full flex flex-col flex-grow pt-[115px]">
      <div className="dark:bg-dark bg-white py-5 px-5 fixed top-20 w-full z-50">
        <div className="flex gap-3 items-center">
          <button
            type="button"
            className="flex items-center justify-center text-gray-800 dark:text-white/90"
            onClick={() => navigate("/popup.html")}>
            <ArrowLeftIcon className="w-5 h-5" />
          </button>
          <p className="text-gray-800 dark:text-white/90 text-base font-semibold">
            {title}
          </p>
        </div>
        <TabsList className="dark:bg-dark-2 bg-gray-50 w-full mt-2 gap-2 border border-gray-200 dark:border-white/10 p-2 ">
          <div
            className={`grid grid-cols-1 w-full sm:grid-cols-${tabsCount} gap-2 overflow-x-auto overflow-y-hidden`}
            style={{ gridTemplateColumns }}>
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="data-[state=active]:bg-white data-[state=active]:dark:bg-dark flex-grow data-[state=active]:shadow-sm rounded text-xs text-gray-800 dark:text-white/90 data-[state=inactive]:text-gray-500 data-[state=inactive]:dark:text-white/70 px-2">
                {tab.label}
              </TabsTrigger>
            ))}
          </div>
        </TabsList>
      </div>
      <div className="dark:bg-dark-2 bg-gray-50 border-t border-gray-200 dark:border-white/10 rounded-t-lg p-5 flex-grow ">
        {tabs.map((tab) => (
          <TabsContent key={tab.value} value={tab.value} className="mt-0">
            {tab.content}
          </TabsContent>
        ))}
      </div>
    </Tabs>
  )
}
