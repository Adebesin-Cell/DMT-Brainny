import logo from "data-base64:~assets/icon.png"
import { useEffect } from "react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "~components/ui/dropdown-menu"

// import "~style.css"

export const ContentMenu = ({
  selectedText,
  setMenuOpen
}: {
  selectedText: string
  setMenuOpen: (open: boolean) => void
}) => {
  useEffect(() => {
    const highlightMenu = document.getElementById(
      "react-highlight-menu-container"
    ) as HTMLDivElement | null

    if (highlightMenu) highlightMenu.style.zIndex = "2147483647"
  }, [])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        style={{ zIndex: 2147483647 }}
        className="bb-flex bb-py-1 bb-px-2 bb-items-center bb-gap-1 bb-rounded-sm bb-bg-brand-50 dark:bb-bg-brand-200 bb-shadow-lg">
        <div className="bb-flex bb-items-center bb-justify-center bb-w-8 bb-h-8 bb-bg-brand-100 bb-rounded-[3px] dark:bb-bg-brand-300">
          <img src={logo} alt="brainbot" className="bb-w-6 bb-h-6" />
        </div>
        <p className="bb-text-gray-800 bb-text-sm bb-font-medium">BrainBot</p>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        style={{ zIndex: 2147483647 }}
        align="start"
        side="bottom"
        sideOffset={10}
        className="bg-white shadow-xl w-[220px]">
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
