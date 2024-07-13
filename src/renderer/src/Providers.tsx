import { ThemeProvider } from '@components/theme-provider'
import { i18n } from '@lingui/core'
import { I18nProvider } from '@lingui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React, { ReactNode, useEffect } from 'react'
import { defaultLocale, dynamicActivate } from './i18n/'

const queryClient = new QueryClient()

const Providers: React.FC<{ children?: ReactNode }> = ({ children }) => {
  useEffect(() => {
    // With this method we dynamically load the catalogs
    dynamicActivate(defaultLocale)
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <I18nProvider i18n={i18n}>{children}</I18nProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default Providers
