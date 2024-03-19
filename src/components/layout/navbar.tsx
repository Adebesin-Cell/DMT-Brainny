import { Logo } from "~components/icons/logo"

export const Navbar = () => {
  return (
    <div className="plasmo-flex plasmo-fixed plasmo-top-0 plasmo-left-0 plasmo-w-full plasmo-z-50 plasmo-border-b plasmo-border-gray-200 dark:plasmo-border-white/20 plasmo-justify-between plasmo-px-4 plasmo-py-5">
      <div className="plasmo-flex plasmo-gap-2 plasmo-items-center">
        <Logo className="plasmo-w-[43px] plasmo-h-[35px]" />
        <p className="plasmo-text-gray-800 dark:plasmo-text-white/90 plasmo-text-lg plasmo-font-semibold">
          BrainBot
        </p>
      </div>
    </div>
  )
}
