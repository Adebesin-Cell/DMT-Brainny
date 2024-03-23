import type { FormEvent } from "react"

import { useStorage } from "@plasmohq/storage/hook"

import { button } from "~components/element/button"
import { FlashIcon } from "~components/icons/flash"
import { storage } from "~lib/storage"

export const CustomKnowledge = () => {
  const [apiKey] = useStorage<string>("x-auth-key")

  const handleApiKeySubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const apikey = formData.get("apiKey")
    await storage.set("x-auth-key", apikey)
  }

  return !apiKey ? (
    <div className="">
      <div className="border-brand-50 bg-brand-100  dark:bg-brand-300 border-[6px] dark:border-brand-200 flex justify-center items-center w-12 h-12 rounded-full">
        <FlashIcon className="text-brand-500 dark:text-brand-800 w-5 h-5" />
      </div>
      <h2 className="text-base font-medium text-gray-800 dark:text-white/90 mt-5">
        Custom Knowledge
      </h2>
      <p className="text-sm font-normal text-gray-500 dark:text-white/70 mt-4">
        To use the custom knowledge, please enter your api key. You can get your
        api key from:
      </p>
      <p className="mt-3 text-sm font-normal text-gray-500 dark:text-white/70">
        <a
          href="https://iqgpt.com/"
          target="_blank"
          className="inline-block hover:underline"
          rel="noreferrer">
          https://iqgpt.com/
        </a>
      </p>
      <form action="" onSubmit={handleApiKeySubmit} className="mt-5">
        <label
          htmlFor="apikey"
          className="text-sm font-medium text-gray-800 dark:text-white/90 block mb-2">
          API key
        </label>
        <input
          name="apiKey"
          type="text"
          className="input bg-white dark:bg-dark w-full text-base font-normal"
          placeholder="e.g 3fd6706b-c57........acf453a1"
          required
        />
        <div className="mt-8">
          <button
            type="submit"
            className={button({
              variant: "primary",
              class: "px-10 py-2 text-base "
            })}>
            Submit
          </button>
        </div>
      </form>
    </div>
  ) : (
    <div className="">&nbsp;</div>
  )
}
