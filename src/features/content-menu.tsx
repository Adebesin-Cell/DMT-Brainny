import logo from "data-base64:~assets/icon.png"
import type { PlasmoCSConfig } from "plasmo"
import { useEffect, useState, type FormEvent } from "react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "~components/ui/dropdown-menu"

export const config: PlasmoCSConfig = {
  matches: ["<all_urls>"],
  all_frames: true
}

// Custom DropdownMenuItem component that encapsulates common styles
const CustomDropdownMenuItem = ({
  children,
  Icon,
  onClick
}: {
  children: React.ReactNode
  Icon: JSX.Element
  onClick: () => void
}) => (
  <DropdownMenuItem
    onClick={onClick}
    className="bb-py-2 bb-px-3 bb-text-sm bb-font-normal bb-text-gray-600 dark:text-white/80 bb-gap-2 hover:bg-gray-100 dark:hover:bg-white/10">
    {children} {Icon}
  </DropdownMenuItem>
)

export const ContentMenu = ({
  selectedText,
  setMenuOpen
}: {
  selectedText: string
  setMenuOpen: (open: boolean) => void
}) => {
  const [isClicked, setIsClicked] = useState(false)

  const handleTriggerClick = (event: FormEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    setIsClicked(!isClicked)
  }

  const openPopupWithOption = (option: string) => {
    const sideBarIframe = document.getElementById(
      "brainny_chat"
    ) as HTMLIFrameElement
    if (sideBarIframe.style.width === "0px") {
      sideBarIframe.style.width = "400px"
    }
    setMenuOpen(false)
  }

  useEffect(() => {
    const highlightMenu = document.getElementById(
      "react-highlight-menu-container"
    )
    if (highlightMenu) highlightMenu.style.zIndex = "2147483647"
  }, [])

  return (
    <DropdownMenu open={isClicked}>
      <DropdownMenuTrigger
        type="button"
        style={{ zIndex: 2147483647 }}
        className="bb-flex bb-py-1 bb-px-2 bb-items-center bb-gap-1 bb-rounded-sm bb-bg-brand-50 dark:bg-brand-200 bb-shadow-lg"
        onClick={handleTriggerClick}>
        <div className="bb-flex bb-items-center bb-justify-center bb-w-8 bb-h-8 bb-bg-brand-100 bb-rounded-[3px] dark:bg-brand-300">
          <img src={logo} alt="brainbot" className="bb-w-6 bb-h-6" />
        </div>
        <p className="bb-text-gray-800 bb-text-sm bb-font-medium">BrainBot</p>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        side="bottom"
        className="bb-bg-white bb-shadow-xl dark:bg-dark bb-w-[250px] bb-select-none bb-outline-0 bb-py-2 bb-rounded"
        onClick={(e) => e.stopPropagation()}>
        <DropdownMenuGroup>
          <CustomDropdownMenuItem
            Icon={
              <span role="img" aria-label="Add to custom knowledge">
                📚
              </span>
            }
            onClick={() => openPopupWithOption("custom")}>
            Add to custom knowledge
          </CustomDropdownMenuItem>
          <CustomDropdownMenuItem
            Icon={
              <span role="img" aria-label="Ask me about crypto">
                🟡
              </span>
            }
            onClick={() => openPopupWithOption("crypto")}>
            Ask me about crypto
          </CustomDropdownMenuItem>
          <CustomDropdownMenuItem
            Icon={
              <span role="img" aria-label="Content/page summary">
                📝
              </span>
            }
            onClick={() => openPopupWithOption("summary")}>
            Content/page summary
          </CustomDropdownMenuItem>
          <CustomDropdownMenuItem
            Icon={
              <span role="img" aria-label="Generate more info">
                ❓
              </span>
            }
            onClick={() => openPopupWithOption("info")}>
            Generate more info
          </CustomDropdownMenuItem>
          <CustomDropdownMenuItem
            Icon={
              <span role="img" aria-label="ELI5">
                🤷‍♂️
              </span>
            }
            onClick={() => openPopupWithOption("eli5")}>
            ELI5
          </CustomDropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
