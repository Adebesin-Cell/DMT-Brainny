import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ThemeProvider } from "next-themes"

const queryClient = new QueryClient()

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" enableSystem={false}>
        {children}
      </ThemeProvider>
    </QueryClientProvider>
  )
}
