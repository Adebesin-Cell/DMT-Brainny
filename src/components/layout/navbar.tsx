import { useTheme } from "next-themes"
import { Link } from "react-router-dom"

import { CloseCircleIcon } from "~components/icons/close-circle"
import { Logo } from "~components/icons/logo"
import { MoonIcon } from "~components/icons/moon"
import { SunIcon } from "~components/icons/sun-icon"
import { UserSquareIcon } from "~components/icons/user-square"

export const Navbar = () => {
  const { theme, setTheme } = useTheme()

  const handleClose = () => {
    window.close() // Close the extension window
  }

  return (
    <div className="bg-white dark:bg-dark flex fixed top-0 left-0 w-full z-[99999] border-b border-gray-200 dark:border-white/10 justify-between px-4 py-5 h-20">
      <div>
        <Link to="/popup.html" className="flex gap-2 items-center">
          <Logo className="w-[43px] h-[35px]" />
          <p className="text-gray-800 dark:text-white/90 text-lg font-montserrat font-semibold">
            BrainBot
          </p>
        </Link>
      </div>
      <div className="flex items-center gap-2.5">
        <button
          type="button"
          className="text-gray-800 dark:text-white/90"
          onClick={() =>
            theme === "light" ? setTheme("dark") : setTheme("light")
          }>
          {theme === "light" ? (
            <MoonIcon className="w-6 h-6" />
          ) : (
            <SunIcon className="w-6 h-6" />
          )}
        </button>
        <button type="button" className="text-gray-800 dark:text-white/90">
          <UserSquareIcon className="w-6 h-6" />
        </button>
        <button
          type="button"
          className="text-gray-800 dark:text-white/90"
          onClick={handleClose}>
          <CloseCircleIcon className="w-6 h-6" />
        </button>
      </div>
    </div>
  )
}
