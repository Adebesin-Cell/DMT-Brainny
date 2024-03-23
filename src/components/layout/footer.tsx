import { button } from "~components/element/button"
import { FlashIcon } from "~components/icons/flash"

export const Footer = () => {
  return (
    <div className="border-t fixed left-0 bottom-0 w-full bg-white dark:bg-dark flex border-gray-200 dark:border-white/10 h-[50px] justify-between px-2 py-4 items-center">
      <p className="text-gray-600 dark:text-white/80 text-xs font-normal">
        5 Trials Left
      </p>
      <div className="">
        <progress max={5} value={2} className="progress-bar h-1 rounded-sm" />
      </div>
      <button
        type="button"
        className={button({
          variant: "primary",
          class: "px-10 py-2 text-xs flex gap-3"
        })}>
        <FlashIcon className="w-4 h-4" />
        Upgrade
      </button>
    </div>
  )
}
