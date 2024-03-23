import getStartedImage from "data-base64:~assets/get-started.svg"

import { storage } from "~lib/storage"

export const GetStartedScreen = () => {
  const handleGetStartedButton = async () => {
    await storage.set("GET_STARTED_COMPLETED", true)
  }

  return (
    <div className="py-12 px-5">
      <div className="pt-7">
        <div className="px-2.5 py-1 bg-brand-50 dark:bg-brand-200  w-[max-content] mx-auto rounded-2xl">
          <p className="text-sm font-normal text-center text-brand-500 dark:text-brand-800 font-sora">
            Powered by the IQ Token
          </p>
        </div>
        <h1 className="font-inter mt-5 font-medium  text-2xl  text-gray-800 dark:text-white/90 text-center">
          Your Crypto and blockchain AI companion brought to you by IQ GPT
        </h1>
        <p className="font-inter mt-3 font-normal text-sm text-gray-600 dark:text-white/80 text-center">
          Gain comprehensive access to the Braindao ecosystem, encompassing an
          AI assistant chatbot, crypto news aggregation, crypto wikis etc.
        </p>
        <img src={getStartedImage} alt="Get started banner" />
        <button
          type="button"
          className="w-full bg-brand-500 dark:bg-brand-800 px-12 text-center text-white font-inter font-semibold py-3  mt-4 text-base rounded-md"
          onClick={handleGetStartedButton}>
          Sign In
        </button>
      </div>
    </div>
  )
}
