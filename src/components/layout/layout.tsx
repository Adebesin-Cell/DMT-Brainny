import { AppProvider } from "./app-providers"
import { Navbar } from "./navbar"

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppProvider>
      <div className="bg-white dark:bg-dark">
        <div className="w-[400px] flex h-full mx-auto flex-col font-inter top-0 right-0 min-h-[600px]">
          <Navbar />
          {children}
        </div>
      </div>
    </AppProvider>
  )
}
