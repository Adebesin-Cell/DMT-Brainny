import avatar from "data-base64:~assets/avatar.png"

export const LatestWikis = () => {
  return (
    <div className="">
      <h1 className="text-gray-800 dark:text-white/90 text-sm font-medium">
        Latest wikis
      </h1>
      <div className="grid gap-5 mt-5">
        {[...Array(3)].map((_, index) => (
          <>
            <div
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              key={index}
              className="bg-white dark:bg-dark p-3 border border-gray-200 dark:border-white/10 rounded-lg">
              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  <h3 className="text-xs text-gray-800 dark:text-white/90 font-medium ">
                    Property’s NFT{" "}
                  </h3>
                  <span className="text-[8px] text-brand-500 dark:text-brand-800 font-normal self-start">
                    New
                  </span>
                </div>
                <p className="text-[10px] text-brand-500 dark:text-brand-800 font-normal">
                  NFTs
                </p>
              </div>
              <p className="line-clamp-3 text-gray-600 dark:text-white/70 mt-2">
                Property's NFT is a collectible card game with 6,000 NFTs that
                integrates rea Property's NFT is a collectible card game with
                6,000 NFTs that integrates rea...
              </p>
              <div className="flex flex-wrap gap-3 mt-3">
                <button
                  type="button"
                  className="px-3 py-1 text-[10px] bg-gray-100 dark:bg-white/10 rounded text-gray-800 dark:text-white/90">
                  NFT
                </button>
                <button
                  type="button"
                  className="px-3 py-1 text-[10px] bg-gray-100 dark:bg-white/10 rounded text-gray-800 dark:text-white/90">
                  Crytocurrencies
                </button>
                <button
                  type="button"
                  className="px-3 py-1 text-[10px] bg-gray-100 dark:bg-white/10 rounded text-gray-800 dark:text-white/90">
                  Protocols
                </button>
                <button
                  type="button"
                  className="px-3 py-1 text-[10px] bg-gray-100 dark:bg-white/10 rounded text-gray-800 dark:text-white/90">
                  CEXes
                </button>
                <button
                  type="button"
                  className="px-3 py-1 text-[10px] bg-gray-100 dark:bg-white/10 rounded text-gray-800 dark:text-white/90">
                  PeopleInDefi
                </button>
              </div>
              <div className="flex justify-between items-center mt-3">
                <div className="flex items-center gap-2">
                  <img
                    src={avatar}
                    alt="avatar"
                    className="w-6 h-6 flex-shrink-0"
                  />
                  <p className="text-[10px] text-brand-500 dark:text-brand-800 font-normal">
                    0xAe65...11ED
                  </p>
                </div>
                <p className="text-gray-500 dark:text-white/60 text-[10px] font-normal">
                  Edited 12 days ago
                </p>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  )
}
