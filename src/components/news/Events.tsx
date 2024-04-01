import { Calendar } from "~components/ui/calendar"

export const Events = () => {
  return (
    <div className="mx-auto">
      <h1 className="text-gray-800 dark:text-white/90 text-sm font-medium">
        Crypto Events and Conferences
      </h1>
      <div className="mt-5">
        <Calendar
          mode="single"
          className="rounded-md mx-auto border w-[300px]"
        />
      </div>
    </div>
  )
}
