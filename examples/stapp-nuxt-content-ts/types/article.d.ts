import '@nuxt/types'
import { IContentDocument } from '@nuxt/content/types/content'

declare module '@nuxt/types' {
  export interface Article extends IContentDocument {
    title: string
    date: string
  }
}
