import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";
import { MainSidebar } from "@/components/navigation-sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased font-sans")}
    >
      <body className="bg-background min-h-screen">
        <ThemeProvider>
          <MainSidebar>
            {children}
          </MainSidebar>
        </ThemeProvider>
      </body>
    </html>
  )
}
