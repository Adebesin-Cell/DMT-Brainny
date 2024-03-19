import { Montserrat } from "next/font/google"
import { useServerInsertedHTML } from "next/navigation"

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-family-montserrat"
})

const Fonts = () => {
  useServerInsertedHTML(() => {
    return (
      <style
        key="font"
        // rome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
        dangerouslySetInnerHTML={{
          __html: `
          :root {
            --font-family-montserrat: ${montserrat.style.fontFamily}, 'sans-serif';
          }
        `
        }}
      />
    )
  })

  return null
}

export default Fonts
