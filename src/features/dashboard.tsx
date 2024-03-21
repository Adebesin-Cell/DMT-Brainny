import { useAccount, useConnect } from "wagmi"
import { injected } from "wagmi/connectors"

import { useStorage } from "@plasmohq/storage/hook"

import { button } from "~components/element/button"
import { EyeIcon } from "~components/icons/eyes"
import { storage } from "~lib/storage"

export const DashboardScreen = () => {
  const [isAssetsShown] = useStorage<boolean>("SHOW_ASSETS", false)
  const { address, isConnected } = useAccount()
  const { connect } = useConnect()

  console.log("address", { address, isConnected })

  const toggleAssetDisplay = async () => {
    if (isAssetsShown) {
      await storage.set("SHOW_ASSETS", false)
    } else {
      await storage.set("SHOW_ASSETS", true)
    }
  }

  //TODO use magic to get user connected

  return (
    <div className="flex-grow py-3">
      <div className="border border-gray-200 dark:border-white/20 h-[200px] p-2 rounded-lg">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <div className="flex gap-2 items-center">
              <h1 className="text-gray-600 dark:text-white/70 text-sm">
                Total Asset
              </h1>
              <button type="button" onClick={toggleAssetDisplay}>
                <EyeIcon className="w-4 h-4 text-gray-800 dark:text-white/90" />
              </button>
            </div>
            <p className="text-gray-600 dark:text-white/70 text-base font-bold">
              {isAssetsShown ? "$20,345.89" : "--"}
            </p>
          </div>
          <div className="">
            <button
              type="button"
              className={button({
                variant: "primary",
                class: "px-10 py-2 text-xs"
              })}>
              Stake
            </button>
          </div>
        </div>
        <div className="mt-3">
          <div className="grid grid-cols-[1fr_2fr]">
            <div className="">
              <button
                type="button"
                className={button({
                  variant: "tertiary",
                  class: "text-xs py-2 px-3 w-full"
                })}
                onClick={() => {
                  connect({ connector: injected() })
                }}>
                Connect Wallet
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
