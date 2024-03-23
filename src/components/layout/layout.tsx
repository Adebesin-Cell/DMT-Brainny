import { AppProvider } from "./app-providers"
import { Navbar } from "./navbar"

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppProvider>
      <div className="w-[400px] flex h-full flex-col font-inter bg-white dark:bg-dark top-0 right-0 min-h-[600px]">
        <Navbar />
        {children}
      </div>
    </AppProvider>
  )
}
