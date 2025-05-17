"use client"

import { useState } from "react"
import { ThemeProvider as StyledThemeProvider } from "styled-components"

export const ThemeProvider = ({
  children,
  attribute,
  defaultTheme,
  enableSystem,
  disableTransitionOnChange,
}: {
  children: React.ReactNode;
  attribute: string; // This is a string, but it can be "class" or "data-theme"
  defaultTheme: string;
  enableSystem: boolean;
  disableTransitionOnChange: boolean;
}) => {
  const [theme, setTheme] = useState<"light" | "dark">("light")

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light")

  return (
    <StyledThemeProvider theme={{ mode: theme }}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        {children}
    </StyledThemeProvider>
  )
}
