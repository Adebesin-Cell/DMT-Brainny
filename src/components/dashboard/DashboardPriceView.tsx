import * as Humanize from "humanize-plus"
import React from "react"
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from "recharts"

import { button } from "~components/element/button"
import { Spinner } from "~components/icons/spinner"
import useFetchGraphData from "~hooks/useFetchGraphData"

// Define Dict type
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export declare type Dict<T = any> = Record<string, T>

const CustomTooltip = ({ active, payload, label }: Dict) => {
  if (active && payload?.length) {
    return (
      <div className="p-2 rounded-lg bg-white dark:bg-dark">
        <p className="text-gray-700 dark:text-white/80 text-[10px] font-medium flex items-center">
          <span className="w-2 block h-2 rounded-full bg-brand-500 dark:bg-brand-800 mr-1" />{" "}
          Price (IQ): {`$${payload[0].value.toFixed(6)}`}
        </p>
        <p className="mt-2 text-gray-600 dark:text-white/70 text-[10px] font-medium">
          {new Date(label).toLocaleString()}
        </p>
      </div>
    )
  }

  return null
}

export default CustomTooltip

export const DashboardPriceView = () => {
  const { data, isLoading } = useFetchGraphData()

  if (!data && isLoading) {
    return (
      <div className="border border-gray-200 dark:border-white/10 px-2 min-h-[200px] py-12 flex rounded-lg justify-center items-center">
        <Spinner className="animate-spin w-6 h-6" />
      </div>
    )
  }

  const lastPrice = data.prices[data.prices.length - 1]?.[1] ?? 0
  const lastMarketCap = data.market_caps[data.market_caps.length - 1]?.[1] ?? 0
  const lastVolume = data.total_volumes[data.market_caps.length - 1]?.[1] ?? 0

  const price = data ? Humanize.formatNumber(lastPrice ?? 0, 4) : ""
  const marketCap = data ? Humanize.compactInteger(lastMarketCap ?? 0, 2) : ""
  const totalVolume = data ? Humanize.compactInteger(lastVolume ?? 0, 2) : ""
  const transformedPrices = data?.prices?.map(
    ([timestamp, price]: [number, number]) => {
      const date = new Date(timestamp)
      const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()} ${date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`
      return {
        name: formattedDate,
        amt: price
      }
    }
  ) as { name: string; amt: number }[]

  return (
    <div className="border border-gray-200 dark:border-white/10 rounded-lg">
      <div className="p-2">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <div className="flex gap-2 items-center">
              <h1 className="text-gray-600 dark:text-white/70 text-xs">
                IQ Price
              </h1>
            </div>
            <p className="text-gray-600 dark:text-white/70 text-base font-bold">
              ${`${price}`}{" "}
              <span className="text-[8px] text-green-500">(+3.457%)</span>
            </p>
          </div>
          <div>
            <button
              type="button"
              className={button({
                variant: "primary",
                class: "px-10 py-2 text-xs"
              })}
              onClick={() =>
                window.open("https://iq.braindao.org/dashboard", "_blank")
              }>
              Stake IQ
            </button>
          </div>
        </div>
        <div className="z-50 relative">
          <ResponsiveContainer width="100%" height={110}>
            <AreaChart data={transformedPrices}>
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#FF1A88" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="#FF1A88" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Tooltip content={<CustomTooltip />} />
              <XAxis dataKey="name" display={"none"} />
              <Area
                className="area"
                type="monotone"
                dataKey="amt"
                stroke="#FF1A88"
                fillOpacity={1}
                fill="url(#colorUv)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="mt-2 p-2 border-t border-gray-200 dark:border-white/10">
        <div className="flex items-center gap-3">
          <div className="">
            <p className="text-gray-500 dark:text-white/60 text-[10px] font-medium">
              Market Cap ($)
            </p>
            <p className="mt-1 text-gray-600 dark:text-white/70 text-[10px] font-medium">
              ${`${marketCap}`}
            </p>
          </div>
          <div className="">
            <p className="text-gray-500 dark:text-white/60 text-[10px] font-medium">
              24hrs Volume
            </p>
            <p className="mt-1 text-gray-600 dark:text-white/70 text-[10px] font-medium">
              ${`${totalVolume}`}
            </p>
          </div>
          <div className="">
            <p className="text-gray-500 dark:text-white/60 text-[10px] font-medium">
              BrainDAO treasury
            </p>
            <p className="mt-1 text-gray-600 dark:text-white/70 text-[10px] font-medium">
              $39M
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
