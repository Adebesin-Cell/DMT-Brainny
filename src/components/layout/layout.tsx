import { Navbar } from "./navbar"

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-[400px] flex h-full flex-col font-montserrat bg-white dark:bg-dark  px-5 top-0 right-0  min-h-screen">
      <Navbar />
      {children}
    </div>
  )
}
