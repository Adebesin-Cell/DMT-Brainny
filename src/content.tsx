import cssText from "data-text:~style.css"
import type { PlasmoCSConfig } from "plasmo"

export const config: PlasmoCSConfig = {
  matches: ["<all_urls>"],
  world: "MAIN"
}

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

window.addEventListener("load", () => {
  console.log(
    "You may find that having is not so pleasing a thing as wanting. This is not logical, but it is often true."
  )

  // document.body.style.background = "red"
})
