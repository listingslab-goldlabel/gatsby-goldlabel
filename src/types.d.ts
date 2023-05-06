// import { PaletteMode } from "@mui/material"

export type PwaReduxShape = {
  started: boolean
  locale: string
  persisted?: boolean
  theme: ThemeShape
}

export type HeroData = {
  hero: HeroShape
}
export type HeroShape = {
  Title: string
  CTALabel: string
  ClickURL: string
  Subheader: string
  HeroImage: any
}

export type BookData = {
  book: BookShape
}
export type BookShape = {
  Title: string
  Description: string
  Image: any
  
}
export type BooksShape = {
  books: Array<BookShape>
}

export type ImageSizeShape = {
  width: number
  height: number
}

export interface KeyValueShape {
  key: string
  value: any
}

export type ThemeShape = {
  id: string
  locale: string
  Title: string
  Primary: string
  Secondary: string
  Font: string
  LightBackground: string
  DefaultDark: boolean
}

export type SeoShape = {
  siteTitle: string
  title: string
  description: string
  keywords: string
  url: string
  canonical: string
  openGraphImageSrc: string
  openGraphImageSrcSize: ImageSizeShape
  openGraphImageAlt: string
  twitter: string
}

export type PWABarShape = {
  data?: any
}

export type WrapperShape = {
  command?: string
  data?: any
  pageContext?: any
}