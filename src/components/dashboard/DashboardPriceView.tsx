import * as Humanize from "humanize-plus"
import React from "react"
import { Area, AreaChart, ResponsiveContainer, Tooltip } from "recharts"

import { button } from "~components/element/button"
import { Spinner } from "~components/icons/spinner"
import useFetchGraphData from "~hooks/useFetchGraphData"

// Define Dict type
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export declare type Dict<T = any> = Record<string, T>

const CustomTooltip = ({ active, payload }: Dict) => {
  if (active && payload?.length) {
    return (
      <div className="p-2 rounded-lg bg-white dark:bg-dark">
        <b>Price:</b> {`$${payload[0].value.toFixed(6)}`}
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

  const price = data ? Humanize.formatNumber(lastPrice ?? 0, 4) : ""
  const marketCap = data ? Humanize.compactInteger(lastMarketCap ?? 0, 2) : ""
  const transformedPrices = data?.prices?.map(
    ([timestamp, price]: [number, number]) => ({
      name: timestamp,
      amt: price
    })
  )

  return (
    <div className="border border-gray-200 dark:border-white/10 p-2 rounded-lg">
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
  )
}
