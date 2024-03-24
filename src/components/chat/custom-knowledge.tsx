import { useTheme } from "next-themes"
import type { FormEvent } from "react"

import { useStorage } from "@plasmohq/storage/hook"

import { button } from "~components/element/button"
import { AddIcon } from "~components/icons/add"
import { ArrowRight } from "~components/icons/arrow-right"
import { Briefcase } from "~components/icons/briefcase"
import { FlashIcon } from "~components/icons/flash"
import { FolderIcon } from "~components/icons/folder"
import { MoreIcon } from "~components/icons/more"
import { storage } from "~lib/storage"

export const CustomKnowledge = () => {
  const [apiKey] = useStorage<string>("x-auth-key")
  const { theme } = useTheme()

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
    <div className="">
      <button
        type="button"
        className="flex border border-gray-200 dark:border-white/10 justify-between p-3.5 items-center dark:bg-dark bg-white shadow-sm w-full rounded-lg text-gray-800 dark:text-white/90">
        <div className="flex gap-2 items-center">
          <AddIcon className="w-5 h-5" />
          <span className="text-sm font-normal">Add New Folder</span>
        </div>
        <ArrowRight className="w-5 h-5" />
      </button>
      <div className="mt-6 grid grid-cols-2 gap-4">
        {[...Array(8)].map((_, index) => (
          <div
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            key={index}
            className="bg-white dark:bg-dark p-3 border border-gray-200 dark:border-white/10 rounded-xl">
            <div className="flex justify-between">
              <FolderIcon isDark={theme === "dark"} />
              <button type="button">
                <MoreIcon className="rotate-90 w-5 h-6" />
              </button>
            </div>
            <div className="mt-2">
              <h2 className="text-gray-600 dark:text-white/80 text-sm font-medium">
                Frax Docs
              </h2>
              <p className="text-gray-600 dark:text-white/80 text-xs font-normal">
                22 Feb 2023
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
