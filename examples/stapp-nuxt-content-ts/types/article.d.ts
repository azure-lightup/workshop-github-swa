import '@nuxt/types'
import { IContentDocument } from '@nuxt/content/types/content'

// nuxt/content の IContentDocument に追加する型
declare module '@nuxt/types' {
  export interface Article extends IContentDocument {
    title: string
    date: string
  }
}
