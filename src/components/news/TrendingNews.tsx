import avatar from "data-base64:~assets/avatar.png"

import { ShareIcon } from "~components/icons/share"

export const TrendingNews = () => {
  return (
    <div className="">
      <h1 className="text-gray-800 dark:text-white/90 text-sm font-medium">
        Trending News
      </h1>
      <div className="grid gap-5 mt-5">
        {[...Array(6)].map((_, index) => (
          <>
            <div
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              key={index}
              className="bg-white dark:bg-dark p-3 border border-gray-200 dark:border-white/10 rounded-lg">
              <h3 className="text-xs text-gray-800 dark:text-white/90 font-medium ">
                Bitcoin Market Cap Records New ATH, Shiba Inu’s Double Digit Run
                Continues (Market Watch)
              </h3>
              <div className="mt-2 flex gap-2">
                <div className="flex gap-1.5 items-center bg-gray-100 dark:bg-white/10 py-0.5 px-2 text-gray-700 dark:text-white/80 rounded">
                  <p className="text-[10px] font-normal">Via cointegraph.com</p>
                  <ShareIcon />
                </div>
                <div className="flex gap-2 items-center bg-brand-50 dark:bg-brand-200 py-0.5 px-2 rounded">
                  <p className="text-[10px] font-normal text-brand-500 dark:text-brand-800">
                    Crypto
                  </p>
                </div>
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
                  8mins ago
                </p>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  )
}
