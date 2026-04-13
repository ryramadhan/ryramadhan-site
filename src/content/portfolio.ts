export type Project = {
  title: string
  description: string
  stack: string[]
  period?: string
  organization?: string
  highlights?: string[]
  links?: {
    label: string
    href: string
  }[]
  image?: string
}

// Content is localized in `src/i18n/translations.ts`.
// Keep this file as shared types for projects.

