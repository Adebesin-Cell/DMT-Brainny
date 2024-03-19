import { Navbar } from "./navbar"

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="plasmo-w-[400px] plasmo-font-montserrat plasmo-min-h-[500px] plasmo-bg-white dark:plasmo-bg-dark">
      <Navbar />
      {children}
    </div>
  )
}
