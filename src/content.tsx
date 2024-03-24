import cssText from "data-text:~style.css"
import { createRoot } from "react-dom/client"
import HighlightMenu from "react-highlight-menu"

import { ContentMenu } from "~features/content-menu"

export const config = {
  matches: ["<all_urls>"]
}

function prefixCssText(cssText: string, prefix: string) {
  // Regex to match class selectors, capturing groups for specific logic handling
  const classSelectorRegex = /\.([a-zA-Z0-9_-]+)((?:\:\S+)?)(?=[^{}]*{)/g

  const prefixedCssText = cssText.replace(
    classSelectorRegex,
    (match, className, pseudo) => {
      // Cases where .dark or .data are not prefixed if they stand alone
      if (
        (className === "dark" ||
          className === "data" ||
          className === "hover") &&
        !pseudo
      ) {
        return match
      }
      // Specific handling for .dark: and .data: with pseudo selectors
      if (className === "dark" || className === "data") {
        return `.${className}${pseudo.startsWith(":") ? prefix + pseudo : pseudo}`
      }
      // Prefixing all other classes

      return `.${prefix}${className}${pseudo}`
    }
  )

  return prefixedCssText
}

export const injectGlobalStyle = () => {
  const style = document.createElement("style")

  const prefixedCssText = prefixCssText(cssText, "bb-")
  style.textContent = prefixedCssText
  document.head.appendChild(style)
}

export const initializeQuickMenu = () => {
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
