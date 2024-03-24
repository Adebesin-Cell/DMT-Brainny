import cssText from "data-text:~style.css"
import { createRoot } from "react-dom/client"
import HighlightMenu from "react-highlight-menu"

import { ContentMenu } from "~features/content-menu"

export const config = {
  matches: ["<all_urls>"]
}

function prefixCssText(cssText: string, prefix: string) {
  const classSelectorRegex = /\.([-_a-zA-Z]+[_a-zA-Z0-9-]*)(?=[^{}]*{)/g

  const prefixedCssText = cssText.replace(classSelectorRegex, (match) => {
    if (match.startsWith(`.${prefix}`)) {
      return match
    }
    return `.${prefix}${match.slice(1)}`
  })

  return prefixedCssText
}

const injectGlobalStyle = () => {
  const style = document.createElement("style")

  const prefixedCssText = prefixCssText(cssText, "bb-")
  style.textContent = prefixedCssText
  document.head.appendChild(style)
}

const initializeQuickMenu = () => {
  injectGlobalStyle()

  document.body.classList.add("braindao_body")
  const root = createRoot(document.createElement("div"))

  root.render(
    <HighlightMenu
      target=".braindao_body"
      allowedPlacements="bottom-start"
      menu={({ selectedText, setMenuOpen }) => (
        <ContentMenu selectedText={selectedText} setMenuOpen={setMenuOpen} />
      )}
      styles={{
        borderColor: "none",
        background: "transparent",
        boxShadow: "none",
        zIndex: 2147483647,
        borderRadius: "0",
        padding: "0",
        margin: "10px"
      }}
    />
  )
}

initializeQuickMenu()
