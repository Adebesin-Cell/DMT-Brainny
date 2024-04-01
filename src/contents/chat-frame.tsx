import type { PlasmoCSConfig } from "plasmo"

export const config: PlasmoCSConfig = {
  matches: ["<all_urls>"],
  all_frames: true
}

const iframe = document.createElement("iframe")
iframe.style.background = "#070708"
iframe.style.height = "100%"
iframe.style.width = "0px"
iframe.style.position = "fixed"
iframe.style.top = "0px"
iframe.style.right = "0px"
iframe.style.zIndex = "9000000000000000000"
iframe.style.border = "0px"
iframe.style.colorScheme = "auto"
iframe.src = chrome.runtime.getURL("/tabs/chat.html")
iframe.id = "brainny_chat"

document.body.appendChild(iframe)

chrome.runtime.onMessage.addListener((msg) => {
  if (msg.action === "open-chat") {
    if (iframe.style.width === "0px") {
      iframe.style.width = "400px"
    } else {
      iframe.style.width = "0px"
    }
  }
})
