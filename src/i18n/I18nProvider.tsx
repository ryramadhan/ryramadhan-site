import * as React from 'react'
import { translations, type Locale, type Translations } from './translations'

type I18nContextValue = {
  locale: Locale
  t: Translations
  setLocale: (next: Locale) => void
}

const I18nContext = React.createContext<I18nContextValue | null>(null)

const STORAGE_KEY = 'ryr:locale'

function getInitialLocale(): Locale {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved === 'en' || saved === 'id') return saved
  return 'en'
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = React.useState<Locale>(() => getInitialLocale())

  const setLocale = React.useCallback((next: Locale) => {
    setLocaleState(next)
    localStorage.setItem(STORAGE_KEY, next)
    document.documentElement.lang = next === 'id' ? 'id' : 'en'
  }, [])

  React.useEffect(() => {
    document.documentElement.lang = locale === 'id' ? 'id' : 'en'
  }, [locale])

  const value = React.useMemo<I18nContextValue>(
    () => ({ locale, t: translations[locale], setLocale }),
    [locale, setLocale],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = React.useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}

