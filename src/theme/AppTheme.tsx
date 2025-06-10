import { ThemeProvider } from "@emotion/react"
import { CssBaseline } from "@mui/material"
import { darkTheme } from "."
import type { ReactNode } from 'react'

interface AppThemeProps {
  children: ReactNode;
}

export const AppTheme = ({ children }: AppThemeProps) => {
  return (
    <ThemeProvider theme={darkTheme} >
      <CssBaseline/>
      {children}
    </ThemeProvider>
  )
}
